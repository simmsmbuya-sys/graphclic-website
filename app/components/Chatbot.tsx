'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    drift?: any;
    Intercom?: any;
    intercomSettings?: any;
    driftt?: any;
  }
}

export default function Chatbot() {
  const chatbotType = process.env.NEXT_PUBLIC_CHATBOT_TYPE || 'drift';
  const driftId = process.env.NEXT_PUBLIC_DRIFT_ID;
  const intercomAppId = process.env.NEXT_PUBLIC_INTERCOM_APP_ID;

  // Only load chatbot if ID is provided
  const hasChatbotConfig = driftId || intercomAppId;
  const useDrift = (chatbotType === 'drift' || !intercomAppId) && driftId;
  const useIntercom = (chatbotType === 'intercom' || !driftId) && intercomAppId;

  // Initialize Intercom settings before script loads
  useEffect(() => {
    if (useIntercom && intercomAppId) {
      window.intercomSettings = {
        app_id: intercomAppId,
      };
    }
  }, [useIntercom, intercomAppId]);

  // This component doesn't render anything visible
  // The chatbot scripts handle the UI
  if (!hasChatbotConfig) {
    if (process.env.NODE_ENV === 'development') {
      console.log('💬 Chatbot not configured. Add NEXT_PUBLIC_DRIFT_ID or NEXT_PUBLIC_INTERCOM_APP_ID to your .env.local file');
    }
    return null;
  }

  return (
    <>
      {/* Drift Chatbot */}
      {useDrift && driftId && (
        <Script id="drift-loader" strategy="afterInteractive">
          {`
            !function() {
              var t = window.driftt = window.drift = window.driftt || [];
              if (!t.init) {
                if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
                t.factory = function(e) {
                  return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return n.unshift(e), t.push(n), t;
                  }
                }, t.methods.forEach(function(e) {
                  t[e] = t.factory(e);
                }), t.load = function(t,e) {
                  var n = 3e5, r = Math.ceil(new Date() / n) * n, o = document.createElement("script");
                  o.type = "text/javascript", o.async = !0, o.crossOrigin = "anonymous", o.src = "https://js.driftt.com/include/" + r + "/" + t + ".js";
                  var i = document.getElementsByTagName("script")[0];
                  i.parentNode.insertBefore(o, i);
                };
              }
            }();
            drift.SNIPPET_VERSION = '0.3.1';
            drift.load('${driftId}');
          `}
        </Script>
      )}

      {/* Intercom Chatbot */}
      {useIntercom && intercomAppId && (
        <Script
          id="intercom-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${intercomAppId}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
            `,
          }}
        />
      )}
    </>
  );
}
