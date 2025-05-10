"use client";
import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto mt-12 px-6">
      <h1 className="text-4xl font-bold text-emerald-400 mb-6">Contact</h1>
      <div className="mb-8">
        <p className="text-gray-300 mb-2">Feel free to reach out for collaboration, project inquiries, or just to connect!</p>
        <ul className="text-gray-300">
          <li>Email: <a href="mailto:hasyrawi@gmail.com" className="text-emerald-400 underline">hasyrawi@gmail.com</a></li>
          <li>Phone: <a href="tel:081938983691" className="text-emerald-400 underline">081938983691</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/hanan-asyrawi-308827196" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">hanan-asyrawi-308827196</a></li>
        </ul>
      </div>
      <form className="bg-gray-800 rounded-lg p-6 shadow-lg space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-200 mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-200 mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-200 mb-1">Message</label>
          <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400" required></textarea>
        </div>
        <button type="submit" className="bg-emerald-500 text-white px-6 py-2 rounded font-semibold hover:bg-emerald-600 transition">Send Message</button>
      </form>
    </div>
  );
}
