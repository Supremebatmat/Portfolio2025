import { useState, useEffect } from "react";
import type { FC } from "react";
import "./GuestBook.css";

const Guestbook: FC = () => {
  const [messages, setMessages] = useState<
    { id: number; name: string; message: string }[]
  >([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = "http://localhost:3310/api/messages";

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des messages.");
        }
        const data = await response.json();
        setMessages(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erreur :", error);
        setError("Impossible de récupérer les messages.");
      }
    };

    fetchMessages();

    // Configure un intervalle pour récupérer les nouveaux messages
    const interval = setInterval(fetchMessages, 5000); // Vérification toutes les 5 secondes
    return () => clearInterval(interval); // Nettoyage de l'intervalle à la fin
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 3 || message.trim().length < 5) {
      alert(
        "Le nom doit contenir au moins 3 caractères et le message au moins 5 caractères.",
      );
      return;
    }

    // Ajouter un message temporaire dans l'interface
    const tempId = Date.now();
    const newMessage = { id: tempId, name, message };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      setLoading(true);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message.");
      }

      // Remplacer le message temporaire par celui confirmé par l'API
      const savedMessage = await response.json();
      setMessages((prevMessages) =>
        prevMessages.map((msg) => (msg.id === tempId ? savedMessage : msg)),
      );

      setName("");
      setMessage("");
      setError(null);
    } catch (error) {
      console.error("Erreur :", error);
      setError("Erreur lors de l'envoi du message.");
      // Supprimer le message temporaire en cas d'erreur
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== tempId),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="allpage">
      <div className="guestbook-container">
        <h1 className="guestbook-title">Livre d'Or</h1>
        <form onSubmit={handleSubmit} className="guestbook-form">
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
      <div>
        <div className="guestbook-messages" key="guest-book-messages">
          {messages.length > 0 ? (
            messages.map((msg) => (
              <div key={msg.id} className="guestbook-message">
                <h3>{msg.name}</h3>
                <p>{msg.message}</p>
              </div>
            ))
          ) : (
            <p>
              Aucun message pour le moment. Soyez le premier à en laisser un !
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
