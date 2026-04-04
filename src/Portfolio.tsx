import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import Mail from 'lucide-react/dist/esm/icons/mail';
// @ts-ignore
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
// @ts-ignore
import Phone from 'lucide-react/dist/esm/icons/phone';
// @ts-ignore
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import ThreeScene from './components/ThreeScene';
import { personalInfo, experiences, skills, projects, education } from './data';

const Section = ({ children, id, className = "" }: { children: React.ReactNode, id: string, className?: string }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      {children}
    </motion.div>
  </section>
);

export default function Portfolio() {
  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0d1117]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold flex items-center gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" className="w-6 h-6 object-contain" alt="Flutter" />
            <span className="text-white">Eslam<span className="text-[#02569B]">.dev</span></span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <ThreeScene />
        <div className="max-w-6xl mx-auto relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 text-[#02569B] rounded-full text-sm font-medium mb-6 border border-blue-500/20">
              {personalInfo.title}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#02569B]">
                Mobile Experiences
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              {personalInfo.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3 bg-[#02569B] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700">
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <img 
                src="/images/profile.jpg" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover rounded-full border-4 border-gray-800 relative z-10 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <Section id="experience" className="bg-[#161b22]">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-[#02569B] rounded-full"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 rounded-2xl bg-[#0d1117] border border-gray-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white text-lg">{exp.role}</h3>
                  <p className="text-[#02569B] font-medium">{exp.company}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <p className="text-gray-500 text-sm flex items-center md:justify-end gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.details.map((detail, j) => (
                  <li key={j} className="text-gray-300 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                    <span className="leading-relaxed text-sm md:text-base">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-[#02569B] rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-[#161b22] border border-gray-800 flex flex-col items-center justify-center gap-4 text-center hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0d1117] flex items-center justify-center group-hover:bg-[#02569B]/10 transition-colors text-gray-400 group-hover:text-[#02569B]">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-medium text-gray-200">{skill.name}</span>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-[#161b22]">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#02569B] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="rounded-2xl bg-[#0d1117] border border-gray-800 overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-blue-500/80 text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-500 bg-gray-800/50 px-2 py-1 rounded">{project.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  {project.links.appStore && (
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1"><ExternalLink className="w-3 h-3"/> App Store</span>
                  )}
                  {project.links.playStore && (
                    <span className="text-xs font-medium text-gray-500 flex items-center gap-1"><ExternalLink className="w-3 h-3"/> Google Play</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-[#02569B] rounded-full"></div>
        </div>
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-gray-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
              <p className="text-lg text-gray-300 mb-1">{education.department}</p>
              <p className="text-gray-400">{education.institution}</p>
            </div>
            <div className="md:text-right">
              <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg font-mono text-sm border border-blue-500/20 mb-2">
                GPA: {education.gpa}
              </div>
              <p className="text-gray-500 text-sm block">{education.period}</p>
            </div>
          </div>
          <div className="mt-8 p-4 bg-[#0d1117]/50 rounded-xl border border-gray-800/50">
            <h4 className="text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wider">Graduation Project</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{education.project}</p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-[#161b22] border-t border-gray-800 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-blue-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-[#0d1117] p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-2">Social Profiles</h3>
            <div className="flex gap-4">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-[#0a66c2] flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}