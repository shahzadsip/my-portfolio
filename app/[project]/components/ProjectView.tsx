"use client";
import { useTheme } from "@/src/hooks/useTheme";
import "@/style/projects.css";
import Link from "next/link";
import { TProject } from "@/utils/TProjects";
import Image from "next/image";
import ImageGallery from "./ImageGallery";
interface IProps {
  project: TProject;
}
export default function ProjectView({ project }: IProps) {
  const { theme } = useTheme();

  const hero = project.hero;
  const images = project.images;
  const overview = project.detailed_overview;
  const achievements = project.achievements;
  const detail = project.project_detail;
  const stack = project.project_stack;
  const services = project.service_provided;

  return (
    <body>
      <div className="bg-pattern-dots"></div>

      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            Babar S.
          </Link>
          <Link href="/" className="back-btn">
            ← Back to Portfolio
          </Link>
        </div>
      </nav>

      <section className="project-hero">
        <div className="hero-content">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/case-studies">Case Studies</Link>
            <span>/</span>
            <span>{hero.breadcrumb}</span>
          </div>

          <h1>{hero.title}</h1>
          <p className="project-subtitle">{hero.description}</p>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Client</span>
              <span className="meta-value">{hero.client}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">{hero.time_line}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Year</span>
              <span className="meta-value">{hero.year}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">{hero.role}</span>
            </div>
          </div>

          <div className="project-tags">
            {hero.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>

          <div className="action-buttons">
            <a href="#" className="btn btn-primary">
              View Live Demo
            </a>
            <a href="#" className="btn btn-secondary">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* <!-- Main Content --> */}
      <div className="container">
        {/* <!-- Image Gallery --> */}
        {/* <div className="image-gallery">
          <div className="main-image">
            <img
              src="https://placehold.co/1200x600/6366f1/ffffff?text=NFT+Marketplace+Dashboard"
              alt="NFT Marketplace Dashboard"
            />
          </div>
          <div className="thumbnail-grid">
            {images.map((i) => (
              <div key={i.alt} className="thumbnail">
                <Image src={i.url} alt={i.alt} height={150} width={250} />
              </div>
            ))}
          </div>
        </div> */}
        <div className="min-h-screen bg-gray-50 py-8">
      <ImageGallery images={images} />
    </div>

        <div className="stats-grid">
          {achievements.map((a) => (
            <div key={a.label} className="stat-card">
              <div className="stat-number">{a.stats}</div>
              <div className="stat-label">{a.label}</div>
            </div>
          ))}
        </div>

        <div className="content-grid">
          <div className="main-content">
            {overview.map((d) => (
              <div key={d.title} className="content-section">
                <h2 className="">{d.title}</h2>
                <ul>
                  {d.title == "Key Features"
                    ? d.data.map((i) => <li key={i}>{i}</li>)
                    : d.data.map((i) => <p key={i}>{i}</p>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="sidebar">
            <div className="info-card">
              <h3>Project Details</h3>
              {detail.map((d) => (
                <div key={d.label} className="info-item">
                  <span className="info-label">{d.label}</span>
                  <span className="info-value">{d.content}</span>
                </div>
              ))}
            </div>

            <div className="info-card">
              <h3>Tech Stack</h3>
              <div className="tech-stack">
                {stack.map((s) => (
                  <span key={s} className="tech-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3>Services Provided</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {services.map((s) => (
                  <li
                    key={s}
                    style={{
                      padding: "0.5rem 0",
                      borderBottom: "1px solid var(--border-color)",
                    }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
