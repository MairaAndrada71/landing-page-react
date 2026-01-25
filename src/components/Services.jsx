import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations/variants";

function Services() {
  return (
    <div className="container">
      <h2>Servicios</h2>

      <motion.div
        className="services-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="service-card" variants={fadeUp}>
          <span className="service-icon">💻</span>
          <h3>Desarrollo Web</h3>
          <p>Sitios rápidos, escalables y modernos.</p>
        </motion.div>

        <motion.div className="service-card" variants={fadeUp}>
          <span className="service-icon">🎨</span>
          <h3>Diseño UI</h3>
          <p>Interfaces limpias y centradas en el usuario.</p>
        </motion.div>

        <motion.div className="service-card" variants={fadeUp}>
          <span className="service-icon">🚀</span>
          <h3>Optimización</h3>
          <p>Performance y SEO de alto nivel.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;
