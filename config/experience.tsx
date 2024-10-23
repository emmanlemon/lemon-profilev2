import { Link } from '@chakra-ui/react'

export type Company = 'SAFC' | 'IE' | 'Exlink' | 'Outsoar'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  SAFC: {
    name: 'SAFC',
    longName: 'South AsiaLink Finance Corporation',
    url: '',
    position: 'Application Developer',
    duration: 'August 2024 - Present',
    logo: {
      light: '/worked_at_logos/safc/SAFC-logo.png',
      dark: '/worked_at_logos/safc/SAFC-logo.png',
    },
    roles: [
      <>
        Designed and implemented RESTful API endpoints using Express.js to handle CRUD operations on users and other resources within the Loan Origination System (LOS).
      </>,
      <>
        Built the frontend of the LOS using React, creating dynamic and interactive user interfaces that improve user experience.
      </>,
      <>
       Used Prisma ORM to handle complex database interactions, ensuring data integrity and security.
      </>,
      <>
       Monitored API performance using tools like Postman and optimized backend queries and frontend state management based on testing results and user feedback.
      </>,
    ],
  },
  IE: {
    name: 'IE',
    longName: 'IE Soft Technology',
    // subDetail: 'Consulthing Phils. Delivery Center',
    url: '',
    position: 'Backend Developer',
    duration: 'February 2024 - August 2024',
    logo: {
      light: '/worked_at_logos/ie_soft/ie_logo.png',
      dark: '/worked_at_logos/ie_soft/ie_logo.png',
    },
    roles: [
      <>
        Create RESTful API endpoints using Laravel’s routing and controllers for
        CRUD operations on users and resources.
      </>,
      <>
        Utilize Eloquent ORM to handle database interactions and ensure proper
        data validation and security measures are in place.
      </>,
      <>
        Develop unit and integration tests using Laravel’s testing framework to
        verify functionality, handle edge cases, and ensure performance.
      </>,
      <>
        Monitor API performance, fix any issues, and optimize the code and
        database queries based on testing results and user feedback.
      </>,
    ],
  },
   Outsoar: {
    name: 'Outsoar PH',
    longName: 'Outsoar Philippines',
    // subDetail: 'formerly IVP Global Inc.',
    url: 'https://outsoar.ph/',
    position: 'Junior Web Developer',
    duration: 'April 2023 - February 2024',
    logo: {
      light: '/worked_at_logos/outsoar/outsoar_logo.png',
      dark: '/worked_at_logos/outsoar/outsoar_logo.png',
    },
    roles: [
      <>
        Work on enhancing internal tools and systems, including developing new
        features and fixing bugs to improve overall efficiency.{' '}
      </>,
      <>
        Integrate front-end components with back-end services, ensuring seamless
        data flow and functionality across applications.{' '}
      </>,
      <>
        Perform testing and debugging of web applications to identify and
        resolve issues, ensuring a smooth and reliable user experience.{' '}
      </>,
      <>
        Stay updated with industry best practices and new technologies, applying
        them to improve project outcomes and personal development.
      </>,
    ],
  },
  Exlink: {
    name: 'Exlink',
    longName: 'Exlink',
    subDetail: 'Client Based From Outsoar',
    url: 'https://exlink.com/',
    position: 'Junior Web Developer',
    duration: 'April 2023 - Nov 2023',
    logo: {
      light: '/worked_at_logos/exlink/exlink_logo.png',
      dark: '/worked_at_logos/exlink/exlink_logo.png',
    },
    roles: [
      <>
        Build responsive and dynamic user interfaces for the Exlink ticketing
        system using Svelte's component-based architecture.
      </>,
      <>
        Work closely with backend developers and designers to integrate
        functionalities and ensure the frontend meets project requirements and
        design standards.
      </>,
    //    <Link
    //    aria-label="Sitecore 10 .NET Developer Certification"
    //    href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
    //    target="_blank"
    //    rel="noreferrer"
    //  >
    //    Sitecore 10 .NET Developer Certification.
    //  </Link>
      <>
        Implement Svelte’s reactive features and optimize components to enhance
        performance and reduce load times for a smooth user experience.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.SAFC,
  Experiences.IE,
  Experiences.Exlink,
  Experiences.Outsoar,
]
