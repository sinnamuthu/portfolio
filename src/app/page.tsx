import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Search,
  Server,
  Terminal,
} from "lucide-react";
import Erp4DentistShowcase from "./erp4dentist-showcase";
import HeroScrollReveal from "./hero-scroll-reveal";
import ScrambleText from "./scramble-text";
import StayerpGallery from "./stayerp-gallery";
import styles from "./page.module.css";

const experience = [
  {
    company: "Bleap Digital Marketing Agency",
    role: "Full-stack Developer",
    period: "Mar 2023 — Present",
    description:
      "Building ERP4Dentist across the frontend, APIs, database, deployment, and ongoing production support.",
    current: true,
  },
  {
    company: "Madbee Mobility Solutions",
    role: "Application Developer",
    period: "Feb 2022 — Mar 2023",
    description:
      "Developed Laravel applications and REST APIs, supported Ionic apps, and worked directly with clients.",
  },
  {
    company: "Digital Factory",
    role: "Web Developer",
    period: "May 2020 — Jan 2022",
    description:
      "Built PHP web applications, WordPress websites, and an Angular-based Ionic mobile application.",
  },
  {
    company: "AAHA Solutions",
    role: "Web Developer",
    period: "Apr 2019 — May 2020",
    description:
      "Created APIs for the Restax project and supported its Android and Angular applications.",
  },
  {
    company: "SK Software",
    role: "PHP Developer",
    period: "Mar 2018 — Apr 2019",
    description:
      "Developed and maintained client websites and web applications using PHP and MySQL.",
  },
];

const skills = [
  {
    icon: Layers3,
    title: "Frontend",
    items: "React · Next.js · TypeScript · JavaScript · Angular",
  },
  {
    icon: Braces,
    title: "Backend & APIs",
    items: "PHP · Laravel · Node.js · REST APIs · Authentication",
  },
  {
    icon: Database,
    title: "Data",
    items: "MySQL · PostgreSQL · Database design",
  },
  {
    icon: Server,
    title: "Cloud & delivery",
    items: "AWS EC2 · Docker · Nginx · GitHub Actions",
  },
];

const technologies = [
  { name: "GitHub", detail: "Source control", mark: "github" },
  { name: "Next.js", detail: "Web framework", mark: "next" },
  { name: "React", detail: "Frontend", mark: "react" },
  { name: "TypeScript", detail: "Typed JavaScript", mark: "typescript" },
  { name: "Angular", detail: "Frontend framework", mark: "angular" },
  { name: "Ionic", detail: "Mobile apps", mark: "ionic" },
  { name: "WordPress", detail: "CMS", mark: "wordpress" },
  { name: "HTML", detail: "Markup", mark: "html" },
  { name: "CSS", detail: "Stylesheets", mark: "css" },
  { name: "Bootstrap", detail: "UI framework", mark: "bootstrap" },
  { name: "JavaScript", detail: "Programming language", mark: "javascript" },
  { name: "PHP", detail: "Backend language", mark: "php" },
  { name: "Laravel", detail: "Backend", mark: "laravel" },
  { name: "MySQL", detail: "Database", mark: "mysql" },
  { name: "AWS", detail: "Cloud", mark: "aws" },
  { name: "Docker", detail: "Containers", mark: "docker" },
];

function SectionHeading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionEyebrow}>
        <span>{number}</span>
        <span className={styles.eyebrowRule} />
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
    </div>
  );
}

function LinkedInMark({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.269 2.37 4.269 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 .001-4.125 2.062 2.062 0 0 1-.001 4.125Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function GitHubMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.555.102.758-.241.758-.535 0-.264-.01-.963-.015-1.89-3.09.671-3.742-1.49-3.742-1.49-.505-1.283-1.234-1.625-1.234-1.625-1.01-.69.077-.676.077-.676 1.117.078 1.705 1.147 1.705 1.147.993 1.702 2.606 1.21 3.241.925.1-.719.389-1.21.707-1.488-2.467-.281-5.061-1.234-5.061-5.49 0-1.213.434-2.204 1.146-2.98-.115-.28-.497-1.41.108-2.94 0 0 .934-.299 3.06 1.14a10.64 10.64 0 0 1 5.57 0c2.126-1.439 3.058-1.14 3.058-1.14.607 1.53.225 2.66.11 2.94.714.776 1.144 1.767 1.144 2.98 0 4.267-2.598 5.206-5.073 5.482.399.344.755 1.022.755 2.06 0 1.487-.014 2.687-.014 3.051 0 .297.2.642.762.534A11.101 11.101 0 0 0 12 .9Z" />
    </svg>
  );
}

function ReactMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="3.4" fill="currentColor" />
      <ellipse cx="20" cy="20" rx="16" ry="6.2" stroke="currentColor" strokeWidth="1.7" />
      <ellipse cx="20" cy="20" rx="16" ry="6.2" stroke="currentColor" strokeWidth="1.7" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="16" ry="6.2" stroke="currentColor" strokeWidth="1.7" transform="rotate(120 20 20)" />
    </svg>
  );
}

function DockerMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" fill="currentColor">
      <path d="M7 20h4v4H7zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zM12 15h4v4h-4zm5 0h4v4h-4zm5 0h4v4h-4zm-5-5h4v4h-4zm5 0h4v4h-4zM4 25h30c-.9 5.7-5 9-11.3 9H16c-6.7 0-10.7-3.1-12-9zm31-3.2c1.7-1.4 2.7-3 3-4.8 1.5 1.1 2.1 2.5 1.8 4.3-1.1 0-2.7.2-4.8.5z" />
    </svg>
  );
}

function AwsMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" fill="none">
      <text x="4" y="22" fill="currentColor" fontFamily="Arial, sans-serif" fontSize="19" fontWeight="700" letterSpacing="-1.2">aws</text>
      <path d="M8 27c7 5 18 6 27 1" stroke="#f59d26" strokeWidth="2" strokeLinecap="round" />
      <path d="m32 25 4 2-3 3" stroke="#f59d26" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TechnologyMark({ mark }: { mark: string }) {
  switch (mark) {
    case "github":
      return <GitHubMark size={20} />;
    case "react":
      return <ReactMark />;
    case "docker":
      return <DockerMark />;
    case "aws":
      return <AwsMark />;
    case "next":
      return <span className={styles.nextMark}>N</span>;
    case "typescript":
      return <span className={styles.technologyTextMark}>TS</span>;
    case "angular":
      return <span className={styles.technologyTextMark}>A</span>;
    case "ionic":
      return <span className={styles.technologyTextMark}>I</span>;
    case "wordpress":
      return <span className={styles.technologyTextMark}>W</span>;
    case "html":
      return <span className={styles.technologyTextMark}>5</span>;
    case "css":
      return <span className={styles.technologyTextMark}>3</span>;
    case "bootstrap":
      return <span className={styles.technologyTextMark}>B</span>;
    case "javascript":
      return <span className={styles.technologyTextMark}>JS</span>;
    case "php":
      return <span className={styles.phpMark}>PHP</span>;
    case "laravel":
      return <span className={styles.laravelMark}>L</span>;
    default:
      return <Database aria-hidden="true" />;
  }
}

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#home" aria-label="Sinna Muthu, home">
          <span className={styles.wordmarkIcon}>s.</span>
          <ScrambleText
            className={styles.wordmarkName}
            text="sinnamuthu"
            replayOnScrollDirectionChange
          />
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a className={styles.navContact} href="mailto:sinnamuthu98765@gmail.com">
          Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <main id="home">
        <section
          className={styles.hero}
          id="hero-intro"
          aria-labelledby="hero-title"
        >
          <HeroScrollReveal />
          <div className={styles.heroCopy}>
            <div className={styles.availability}>
              <span className={styles.availabilityDot} />
              FULL-STACK DEVELOPER <span className={styles.availabilityDivider}>/</span>{" "}
              CHENNAI, INDIA
            </div>
            <h1 id="hero-title">
              Full-stack
              <br />
              <ScrambleText
                className={styles.heroAccent}
                text="developer."
              />
            </h1>
            <p className={styles.heroDescription}>
              I&apos;m{" "}
              <ScrambleText text="Sinna Muthu" replayOnScrollDirectionChange />{" "}
              — a software developer building across the stack.
              Explore the tools, code, and production product I&apos;ve been working on.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.buttonPrimary} href="#work">
                View my work <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a className={styles.textLink} href="mailto:sinnamuthu98765@gmail.com">
                Get in touch <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className={styles.heroStats} aria-label="Career highlights">
              <div>
                <strong>8+</strong>
                <span>years building</span>
              </div>
              <span className={styles.statsDivider} />
              <div>
                <strong>Full cycle</strong>
                <span>idea to production</span>
              </div>
              <span className={styles.statsDivider} />
              <div>
                <strong>Healthcare</strong>
                <span>product experience</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} id="hero-visual">
            <Image
              className={styles.editorPortrait}
              src="/sinnamuthu.webp"
              alt=""
              width={313}
              height={448}
              sizes="(max-width: 720px) 75vw, 38vw"
            />
            <div className={styles.editorWindow}>
              <div className={styles.editorTitlebar}>
                <div className={styles.editorWindowControls} aria-hidden="true">
                  <i /><i /><i />
                </div>
                <span><Code2 size={12} /> sinna-muthu / portfolio</span>
                <span className={styles.editorBranch}><GitHubMark size={12} /> main</span>
              </div>
              <div className={styles.editorTabs}>
                <span className={styles.activeEditorTab}><FileCode2 size={12} /> page.tsx <i /></span>
                <span><Braces size={11} /> stack.ts</span>
                <span><Code2 size={11} /> api.php</span>
              </div>
              <div className={styles.editorBody}>
                <aside className={styles.editorActivity} aria-label="Developer tools">
                  <span className={styles.activeActivity}><FileCode2 /></span>
                  <span><Search /></span>
                  <span><GitHubMark size={16} /></span>
                  <span><Database /></span>
                  <span className={styles.activityAvatar}>SM</span>
                </aside>
                <div className={styles.editorCode}>
                  <div className={styles.editorBreadcrumb}>src <i>/</i> app <i>/</i> page.tsx</div>
                  <div className={styles.codeLines} aria-label="Example portfolio source code">
                    <div><span className={styles.lineNumber}>1</span><code><b>import</b> <em>React</em> <b>from</b> <strong>&quot;react&quot;</strong>;</code></div>
                    <div><span className={styles.lineNumber}>2</span><code><b>import</b> <em>Image</em> <b>from</b> <strong>&quot;next/image&quot;</strong>;</code></div>
                    <div><span className={styles.lineNumber}>3</span><code>&nbsp;</code></div>
                    <div><span className={styles.lineNumber}>4</span><code><b>const</b> <em>developer</em> = {"{"}</code></div>
                    <div><span className={styles.lineNumber}>5</span><code>&nbsp;&nbsp;name: <strong>&quot;<ScrambleText text="Sinna Muthu" replayOnScrollDirectionChange />&quot;</strong>,</code></div>
                    <div><span className={styles.lineNumber}>6</span><code>&nbsp;&nbsp;focus: <strong>&quot;full stack&quot;</strong>,</code></div>
                    <div><span className={styles.lineNumber}>7</span><code>&nbsp;&nbsp;building: <strong>&quot;ERP4Dentist&quot;</strong>,</code></div>
                    <div><span className={styles.lineNumber}>8</span><code>{"}"};</code></div>
                    <div><span className={styles.lineNumber}>9</span><code>&nbsp;</code></div>
                    <div><span className={styles.lineNumber}>10</span><code><b>export default</b> <em>developer</em>;</code></div>
                  </div>
                  <div className={styles.editorTerminal}>
                    <div className={styles.terminalTitle}><Terminal size={11} /> TERMINAL <span /> <span>PROBLEMS</span> <span>OUTPUT</span></div>
                    <div className={styles.terminalLine}><i>&gt;</i> npm run build</div>
                    <div className={styles.terminalSuccess}>[ok] Compiled successfully <span>2.4s</span></div>
                  </div>
                </div>
              </div>
              <div className={styles.editorStatusbar}>
                <span><GitBranch size={10} /> main</span>
                <span>TypeScript React</span>
                <span>UTF-8</span>
                <span>Ln 10, Col 24</span>
              </div>
              <div className={styles.editorProfile}>
                <Image src="/sinnamuthu.webp" alt="" width={44} height={44} />
                <span><strong><ScrambleText text="Sinna Muthu" replayOnScrollDirectionChange /></strong><small>Full-stack developer · Chennai</small></span>
                <span className={styles.onlineIndicator} />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.stackStrip} aria-label="Technology stack">
          <div className={styles.stackStripHeader}>
            <span>TOOLS I WORK WITH</span>
            <span className={styles.stackRule} />
            <span>FROM CODE TO CLOUD</span>
          </div>
          <div className={styles.stackLogos}>
            {technologies.map((technology) => (
              <div className={styles.stackLogo} key={technology.name}>
                <span className={`${styles.brandIcon} ${styles[`brand${technology.mark}`]}`}>
                  <TechnologyMark mark={technology.mark} />
                </span>
                <span><strong>{technology.name}</strong><small>{technology.detail}</small></span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.featuredSection} id="work" aria-labelledby="work-title">
          <SectionHeading number="01" label="SELECTED WORK" title="A product built end to end." />

          <article className={styles.featuredCard}>
            <div className={styles.featuredCopy}>
              <div className={styles.projectOverline}>
                <span className={styles.projectDot} />
                FEATURED PRODUCT
              </div>
              <h3 id="work-title">ERP4Dentist</h3>
              <p className={styles.featuredLead}>
                A real practice-management product, built from scratch.
              </p>
              <p className={styles.featuredDescription}>
                I&apos;ve spent the last two and a half years building this application —
                from appointments, patient records, and dental treatment planning to
                reporting, branch management, and production infrastructure.
              </p>
              <div className={styles.projectTags} aria-label="Project technologies">
                <span>Next.js</span>
                <span>Laravel</span>
                <span>MySQL</span>
                <span>AWS</span>
                <span>Docker</span>
              </div>
              <a
                className={styles.projectLink}
                href="https://dental.erp4dentist.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit ERP4Dentist <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>

            <Erp4DentistShowcase />
          </article>

          <div className={styles.projectFootnote}>
            <span>
              <Globe2 size={15} aria-hidden="true" /> Live product
            </span>
            <p>
              Frontend, backend, data, deployment, and ongoing maintenance — not just the
              interface. The preview uses fictional sample data; no real patient
              information is shown.
            </p>
            <a
              href="https://dental.erp4dentist.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open ERP4Dentist"
            >
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className={styles.capabilities} aria-labelledby="capabilities-title">
          <div className={styles.capabilitiesIntro}>
            <div className={styles.sectionEyebrow}>
              <span>02</span>
              <span className={styles.eyebrowRule} />
              <span>HOW I WORK</span>
            </div>
            <h2 id="capabilities-title">
              Comfortable at
              <br />
              <span>every layer.</span>
            </h2>
            <p>
              I don&apos;t stop at shipping a screen. I enjoy understanding what happens
              behind it — and making sure it works reliably once it&apos;s live.
            </p>
            <a className={styles.inlineLink} href="#about">
              More about my approach <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.skillGrid}>
            {skills.map(({ icon: Icon, title, items }, index) => (
              <article className={styles.skillCard} key={title}>
                <div className={styles.skillCardTop}>
                  <span className={styles.skillIcon}>
                    <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className={styles.skillIndex}>0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{items}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.experienceSection} id="experience">
          <div className={styles.experienceIntro}>
            <SectionHeading
              number="03"
              label="THE JOURNEY"
              title="Eight years, layer by layer."
            />
            <p>
              From PHP foundations to owning a full-stack product, each role has added
              another part of the picture.
            </p>
          </div>
          <div className={styles.timeline}>
            {experience.map((item, index) => (
              <article className={styles.timelineItem} key={item.company}>
                <div className={styles.timelineMarker} aria-hidden="true">
                  <span className={item.current ? styles.currentMarker : ""} />
                  {index < experience.length - 1 && <i />}
                </div>
                <div className={styles.timelineMain}>
                  <div className={styles.timelineTitleRow}>
                    <div>
                      <h3>{item.company}</h3>
                      <span>{item.role}</span>
                    </div>
                    {item.current && <span className={styles.currentBadge}>CURRENT</span>}
                  </div>
                  <p>{item.description}</p>
                </div>
                <time className={styles.timelineDate}>{item.period}</time>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.linkedinSection} aria-labelledby="linkedin-title">
          <div className={styles.linkedinCopy}>
            <div className={styles.sectionEyebrow}>
              <span>04</span>
              <span className={styles.eyebrowRule} />
              <span>A LITTLE MORE</span>
            </div>
            <h2 id="linkedin-title">
              Beyond the
              <br />
              <span>code editor.</span>
            </h2>
            <p>
              A moment from my journey, shared on LinkedIn. Watch the video and connect
              with me there.
            </p>
            <a
              className={styles.linkedinButton}
              href="https://www.linkedin.com/in/sinna-muthu-91b948178/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInMark />
              Find me on LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.linkedinEmbed}>
            <div className={styles.embedLabel}>
              <span className={styles.embedLiveDot} />
              FROM MY LINKEDIN
            </div>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7334455305549844480"
              title="Sinna Muthu's LinkedIn post and video"
              loading="lazy"
              allowFullScreen
              className={styles.linkedinFrame}
            />
          </div>
        </section>

        <section className={styles.stayerpSection} aria-labelledby="stayerp-title">
          <div className={styles.stayerpHeading}>
            <div>
              <div className={styles.sectionEyebrow}>
                <span>05</span>
                <span className={styles.eyebrowRule} />
                <span>PERSONAL PRODUCT</span>
              </div>
              <h2 id="stayerp-title">A hotel system built for a friend.</h2>
              <p>
                A friend needed software for his hotel, so I built Stayerp as a hobby
                project and handed it over for him to use.
              </p>
            </div>
            <a
              className={styles.stayerpVisit}
              href="https://stayerp.in/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Stayerp <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.stayerpOverview}>
            <p>
              Stayerp brings the day-to-day work of a hotel into one place: room
              operations, reservations, accounts, kitchen orders, inventory, and staff
              workflows. Every notification reaches the hotel by email, with WhatsApp
              messaging integrated through MSG91.
            </p>
            <div className={styles.stayerpDetails}>
              <div>
                <span>BUILT WITH</span>
                <strong>Next.js <i /> MySQL</strong>
              </div>
              <div>
                <span>HOSTED ON</span>
                <strong>Hostinger</strong>
              </div>
              <div>
                <span>NOTIFICATIONS</span>
                <strong>Email <i /> WhatsApp via MSG91</strong>
              </div>
            </div>
          </div>
          <StayerpGallery />
        </section>

        <section className={styles.aboutSection} id="about">
          <div className={styles.aboutBadge}>
            <Image
              src="/sinnamuthu-developer.png"
              alt=""
              width={100}
              height={100}
              sizes="76px"
            />
          </div>
          <div className={styles.aboutCopy}>
            <div className={styles.sectionEyebrow}>
              <span>06</span>
              <span className={styles.eyebrowRule} />
              <span>A BIT ABOUT ME</span>
            </div>
            <h2>Curious by nature. Practical by design.</h2>
            <p>
              I&apos;m a developer from Pondicherry, now working in Chennai. I like going
              beyond how a framework works on the surface — understanding the systems
              underneath, then applying that knowledge to software people can actually
              use. I hold a Bachelor of Computer Applications from Pondicherry University
              and speak Tamil and English.
            </p>
            <div className={styles.aboutDetails}>
              <span>
                <MapPin size={14} aria-hidden="true" /> Chennai, India
              </span>
              <span>BCA · Pondicherry University</span>
              <span>Tamil · English</span>
            </div>
          </div>
          <div className={styles.aboutWatermark} aria-hidden="true">
            S.
          </div>
        </section>

        <section className={styles.contactSection} id="contact">
          <div className={styles.contactOrb} aria-hidden="true" />
          <div className={styles.sectionEyebrow}>
            <span>07</span>
            <span className={styles.eyebrowRule} />
            <span>HAVE A GOOD ONE IN MIND?</span>
          </div>
          <h2>
            Let&apos;s make
            <br />
            <span>it work.</span>
          </h2>
          <p>
            Have a project, an opportunity, or just want to talk about building better
            software? My inbox is open.
          </p>
          <div className={styles.contactActions}>
            <a className={styles.contactButton} href="mailto:sinnamuthu98765@gmail.com">
              <Mail size={17} aria-hidden="true" />
              sinnamuthu98765@gmail.com
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className={styles.phoneButton} href="tel:+918525939833">
              <Phone size={17} aria-hidden="true" />
              +91 85259 39833
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/sinna-muthu-91b948178/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInMark size={16} /> LinkedIn
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href="https://github.com/sinnamuthu" target="_blank" rel="noreferrer">
              <GitHubMark /> GitHub
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
          <a className={styles.backToTop} href="#home" aria-label="Back to top">
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.footerBrand} href="#home">
          <span className={styles.wordmarkIcon}>s.</span> Crafted by{" "}
          <ScrambleText text="Sinna Muthu" replayOnScrollDirectionChange />
        </a>
        <span>Full-stack developer · Chennai, India</span>
        <a href="#home" className={styles.footerTop}>
          BACK TO TOP <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
