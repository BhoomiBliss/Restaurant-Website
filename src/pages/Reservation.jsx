import { useState } from "react";
import Footer from "../components/Footer";

const API_BASE = import.meta.env.VITE_API_URL || "";

export default function Reservation() {
  const [status, setStatus] = useState({ kind: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ kind: "", message: "" });
    setSubmitting(true);

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    values.guests = Number(values.guests);

    try {
      const response = await fetch(`${API_BASE}/api/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "We couldn't save your request. Please try again.");
      form.reset();
      setStatus({ kind: "success", message: "Thanks! Your reservation request has been received." });
    } catch (error) {
      setStatus({ kind: "error", message: error.message || "The booking service is unavailable. Please try again shortly." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <section className="hero"><div className="heading"><h1>Make a reservation</h1></div></section>
      <section className="active-form-section">
        <div className="active-form-intro">
          <p className="form-eyebrow">A TABLE FOR YOU</p>
          <h2>Let’s make it a memorable meal.</h2>
          <p>Send a reservation request and our team will follow up to confirm your table.</p>
        </div>
        <form className="active-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" autoComplete="name" minLength="2" maxLength="80" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" maxLength="254" required /></label>
          <label>Phone<input name="phone" type="tel" autoComplete="tel" minLength="7" maxLength="24" required /></label>
          <label>Date<input name="date" type="date" min={new Date().toISOString().slice(0, 10)} required /></label>
          <label>Time<input name="time" type="time" required /></label>
          <label>Guests<select name="guests" defaultValue="" required><option value="" disabled>Select guests</option>{Array.from({ length: 12 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select></label>
          <label className="active-form-wide">Notes <span>(optional)</span><textarea name="notes" rows="3" maxLength="300" placeholder="Allergies, accessibility needs, or a special occasion" /></label>
          <button className="active-form-submit" type="submit" disabled={submitting}>{submitting ? "Sending…" : "Request a table"}</button>
          <p className="privacy-note">Your details are used to respond to this reservation request.</p>
          {status.message && <p className={`form-status ${status.kind}`} role="status">{status.message}</p>}
        </form>
      </section>
      <Footer />
    </div>
  );
}
