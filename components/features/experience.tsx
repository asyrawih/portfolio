
"use client";
import React from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { SiTypescript } from "react-icons/si";
import { Card } from "@/components/ui/card"
import { FaGolang, FaJava, FaJs, FaPhp, FaReact } from "react-icons/fa6";

export function Experience() {
  return (
    <>
      <div className="mt-8 xl:mt-12 gap-4 mx-auto px-8 ">
        <span className="text-white text-3xl font-bold">Programing Languages</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-8">
        <Card title="Javascript" icon={<FaJs size={90} />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Golang" icon={<FaGolang size={90} />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
              [232, 20, 121],
            ]}
            dotSize={2}
          />
        </Card>
        <Card title="PHP" icon={<FaPhp size={90} />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card title="React" icon={<FaReact size={90} />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card title="Typescript" icon={<SiTypescript size={90} />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[
              [125, 211, 252],
              [232, 122, 121],
            ]}
          />
        </Card>

        <Card title="Java/Kotlin" icon={<FaJava size={90} />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[
              [125, 211, 252],
              [232, 122, 121],
            ]}
          />
        </Card>

      </div>

      {/* Experience Section */}
      <div className="mt-12 px-8 max-w-4xl mx-auto">
        <span className="text-white text-3xl font-bold">Professional Experience</span>
        <div className="mt-6 space-y-10">
          {/* INDODAX */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
                <p className="text-emerald-400 font-medium">INDODAX - Indonesia Digital Asset Exchange</p>
              </div>
              <span className="text-gray-400">Jul 2022 - Present (2 yr 4 mos)</span>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-200 text-sm space-y-1">
              <li>Developed and implemented a staking application using microservice architecture for scalability and high performance.</li>
              <li>Collaborated on backend design and seamless microservice integration.</li>
              <li>Enhanced high-traffic transaction processing, optimizing performance and reliability.</li>
              <li>Developed and maintained RESTful APIs for inter-component communication.</li>
              <li>Designed and implemented efficient database schemas for staking and transaction data.</li>
              <li>Worked closely with frontend engineers to define and integrate APIs.</li>
              <li>Conducted code reviews, rigorous testing, and debugging for code quality and security.</li>
              <li>Monitored and optimized application performance, identifying and resolving bottlenecks.</li>
            </ul>
            <div className="mt-2 text-gray-300 text-xs">
              <span className="font-semibold">Impact:</span> Successfully developed and launched a secure staking application, improved transaction processing reliability, and contributed to the scalability and flexibility of the system.<br/>
              <span className="font-semibold">Tools:</span> Golang, Docker, Kubernetes, GCP
            </div>
          </div>

          {/* Salasar eCommerce */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
                <p className="text-emerald-400 font-medium">Salasar eCommerce Total Solutions Pvt Ltd</p>
              </div>
              <span className="text-gray-400">Mar 2022 - Jul 2022 (5 mos)</span>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-200 text-sm space-y-1">
              <li>Developed and implemented an e-commerce application using CS-Cart and Laravel.</li>
              <li>Designed and developed plug-and-play modules for CS-Cart, extending platform functionality.</li>
              <li>Collaborated with cross-functional teams for requirements and technical specs.</li>
              <li>Conducted code reviews and implemented best practices.</li>
            </ul>
            <div className="mt-2 text-gray-300 text-xs">
              <span className="font-semibold">Impact:</span> Successfully deployed e-commerce solutions and custom plugins, streamlining integration and receiving positive client feedback.<br/>
              <span className="font-semibold">Tools:</span> Laravel, CS-Cart
            </div>
          </div>

          {/* Moflip */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-white">Back End Developer</h3>
                <p className="text-emerald-400 font-medium">Moflip</p>
              </div>
              <span className="text-gray-400">Jan 2022 - Mar 2022 (3 mos)</span>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-200 text-sm space-y-1">
              <li>Developed and implemented an NFT platform with Pinata and OpenSea integration.</li>
              <li>Created an admin panel for NFT/token/user management.</li>
              <li>Integrated with Tiket.com for ticket sales and event management via NFTs.</li>
              <li>Ensured high-quality code through reviews and testing.</li>
            </ul>
            <div className="mt-2 text-gray-300 text-xs">
              <span className="font-semibold">Impact:</span> Deployed NFT platform, streamlined admin tasks, and enabled seamless NFT ticketing.<br/>
              <span className="font-semibold">Tools:</span> Golang, Node.js, React.js
            </div>
          </div>

          {/* Intiflex Hydratic Hosepital */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-white">Back End Developer</h3>
                <p className="text-emerald-400 font-medium">PT Intiflex Hydratic Hosepital</p>
              </div>
              <span className="text-gray-400">May 2020 - Dec 2020 (8 mos)</span>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-200 text-sm space-y-1">
              <li>Developed an admin dashboard for factory operations using Laravel backend and React.js frontend.</li>
              <li>Designed backend APIs and database architecture for seamless data management.</li>
              <li>Created intuitive frontend interfaces for factory managers.</li>
              <li>Implemented secure authentication and authorization.</li>
            </ul>
            <div className="mt-2 text-gray-300 text-xs">
              <span className="font-semibold">Impact:</span> Deployed a robust admin dashboard, improving operational efficiency and resource allocation.<br/>
              <span className="font-semibold">Tools:</span> Laravel, React.js
            </div>
          </div>

          {/* Deeting LLC */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
                <p className="text-emerald-400 font-medium">Deeting LLC</p>
              </div>
              <span className="text-gray-400">Jan 2020 - May 2020 (5 mos)</span>
            </div>
            <ul className="list-disc pl-5 mt-2 text-gray-200 text-sm space-y-1">
              <li>Developed backend for a meeting application using Node.js.</li>
              <li>Integrated React Native frontend and Jitsi for video conferencing.</li>
              <li>Implemented secure authentication and real-time updates.</li>
              <li>Defined API contracts and ensured efficient data transfer.</li>
            </ul>
            <div className="mt-2 text-gray-300 text-xs">
              <span className="font-semibold">Impact:</span> Delivered a stable, scalable meeting app with integrated video conferencing and secure user management.<br/>
              <span className="font-semibold">Tools:</span> Node.js, React Native, Jitsi
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-12 px-8 max-w-4xl mx-auto">
        <span className="text-white text-3xl font-bold">Education</span>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">Universitas Muslim Indonesia Makassar</h3>
              <p className="text-emerald-400 font-medium">Bachelor of Engineering - BE</p>
            </div>
            <span className="text-gray-400">Jan 2017 - Jul 2022</span>
          </div>
        </div>
      </div>

      {/* Licenses & Certifications Section */}
      <div className="mt-12 px-8 max-w-4xl mx-auto">
        <span className="text-white text-3xl font-bold">Licenses & Certifications</span>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mt-6 space-y-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h4 className="text-lg font-semibold text-white">Certified Secured Computer v2</h4>
              <p className="text-gray-300">EC-Council</p>
            </div>
            <span className="text-gray-400">ID: 542532</span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h4 className="text-lg font-semibold text-white">Google Cloud Certified Associate Cloud Engineer (completion)</h4>
              <p className="text-gray-300">Whizlabs</p>
            </div>
            <span className="text-gray-400">ID: 651D1A11B5EB5</span>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12 px-8 max-w-4xl mx-auto">
        <span className="text-white text-3xl font-bold">Skills</span>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg mt-6">
          <div className="flex flex-wrap gap-2">
            {[
              'Security', 'Information Security', 'Network Security', 'WebSocket', 'Pubsub',
              'Google Cloud Platform (GCP)', 'Unit Testing', 'Integration Testing',
              'Tooling Design', 'CockroachDB'
            ].map(skill => (
              <span key={skill} className="bg-emerald-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
