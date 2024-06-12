'use client'

import { StickyScroll } from "../ui/sticky-scroll";

export const Languages = () => {
  const content = [
    {
      title: "PT INDODAX NASIONAL INDONESIA",
      description: (
        <>
          <span>
            Backend Software Engineer
          </span>
          <p className="text-sm">Jul 2022 - Present</p>
          <p className="text-sm">Hybird</p>
          <p className="text-sm mb-2">Developed and implemented a staking application, leveraging microservice architecture to ensure
            scalability, flexibility, and high performance.
            Collaborated closely with a team to design and architect the application backend, ensuring seamless
            integration among microservices.</p>


          <p className="text-sm mb-2">Worked on enhancing high traffic transaction processing within the application, optimizing
            performance and reliability.
            Developed and maintained RESTful APIs and microservices to facilitate seamless communication
            between different components of the application.</p>

          <p className="text-sm mb-2">Designed and implemented database schemas, ensuring efficient storage and retrieval of staking and
            transaction data.
            Collaborated with frontend engineers to define and integrate APIs, enabling smooth interaction between
            the frontend and backend systems.
            Conducted comprehensive code reviews, ensuring adherence to coding standards, best practices, and
            security protocols.
            Performed rigorous testing and debugging, diagnosing and resolving issues to ensure a smooth user
            experience.</p>

        </>
      ),
    },
    {
      title: "Moflip",
      description: (
        <>
          <span>Backend Software Engineer</span>
          <p className="text-sm">Jan 2022 - Mar 2022 </p>
          <p className="text-sm">Remote</p>
          <p className="text-sm mb-2">Developed and implemented a staking application, leveraging microservice architecture to ensure
            scalability, flexibility, and high performance.
            Worked on enhancing high traffic transaction processing within the application, optimizing
            performance and reliability.
            Developed and maintained RESTful APIs and microservices to facilitate seamless communication
            between different components of the application.</p>

          <p className="text-sm mb-2">Designed and implemented database schemas, ensuring efficient storage and retrieval of staking and
            transaction data.
            Conducted comprehensive code reviews, ensuring adherence to coding standards, best practices, and
            security protocols.
            Performed rigorous testing and debugging, diagnosing and resolving issues to ensure a smooth user
            experience.</p>

          - Created an admin panel to manage the NFT platform, enabling efficient management of tokens, users,
          and transactions.
          - Integrated the application with Tiket.com, integrating features such as ticket sales, event management,
          and seamless ticket purchases through the NFT platform.
          - Collaborated closely with cross-functional teams to gather requirements, create technical
          specifications, and ensure seamless integration of the NFT platform with the Pinata image storage
          service and OpenSea marketplace.
          - Conducted code reviews, performed testing, and implemented best practices to ensure high-quality
          code and adherence to coding standards.

          <ul>
            <li>
              - Developed and implemented an NFT (Non-Fungible Token) platform, leveraging Pinata for image
              deployment and uploading to OpenSea, a leading NFT marketplace.
            </li>

            <li>
              - Integrated the application with Tiket.com, integrating features such as ticket sales, event management,
              and seamless ticket purchases through the NFT platform.
            </li>

            <li>
              - Collaborated closely with cross-functional teams to gather requirements, create technical
              specifications, and ensure seamless integration of the NFT platform with the Pinata image storage
              service and OpenSea marketplace.
            </li>
            <li>
              - Conducted code reviews, performed testing, and implemented best practices to ensure high-quality
              code and adherence to coding standards.
            </li>
          </ul>

        </>
      ),
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        </div>
      ),
    },
    {
      title: "PT Intiflex Hydratic Hosepital",
      description: (
        <>
          <span>Backend Software Engineer</span>
          <p className="text-sm">May 2020 - Dec 2020</p>
          <p className="text-sm">Remote</p>

          <p className="text-sm mb-2">
            Developed and implemented an admin dashboard for managing operations at the factory, utilizing
            Laravel as a backend framework and React.js as a frontend library.
          </p>

          <p className="text-sm mb-2">
            Designed and developed the backend APIs and database architecture, enabling seamless data
            management for factory management operations.
            Created intuitive and user-friendly frontend interfaces using React.js, providing factory managers with
            efficient tools to oversee production, inventory, and workforce management.
          </p>

          <p className="text-sm mb-2">
            Implemented secure authentication and authorization mechanisms, ensuring secure access and data
            privacy for factory managers.
          </p>

          <p className="text-sm mb-2">
            Collaborated closely with the team to gather requirements, plan features, and ensure seamless
            integration between the Laravel backend and React.js frontend.
          </p>

        </>
      ),
    },
    {
      title: "Deeting LLC",
      description: (
        <>
          <span>Backend Software Engineer</span>
          <p className="text-sm">Feb 2019 - May 2020</p>
          <p className="text-sm">Remote</p>
          <p className="text-sm mb-2">
            - Developed the backend of a meeting application using Node.js, designing and implementing robust
            APIs and database structures to support meeting functionality and data management.
            - Collaborated closely with the frontend team to integrate the React Native framework, ensuring
            seamless communication and real-time updates between the backend and mobile application.
            - Integrated Jitsi, a video conferencing platform, to provide reliable and secure virtual meetings within
            the application, leveraging Jitsi APIs and SDKs.
            - Implemented user authentication and authorization mechanisms, ensuring secure access and privacy
            protection for meeting participants.
            - Worked closely with the frontend team to define API contracts, establish data exchange protocols, and
            ensure efficient data transfer between the backend and frontend components.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="mt-8 xl:mt-12 gap-4 mx-auto px-8 ">
      <div id="card-sections" className="mb-12">
        <div className="text-3xl font-bold mb-12">
          Working Expirence
        </div>
        <StickyScroll content={content} />
      </div>
    </div>
  )
}

export default Languages
