export type Experience = {
  company: string
  companyShort: string
  url?: string
  position: string
  period: string
  /** Shown as a small note under the company, e.g. "Client project via Outsoar". */
  note?: string
  logo: string
  /** Short summary line shown above the bullet points. */
  summary: string
  highlights: string[]
  tags: string[]
  current?: boolean
}

/** Newest first. */
export const experiences: Experience[] = [
  {
    company: 'South AsiaLink Finance Corporation',
    companyShort: 'SAFC',
    position: 'Senior Full Stack Supervisor',
    period: 'Aug 2024 - Present',
    logo: '/worked_at_logos/safc/SAFC-logo.png',
    summary:
      "Leading the in-house development team behind SAFC's core lending platforms, from loan origination and underwriting to partner onboarding, vehicle auctions, ticketing, lead management and HR.",
    highlights: [
      'Lead the full stack team end to end: plan sprints, review code, set coding standards and mentor developers across React, Node.js and Laravel projects.',
      'Architected and delivered the Loan Origination System, designing RESTful APIs with Express.js and Prisma and building the React frontend that branch staff use every day.',
      'Shipped a suite of business platforms including the Underwriting Platform, Partner Onboarding portal, Bid Express vehicle auctions, ticketing, lead management, fair market value and employee management systems.',
      'Own the data layer: PostgreSQL schema design, Prisma migrations, validation and role-based access so sensitive financial records stay accurate and secure.',
      'Integrated Microsoft 365 and Google sign-in, approval routing and audit trails so every action on a loan is traceable.',
      'Monitor and tune API performance with Postman and query optimisation, and drive improvements from test results and user feedback.',
    ],
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Laravel',
    ],
    current: true,
  },
  {
    company: 'IE Soft Technology',
    companyShort: 'IE Soft',
    position: 'Backend Developer',
    period: 'Feb 2024 - Aug 2024',
    logo: '/worked_at_logos/ie_soft/ie_logo.png',
    summary:
      "Built and maintained Laravel backends for IE Soft's gaming and workforce-tracking products, including the AllOne employee monitoring system.",
    highlights: [
      'Designed RESTful APIs with Laravel routing, controllers and Eloquent ORM for user management and core product resources.',
      'Built the backend of the AllOne project, an all-in-one system for monitoring employee work, and integrated it with the frontend team.',
      "Hardened endpoints with validation, authentication and security best practices, and wrote unit and integration tests with Laravel's testing framework.",
      'Profiled and optimised slow queries and endpoints based on test results and user feedback.',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'REST API'],
  },
  {
    company: 'Outsoar Philippines',
    companyShort: 'Outsoar',
    url: 'https://outsoar.ph/',
    position: 'Junior Web Developer',
    period: 'Apr 2023 - Feb 2024',
    logo: '/worked_at_logos/outsoar/outsoar_logo.png',
    summary:
      "Grew from OJT trainee to full-time developer, shipping features across Outsoar's internal tools and client platforms.",
    highlights: [
      'Completed on-the-job training and was hired full time by the same team.',
      'Developed Outsoar 3.0 in Nuxt.js, redesigning the interface and navigation for a faster, more intuitive experience.',
      'Built the Outsoar Tracker on Laravel with a focus on efficient data handling and secure backend functionality.',
      'Integrated frontend components with backend services, tested and debugged applications, and fixed bugs to keep internal systems reliable.',
    ],
    tags: ['Laravel', 'Nuxt', 'Vue', 'MySQL'],
  },
  {
    company: 'Exlink',
    companyShort: 'Exlink',
    url: 'https://exlink.com/',
    position: 'Junior Web Developer',
    period: 'Apr 2023 - Nov 2023',
    note: 'Client project through Outsoar',
    logo: '/worked_at_logos/exlink/exlink_logo.png',
    summary:
      "Built the frontend of Exlink's ticketing system in Svelte and TypeScript as a client engagement through Outsoar.",
    highlights: [
      "Built responsive, dynamic interfaces for ticket creation, tracking and notifications using Svelte's component-based architecture.",
      'Worked closely with backend developers and designers to integrate APIs and meet design standards.',
      "Used Svelte's reactive features and optimised components to reduce load times and keep interactions smooth.",
    ],
    tags: ['Svelte', 'TypeScript', 'REST API'],
  },
]
