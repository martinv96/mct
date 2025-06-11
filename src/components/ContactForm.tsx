'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('sent')
        setForm({ nom: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
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
        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
      </button>
      {status === 'sent' && <p className="text-green-600">Message envoyé ✅</p>}
      {status === 'error' && <p className="text-red-600">Une erreur est survenue ❌</p>}
    </form>
  )
}
