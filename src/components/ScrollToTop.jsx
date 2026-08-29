import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });

    // Explicitly track page view for SPA navigation
    if (window.gtag) {
      window.gtag('config', 'G-1331DMQNLG', {
        page_path: pathname,
      });
    }

    // Custom individual page tracking for Admin Dashboard
    const trackPageView = async () => {
      if (pathname.toLowerCase().startsWith('/admin')) return;
      
      try {
        const { supabase } = await import('../lib/supabase');
        if (!supabase) return;
        
        // Upsert page stats: increment count for the current path
        // We use a simple table structure: path (text, primary key), visits (int), unique_users (int)
        // This requires a Supabase table 'page_stats' to be created
        await supabase.rpc('increment_page_view', { page_path: pathname });
      } catch (err) {
        // Silent fail to avoid disrupting user experience if table/rpc isn't ready
        console.debug('Analytics logging skipped:', err.message);
      }
    };

    trackPageView();
  }, [pathname]);

  return null;
}
