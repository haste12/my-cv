import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import profileImg from './profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserGraduate, FaUserTie, FaCertificate, FaBriefcase, 
         FaIdCard, FaCode, FaLanguage, FaGraduationCap, FaRobot, FaGoogle, FaUniversity, FaFire, FaDatabase,
         FaFileWord, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaTelegram, FaViber, FaSun, FaMoon } from 'react-icons/fa';
import { BiLogoReact, BiLogoCPlusPlus, BiLogoFlutter, BiLogoHtml5, BiLogoCss3, BiLogoJavascript } from 'react-icons/bi';

// Animated background component with floating particles
const AnimatedBackground = ({ darkMode }) => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      const count = window.innerWidth < 768 ? 15 : 30; // Fewer particles on mobile
      
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 5 + 2,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 100 + 20,
          color: darkMode ? 
            `rgba(52, 152, 219, ${Math.random() * 0.3 + 0.1})` : 
            `rgba(52, 152, 219, ${Math.random() * 0.3 + 0.1})`
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, [darkMode]);
  
  return (
    <div className="animated-background">
      {particles.map(particle => (
        <div 
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.speed}s`,
            backgroundColor: particle.color,
            filter: 'blur(1px)'
          }}
        ></div>
      ))}
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const contactRef = useRef(null);
  
  // Function to scroll to contact section
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`cv-app ${darkMode ? 'dark-mode' : ''}`}>
      <AnimatedBackground darkMode={darkMode} />
      
      <div className="top-navigation">
        <div className="container">
          <div className="nav-content">
            <div className="theme-switch">
              <span className="mode-icon">{darkMode ? <FaMoon /> : <FaSun />}</span>
              <label className="switch">
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                <span className="slider round"></span>
              </label>
            </div>
            <a href="#contact" className="nav-link" onClick={(e) => {e.preventDefault(); scrollToContact();}}>Contact Me</a>
          </div>
        </div>
      </div>
      
      <header className="header">
        <div className="container header-content">
          <div className="profile-header" data-aos="fade-right">
            <img src={profileImg} alt="Hasti Mohsin Ramadhan" className="header-image" onError={(e) => e.target.style.display = 'none'} />
            <div className="header-info">
              <h1>Haste Mohsin Ramadhan</h1>
              <h2><FaUserGraduate className="title-icon" /> Computer Engineering</h2>
              <div className="contact-row">
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Erbil - Hawleri nwe </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container main-content">
        <div className="two-column-layout">
          <div className="left-column">
            <section className="profile-section" data-aos="fade-up">
              <h2><FaUserTie className="section-icon" /> Profile</h2>
              <p>I am <strong>Hasti Mohsin Ramadhan</strong>, a <em>student</em> in the <strong>Faculty of Engineering, specializing in the Computer Engineering Department</strong>. I am passionate about technology, problem-solving, and continuous learning. With a strong foundation in software systems, I aim to apply my academic knowledge to help solve real-world challenges. I am seeking opportunities that will help me grow professionally and contribute meaningfully to innovative tech projects.</p>
            </section>

            <section className="education-section" data-aos="fade-up">
              <h2><FaGraduationCap className="section-icon" /> Education</h2>
              <div className="education-item">
                <h3><FaUniversity className="item-icon" /> Computer Engineering</h3>
                <p>Lebanese French University - LFU, Erbil</p>
              </div>
            </section>

            <section className="certificates-section" data-aos="fade-up">
              <h2><FaCertificate className="section-icon" /> Certificates</h2>
              <div className="certificate-item">
                <h3><FaGoogle className="item-icon" /> Google Certificate Of Digital Marketing</h3>
                <div className="certificate-badge">
                  <FaGoogle className="badge-icon" />
                </div>
              </div>
              
              <div className="certificate-item">
                <h3><FaDatabase className="item-icon" /> Institute of Electrical and Electronics Engineers ( IEEE )</h3>
                <p>Created an <strong>AI chat</strong> for my university under name <strong>LFU AI</strong> to assist students with university-related queries, showcased at an EEE event.</p>
                <div className="certificate-badge">
                  <FaCode className="badge-icon" />
                </div>
              </div>
              
              <div className="certificate-item">
                <h3><FaRobot className="item-icon" /> AI and Robotics exhibition, Institute Cihan</h3>
                <p>Created an <strong>AI chat</strong> for my university under name <strong>LFU AI</strong> to assist students with university-related queries, showcased at an AI and Robotics exhibition-certified event.</p>
                <div className="certificate-badge">
                  <FaRobot className="badge-icon" />
                </div>
              </div>
              
              <div className="certificate-item">
                <h3><FaFire className="item-icon" /> Nicer Club</h3>
                <p>Designed and built a robot capable of detecting and extinguishing small fires under name <strong>Fire Fighter Robot</strong> as part of a project in the <strong>NICER Club</strong> at LFU, focusing on safety automation and robotics innovation.</p>
                <div className="certificate-badge">
                  <FaRobot className="badge-icon" />
                </div>
              </div>
            </section>

            <section className="work-experience-section" data-aos="fade-up">
              <h2><FaBriefcase className="section-icon" /> Work experience</h2>
              <div className="experience-item">
                <p><FaUniversity className="item-icon" /> A volunteer at the <strong>ministry of higher education</strong>, ICT directory, and system department</p>
              </div>
            </section>

            <section className="projects-section" data-aos="fade-up">
              <h2><FaCode className="section-icon" /> Projects</h2>
              
              <div className="project-item">
                <h3><FaUniversity className="item-icon" /> School Management System</h3>
                <p>Developed a school managmet System , all user have account created by admin and all data saved in database the student can see his information and see the books of his stage.</p>
              </div>
              
              <div className="project-item">
                <h3><FaRobot className="item-icon" /> LFU AI</h3>
                <p>Created an AI-powered chatbot to assist students with university-related queries at Lebanese French University. LFU AI is a smart chatbot designed for university students and staff. It helps users quickly find important academic information like who teaches a subject, who the Head of Department is, and also answers global knowledge questions. The goal is to make university info more accessible and improve communication using AI..</p>
              </div>
              
              <div className="project-item">
                <h3><BiLogoReact className="item-icon" /> MovieFlix</h3>
                <p>Designed and developed a movie streaming platform with personalized recommendations and user reviews. Features responsive UI built with React and integrated with a movie database API for up-to-date content.</p>
              </div>
            </section>
          </div>

          <div className="right-column">
            <section className="personal-details-section" data-aos="fade-up">
              <h2><FaIdCard className="section-icon" /> Personal details</h2>
              <div className="detail-item">
                <h3>Driver's license</h3>
                <p>yes</p>
              </div>
              <div className="detail-item">
                <h3>Gender</h3>
                <p>Male</p>
              </div>
              <div className="detail-item">
                <h3>Nationality</h3>
                <p>Kurdish</p>
              </div>
            </section>

            <section className="courses-section" data-aos="fade-up">
              <h2><FaUserGraduate className="section-icon" /> Courses</h2>
              <ul className="modern-list">
                <li>
                  <BiLogoReact className="list-icon" />
                  <span>Web Developer</span>
                </li>
                <li>
                  <BiLogoFlutter className="list-icon" />
                  <span>Flutter Developer</span>
                </li>
                <li>
                  <FaLanguage className="list-icon" />
                  <span>American accent</span>
                </li>
                <li>
                  <FaGoogle className="list-icon" />
                  <span>Digital marketing</span>
                </li>
              </ul>
            </section>

            <section className="skills-section" data-aos="fade-up">
              <h2><FaCode className="section-icon" /> Skills</h2>
              <div className="skill-container">
                <div className="skill-item" data-aos="zoom-in" data-aos-delay="100">
                  <BiLogoCPlusPlus className="skill-icon cpp" />
                  <span>C++</span>
                </div>
                <div className="skill-item" data-aos="zoom-in" data-aos-delay="200">
                  <BiLogoReact className="skill-icon react" />
                  <span>React</span>
                </div>
                <div className="skill-item" data-aos="zoom-in" data-aos-delay="300">
                  <BiLogoFlutter className="skill-icon flutter" />
                  <span>Flutter</span>
                </div>
                <div className="skill-item" data-aos="zoom-in" data-aos-delay="400">
                  <FaFileWord className="skill-icon office" />
                  <span>MS Office</span>
                </div>
                <div className="skill-item" data-aos="zoom-in" data-aos-delay="500">
                  <BiLogoHtml5 className="skill-icon html" />
                  <span>HTML</span>
                </div>
                <div className="skill-item" data-aos="zoom-in" data-aos-delay="600">
                  <BiLogoCss3 className="skill-icon css" />
                  <span>CSS</span>
                </div>
                <div className="skill-item" data-aos="zoom-in" data-aos-delay="700">
                  <BiLogoJavascript className="skill-icon js" />
                  <span>JavaScript</span>
                </div>
              </div>
            </section>

            <section className="languages-section" data-aos="fade-up">
              <h2><FaLanguage className="section-icon" /> Languages</h2>
              <div className="language-container">
                <div className="language-item">
                  <div className="language-name">Kurdish</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '100%' }}></div>
                  </div>
                  <div className="language-level">Native</div>
                </div>
                <div className="language-item">
                  <div className="language-name">English</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '85%' }}></div>
                  </div>
                  <div className="language-level">Advanced</div>
                </div>
                <div className="language-item">
                  <div className="language-name">Arabic</div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '30%' }}></div>
                  </div>
                  <div className="language-level">Good</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="footer" data-aos="fade" ref={contactRef} id="contact">
        <div className="container">
          <div className="contact-me-section">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/haste.muhsin" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook className="social-icon facebook" /> Facebook
              </a>
              <a href="https://www.instagram.com/haste_muhsin/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram className="social-icon instagram" /> Instagram
              </a>
              <a href="https://www.linkedin.com/in/haste-muhsin-abb0052b4/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon linkedin" /> LinkedIn
              </a>
              <a href="mailto:hastemuhsin2005@gmail.com" className="social-link">
                <FaEnvelope className="social-icon email" /> hastemuhsin2005@gmail.com
              </a>
              
              <div className="social-link phone-link">
                <FaPhone className="social-icon phone" /> 0751 167 6815
                <div className="messaging-apps">
                  <a href="https://wa.me/9647511676815" target="_blank" rel="noopener noreferrer" className="messaging-app whatsapp">
                    <FaWhatsapp />
                  </a>
                  <a href="https://t.me/+9647511676815" target="_blank" rel="noopener noreferrer" className="messaging-app telegram">
                    <FaTelegram />
                  </a>
                  <a href="viber://chat?number=%2B9647511676815" target="_blank" rel="noopener noreferrer" className="messaging-app viber">
                    <FaViber />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p>&copy; 2025 Hasti Mohsin Ramadhan - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 