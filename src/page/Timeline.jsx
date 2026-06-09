import preuniImg from "../assets/pre.png";
const education = [
  {
    year: "2022 – Present",
    school: "Western University",
    degree: "Computer Science (BSc)",
    current: true,
  },
  {
    year: "2025 – 2026",
    school: "ISTAD",
    degree: "Full Stack Web Development Diploma",
    current: false,
  },
  {
    year: "2024",
    school: "ETEC Center",
    degree: "C++ Programming Certificate",
    current: false,
  },
  {
    year: "2025",
    school: "ETEC Center",
    degree: "JAVA Programming Certificate",
    current: false,
  },
  {
    year: "2019 – 2022",
    school: "Beong Khna High School",
    degree: "High School Diploma",
    current: false,
  },
];

const certificates = [
  { img: preuniImg },
  {img: preuniImg },
  {img: preuniImg },
];

function CertCard({ cert }) {
  return (
    <div className="cert-card">
      <div className="cert-card__media">
        {cert.img ? (
          <img src={cert.img} alt={cert.name} className="cert-card__img" />
        ) : (
          <div className="cert-card__placeholder">
            <i className="ti ti-certificate" aria-hidden="true" />
            <span>Upload image</span>
          </div>
        )}
      </div>
    </div>
  );
}

function TimelineItem({ item }) {
  return (
    <div className="tl-item">
      <div className={`tl-dot ${item.current ? "tl-dot--active" : ""}`} />
      <div className="tl-card glass-card">
        <div className="tl-card__top">
          <span className="tl-card__year">{item.year}</span>
          {item.current && (
            <span className="tl-card__badge">Currently studying</span>
          )}
        </div>
        <p className="tl-card__school">{item.school}</p>
        <p className="tl-card__degree">{item.degree}</p>
        <p className="tl-card__desc">{item.desc}</p>
      </div>
    </div>
  );
}

export default function AboutTimeline() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">About Me</p>
        <h2 className="section-title">
          My journey &<br />
          background
        </h2>

        <div className="about-tl__grid">
          {/* ── LEFT: bio + details + certs ── */}
          <div className="about-tl__left">
            <p className="about__body">
              I'm a frontend developer with a deep love for building interfaces
              that feel as good as they look. I specialize in React and
              performant animations.
            </p>
            <p className="about__body">
              When I'm not pushing pixels, I'm exploring WebGL, contributing to
              open source, or trying to make CSS do things it wasn't designed to
              do.
            </p>

            <div className="about__details">
              {[
                { label: "Location", value: "SenSok, Phnom Penh" },
                { label: "Email", value: "ctin871@gmail.com" },
                { label: "Status", value: "Open to work", highlight: true },
              ].map((d) => (
                <div key={d.label} className="about__detail">
                  <span className="about__detail-label">{d.label}</span>
                  <span
                    className={`about__detail-value ${d.highlight ? "about__detail-value--highlight" : ""}`}
                  >
                    {d.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <p className="design__poster-label">Certificates</p>
            <div className="cert-grid">
              {certificates.map((cert) => (
                <CertCard key={cert.name} cert={cert} />
              ))}
            </div>
          </div>

          {/* ── RIGHT: timeline + interests ── */}
          <div className="about-tl__right">
            <div className="tl">
              <div className="tl__line" />
              {education.map((item) => (
                <TimelineItem key={item.year} item={item} />
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
