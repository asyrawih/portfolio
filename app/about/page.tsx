"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-6">
      <h1 className="text-4xl font-bold text-emerald-400 mb-2">About Me</h1>
      <p className="text-gray-300 mb-6">
        Experienced Full Stack Engineer with a focus on Frontend development, specialized in Next.js and React, and proficient in Golang Engineering. Passionate about building high-performance, scalable, and user-friendly applications.
      </p>
      <p className="text-gray-300 mb-6">
        I have collaborated with high-traffic trade transaction teams to implement Event Driven and Microservice Architectures, ensuring efficient communication and scalability. I am committed to writing clean code, following best practices, and continuously learning to deliver innovative solutions.
      </p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">Core Values</h2>
        <ul className="list-disc pl-5 text-gray-200">
          <li>Clean, maintainable code</li>
          <li>Continuous learning and improvement</li>
          <li>Collaboration and communication</li>
          <li>Delivering high-quality, scalable solutions</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">Technical Focus</h2>
        <ul className="list-disc pl-5 text-gray-200">
          <li>Frontend: Next.js, React, TypeScript</li>
          <li>Backend: Golang, Node.js, Laravel</li>
          <li>Cloud: Google Cloud Platform (GCP)</li>
          <li>DevOps: Docker, Kubernetes</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">Location</h2>
        <p className="text-gray-300">Jakarta Selatan, Jakarta, Indonesia</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white mb-2">Contact Information</h2>
        <ul className="text-gray-300">
          <li>Email: <a href="mailto:hasyrawi@gmail.com" className="text-emerald-400 underline">hasyrawi@gmail.com</a></li>
          <li>Phone: <a href="tel:081938983691" className="text-emerald-400 underline">081938983691</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/hanan-asyrawi-308827196" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">hanan-asyrawi-308827196</a></li>
        </ul>
      </div>
    </div>
  );
}
