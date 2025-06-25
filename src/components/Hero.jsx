import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* ✅ One profile image here only */}
          <motion.img
            src="/projects/kelsieportrait.png"
            alt="Kelsie Avella Headshot"
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Kelsie Avella
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Front-End Developer | CS Graduate
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            I build intuitive web applications that blend clean design with
            solid functionality. Skilled in React.js and SQL, I’m eager to
            launch my career creating user-friendly, efficient digital
            experiences.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contacts"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com" target="_blank">
              <i className="fab fa-github" />
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin" />
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ✅ Floating cards container */}
        <div className="hero-image-container"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        
        >

          <div className="floating-card-wrapper">
            <motion.div
              className="floating-card top-left"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="card-content">
                <span className="card-icon">🛠️</span>
                <span className="card-text">Skills: C++, CSS, Javascript, HTML, React.js, Beginner Adobe Illustrator & Photoshop knowledge 
</span>
              </div>
            </motion.div>

            <motion.div
              className="floating-card top-right"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="card-content">
                <span className="card-icon">📚</span>
                <span className="card-text">Languages: Intermediate Spanish, Beginner American Sign Language (ASL)</span>
              </div>
            </motion.div>

            <motion.div
              className="floating-card bottom-left"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="card-content">
                <span className="card-icon">💡</span>
                <span className="card-text">Soft Skills: Time Management, Leadership, Customer Service, Blah Blah Blah</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

       