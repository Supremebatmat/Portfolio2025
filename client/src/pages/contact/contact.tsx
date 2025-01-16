import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css"; // Assurez-vous que ce fichier CSS est correctement configuré

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false); // Pour indiquer si le message a été envoyé
  const [error, setError] = useState(""); // Pour gérer les erreurs

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configurez votre User ID, Service ID et Template ID ici
    const serviceID = "service_ao899dq"; // Remplacez par votre Service ID
    const templateID = "template_no0h0z3"; // Remplacez par votre Template ID
    const userID = "A2mRN112kCkrksfh9"; // Remplacez par votre User ID

    // Créer les paramètres pour le template EmailJS
    const templateParams = {
      to_name: "Mathieu", // Remplacez par le nom du destinataire
      from_name: `${formData.firstName} ${formData.lastName}`,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert(
          `Message envoyé avec succès: ${response.status} - ${response.text}`,
        );
        setIsSent(true); // Mettre à jour l'état pour indiquer que le message est envoyé
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        setError(""); // Réinitialiser l'erreur
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du message", error);
        setError("Une erreur est survenue lors de l'envoi du message."); // Gérer l'erreur
      });
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-title">Contactez-moi</h2>
      {isSent && (
        <p className="success-message">
          Votre message a été envoyé avec succès !
        </p>
      )}
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Afficher l'erreur si elle existe */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Entrez votre nom"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Entrez votre email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Écrivez votre message ici..."
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
