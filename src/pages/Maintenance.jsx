import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';
import './SomaProfile.css';

const BODY_BREATH_WELL_URL = 'https://bodybreathwell.com/';
const LINKEDIN_URL = 'https://in.linkedin.com/in/soma-mukherjee1';
const INSTAGRAM_URL = 'https://www.instagram.com/bodybreathwell/';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'What I Do' },
  { id: 'approach', label: 'Approach' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'background', label: 'Background' },
  { id: 'body-breath-well', label: 'Body Breath Well' },
  { id: 'contact', label: 'Contact' },
];

const workAreas = [
  {
    num: '01',
    title: 'Stress and recovery',
    description: 'Recognising patterns that keep the body and mind activated long after the immediate pressure has passed.',
  },
  {
    num: '02',
    title: 'Sleep',
    description: 'Working with daily rhythms, behaviour, movement, breathing and recovery practices that can support better sleep.',
  },
  {
    num: '03',
    title: 'Posture and physical wellbeing',
    description: 'Particularly the stiffness, discomfort and loss of movement that can develop around desk-based work.',
  },
  {
    num: '04',
    title: 'Breath and movement',
    description: 'Used practically and progressively — not as a cure-all, but as tools that can influence how we move, focus and recover.',
  },
  {
    num: '05',
    title: 'Meditation and attention',
    description: 'Developing practices that people can realistically continue outside a class.',
  },
  {
    num: '06',
    title: 'Workplace wellbeing',
    description: 'Designing sessions and programmes that acknowledge how people actually work rather than asking them to temporarily behave as though work does not exist.',
  },
];

const diagnosticQuestions = [
  'What does an ordinary day look like?',
  'What has changed recently?',
  'What is already working?',
  'What is difficult to sustain?',
  'And what is small enough to change without turning wellbeing into another full-time job?',
];

const credentials = [
  {
    org: 'Yoga Certification Board, Ministry of AYUSH',
    title: 'Level 3 Yoga Teacher & Evaluator',
  },
  {
    org: "Master's in Yoga",
    title: "Master's in Yoga & Science of Living",
  },
  {
    org: 'Harvard Medical School',
    title: 'SMART-related stress management training',
  },
  {
    org: 'Postgraduate Diploma',
    title: 'Fitness Management',
  },
  {
    org: 'Additional study',
    title: 'Training across nutrition, people management and related areas of wellbeing.',
  },
];

const personSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.somamukherjee.com/#website',
      url: 'https://www.somamukherjee.com/',
      name: 'Soma Mukherjee',
      description: 'Yoga Practitioner & Founder of Body Breath Well',
      inLanguage: 'en',
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://www.somamukherjee.com/#webpage',
      url: 'https://www.somamukherjee.com/',
      name: 'Soma Mukherjee | Yoga Practitioner & Founder of Body Breath Well',
      isPartOf: { '@id': 'https://www.somamukherjee.com/#website' },
      about: { '@id': 'https://www.somamukherjee.com/#person' },
      mainEntity: { '@id': 'https://www.somamukherjee.com/#person' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.somamukherjee.com/#person',
      name: 'Soma Mukherjee',
      url: 'https://www.somamukherjee.com/',
      image: 'https://www.somamukherjee.com/Photos/profile/hero-about-soma.png',
      jobTitle: 'Yoga Practitioner & Founder of Body Breath Well',
      description:
        'Soma Mukherjee is a yoga practitioner and wellness educator with more than 25 years of experience working with individuals and professionals around stress, sleep, movement, posture and everyday wellbeing.',
      gender: 'Female',
      nationality: 'Indian',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Body Breath Well',
        url: BODY_BREATH_WELL_URL,
      },
      sameAs: [LINKEDIN_URL, BODY_BREATH_WELL_URL],
      knowsAbout: [
        'Yoga',
        'Movement and Posture',
        'Stress and Recovery',
        'Sleep',
        'Workplace Wellbeing',
        'Breath and Attention',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'certification',
          name: 'Yoga Certification Board (YCB) Level 3 Yoga Teacher & Evaluator',
          recognizedBy: {
            '@type': 'GovernmentOrganization',
            name: 'Ministry of Ayush, Government of India',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: "Master's in Yoga & Science of Living",
        },
      ],
    },
  ],
};

