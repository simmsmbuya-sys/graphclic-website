'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface CustomVideoPlayerProps {
  videoUrl: string;
  videoTitle?: string;
  thumbnailUrl?: string;
  onClose: () => void;
  allVideos?: Array<{ url: string; title: string; thumbnail?: string }>; // All videos for auto-play next
  autoPlayNext?: boolean; // If true, play next video; if false, loop current video
  onNextVideo?: (nextVideo: { url: string; title: string; thumbnail?: string }) => void; // Callback to switch to next video
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function CustomVideoPlayer({
  videoUrl,
  videoTitle = 'Video',
  thumbnailUrl,
  onClose,
  allVideos = [],
  autoPlayNext = true, // Default to playing next video
  onNextVideo,
}: CustomVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const playerDivRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Extract video ID from YouTube URL - Enhanced to handle all formats
  const getVideoId = (url: string): string => {
    if (!url) return '';
    
    // Handle youtu.be format: https://youtu.be/VIDEO_ID
    if (url.includes('youtu.be/')) {
      const match = url.match(/youtu\.be\/([^?&#]+)/);
      if (match) return match[1];
    }
    
    // Handle youtube.com/watch?v= format: https://www.youtube.com/watch?v=VIDEO_ID
    if (url.includes('watch?v=')) {
      const match = url.match(/[?&]v=([^?&#]+)/);
      if (match) return match[1];
    }
    
    // Handle youtube.com/embed/ format: https://www.youtube.com/embed/VIDEO_ID
    if (url.includes('embed/')) {
      const match = url.match(/embed\/([^?&#]+)/);
      if (match) return match[1];
    }
    
    // Fallback: try to extract from end of URL
    const videoId = url.split('/').pop()?.split('?')[0]?.split('&')[0] || url.split('v=')[1]?.split('&')[0];
    return videoId || '';
  };

  const videoId = getVideoId(videoUrl);
  // Add cache-busting timestamp to always get latest thumbnail from YouTube
  const thumbnail = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg?t=${Date.now()}`;

  // Handle video ended - play next video or loop
  const handleVideoEnded = () => {
    if (autoPlayNext && allVideos.length > 0 && onNextVideo) {
      // Find current video index
      const currentIndex = allVideos.findIndex(v => getVideoId(v.url) === videoId);
      
      if (currentIndex !== -1) {
        // Get next video (loop to first if at end)
        const nextIndex = (currentIndex + 1) % allVideos.length;
        const nextVideo = allVideos[nextIndex];
        
        // Call parent callback to switch to next video
        if (nextVideo) {
          console.log('Auto-playing next video:', nextVideo.title);
          onNextVideo(nextVideo);
        } else {
          // Fallback: loop current video
          if (playerRef.current) {
            playerRef.current.playVideo();
          }
        }
      } else {
        // Current video not found in list, just loop
        if (playerRef.current) {
          playerRef.current.playVideo();
        }
      }
    } else {
      // Loop current video
      if (playerRef.current) {
        playerRef.current.seekTo(0);
        playerRef.current.playVideo();
      }
    }
  };

  // Inject CSS to aggressively hide ALL YouTube UI, channel info, and branding
  useEffect(() => {
    const styleId = 'youtube-complete-mask';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      /* ============================================
         COMPLETE YOUTUBE UI MASKING
         Hides everything except video content
         ============================================ */
      
      /* Hide YouTube logo/watermark - ALL variations */
      .ytp-watermark,
      .ytp-watermark-logo,
      .ytp-watermark-path,
      .ytp-branding-logo,
      .ytp-branding-container,
      .ytp-branding-button {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        width: 0 !important;
        height: 0 !important;
        position: absolute !important;
        left: -9999px !important;
      }
      
      /* Hide ALL channel info, titles, and metadata - Ultra Aggressive masking */
      .ytp-title,
      .ytp-title-text,
      .ytp-title-link,
      .ytp-title-channel,
      .ytp-title-expanded,
      .ytp-title-expanded-content,
      .ytp-title-expanded-heading,
      .ytp-title-expanded-overlay,
      .ytp-title-expanded-text,
      .ytp-title-channel-logo,
      .ytp-title-channel-name,
      .ytp-title-channel-wrapper,
      .ytp-chrome-top,
      .ytp-chrome-top-buttons,
      .ytp-show-cards-title,
      .ytp-visibility-notification,
      .ytp-visibility-notification-text,
      .ytp-visibility-notification-link,
      [class*="ytp-title"],
      [id*="ytp-title"],
      [aria-label*="title" i] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        width: 0 !important;
        height: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
        text-indent: -9999px !important;
        font-size: 0 !important;
        line-height: 0 !important;
        overflow: hidden !important;
        clip: rect(0,0,0,0) !important;
      }
      
      /* Hide entire top chrome bar */
      .ytp-chrome-top {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        max-height: 0 !important;
      }
      
      /* Hide ALL controls and UI elements */
      .ytp-chrome-bottom,
      .ytp-chrome-controls,
      .ytp-gradient-bottom,
      .ytp-gradient-top,
      .ytp-button,
      .ytp-pause-overlay,
      .ytp-ce-element {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
      
      /* Hide ALL share, copy link, and social sharing buttons */
      .ytp-share-button,
      .ytp-share-button-visible,
      .ytp-share-panel,
      .ytp-share-panel-inner-content,
      .ytp-share-panel-close,
      .ytp-copylink-button,
      .ytp-copylink-icon,
      .ytp-menu-share,
      .ytp-menuitem[aria-label*="share" i],
      .ytp-menuitem[aria-label*="copy" i],
      .ytp-menuitem[aria-label*="link" i],
      [aria-label*="Share" i],
      [aria-label*="Copy link" i],
      [aria-label*="Copy" i],
      [title*="Share" i],
      [title*="Copy link" i],
      [title*="Copy" i],
      button[aria-label*="share" i],
      button[aria-label*="copy" i],
      button[title*="Share" i],
      button[title*="Copy" i] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        width: 0 !important;
        height: 0 !important;
        position: absolute !important;
        left: -9999px !important;
      }
      
      /* Hide ALL links and clickable elements */
      a[href*="youtube.com"],
      a[href*="youtu.be"],
      [aria-label*="YouTube"],
      [title*="YouTube"],
      [aria-label*="channel"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      
      /* Hide ALL text overlays, captions, subtitles, and copy on video */
      .ytp-caption-window-container,
      .ytp-caption-window,
      .ytp-caption-segment,
      .ytp-caption-text,
      .ytp-caption-window-text,
      .ytp-caption,
      .ytp-subtitles,
      .ytp-caption-window-rollup,
      .ytp-caption-visual-line,
      .ytp-caption-text-content {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      
      /* Hide any overlay text, annotations, or graphics */
      .ytp-ce-shadow-text,
      .ytp-ce-text,
      .ytp-ce-attribution-text,
      .ytp-ce-attribution,
      .ytp-ce-link,
      .ytp-visibility-notification-text,
      .ytp-title-expanded-text,
      .ytp-title-expanded-content,
      .ytp-title-expanded-heading,
      .ytp-show-cards-title,
      .ytp-cards-teaser-text {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        text-indent: -9999px !important;
      }
      
      /* Hide ALL text elements inside player */
      .ytp-player-content * {
        color: transparent !important;
      }
      
      /* Hide any remaining text overlays */
      .ytp-overlay-text,
      .ytp-videowall-still-info,
      .ytp-videowall-still-info-title,
      .ytp-videowall-still-info-author,
      .ytp-videowall-still-info-duration {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  // Load YouTube IFrame API
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If API already loaded, initialize immediately
    if (window.YT && window.YT.Player) {
      const initPlayer = () => {
        if (playerDivRef.current && videoId && !playerRef.current) {
          try {
            playerRef.current = new window.YT.Player(playerDivRef.current, {
              videoId: videoId,
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
                controls: 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                cc_load_policy: 0,
                fs: 0,
                disablekb: 1,
                playsinline: 1,
                enablejsapi: 1,
                origin: typeof window !== 'undefined' ? window.location.origin : '',
                loop: 0,
              },
              events: {
                onReady: (event: any) => {
                  console.log('YouTube player ready');
                  setPlayerReady(true);
                  setIsLoading(false);
                  setIsPlaying(true);
                  try {
                    event.target.playVideo();
                  } catch (e) {
                    console.error('Error playing video:', e);
                  }
                },
                onStateChange: (event: any) => {
                  if (event.data === window.YT.PlayerState.PLAYING) {
                    setIsPlaying(true);
                    setIsLoading(false);
                  } else if (event.data === window.YT.PlayerState.PAUSED) {
                    setIsPlaying(false);
                  } else if (event.data === window.YT.PlayerState.BUFFERING) {
                    setIsLoading(true);
                  } else if (event.data === window.YT.PlayerState.ENDED) {
                    // Video ended - either play next or loop
                    handleVideoEnded();
                  }
                },
                onError: (event: any) => {
                  console.error('YouTube player error:', event.data);
                  setIsLoading(false);
                },
              },
            });
          } catch (error) {
            console.error('Error creating YouTube player:', error);
            setIsLoading(false);
          }
        }
      };
      
      // Wait a moment for DOM to be ready
      setTimeout(initPlayer, 100);
      return;
    }

    // Load API if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      // Wait a bit for the div to be ready
      setTimeout(() => {
        if (playerDivRef.current && videoId && !playerRef.current) {
          try {
            playerRef.current = new window.YT.Player(playerDivRef.current, {
              videoId: videoId,
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
                controls: 0, // Completely hide YouTube controls
                modestbranding: 1, // Minimal branding
                rel: 0, // No related videos
                showinfo: 0, // Hide video info
                iv_load_policy: 3, // Hide video annotations
                cc_load_policy: 0, // Hide closed captions completely
                captions: 0, // Disable captions
                hl: '', // No language for captions
                fs: 0, // Disable YouTube fullscreen button
                disablekb: 1, // Disable keyboard controls
                playsinline: 1,
                enablejsapi: 1,
                origin: typeof window !== 'undefined' ? window.location.origin : '',
                loop: 0,
              },
              events: {
                onReady: (event: any) => {
                  console.log('YouTube player ready');
                  setPlayerReady(true);
                  setIsLoading(false);
                  setIsPlaying(true);
                  try {
                    event.target.playVideo();
                  } catch (e) {
                    console.error('Error playing video:', e);
                  }
                },
                onStateChange: (event: any) => {
                  console.log('Player state changed:', event.data);
                  // 0 = ended, 1 = playing, 2 = paused, 3 = buffering
                  if (event.data === window.YT.PlayerState.PLAYING) {
                    setIsPlaying(true);
                    setIsLoading(false);
                  } else if (event.data === window.YT.PlayerState.PAUSED) {
                    setIsPlaying(false);
                  } else if (event.data === window.YT.PlayerState.BUFFERING) {
                    setIsLoading(true);
                  }
                },
                onError: (event: any) => {
                  console.error('YouTube player error:', event.data);
                  setIsLoading(false);
                },
              },
            });
          } catch (error) {
            console.error('Error creating YouTube player:', error);
            setIsLoading(false);
          }
        }
      }, 100);
    };

    // If API is already loaded
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }
  }, [videoId]);

  // Cleanup player on unmount
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.error('Error destroying player:', e);
        }
      }
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Player control functions
  const playPause = () => {
    if (!playerRef.current || !playerReady) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    } catch (e) {
      console.error('Error controlling playback:', e);
    }
  };

  const toggleMute = () => {
    if (!playerRef.current || !playerReady) return;
    try {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch (e) {
      console.error('Error toggling mute:', e);
    }
  };

  // Hide controls after inactivity
  useEffect(() => {
    if (!isPlaying || !playerReady) return;

    const resetControlsTimeout = () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      setShowControls(true);
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    resetControlsTimeout();
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', resetControlsTimeout);
      container.addEventListener('mouseenter', () => setShowControls(true));
      container.addEventListener('mouseleave', () => {
        if (isPlaying) setShowControls(false);
      });
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      if (container) {
        container.removeEventListener('mousemove', resetControlsTimeout);
      }
    };
  }, [isPlaying, playerReady]);

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          ref={containerRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-7xl mx-4 aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-40 w-12 h-12 bg-black/70 hover:bg-black/90 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all shadow-lg border border-white/20"
            aria-label="Close player"
          >
            <X size={24} />
          </motion.button>

          {/* Video Container */}
          <div className="relative w-full h-full">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 text-graphclic-red animate-spin mx-auto mb-4" />
                  <p className="text-white text-lg">Loading video...</p>
                </div>
              </div>
            )}

            {/* Thumbnail overlay (hidden after load) */}
            {isLoading && thumbnail && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={thumbnail}
                  alt={videoTitle}
                  fill
                  className="object-cover opacity-50"
                  sizes="100vw"
                />
              </div>
            )}

            {/* YouTube Player Container - Fully Masked - Only Video Content */}
            <div 
              ref={playerDivRef}
              id={`youtube-player-${videoId}`}
              className="absolute inset-0 w-full h-full"
              style={{
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 5, // Above loading overlay, below custom controls
                backgroundColor: 'black', // Fallback background
              }}
            />

            {/* Title Mask Overlay - Covers YouTube title area (top-left) */}
            <div 
              className="absolute top-0 left-0 z-10 pointer-events-none"
              style={{
                width: '100%',
                height: '80px',
                background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 50%, transparent 100%)',
              }}
            />
            
            {/* Additional title mask for top area */}
            <div 
              className="absolute top-0 left-0 z-10 pointer-events-none"
              style={{
                width: '100%',
                height: '60px',
                background: 'rgba(0,0,0,1)',
              }}
            />

            {/* Aggressive Branding Overlay - Covers YouTube logo area (bottom-right corner) */}
            {/* These overlays are positioned above the video (z-index 10) but below controls (z-index 30) */}
            <div 
              className="absolute bottom-0 right-0 z-10 pointer-events-none"
              style={{
                width: '200px',
                height: '120px',
                background: 'rgba(0,0,0,1)',
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            />
            
            {/* Solid black box to completely cover logo area */}
            <div 
              className="absolute bottom-0 right-0 z-10 pointer-events-none"
              style={{
                width: '180px',
                height: '70px',
                background: 'rgba(0,0,0,1)',
              }}
            />

            {/* Extra overlay layer for logo area */}
            <div 
              className="absolute bottom-2 right-2 z-10 pointer-events-none"
              style={{
                width: '160px',
                height: '60px',
                background: 'rgba(0,0,0,1)',
                borderRadius: '2px',
              }}
            />

            {/* Custom Controls Overlay */}
            <AnimatePresence>
              {showControls && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none z-30"
                >
                  {/* Title Bar */}
                  <div className="absolute top-0 left-0 right-0 p-6 pointer-events-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-1">{videoTitle}</h3>
                        <p className="text-white/70 text-sm">GraphClic Production</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-auto">
                    <div className="flex items-center justify-between gap-4">
                      {/* Left Controls */}
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={playPause}
                          className="w-12 h-12 bg-black/70 hover:bg-black/90 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/20"
                          aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} fill="white" />}
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={toggleMute}
                          className="w-12 h-12 bg-black/70 hover:bg-black/90 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/20"
                          aria-label={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </motion.button>

                        <div className="h-8 w-px bg-white/30" />

                        <div className="text-white text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-graphclic-red rounded-full animate-pulse"></div>
                            <span>LIVE</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Controls */}
                      <div className="flex items-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={toggleFullscreen}
                          className="w-12 h-12 bg-black/70 hover:bg-black/90 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/20"
                          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                        >
                          {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Center Play Button (when paused) */}
                  {!isPlaying && playerReady && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-20">
                      <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={playPause}
                        className="w-24 h-24 bg-graphclic-red hover:bg-graphclic-red-dark rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white/20"
                        aria-label="Play"
                      >
                        <Play size={40} fill="white" />
                      </motion.button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Branding Watermark */}
          <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
            <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <p className="text-white text-xs font-semibold">
                <span className="text-white">Graph</span>
                <span className="text-graphclic-gold">Clic</span>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
