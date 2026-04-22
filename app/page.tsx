"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { Github, Linkedin, ExternalLink, Code, Palette, Smartphone, Menu, X, ArrowUp,Database, Cloud, Shield, Cpu } from "lucide-react"


export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)

      // Update active section based on scroll position
      const sections = ["about", "projects", "skills", "education","contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="font-serif font-bold text-xl hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() => scrollToTop()}
            >
              Roni Singh
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "education", label: "Education" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-all duration-200 hover:scale-105 ${
                    activeSection === id ? "text-blue-600 font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-all duration-200 hover:scale-110"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-background/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { id: "about", label: "About" },
                  { id: "projects", label: "Projects" },
                  { id: "skills", label: "Skills" },
                  { id: "education", label: "Skills" },
                  { id: "contact", label: "Contact" },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 hover:bg-muted ${
                      activeSection === id ? "text-blue-600 font-medium bg-muted" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <h1 className="font-serif font-black text-4xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-red-600 to-sky-500 bg-clip-text text-transparent animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-200">
              Roni Singh
            </h1>
            <h2 className="font-serif font-black text-3xl sm:text-3xl lg:text-7xl mb-3 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-200">
              Software Engineer
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-400">
              Explore my journey through design and development, where creativity meets functionality.
            </p>
            <Button
  size="lg"
  className="mr-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 delay-600"
  onClick={() => scrollToSection("projects")}
>
  View My Work
</Button>

<Button
  asChild
  size="lg"
  className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 animate-in fade-in-0 slide-in-from-bottom-10 duration-1000 delay-800"
>
  <a href="/Roni_Singh_resume.pdf" download>
    Download CV
  </a>
</Button>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-0 slide-in-from-left-8 duration-700">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
               I am a passionate and dedicated 4th-year IT Engineering student at MAKAUT, West Bengal. I have
              proficiency in Java, Python, and MySQL, and hands-on experience in web development, database management,
              and machine learning. Known for my attention to detail
 and collaborative spirit, I thrive in team environments and am committed to driving technological innovation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My approach combines technical expertise with creative vision, ensuring every project not only looks
                great but performs exceptionally.
              </p>
              <div className="flex flex-wrap gap-3">
                {["java", "python", "MySQL", "ML", "Node.js","Teamwork" ].map((skill, index) => (
                  <Badge
                    key={skill}
                    className={`px-3 py-1 hover:scale-105 transition-all duration-200 animate-in fade-in-0 slide-in-from-bottom-2 delay-${index * 100}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative animate-in fade-in-0 slide-in-from-right-8 duration-700">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-8 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img
                  src="/developer-headshot.jpg"
                  alt="Professional headshot"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
      <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">Featured Projects</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        A collection of projects that showcase my skills in design and development
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Malware Analysis & Classification with ML",
          description:
            "Developed a framework using static, dynamic, and graph-based features of PE files. Implemented ML/DL models like Random Forest, SVM, and CNN, enhanced with Explainable AI (SHAP, LIME) for interpretability.",
          image: "\img_malware.jpg",
          tags: ["Python", "Machine Learning", "XAI"],
          gradient: "from-cyan-100 to-blue-100",
        },
        {
          title: "Stock Price Prediction",
          description:
            "Machine learning + LSTM model predicting future stock prices from historical market data.",
          image: "/stock_price.jpg",
          tags: ["Python", "Pandas", "TensorFlow"],
          gradient: "from-blue-100 to-sky-100",
        },
        {
          title: "Payroll Management System",
          description:
            "MySQL-powered payroll application automating salary, tax, and bonus calculations.",
          image: "/payroll_image.jpeg",
          tags: ["MySQL", "SQL", "Backend"],
          gradient: "from-purple-100 to-pink-100",
        },
        {
          title: "Portfolio Website",
          description:
            "A responsive portfolio showcasing creative work with smooth animations and optimized performance.",
          image: "/portfolio-website-design.png",
          tags: ["React", "Tailwind", "Framer Motion"],
          gradient: "from-green-100 to-emerald-100",
        },
        {
          title: "Parking Lot Allotment System",
          description:
            "Web application for automated parking slot booking and management in real-time.",
          image: "\parking.jpg",
          tags: ["PHP", "MySQL", "Bootstrap"],
          gradient: "from-yellow-100 to-orange-100",
        },
        
        // {
        //   title: "Chatbot with NLP",
        //   description:
        //     "AI chatbot using NLP and Transformer models to provide intelligent responses for customer support.",
        //   image: "\chatbot_image.png",
        //   tags: ["Python", "NLP", "FastAPI"],
        //   gradient: "from-pink-100 to-red-100",
        // }
      ].map((project, index) => (
        <Card
          key={project.title}
          className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-4 delay-${index * 200}`}
        >
          <div className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-t-lg overflow-hidden`}>
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="font-serif">{project.title}</CardTitle>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:scale-110 transition-transform duration-200"
                >
                  {/* <Github className="h-4 w-4" /> */}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-2 hover:scale-110 transition-transform duration-200"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Skills Section */}
<section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
      <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">Skills & Expertise</h2>
      <p className="text-lg text-muted-foreground">Technologies and tools I work with</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: Code,
          title: "Frontend Development",
          description: "React, Next.js, TypeScript, Tailwind CSS, and modern JavaScript frameworks",
          color: "blue",
        },
        {
          icon: Palette,
          title: "Machine Learning",
          description: "Supervised & unsupervised learning, feature engineering, model tuning (scikit-learn, XGBoost), evaluation (AUC/F1), and deployment",
          color: "blue",
        },
        {
          icon: Smartphone,
          title: "Android Development",
          description: "React Native, responsive design, and cross-platform solutions",
          color: "blue",
        },
        {
          icon: Database,
          title: "Backend Development",
          description: "Node.js, Express, RESTful APIs, and database design with MySQL & MongoDB",
          color: "blue",
        },
        // {
        //   icon: Cloud,
        //   title: "Cloud & DevOps",
        //   description: "AWS, Docker, CI/CD pipelines, and deployment automation",
        //   color: "blue",
        // },
        {
          icon: Shield,
          title: "Cybersecurity",
          description: "Network security, vulnerability assessment, and secure coding practices",
          color: "blue",
        },
      ].map((skill, index) => (
        <Card
          key={skill.title}
          className={`text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-4 delay-${index * 200}`}
        >
          <div
            className={`w-16 h-16 bg-${skill.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300`}
          >
            <skill.icon className={`h-8 w-8 text-${skill.color}-600`} />
          </div>
          <CardTitle className="font-serif mb-2">{skill.title}</CardTitle>
          <CardDescription>{skill.description}</CardDescription>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Education Section - Timeline Style */}
<section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
      <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">Education</h2>
      <p className="text-lg text-muted-foreground">My academic background and qualifications</p>
    </div>

    <div className="relative border-l border-gray-300">
      {[
        {
          degree: "B.Tech in Information Technology",
          institution: "Maulana Abul Kalam Azad University of Technology, West Bengal",
          year: "2022 - Present",
          details: "CGPA: 8.3/10 — Coursework includes Data Structures, Machine Learning, Database Systems, and Software Engineering."
        },
        {
          degree: "Higher Secondary Education",
          institution: "Burdwan C.M.S. High School",
          year: "2020 - 2022",
          details: "Percentage: 72% — Focused on Physics, Chemistry, Mathematics, and Computer Science."
        },
        {
          degree: "Secondary School Education",
          institution: "Ramharipur Ramakrishna Mission High School",
          year: "2014 - 2020",
          details: "Percentage: 85% — Strong foundation in Mathematics, Science, and Computer Basics."
        },
      ].map((edu, index) => (
        <div key={edu.degree} className="mb-10 ml-6 animate-in fade-in-0 slide-in-from-bottom-4 delay-[${index * 200}ms]">
          {/* Dot */}
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-muted"></span>

          <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-serif">{edu.degree}</CardTitle>
              <CardDescription>{edu.institution}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
              <p>{edu.details}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4">Let's Connect!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'd love to hear about your project or collaboration ideas.
            </p>
          </div>

          <div className="animate-in fade-in-0 slide-in-from-bottom-6 duration-700 delay-200">
            <ContactForm />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-in fade-in-0 slide-in-from-bottom-8 duration-700 delay-400">
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-transparent"
                onClick={() => window.open("https://github.com/Roni021", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-transparent"
                onClick={() => window.open("https://www.linkedin.com/in/roni-singh-2ba405254/", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-6 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-600">
            Available for freelance projects and full-time opportunities
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Roni Portfolio. Crafted with passion and precision.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="sm"
          className="fixed bottom-8 right-8 z-40 rounded-full w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-in fade-in-0 slide-in-from-bottom-4"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
