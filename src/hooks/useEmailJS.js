import { useState } from 'react';
import emailjs from '@emailjs/browser';

// ==========================================
// TO DO: ADD YOUR EMAILJS KEYS HERE
// Get these from your dashboard at emailjs.com
// ==========================================
export const EMAILJS_SERVICE_ID = "service_igoylph";
export const EMAILJS_TEMPLATE_ID = "template_aqg53pn";
export const EMAILJS_PUBLIC_KEY = "jccB4Du1ZbdHZHmmI";

export function useEmailJS(formType = "General Inquiry") {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const submitForm = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    
    // Format keys to be human-readable
    const labelMap = {
      name: "Client Name",
      email: "Email Address",
      contact: "Email / Phone",
      purpose: "Requested Service",
      message: "Message / Inquiry",
      meetingMode: "Preferred Meeting Mode",
      professionalContext: "Profession / Context",
      ageRange: "Age Range",
      age: "Age Range",
      sleepHours: "Sleep Hours",
      symptomFocus: "Primary Focus Area",
      stimulantUse: "Daily Stimulant Use",
      roadblock: "Current Roadblock to Stillness",
      healthConfirm: "Health Disclaimer Agreed",
      location: "City / Location",
      profession: "Profession",
      otherIssues: "Pre-existing Conditions / Injuries",
      assessmentType: "Assessment Type",
      assessmentScore: "Assessment Score",
      assessmentResult: "Assessment Result",
      assessmentInterpretation: "Assessment Interpretation"
    };

    let formattedDataString = "";
    const clientName = object.name || "A New Client";
    const clientEmail = object.email || object.contact || "No Email Provided";

    for (const [key, value] of Object.entries(object)) {
      const formattedKey = labelMap[key] || key;
      const formattedValue = value === 'on' ? 'Yes' : (value || "Not provided");
      formattedDataString += `${formattedKey}:\n${formattedValue}\n\n`;
    }

    const templateParams = {
      client_name: clientName,
      client_email: clientEmail,
      form_type: formType,
      form_data_block: formattedDataString,
      reply_to: clientEmail
    };

    try {
      if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
        throw new Error("EmailJS keys are missing. Please add them to useEmailJS.js.");
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      e.target.reset();
      
      // Reset the success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("EmailJS submission error:", error);
      alert("Error: " + (error.text || error.message));
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return { submitForm, status };
}
