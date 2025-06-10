'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Message envoyé (simulation) !")
    // Ici tu pourrais ajouter une logique API si nécessaire
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div>
          <label className="block font-semibold">Nom</label>
          <input type="text" name="nom" value={form.nom} onChange={handleChange} className="w-full border rounded p-2 mt-1" required />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border rounded p-2 mt-1" required />
        </div>
        <div>
          <label className="block font-semibold">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full border rounded p-2 mt-1" required />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
          Envoyer
        </button>
      </form>
    </main>
  )
}
