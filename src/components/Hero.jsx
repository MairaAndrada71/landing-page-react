import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";
import Button from "./Button";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1>Impulsamos tu presencia digital</h1>
          <p>
            Creamos experiencias web modernas, rápidas y orientadas a resultados.
          </p>
          <Button text="Solicitar propuesta" />
        </motion.div>

        <motion.img
          src={heroImg}
          alt="Ilustración digital"
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}

export default Hero;
