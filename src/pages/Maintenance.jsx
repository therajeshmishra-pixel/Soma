import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './SomaProfile.css';

const BODY_BREATH_WELL_URL = 'https://bodybreathwell.com/';

const sectionLinks = [
  { id: 'intro', label: 'Intro' },
  { id: 'journey', label: 'Journey' },
  { id: 'tcs', label: 'TCS' },
  { id: 'approach', label: 'Approach' },
  { id: 'body-breath-well', label: 'Body Breath Well' },
  { id: 'note', label: 'Note' },
];

const observations = [
  'Sleep affects mood.',
  'Stress changes breathing.',
  'Breathing influences how settled we feel.',
  'A workstation can contribute to pain that exercise alone does not resolve.',
  'A person can be physically strong and still need mobility.',
  'And sometimes the best intervention is surprisingly ordinary.',
];

const ordinaryInterventions = [
  'Move the feet.',
  'Change the chair.',
  'Walk after a meal.',
  'Exhale before answering the next call.',
  'Go to bed a little earlier.',
  'Do fewer things, but do them regularly.',
];

const questions = [
  'How are you sleeping?',
  'What happens around 4 in the afternoon?',
  'How long are you sitting?',
  'When do you eat?',
  'What happens when work finishes?',
  'Do you feel tired, or do you feel unable to stop?',
  'Where do you notice tension first?',
  'What have you already tried?',
];

const quietProgress = [
  'Sleeping through the night after months of waking at 3 a.m.',
  'Getting through a difficult meeting without carrying it into the evening.',
  'Being able to sit comfortably again.',
  'Having enough energy left at the end of the day to speak properly with your family.',
  'Recognising tension before it becomes pain.',
  'Stopping before exhaustion makes the decision for you.',
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Soma Mukherjee',
  url: 'https://www.somamukherjee.com/',
  image: 'https://www.somamukherjee.com/Photos/profile/soma-portrait-1100.jpg',
  jobTitle: 'Wellbeing Practitioner and Educator',
  description:
    'Soma Mukherjee is a wellbeing practitioner and educator with nearly three decades of experience across yoga, movement, stress, recovery and workplace wellbeing.',
  worksFor: {
    '@type': 'Organization',
    name: 'Body Breath Well',
    url: BODY_BREATH_WELL_URL,
  },
  sameAs: ['https://in.linkedin.com/in/soma-mukherjee1'],
  knowsAbout: ['Yoga', 'Movement', 'Stress management', 'Recovery', 'Workplace wellbeing'],
};

