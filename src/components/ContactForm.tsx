"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ nom: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl px-16 py-12 shadow-xl w-full max-w-[60rem] mx-auto space-y-8
                 ring-1 ring-gray-200
                 transition-shadow duration-300
                 hover:shadow-2xl"
    >
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Contactez-nous</h2>

      <div>
        <label htmlFor="nom" className="block text-lg font-semibold text-gray-700 mb-2">
          Nom
        </label>
        <input
          id="nom"
          name="nom"
          type="text"
          value={form.nom}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-6 py-3 text-lg
                     placeholder-gray-400
                     focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500
                     transition"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-6 py-3 text-lg
                     placeholder-gray-400
                     focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500
                     transition"
          placeholder="Votre email"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          required
          className="w-full rounded-lg border border-gray-300 px-6 py-3 text-lg
                     placeholder-gray-400
                     focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:border-indigo-500
                     transition resize-none"
          placeholder="Votre message"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-indigo-600 text-white font-bold rounded-lg py-4 text-xl
                   hover:bg-indigo-700
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer"}
      </button>

      {status === "sent" && (
        <p className="text-green-600 text-center font-semibold mt-4 text-lg">Message envoyé ✅</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center font-semibold mt-4 text-lg">
          Une erreur est survenue ❌
        </p>
      )}
    </form>
  );
}
