import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useEmailJS } from './useEmailJS';
import { calculateLeadScore } from '../utils/leadScoring';

export function useInquiry(formType = "General Inquiry") {
  const [dbStatus, setDbStatus] = useState('idle');
  const { submitForm: sendEmail, status: emailStatus } = useEmailJS(formType);

  const submitInquiry = async (e) => {
    e.preventDefault();
    setDbStatus('loading');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // 1. Save to Supabase or LocalStorage
    const { score, tier, persona } = calculateLeadScore({
      details: data,
      purpose: data.purpose || data.assessmentType || "Consultation",
      type: formType
    });

    const newInquiry = {
      name: data.name || data.client_name,
      email: data.email || data.contact || data.client_email,
      mobile: data.mobile || data.contact,
      type: formType,
      purpose: data.purpose || data.assessmentType || "Consultation",
      status: 'Pending',
      details: data,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      orderId: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      score,
      tier,
      persona
    };

    if (supabase) {
      try {
        // Clean the payload for Supabase (remove camelCase orderId)
        const { orderId, ...supabaseData } = newInquiry;
        const { error } = await supabase
          .from('inquiries')
          .insert([
            {
              ...supabaseData,
              order_id: orderId // Map to the snake_case column
            }
          ]);

        if (error) throw error;
        setDbStatus('success');
      } catch (error) {
        console.error("Supabase Error:", error);
        setDbStatus('error');
      }
    } else {
      console.warn("Supabase not initialized, saving to LocalStorage for preview.");
      const localInquiries = JSON.parse(localStorage.getItem('soma_local_inquiries') || '[]');
      const localInquiryWithId = { ...newInquiry, id: Date.now() }; // Local fallback needs an ID
      localStorage.setItem('soma_local_inquiries', JSON.stringify([localInquiryWithId, ...localInquiries]));
      
      // Dispatch custom event so Admin page knows to refresh
      window.dispatchEvent(new Event('soma_inquiry_added'));
      setDbStatus('success');
    }


    // 2. Still send the email so you get notified instantly
    // Inject priority alert into email template params if supported
    const emailParams = {
      ...e,
      priority_alert: score >= 75 ? "⚠️ BURNOUT ZONE - IMMEDIATE ATTENTION" : "",
      lead_score: score,
      lead_tier: tier
    };
    
    await sendEmail(e); // Note: Current useEmailJS takes the event, but we can pass params if we update it
  };

  return {
    submitInquiry,
    status: dbStatus === 'loading' || emailStatus === 'loading' ? 'loading' : 
            dbStatus === 'success' || emailStatus === 'success' ? 'success' : 
            dbStatus === 'error' || emailStatus === 'error' ? 'error' : 'idle'
  };
}