function ExternalLink({ children, className = '', href = BODY_BREATH_WELL_URL }) {
  return (
    <a className={`profile-link ${className}`} href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionLabel({ children }) {
  return <p className="profile-kicker">{children}</p>;
}

function SectionNav({ activeSection, revealed }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`profile-section-nav ${revealed ? 'is-revealed' : ''}`} aria-label="On this page">
      <div className="profile-shell">
        <button
          className="profile-section-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="profile-section-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>On this page</span>
          <span aria-hidden="true" className={open ? 'is-open' : ''}>⌄</span>
        </button>
        <div id="profile-section-menu" className={`profile-section-links ${open ? 'is-open' : ''}`}>
          {sectionLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'is-active' : ''}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function EditorialImage({ alt, caption, className = '', loading = 'lazy', src, srcSet }) {
  return (
    <figure className={`profile-image ${className}`}>
      <img src={src} srcSet={srcSet} sizes="(max-width: 767px) 100vw, 50vw" alt={alt} loading={loading} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function Maintenance() {
  const [activeSection, setActiveSection] = useState('intro');
  const [navRevealed, setNavRevealed] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('intro');
    const sections = sectionLinks.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const heroObserver = new IntersectionObserver(
      ([entry]) => setNavRevealed(!entry.isIntersecting),
      { rootMargin: '-72px 0px 0px', threshold: 0.12 },
    );
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-28% 0px -58%', threshold: [0.05, 0.2, 0.5] },
    );
    if (hero) heroObserver.observe(hero);
    sections.forEach((section) => sectionObserver.observe(section));
    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="profile-page">
      <SEO
        title="Soma Mukherjee — Practitioner, Educator & Founder of Body Breath Well"
        description="Soma Mukherjee is a wellbeing practitioner and educator with nearly three decades of experience working across yoga, movement, stress, recovery and workplace wellbeing. Founder of Body Breath Well."
        canonical="https://www.somamukherjee.com/"
        schema={personSchema}
      />

      <a className="profile-skip-link" href="#profile-main">Skip to content</a>

      <header className="profile-header">
        <div className="profile-shell profile-header-inner">
          <Link className="profile-wordmark" to="/" aria-label="Soma Mukherjee, home">Soma Mukherjee</Link>
          <ExternalLink className="profile-header-link">Body Breath Well</ExternalLink>
        </div>
      </header>

      <SectionNav activeSection={activeSection} revealed={navRevealed} />

      <main id="profile-main">
        <section id="intro" className="profile-hero profile-shell" aria-labelledby="intro-title">
          <div className="profile-hero-copy">
            <SectionLabel>Practitioner · Educator · Since 1996</SectionLabel>
            <h1 id="intro-title">I have spent most of my working life watching people try to feel better.</h1>
            <div className="profile-prose profile-intro-prose">
              <p>Sometimes the problem looked obvious.</p>
              <p>A stiff back. Poor sleep. Stress. Low energy. A shoulder that would not settle.</p>
              <p>But very often, what a person came with was only one part of the story.</p>
              <p>Someone came to improve flexibility and we discovered that the real difficulty was how they were sitting for ten hours a day.</p>
              <p>Someone wanted to learn breathing practices but was barely sleeping.</p>
              <p>Someone looked perfectly capable at work and was quietly exhausted.</p>
              <p>And sometimes a person simply needed someone to listen long enough to understand what was actually going on.</p>
              <p>I have been doing this work since 1996.</p>
              <p>Today, it continues through Body Breath Well.</p>
            </div>
            <ExternalLink>Visit Body Breath Well</ExternalLink>
          </div>
          <EditorialImage
            className="profile-hero-image"
            src="/Photos/profile/soma-portrait-720.jpg"
            srcSet="/Photos/profile/soma-portrait-720.jpg 720w, /Photos/profile/soma-portrait-1100.jpg 1100w"
            alt="Portrait of Soma Mukherjee"
            caption="Soma Mukherjee · Pune, India"
            loading="eager"
          />
        </section>

        <section id="journey" className="profile-section profile-paper-section" aria-labelledby="journey-title">
          <div className="profile-shell profile-editorial-grid">
            <div className="profile-section-heading">
              <SectionLabel>01 — Beginning</SectionLabel>
              <h2 id="journey-title">I did not begin with a system.</h2>
            </div>
            <div className="profile-prose profile-reading-column">
              <p>I began with movement.</p>
              <p>I was an athlete and gymnast when I was younger. Yoga became part of my life through that world of movement, discipline and practice.</p>
              <p>There were competitions too. I won the All India Yoga Championship and National Yog Vyayam Championship in consecutive years and received the Yoga Kumari Award.</p>
              <p>At that stage, naturally, I thought a great deal about what the body could do.</p>
              <p>The years that followed made me much more interested in something else:</p>
            </div>
            <blockquote className="profile-pullquote profile-grid-wide">What does this particular person need today?</blockquote>
            <p className="profile-quote-tail">That question has stayed with me.</p>
            <EditorialImage
              className="profile-archive-image profile-grid-image"
              src="/Photos/profile/soma-competition-800.jpg"
              srcSet="/Photos/profile/soma-competition-800.jpg 800w, /Photos/profile/soma-competition-1400.jpg 1400w"
              alt="Soma Mukherjee performing at an All India Yoga Competition"
              caption="At an All India Yoga Competition"
            />
          </div>
        </section>

        <section id="tcs" className="profile-section profile-tcs-section" aria-labelledby="tcs-title">
          <div className="profile-shell">
            <div className="profile-tcs-opening">
              <div>
                <SectionLabel>02 — Workplace</SectionLabel>
                <h2 id="tcs-title">Then came the workplace.</h2>
              </div>
              <p className="profile-tenure">22 years and 9 months<br /><span>at TCS Research</span></p>
            </div>

            <div className="profile-editorial-grid profile-tcs-story">
              <div className="profile-prose profile-reading-column">
                <p>In 2001, I joined TCS Research in Pune as its first yoga and fitness consultant.</p>
                <p>I stayed for 22 years and 9 months.</p>
                <p>That is difficult to reduce to a line on a CV because it meant spending years alongside real people living real working lives.</p>
                <p>Engineers. Researchers. Scientists. Managers. Leaders.</p>
                <p>People sitting too long.</p>
                <p>People working under deadlines.</p>
                <p>People raising families while building careers.</p>
                <p>People exercising regularly but still hurting.</p>
                <p>People appearing completely composed while sleeping badly for months.</p>
                <p>I had the unusual opportunity to see the same people repeatedly—not during a weekend workshop, but across months and years.</p>
                <p>And repetition teaches you things.</p>
              </div>
              <EditorialImage
                className="profile-workplace-image"
                src="/Photos/profile/soma-professional-800.jpg"
                srcSet="/Photos/profile/soma-professional-800.jpg 800w, /Photos/profile/soma-professional-1400.jpg 1400w"
                alt="A young Soma Mukherjee with fellow award recipients and Tata Steel leadership"
                caption="An early professional chapter"
              />
            </div>

            <div className="profile-observations" aria-label="Observations collected over the years">
              {observations.map((observation, index) => (
                <p key={observation}><span>{String(index + 1).padStart(2, '0')}</span>{observation}</p>
              ))}
            </div>

            <div className="profile-ordinary">
              <SectionLabel>Useful can be ordinary</SectionLabel>
              <div>{ordinaryInterventions.map((item) => <p key={item}>{item}</p>)}</div>
            </div>

            <blockquote className="profile-pullquote profile-pullquote-right">
              I became less interested in impressive solutions and more interested in useful ones.
            </blockquote>
          </div>
        </section>

        <section className="profile-section profile-education-section" aria-labelledby="education-title">
          <div className="profile-shell profile-editorial-grid">
            <div className="profile-section-heading">
              <SectionLabel>Education</SectionLabel>
              <h2 id="education-title">Over the years, my education kept widening.</h2>
            </div>
            <div className="profile-prose profile-reading-column">
              <p>I studied yoga formally and completed a Master's in Yoga &amp; Science of Living.</p>
              <p>I became a Yoga Certification Board Level 3 Yoga Teacher &amp; Evaluator, under the Ministry of Ayush.</p>
              <p>I trained in fitness management, food and nutrition, people management, yoga therapy and psychological counselling.</p>
              <p>I continued studying stress, recovery, behaviour and the relationship between emotional and physical wellbeing.</p>
              <p>But I have never believed that accumulating methods automatically makes someone a better practitioner.</p>
              <p>Knowledge is useful only when it helps you see the person more clearly.</p>
            </div>
            <div className="profile-question-shift profile-grid-wide">
              <p>If someone comes to me with a problem, I should not begin by thinking:</p>
              <blockquote>“Which technique do I want to teach?”</blockquote>
              <p>I should be asking:</p>
              <blockquote className="is-emphasis">“What is happening here?”</blockquote>
            </div>
          </div>
        </section>

        <section id="approach" className="profile-section profile-approach-section" aria-labelledby="approach-title">
          <div className="profile-shell">
            <div className="profile-section-heading profile-approach-heading">
              <SectionLabel>03 — Practice</SectionLabel>
              <h2 id="approach-title">That is still how I work.</h2>
              <p className="profile-declaration">I listen first.<br />I watch.<br />I ask questions.</p>
            </div>
            <div className="profile-questions" aria-label="Questions Soma may ask">
              {questions.map((question) => <p key={question}>{question}</p>)}
            </div>
            <div className="profile-prose profile-reading-column profile-approach-copy">
              <p>Because two people can use exactly the same word—stress, fatigue, pain, poor sleep—and be describing completely different lives.</p>
              <p>So I do not expect everybody to practise the same way.</p>
              <p>One person may need movement.</p>
              <p>Another may need strength.</p>
              <p>Another needs to learn how to rest without feeling guilty about resting.</p>
              <p>Someone else may need a change in routine rather than another exercise.</p>
              <p>Sometimes breath is useful.</p>
              <p>Sometimes conversation is useful.</p>
              <p>Sometimes the responsible thing is to say:</p>
            </div>
            <blockquote className="profile-boundary">
              This needs to be discussed with your doctor or an appropriate clinical professional.
              <span>Knowing the limits of your own work is part of doing the work properly.</span>
            </blockquote>
          </div>
        </section>

        <section className="profile-section profile-progress-section" aria-labelledby="progress-title">
          <div className="profile-shell profile-editorial-grid">
            <div className="profile-section-heading">
              <SectionLabel>Progress</SectionLabel>
              <h2 id="progress-title">Nearly thirty years have changed my idea of progress.</h2>
            </div>
            <div className="profile-prose profile-reading-column">
              <p>When I was younger, progress was easier to see.</p>
              <p>You became stronger.</p>
              <p>More flexible.</p>
              <p>You could hold something longer or perform it better.</p>
              <p>I still value strength, mobility and disciplined practice enormously.</p>
              <p>But life has taught me to notice quieter forms of progress too.</p>
            </div>
            <div className="profile-progress-list profile-grid-wide">
              {quietProgress.map((item) => <p key={item}>{item}</p>)}
            </div>
            <blockquote className="profile-pullquote profile-grid-wide">These things are not dramatic. But they change lives.</blockquote>
          </div>
        </section>

        <section className="profile-section profile-simplicity-section" aria-labelledby="simplicity-title">
          <div className="profile-shell profile-simplicity-layout">
            <div className="profile-prose profile-reading-column">
              <SectionLabel>Simplicity</SectionLabel>
              <h2 id="simplicity-title">The older I get, the simpler my work becomes.</h2>
              <p>Not because there is less to know.</p>
              <p>Quite the opposite.</p>
              <p>The more you learn about the human body and mind, the harder it becomes to believe in one universal answer.</p>
              <p>People are complicated.</p>
              <p>Life is complicated.</p>
              <p>Good practice does not always need to be.</p>
              <p>After watching thousands of people try to improve their wellbeing, one pattern has stayed with me:</p>
            </div>
            <blockquote className="profile-simplicity-quote">The people who changed usually did a few useful things consistently.</blockquote>
            <div className="profile-prose profile-reading-column profile-simplicity-tail">
              <p>Not twenty things.</p>
              <p>Not a complete new life from Monday morning.</p>
              <p>A few things that actually fitted into the life they already had.</p>
              <p>That idea sits at the centre of my work today.</p>
            </div>
          </div>
        </section>

        <section id="body-breath-well" className="profile-section profile-bbw-section" aria-labelledby="bbw-title">
          <div className="profile-shell profile-bbw-grid">
            <div>
              <SectionLabel>04 — Today</SectionLabel>
              <h2 id="bbw-title">Body<br />Breath<br />Well</h2>
            </div>
            <div className="profile-prose profile-bbw-copy">
              <p>Eventually I wanted to create a practice where I could bring together everything the years had taught me without turning people into categories.</p>
              <p>That became Body Breath Well.</p>
              <p>It is where I now work with individuals and organisations around areas such as stress, sleep, posture, energy, movement, recovery and emotional regulation.</p>
              <p>The programmes are structured, but the person is never expected to fit the structure blindly.</p>
              <p>We begin with what is happening.</p>
              <p>Then we work from there.</p>
              <ExternalLink className="profile-link-light">Explore Body Breath Well</ExternalLink>
            </div>
          </div>
        </section>

        <section className="profile-section profile-organisations-section" aria-labelledby="organisations-title">
          <div className="profile-shell profile-organisations-grid">
            <EditorialImage
              className="profile-present-image"
              src="/Photos/profile/soma-studio-700.jpg"
              srcSet="/Photos/profile/soma-studio-700.jpg 700w, /Photos/profile/soma-studio-1100.jpg 1100w"
              alt="Soma Mukherjee standing in a quiet movement studio"
            />
            <div className="profile-prose">
              <SectionLabel>For organisations</SectionLabel>
              <h2 id="organisations-title">Wellbeing has to survive contact with the workplace.</h2>
              <p>My corporate work is also shaped by those years inside TCS Research.</p>
              <p>People have meetings.</p><p>Deadlines.</p><p>Travel.</p><p>Targets.</p><p>Children waiting at home.</p>
              <p>A practice that sounds wonderful in a presentation but cannot be used on an ordinary Wednesday afternoon is of limited value.</p>
              <p>So when I work with organisations, I try to keep the work practical, live and responsive to the people actually in the room.</p>
              <ExternalLink>Work with Soma through Body Breath Well</ExternalLink>
            </div>
          </div>
        </section>

        <section className="profile-section profile-student-section" aria-labelledby="student-title">
          <div className="profile-shell profile-editorial-grid">
            <div className="profile-section-heading">
              <SectionLabel>Continued learning</SectionLabel>
              <h2 id="student-title">I still consider myself a student.</h2>
            </div>
            <div className="profile-prose profile-reading-column">
              <p>There is an enormous amount about the human body, behaviour and wellbeing that we understand better today than we did thirty years ago.</p>
              <p>And there is an enormous amount we still do not understand completely.</p>
              <p>I find that exciting.</p>
              <p>I continue to read, study, question old assumptions and examine new research.</p>
              <p>Some traditional practices have survived for good reason.</p>
              <p>Some claims around them deserve more scrutiny.</p>
              <p>Some modern ideas are genuinely useful.</p>
              <p>Others are simply old ideas wearing new vocabulary.</p>
              <p>I am comfortable with that tension.</p>
              <p>I do not think tradition and science need to be enemies.</p>
              <p>Both deserve respect.</p>
              <p>Both deserve questions.</p>
              <p>And neither should become more important than the human being sitting in front of us.</p>
            </div>
          </div>
        </section>

        <section id="note" className="profile-section profile-note-section" aria-labelledby="note-title">
          <div className="profile-note-inner">
            <SectionLabel>A personal note</SectionLabel>
            <h2 id="note-title">A note from me</h2>
            <div className="profile-prose">
              <p>If you have reached this far, perhaps you were trying to decide whether you would feel comfortable speaking with me.</p>
              <p>That is probably more important than deciding whether a particular programme sounds perfect.</p>
              <p>You do not have to arrive knowing exactly what you need.</p>
              <p>You can tell me what has been happening.</p>
              <p>We can begin there.</p>
            </div>
            <p className="profile-signature">— Soma</p>
            <ExternalLink>Meet Soma through Body Breath Well</ExternalLink>
          </div>
        </section>

        <section className="profile-summary-section" aria-labelledby="summary-title">
          <div className="profile-shell profile-summary-grid">
            <div>
              <SectionLabel>Professional summary</SectionLabel>
              <h2 id="summary-title">Soma Mukherjee</h2>
              <p className="profile-summary-role">Practitioner · Educator · Founder, Body Breath Well</p>
            </div>
            <dl className="profile-summary-list">
              <div><dt>Practice</dt><dd>Working with people since 1996</dd></div>
              <div><dt>Workplace</dt><dd>22 years 9 months at TCS Research</dd></div>
              <div><dt>Qualification</dt><dd>YCB Level 3 — Yoga Teacher &amp; Evaluator</dd></div>
              <div><dt>Education</dt><dd>Master's in Yoga &amp; Science of Living</dd></div>
              <div><dt>Based in</dt><dd>Pune, India · Working internationally</dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="profile-footer">
        <div className="profile-shell profile-footer-inner">
          <p>Soma Mukherjee</p>
          <div>
            <ExternalLink>Body Breath Well</ExternalLink>
            <ExternalLink href="https://in.linkedin.com/in/soma-mukherjee1">LinkedIn</ExternalLink>
          </div>
          <p>© {new Date().getFullYear()} Soma Mukherjee</p>
        </div>
      </footer>
    </div>
  );
}
