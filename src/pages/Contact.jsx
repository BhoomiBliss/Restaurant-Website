import { useState } from "react";
import Footer from "../components/Footer";

const API_BASE = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  const [status, setStatus] = useState({ kind: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ kind: "", message: "" });
    setSubmitting(true);
    const form = event.currentTarget;

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "We couldn't send your message. Please try again.");
      form.reset();
      setStatus({ kind: "success", message: "Thanks for getting in touch. Your message has been received." });
    } catch (error) {
      setStatus({ kind: "error", message: error.message || "The message service is unavailable. Please try again shortly." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <section className="cont-us active-contact">
        <div className="contact-inf">
          <p className="form-eyebrow">WE’RE HERE TO HELP</p>
          <h1>Get in touch</h1>
          <p>Questions about the menu, a celebration, or a reservation? Send us a note and we’ll get back to you.</p>
          <h2>Visit us</h2>
          <p>Jyothi Restaurant<br />Mangaluru, Karnataka, India</p>
          <p className="contact-note">Call the restaurant directly for urgent booking changes.</p>
        </div>
        <form className="active-form active-contact-form" onSubmit={handleSubmit}>
          <h2>Write to us</h2>
          <label>Name<input name="name" autoComplete="name" minLength="2" maxLength="80" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" maxLength="254" required /></label>
          <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength="24" /></label>
          <label>Message<textarea name="message" rows="5" minLength="5" maxLength="2000" required /></label>
          <button className="active-form-submit" type="submit" disabled={submitting}>{submitting ? "Sending…" : "Send message"}</button>
          <p className="privacy-note">Your details are used to respond to your message.</p>
          {status.message && <p className={`form-status ${status.kind}`} role="status">{status.message}</p>}
        </form>
      </section>
      <Footer />
    </div>
  );
}
