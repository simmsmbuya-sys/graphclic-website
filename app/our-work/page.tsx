'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';
import Navigation from '../components/Navigation';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import Link from 'next/link';

interface SelectedVideo {
  url: string;
  title: string;
  thumbnail?: string;
}

export default function OurWorkPage() {
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(null);
  const corporateRef = useRef<HTMLDivElement>(null);
  const documentaryRef = useRef<HTMLDivElement>(null);
  const [corporateScrollLeft, setCorporateScrollLeft] = useState(false);
  const [corporateScrollRight, setCorporateScrollRight] = useState(true);
  const [documentaryScrollLeft, setDocumentaryScrollLeft] = useState(false);
  const [documentaryScrollRight, setDocumentaryScrollRight] = useState(true);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  // Extract video ID from YouTube URL - Enhanced to handle all formats
  const extractVideoId = (url: string): string => {
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

  // Convert YouTube URL to embed format with cache-busting
  const getEmbedUrl = (url: string) => {
    const videoId = extractVideoId(url);
    if (!videoId) {
      console.error('Could not extract video ID from URL:', url);
      return '';
    }
    // Add version parameter to force refresh of YouTube player
    const version = Date.now();
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&version=${version}`;
  };

  // Get YouTube thumbnail URL with cache-busting to always show latest
  const getThumbnailUrl = (videoId: string) => {
    const timestamp = Date.now(); // Cache-busting timestamp
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg?t=${timestamp}`;
  };

  // Fallback thumbnail URL with cache-busting
  const getFallbackThumbnailUrl = (videoId: string) => {
    const timestamp = Date.now(); // Cache-busting timestamp
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg?t=${timestamp}`;
  };

  // Scroll functions for corporate row
  const scrollCorporate = (direction: 'left' | 'right') => {
    if (!corporateRef.current) return;
    const scrollAmount = corporateRef.current.clientWidth * 0.6;
    const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount;
    corporateRef.current.scrollBy({ left: scrollDirection, behavior: 'smooth' });
  };

  // Scroll functions for documentary row
  const scrollDocumentary = (direction: 'left' | 'right') => {
    if (!documentaryRef.current) return;
    const scrollAmount = documentaryRef.current.clientWidth * 0.6;
    const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount;
    documentaryRef.current.scrollBy({ left: scrollDirection, behavior: 'smooth' });
  };

  // Check scroll position for corporate row
  const checkCorporateScroll = () => {
    if (!corporateRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = corporateRef.current;
    setCorporateScrollLeft(scrollLeft > 0);
    setCorporateScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  // Check scroll position for documentary row
  const checkDocumentaryScroll = () => {
    if (!documentaryRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = documentaryRef.current;
    setDocumentaryScrollLeft(scrollLeft > 0);
    setDocumentaryScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    if (corporateRef.current) {
      checkCorporateScroll();
      corporateRef.current.addEventListener('scroll', checkCorporateScroll);
      window.addEventListener('resize', checkCorporateScroll);
    }
    if (documentaryRef.current) {
      checkDocumentaryScroll();
      documentaryRef.current.addEventListener('scroll', checkDocumentaryScroll);
      window.addEventListener('resize', checkDocumentaryScroll);
    }
    
    return () => {
      corporateRef.current?.removeEventListener('scroll', checkCorporateScroll);
      documentaryRef.current?.removeEventListener('scroll', checkDocumentaryScroll);
      window.removeEventListener('resize', checkCorporateScroll);
      window.removeEventListener('resize', checkDocumentaryScroll);
    };
  }, []);

  const projects = [
    {
      title: 'Afro Tech',
      client: 'Afro Tech',
      category: 'Corporate',
      videoUrl: 'https://youtu.be/ogMsUmuy40U',
      videoId: 'ogMsUmuy40U',
    },
    {
      title: 'Drum Line VIP',
      client: 'B-roll Media & Art',
      category: 'Documentary',
      videoUrl: 'https://youtu.be/L_j2iIhq9II',
      videoId: 'L_j2iIhq9II',
    },
    {
      title: 'The Future of Finance',
      client: 'The George Washington University',
      category: 'Corporate',
      videoUrl: 'https://youtu.be/B1ItB18IsRE',
      videoId: 'B1ItB18IsRE',
    },
    {
      title: 'Ryan Middleton',
      client: 'Democrat for County Council',
      category: 'Corporate',
      videoUrl: 'https://youtu.be/8MHteyqe36c',
      videoId: '8MHteyqe36c',
    },
    {
      title: 'Reskill',
      client: 'DC Public Library',
      category: 'Documentary',
      videoUrl: 'https://youtu.be/pCErgnCfhzc',
      videoId: 'pCErgnCfhzc',
    },
    {
      title: '39th Annual Scholarship Award',
      client: 'J. Franklyn Bourne Bar Association',
      category: 'Corporate',
      videoUrl: 'https://youtu.be/n9F0oyUuwFI',
      videoId: 'n9F0oyUuwFI',
    },
    {
      title: 'Judge Adam\'s Keepsake',
      client: 'J. Franklyn Bourne Bar Association',
      category: 'Corporate',
      videoUrl: 'https://youtu.be/5cvV3APBrNo',
      videoId: '5cvV3APBrNo',
    },
    {
      title: 'Academic Achievement Programs',
      client: 'Maryland University',
      category: 'Documentary',
      videoUrl: 'https://youtu.be/6c1pquATVso',
      videoId: '6c1pquATVso',
    },
  ];

  const corporateProjects = projects.filter(p => p.category === 'Corporate');
  const documentaryProjects = projects.filter(p => p.category === 'Documentary');
  const featuredProject = projects[0]; // First project as featured

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black">
        {/* Apple TV Style Hero Section - Featured Project */}
        <section className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero/image1.jpg"
              alt={`${featuredProject.title} - ${featuredProject.category} video production Washington DC GraphClic`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = getThumbnailUrl(featuredProject.videoId);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          </div>

          <div className="relative z-10 w-full pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl"
              >
                <div className="mb-4">
                  <span className="px-4 py-2 bg-graphclic-red text-white rounded-full text-sm font-semibold">
                    {featuredProject.category}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight px-4">
                  {featuredProject.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 px-4">
                  {featuredProject.client}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedVideo({
                      url: featuredProject.videoUrl,
                      title: featuredProject.title,
                      thumbnail: getThumbnailUrl(featuredProject.videoId)
                    })}
                    className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-3 hover:bg-gray-200 transition-all"
                  >
                    <Play size={24} fill="currentColor" />
                    Play
                  </motion.button>
                  <Link href="/about" passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white/50 hover:bg-white/30 transition-all"
                    >
                      More Info
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Corporate Projects Row - Apple TV Style */}
        <section className="py-12 bg-black">
          <div className="mb-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Corporate</h2>
            <p className="text-gray-400">B2B video production for brands</p>
          </div>
          
          <div className="relative">
            <AnimatePresence>
              {corporateScrollLeft && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => scrollCorporate('left')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center bg-black/80 hover:bg-black rounded-full text-white transition-all shadow-2xl"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={28} />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {corporateScrollRight && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => scrollCorporate('right')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center bg-black/80 hover:bg-black rounded-full text-white transition-all shadow-2xl"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={28} />
                </motion.button>
              )}
            </AnimatePresence>

            <div
              ref={corporateRef}
              className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={checkCorporateScroll}
            >
              {corporateProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  onClick={() => setSelectedVideo({
                    url: project.videoUrl,
                    title: project.title,
                    thumbnail: getThumbnailUrl(project.videoId)
                  })}
                  className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] cursor-pointer"
                >
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={getThumbnailUrl(project.videoId)}
                      alt={`${project.title} - ${project.category} video production ${project.client} GraphClic Washington DC`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = getFallbackThumbnailUrl(project.videoId);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play Button on Hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                    >
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                        <Play size={32} fill="black" className="ml-1" />
                      </div>
                    </motion.div>

                    {/* Title and Client */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300">{project.client}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentary Projects Row - Apple TV Style */}
        <section className="py-12 bg-black">
          <div className="mb-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Documentary</h2>
            <p className="text-gray-400">Impact documentaries that drive change</p>
          </div>
          
          <div className="relative">
            <AnimatePresence>
              {documentaryScrollLeft && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => scrollDocumentary('left')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center bg-black/80 hover:bg-black rounded-full text-white transition-all shadow-2xl"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={28} />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {documentaryScrollRight && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => scrollDocumentary('right')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center bg-black/80 hover:bg-black rounded-full text-white transition-all shadow-2xl"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={28} />
                </motion.button>
              )}
            </AnimatePresence>

            <div
              ref={documentaryRef}
              className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={checkDocumentaryScroll}
            >
              {documentaryProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, zIndex: 10 }}
                  onClick={() => setSelectedVideo({
                    url: project.videoUrl,
                    title: project.title,
                    thumbnail: getThumbnailUrl(project.videoId)
                  })}
                  className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] cursor-pointer"
                >
                  <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={getThumbnailUrl(project.videoId)}
                      alt={`${project.title} - ${project.category} video production ${project.client} GraphClic Washington DC`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = getFallbackThumbnailUrl(project.videoId);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play Button on Hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                    >
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
                        <Play size={32} fill="black" className="ml-1" />
                      </div>
                    </motion.div>

                    {/* Title and Client */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-300">{project.client}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Video Player */}
        {selectedVideo && (
          <CustomVideoPlayer
            key={selectedVideo.url} // Force re-render when video changes
            videoUrl={selectedVideo.url}
            videoTitle={selectedVideo.title}
            thumbnailUrl={selectedVideo.thumbnail}
            onClose={() => setSelectedVideo(null)}
            allVideos={projects.map(p => ({
              url: p.videoUrl,
              title: p.title,
              thumbnail: getThumbnailUrl(p.videoId)
            }))}
            autoPlayNext={true}
            onNextVideo={(nextVideo) => {
              // Switch to next video smoothly
              setSelectedVideo({
                url: nextVideo.url,
                title: nextVideo.title,
                thumbnail: nextVideo.thumbnail
              });
            }}
          />
        )}

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-graphclic-red to-graphclic-red-dark text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4"
            >
              Ready to Tell Your Story?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-10 text-gray-200"
            >
              Let&apos;s discuss how video can drive your business forward or bring your documentary vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="/contact" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-graphclic-gold text-black hover:bg-yellow-400 px-10 py-5 rounded-lg text-lg font-semibold transition-all transform shadow-lg flex items-center justify-center gap-2"
                >
                  Schedule a Strategy Call
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link href="/services" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-white hover:bg-white hover:text-graphclic-red px-10 py-5 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Explore Our Services
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
