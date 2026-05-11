import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Languages,
  Layers3,
  Rocket,
} from "lucide-react";
import { Locale, portfolio } from "./data/portfolio";

const skillIcons = [Code2, Layers3, Rocket];

export function App() {
  const [locale, setLocale] = useState<Locale>("ko");
  const content = portfolio[locale];
  const alternateLocale: Locale = locale === "ko" ? "en" : "ko";

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label={content.profile.name}>
          <img
            className="brand-avatar"
            src={content.profile.avatarUrl}
            alt=""
            width="36"
            height="36"
          />
          <span>{content.profile.name}</span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">{content.nav.about}</a>
          <a href="#skills">{content.nav.skills}</a>
          <a href="#projects">{content.nav.projects}</a>
        </nav>

        <button
          className="language-toggle"
          type="button"
          onClick={() => setLocale(alternateLocale)}
          aria-label={locale === "ko" ? "Switch to English" : "한국어로 전환"}
        >
          <Languages aria-hidden="true" size={17} />
          <span>{alternateLocale.toUpperCase()}</span>
        </button>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <img
            className="hero-portrait"
            src={content.profile.avatarUrl}
            alt={`${content.profile.name} GitHub avatar`}
            width="168"
            height="168"
          />
          <div className="hero-copy">
            <p className="eyebrow">{content.profile.role}</p>
            <h1 id="hero-title">{content.profile.headline}</h1>
            <p className="hero-summary">{content.profile.summary}</p>
          </div>
          <dl className="signal-grid">
            {content.signals.map((signal) => (
              <div className="signal-item" key={`${signal.label}-${signal.value}`}>
                <dt>{signal.label}</dt>
                <dd>{signal.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="content-band about-band" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">{content.about.eyebrow}</p>
            <h2 id="about-title">{content.about.title}</h2>
          </div>
          <div className="about-layout">
            <p className="section-lede">{content.about.body}</p>
            <div className="highlight-grid">
              {content.about.highlights.map((highlight) => (
                <article className="highlight-item" key={highlight.title}>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-band" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">{content.skills.eyebrow}</p>
            <h2 id="skills-title">{content.skills.title}</h2>
          </div>
          <div className="skill-grid">
            {content.skills.groups.map((group, index) => {
              const Icon = skillIcons[index % skillIcons.length];

              return (
                <article className="skill-card" key={group.title}>
                  <div className="card-icon" aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-band projects-band" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">{content.projects.eyebrow}</p>
            <h2 id="projects-title">{content.projects.title}</h2>
          </div>
          <div className="project-grid">
            {content.projects.items.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-header">
                  <BriefcaseBusiness size={22} aria-hidden="true" />
                  <h3>{project.title}</h3>
                </div>
                <div className="project-body">
                  <p>
                    <strong>Problem</strong>
                    {project.problem}
                  </p>
                  <p>
                    <strong>Role</strong>
                    {project.role}
                  </p>
                  <p>
                    <strong>Result</strong>
                    {project.result}
                  </p>
                </div>
                <ul className="tech-list" aria-label={`${project.title} technologies`}>
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                        {link.label === "Repository" && <Github size={17} aria-hidden="true" />}
                        {link.label !== "Repository" && (
                          <ArrowUpRight size={17} aria-hidden="true" />
                        )}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