export default function Maintenance() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    enquiryType: 'Individual support',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');

  // Active section scroll spy
  useEffect(() => {
    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60%', threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const payload = {
      name: formData.name,
      contact: formData.contact,
      purpose: formData.enquiryType,
      message: formData.message,
      source: 'somamukherjee.com profile inquiry',
      created_at: new Date().toISOString(),
    };

    try {
      if (supabase) {
        const { error } = await supabase.from('inquiries').insert([
          {
            name: formData.name,
            email: formData.contact.includes('@') ? formData.contact : null,
            mobile: !formData.contact.includes('@') ? formData.contact : null,
            type: 'Profile Inquiry',
            purpose: formData.enquiryType,
            status: 'Pending',
            details: payload,
          },
        ]);
        if (error) throw error;
      } else {
        const existing = JSON.parse(localStorage.getItem('soma_local_inquiries') || '[]');
        existing.push(payload);
        localStorage.setItem('soma_local_inquiries', JSON.stringify(existing));
      }

      setFormStatus('success');
      setFormData({
        name: '',
        contact: '',
        enquiryType: 'Individual support',
        message: '',
      });
    } catch (err) {
      console.warn('Saving locally:', err);
      const existing = JSON.parse(localStorage.getItem('soma_local_inquiries') || '[]');
      existing.push(payload);
      localStorage.setItem('soma_local_inquiries', JSON.stringify(existing));
      setFormStatus('success');
    }
  };

  return (
    <div className="profile-page">
      <SEO
        title="Soma Mukherjee | Yoga Practitioner & Founder of Body Breath Well"
        description="Soma Mukherjee is a yoga practitioner and wellness educator with more than 25 years of experience working with individuals and professionals around stress, sleep, movement, posture and everyday wellbeing."
        canonical="https://www.somamukherjee.com/"
        schema={personSchema}
      />

      <a className="profile-skip-link" href="#main-content">
        Skip to main content
      </a>

      {/* SINGLE UNIFIED EDITORIAL HEADER */}
      <header className="profile-nav-header" role="banner">
        <div className="profile-shell profile-nav-inner">
          <Link className="profile-brand" to="/" aria-label="Soma Mukherjee, Home">
            <span className="profile-brand-name">Soma Mukherjee</span>
            <span className="profile-brand-dot" aria-hidden="true" />
          </Link>

          <nav className="profile-nav-links" aria-label="Page sections">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`profile-nav-link ${activeSection === id ? 'is-active' : ''}`}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="profile-nav-actions">
            <a
              className="profile-btn-ghost"
              href={BODY_BREATH_WELL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Body Breath Well ↗
            </a>
            <a className="profile-btn-primary" href="#contact">
              Speak with Soma
            </a>
          </div>

          <button
            type="button"
            className="profile-mobile-toggle"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <span style={{ fontSize: '1.4rem' }}>{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            style={{
              padding: '16px 24px',
              backgroundColor: 'var(--canvas-card)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  padding: '8px 0',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  borderBottom: '1px solid var(--border-subtle)',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="main-content">
        {/* HERO SECTION (Text Immersed on Signature Hero Photograph) */}
        <section id="hero" className="profile-hero-section">
          <div className="profile-hero-immersive">
            <div className="profile-hero-bg-media" aria-hidden="true">
              <img
                src="/Photos/profile/hero-about-soma.png"
                alt=""
                className="profile-hero-bg-img"
                loading="eager"
                fetchPriority="high"
              />
              <div className="profile-hero-gradient-scrim" />
            </div>

            <div className="profile-shell profile-hero-content-wrap">
              <div className="profile-hero-card">
                <div className="profile-badge profile-badge--on-image">
                  <span className="profile-badge-pulse" />
                  <span>Practitioner · Educator · Since 1996</span>
                </div>
                <h1 className="profile-hero-title profile-hero-title--on-image">
                  Soma Mukherjee
                </h1>
                <p className="profile-hero-subtitle profile-hero-subtitle--on-image">
                  Yoga practitioner. Wellness educator. Founder of Body Breath Well.
                </p>
                <div className="profile-hero-prose profile-hero-prose--on-image">
                  <p>
                    I have spent much of my working life around people who sit too long, sleep too
                    little, carry work home in their heads and gradually stop noticing how tired they
                    have become.
                  </p>
                  <p>
                    For more than 25 years, my work has been about helping people pay attention to that
                    earlier.
                  </p>
                </div>
                <div className="profile-hero-ctas">
                  <a
                    className="profile-btn-primary profile-btn-primary--on-image"
                    href={BODY_BREATH_WELL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Body Breath Well ↗
                  </a>
                  <a
                    className="profile-btn-ghost profile-btn-ghost--on-image"
                    href="#contact"
                  >
                    Connect with Soma ↓
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-hero-caption-strip">
              <div className="profile-shell profile-hero-caption-inner">
                <span>Soma Mukherjee · Founder of Body Breath Well</span>
                <span>Pune, India</span>
              </div>
            </div>
          </div>
        </section>

        {/* 01 — EXPERIENCE (My work has changed) */}
        <section id="about" className="profile-section-about">
          <div className="profile-shell profile-work-layout">
            <div>
              <div className="profile-section-kicker">01 — Experience</div>
              <h2 className="profile-section-title">
                My work has changed over the years. The principle behind it has not.
              </h2>
              <div style={{ maxWidth: '600px' }}>
                <p>I began teaching yoga in 1996.</p>
                <p>
                  What started with movement and traditional yoga practice gradually became a much
                  broader study of how people function under pressure — how they breathe, sleep, sit,
                  recover, concentrate, build habits and respond to demanding periods in their
                  lives.
                </p>
                <p>
                  I then spent more than two decades at TCS, working within the environment that many
                  of my clients live in today: deadlines, long hours, meetings, screens, travel,
                  responsibility and very little separation between work and recovery.
                </p>
                <p>That experience matters to me.</p>
              </div>

              <div className="profile-quote-card">
                “It is one thing to tell someone to reduce stress. It is another to understand the life
                in which that stress is occurring.”
              </div>
            </div>

            <div>
              <div className="profile-timeline-container">
                <div className="profile-timeline-head">Practice Timeline · 25+ Years</div>
                <div className="profile-timeline-list">
                  <div className="profile-timeline-row">
                    <span className="profile-timeline-badge">1996</span>
                    <span className="profile-timeline-info">
                      Began teaching traditional yoga and movement practices.
                    </span>
                  </div>
                  <div className="profile-timeline-row">
                    <span className="profile-timeline-badge">2001–2023</span>
                    <span className="profile-timeline-info">
                      TCS — 22 years embedded in enterprise workplace health and practitioner-led employee wellbeing.
                    </span>
                  </div>
                  <div className="profile-timeline-row">
                    <span className="profile-timeline-badge">Present</span>
                    <span className="profile-timeline-info">
                      Body Breath Well — Dedicated practice for individuals, leaders and corporate organisations.
                    </span>
                  </div>
                </div>
                <div className="profile-timeline-footer-note">
                  Direct practitioner experience combining yoga science, stress physiology and sustainable habits.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — PRACTICE (What I do today) */}
        <section id="work" className="profile-section-today">
          <div className="profile-shell">
            <div className="profile-section-kicker">02 — Practice</div>
            <h2 className="profile-section-title">What I do today</h2>
            <div className="profile-today-intro">
              <p>
                Today my principal work is through Body Breath Well, the practice I founded to bring
                together the different parts of my experience.
              </p>
              <p>I work with individuals and organisations on areas such as:</p>
            </div>

            <div className="profile-areas-grid">
              {workAreas.map(({ num, title, description }) => (
                <div key={num} className="profile-area-card">
                  <div>
                    <span className="profile-area-num">{num}</span>
                    <h3 className="profile-area-title">{title}</h3>
                    <p className="profile-area-desc">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="profile-today-action">
              <a
                className="profile-btn-primary"
                href={BODY_BREATH_WELL_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Programmes on Body Breath Well ↗
              </a>
            </div>
          </div>
        </section>

        {/* 03 — APPROACH (I don't begin with a perfect routine) */}
        <section id="approach" className="profile-section-approach">
          <div className="profile-shell profile-approach-wrap">
            <div className="profile-section-kicker">03 — Method</div>
            <h2 className="profile-section-title">I don’t begin with a perfect routine.</h2>
            <div style={{ fontSize: '0.90rem', lineHeight: 1.7 }}>
              <p>
                Most people who come to me already know what they "should" be doing. They have read
                the articles, downloaded the apps, bought the books or tried routines that were
                impossible to keep up for more than two weeks.
              </p>
              <p>
                So I usually begin somewhere simpler: What does your day actually look like? Where does
                tension accumulate first? What happens to your sleep when work gets demanding? What are
                you willing to do consistently, rather than impressively?
              </p>
            </div>

            <div className="profile-questions-card">
              <div className="profile-questions-label">Foundational Assessment Lines</div>
              {diagnosticQuestions.map((q, idx) => (
                <div key={idx} className="profile-question-line">
                  <span className="profile-question-bullet">0{idx + 1}</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: '0.90rem', lineHeight: 1.7 }}>
              <p>
                Sustainable wellbeing is rarely built on dramatic changes. It is usually built by
                finding the small, intelligent adjustments that can survive a busy week.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: EXPERIENCE BEFORE PRESCRIPTION */}
        <section className="profile-section-prescription">
          <div className="profile-shell profile-prescription-wrap">
            <div>
              <div className="profile-section-kicker">Observation</div>
              <h2 className="profile-section-title" style={{ marginBottom: '16px' }}>
                Experience before prescription
              </h2>
              <div style={{ fontSize: '0.90rem', lineHeight: 1.7 }}>
                <p>
                  Over 25 years of teaching, I have learned that the best routine is not the most
                  demanding one. It is the one that still happens when life is complicated, energy is
                  low and time is short.
                </p>
              </div>
            </div>

            <div>
              <blockquote className="profile-pullquote-statement">
                Three things someone continues are more useful than fifteen things abandoned by
                Thursday.
              </blockquote>
            </div>
          </div>
        </section>

        {/* 04 — ORGANISATIONS (Corporate Experience) */}
        <section id="corporate" className="profile-section-corporate">
          <div className="profile-shell profile-corporate-layout">
            <div>
              <div className="profile-section-kicker">04 — Organisations</div>
              <h2 className="profile-section-title">Working with organisations</h2>
              <div className="profile-prose">
                <p>
                  My corporate work is informed by having spent more than 22 years at TCS, in
                  addition to my earlier professional experience.
                </p>
                <p>That background gives me a particular interest in workplace health.</p>
                <p>
                  Corporate wellbeing can easily become a calendar of isolated events — a yoga
                  session here, a stress talk there, an annual wellness week.
                </p>
                <p>
                  These can be useful. But lasting value usually comes when the intervention reflects
                  the working environment itself.
                </p>
                <p>
                  I therefore work with organisations on practical programmes around stress,
                  recovery, movement, posture, sleep, attention and sustainable working habits.
                </p>
                <p>
                  Sessions can range from focused workshops to structured programmes delivered over
                  several weeks.
                </p>
              </div>
            </div>

            <div>
              <div className="profile-corporate-executive-card">
                <div className="profile-corporate-card-head">Workplace Practice & Corporate Health</div>
                <p className="profile-corporate-card-sub">
                  Rooted in 22+ years embedded in high-performance enterprise tech environments.
                </p>
                <div className="profile-corporate-points">
                  <div className="profile-corporate-point">
                    <span className="profile-corporate-point-num">01</span>
                    <div>
                      <strong>Stress & Cognitive Fatigue</strong>
                      <p>Routines designed for back-to-back schedules, screen fatigue and uninterrupted desk work.</p>
                    </div>
                  </div>
                  <div className="profile-corporate-point">
                    <span className="profile-corporate-point-num">02</span>
                    <div>
                      <strong>Postural & Movement Reset</strong>
                      <p>Physical interventions that relieve chronic cervical, shoulder and lumbar tension.</p>
                    </div>
                  </div>
                  <div className="profile-corporate-point">
                    <span className="profile-corporate-point-num">03</span>
                    <div>
                      <strong>Executive & Team Resilience</strong>
                      <p>Practical breath, sleep and attention training that fits real operational realities.</p>
                    </div>
                  </div>
                </div>

                <div className="profile-corporate-metrics">
                  <span className="profile-corporate-badge">22+ Years at TCS</span>
                  <span className="profile-corporate-badge">Workplace Health Specialist</span>
                </div>

                <a
                  className="profile-btn-corporate"
                  href={`${BODY_BREATH_WELL_URL}/corporate.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire About Corporate Programmes ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — QUALIFICATIONS (Training & Background) */}
        <section id="background" className="profile-section-background">
          <div className="profile-shell profile-credentials-grid">
            <div>
              <div className="profile-section-kicker">05 — Qualifications</div>
              <h2 className="profile-section-title">Training &amp; background</h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                My work draws on formal study, traditional lineage, medical institution coursework and
                continuous practitioner evaluation.
              </p>
            </div>

            <div>
              <div className="profile-credentials-table">
                {credentials.map(({ org, title }, idx) => (
                  <div key={idx} className="profile-credential-item">
                    <div className="profile-cred-org">{org}</div>
                    <div className="profile-cred-title">{title}</div>
                  </div>
                ))}
              </div>

              <div className="profile-cred-closing">
                These credentials inform the work, but they are not the point of it. The point is
                always whether someone can actually take what we do together and use it in their real,
                messy, demanding daily life.
              </div>
            </div>
          </div>
        </section>

        {/* 06 — WHY BODY BREATH WELL (The Practice) */}
        <section id="body-breath-well" className="profile-section-bbw">
          <div className="profile-shell profile-bbw-layout">
            <div>
              <div className="profile-section-kicker">06 — The Practice</div>
              <h2 className="profile-section-title">Why Body Breath Well</h2>
              <div className="profile-prose">
                <p>
                  I created Body Breath Well to bring together the different strands of my work into
                  one cohesive practice.
                </p>
                <p>
                  Over the years, it became clear that people do not simply need isolated advice.
                  They need practical, reliable ways to work with their body, breath and mental state
                  in real life.
                </p>
                <p>
                  Body Breath Well is where those programmes, tools, corporate offerings and
                  consultations live.
                </p>
              </div>
            </div>

            <div>
              <div className="profile-contrast-box">
                <div className="profile-contrast-head">The Professional Distinction</div>
                <div className="profile-contrast-row">
                  <span className="profile-contrast-bold">SomaMukherjee.com</span> is my personal
                  intellectual home on the web — practitioner experience, thinking and direct enquiries.
                </div>
                <div className="profile-contrast-row">
                  <span className="profile-contrast-bold">BodyBreathWell.com</span> is where the
                  work lives — structured programmes, corporate partnerships, tools and consultations.
                </div>

                <div style={{ marginTop: '20px' }}>
                  <a
                    className="profile-btn-primary"
                    href={BODY_BREATH_WELL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit bodybreathwell.com ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — CONTACT */}
        <section id="contact" className="profile-section-contact">
          <div className="profile-shell profile-contact-layout">
            <div>
              <div className="profile-section-kicker">07 — Contact</div>
              <h2 className="profile-section-title">
                A conversation is usually the best place to begin.
              </h2>
              <div style={{ fontSize: '1.08rem', lineHeight: 1.75 }}>
                <p>You do not need to know which programme you need before speaking with me.</p>
                <p>
                  If you are considering working together — personally or for an organisation — you
                  can start with a conversation about what is happening and what kind of support
                  would actually be useful.
                </p>
              </div>

              <div className="profile-contact-location-pill">
                <span>📍 Pune, India</span>
                <span>·</span>
                <span>Online Internationally</span>
              </div>

              <div className="profile-contact-links">
                <a
                  className="profile-btn-primary"
                  href="mailto:contact@bodybreathwell.com?subject=Conversation%20with%20Soma%20Mukherjee"
                >
                  Speak with Soma
                </a>
                <a
                  className="profile-btn-ghost"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a
                  className="profile-btn-ghost"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram ↗
                </a>
              </div>
            </div>

            <div className="profile-contact-form">
              <h3 className="profile-contact-form-title">Direct Enquiry</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="profile-field-group">
                  <label className="profile-field-label" htmlFor="form-name">
                    Your name
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    className="profile-form-control"
                    placeholder="First and last name"
                  />
                </div>

                <div className="profile-field-group">
                  <label className="profile-field-label" htmlFor="form-contact">
                    Email or phone
                  </label>
                  <input
                    id="form-contact"
                    name="contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={handleFormChange}
                    className="profile-form-control"
                    placeholder="name@domain.com or phone number"
                  />
                </div>

                <div className="profile-field-group">
                  <label className="profile-field-label" htmlFor="form-enquiry-type">
                    I am enquiring about
                  </label>
                  <select
                    id="form-enquiry-type"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleFormChange}
                    className="profile-form-control"
                  >
                    <option value="Individual support">Individual support</option>
                    <option value="Corporate work">Corporate work</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                <div className="profile-field-group">
                  <label className="profile-field-label" htmlFor="form-message">
                    What is on your mind?
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleFormChange}
                    className="profile-form-control profile-form-textarea"
                    placeholder="Briefly describe what is happening or what you are looking for"
                  />
                </div>

                <button
                  type="submit"
                  className="profile-form-btn"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending…' : 'Send enquiry'}
                </button>

                {formStatus === 'success' && (
                  <div
                    style={{
                      marginTop: '16px',
                      padding: '14px 18px',
                      borderRadius: '8px',
                      background: '#edf5ec',
                      border: '1px solid #b8dab4',
                      color: '#244820',
                      fontSize: '0.9rem',
                    }}
                    role="status"
                  >
                    Thank you. Your message has been sent. Soma or her office will reply shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* MINIMAL EDITORIAL FOOTER */}
      <footer className="profile-footer" role="contentinfo">
        <div className="profile-shell profile-footer-inner">
          <div>
            <div className="profile-footer-brand">Soma Mukherjee</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted-light)' }}>
              Founder, Body Breath Well
            </div>
          </div>

          <div className="profile-footer-nav">
            <a href={BODY_BREATH_WELL_URL} target="_blank" rel="noopener noreferrer">
              Body Breath Well
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <Link to="/privacy">Privacy</Link>
          </div>

          <div>© {new Date().getFullYear()} Soma Mukherjee. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
