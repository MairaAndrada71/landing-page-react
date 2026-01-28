import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    // Simulación de envío (API fake)
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  }

  return (
    <section id="contact">
      <div className="container">
      <h2>Contacto</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />

        <button className="btn-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </button>

        {status === "error" && (
          <p className="form-error">
            Completá todos los campos correctamente.
          </p>
        )}

        {status === "success" && (
          <p className="form-success">
            ¡Mensaje enviado! Te contactaremos pronto.
          </p>
        )}
      </form>
    </div>
    </section>
  );
}

export default Contact;
