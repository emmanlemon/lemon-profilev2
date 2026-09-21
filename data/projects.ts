export type Project = {
  id: string
  title: string
  company: string
  /** One or two sentences shown on the card. */
  description: string
  /** Longer text shown in the detail dialog. */
  details: string
  image: string
  tags: string[]
  role: string
  url?: string
  /** Featured projects get the larger card at the top of the grid. */
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'safc-lead-management',
    title: 'SAFC Lead Management',
    company: 'SAFC',
    description:
      'A CRM-style pipeline for capturing, assigning and following up on loan prospects across branches.',
    details:
      'Built as an internal platform for South AsiaLink Finance Corporation. Leads are captured from multiple channels, assigned to branch staff, and tracked through every stage until conversion. I designed the REST API and data model, and built the React frontend with dashboards that give supervisors a live view of the pipeline.',
    image: '/works/lead_work.png',
    tags: ['React', 'Express', 'Prisma', 'PostgreSQL'],
    role: 'Full stack lead',
    featured: true,
  },
  {
    id: 'safc-ticketing',
    title: 'SAFC Ticketing System',
    company: 'SAFC',
    description:
      'Company-wide helpdesk for logging, routing and resolving IT and operations requests.',
    details:
      'I led development of the ticketing system with React on the frontend and Laravel on the backend, handling the backend solely. The system covers ticket creation, categorisation, assignment, SLA tracking and notifications, with secure API integration and a scalable architecture that supports every branch.',
    image: '/works/ticketing-safc.png',
    tags: ['React', 'Laravel', 'MySQL', 'REST API'],
    role: 'Backend lead',
    featured: true,
  },
  {
    id: 'safc-bid-express',
    title: 'SAFC Bid Express',
    company: 'SAFC',
    description:
      'Public vehicle auction platform where buyers search, filter and bid on units. Search. Bid. Drive.',
    details:
      'Bid Express is the customer-facing auction site for South AsiaLink Finance Corporation. Buyers browse available vehicles, narrow them down by price range, year model, brand, body type, transmission and location, add units to a cart and place bids. Built with a React frontend on top of an Express and Prisma API, with a cart flow and auction listings managed from the back office.',
    image: '/works/bid-safc.png',
    tags: ['React', 'Express', 'Prisma', 'PostgreSQL'],
    role: 'Full stack',
  },
  {
    id: 'safc-partner-onboarding',
    title: 'SAFC Partner Onboarding',
    company: 'SAFC',
    description:
      'Self-service portal where loan advisors, dealers and enterprise partners register, refer clients and track commissions.',
    details:
      'A public onboarding and partner portal for South AsiaLink Finance Corporation. Prospective partners register as a Loan Advisor, Dealer or Enterprise Partner with no signup fees, then use their dashboard to submit client referrals, follow each application through the pipeline and monitor commissions. Supports email and Google sign-in, with a partner-facing frontend built in Next.js backed by a REST API.',
    image: '/works/safc-onboarding.png',
    tags: ['Next.js', 'React', 'TypeScript', 'REST API'],
    role: 'Full stack lead',
  },
  {
    id: 'safc-underwriting',
    title: 'SAFC Underwriting Platform',
    company: 'SAFC',
    description:
      'Unified workspace for reviewing loan applications, routing approvals and keeping a full audit trail.',
    details:
      'The underwriting platform brings the whole credit review process into one workspace: applications are ingested in a guided flow, documents are verified and tracked per requirement, each loan is routed to the right approver, and every action is timestamped in an audit trail. Includes Microsoft 365 single sign-on and a personalisable interface with light and dark themes, accent colours and font options. Built with React and TypeScript on an Express and Prisma API.',
    image: '/works/safc-underwriting.png',
    tags: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL'],
    role: 'Full stack lead',
  },
  {
    id: 'safc-fair-market-value',
    title: 'SAFC Fair Market Value',
    company: 'SAFC',
    description:
      'Appraisal tool for computing and recording the fair market value of loan collateral.',
    details:
      'Appraisers record property and vehicle details, apply valuation rules and generate consistent fair market value reports that feed into the loan origination process. Built with a React frontend and an Express + Prisma backend with an audit trail for every valuation.',
    image: '/works/fmv_work.png',
    tags: ['React', 'Express', 'Prisma'],
    role: 'Full stack',
  },
  {
    id: 'safc-employee-management',
    title: 'SAFC Employee Management',
    company: 'SAFC',
    description:
      'HR platform for employee records, org structure and day-to-day people operations.',
    details:
      'A central place for HR to manage employee profiles, departments, positions and documents. The React interface is backed by an Express API with role-based access so sensitive records are only visible to the right people.',
    image: '/works/hr_work.png',
    tags: ['React', 'Express', 'Prisma', 'PostgreSQL'],
    role: 'Full stack',
  },
  {
    id: 'exlink-ticketing',
    title: 'Exlink Ticketing System',
    company: 'Exlink',
    description:
      'Ticket management platform with real-time status updates and timely notifications.',
    details:
      'Built the Exlink ticketing system frontend with Svelte and TypeScript. I designed the interfaces for creating and managing tickets, kept the UI reactive and fast, and worked with the backend team to ensure efficient ticket handling and notifications.',
    image: '/works/exlink_work.png',
    tags: ['Svelte', 'TypeScript'],
    role: 'Frontend developer',
    url: 'https://exlink.com/',
  },
  {
    id: 'outsoar-3',
    title: 'Outsoar 3.0',
    company: 'Outsoar',
    description:
      'The third generation of the Outsoar platform with an intuitive, fast Nuxt.js interface.',
    details:
      'Developed Outsoar 3.0 using Nuxt.js, designing intuitive user interfaces, improving the overall user experience and ensuring efficient navigation and functionality for seamless performance.',
    image: '/works/outsoar_3.0.png',
    tags: ['Nuxt', 'Vue', 'Laravel'],
    role: 'Web developer',
    url: 'https://outsoar.ph/',
  },
  {
    id: 'outsoar-tracker',
    title: 'Outsoar Tracker',
    company: 'Outsoar',
    description:
      'Laravel-based tracking system focused on efficient data handling and robust security.',
    details:
      'Developed the Outsoar Tracker with Laravel, emphasising efficient data handling, strong security measures and reliable backend functionality for optimal performance and user experience.',
    image: '/works/outsoar_tracker.png',
    tags: ['Laravel', 'PHP', 'MySQL'],
    role: 'Backend developer',
    url: 'https://dev.agora-school.com',
  },
  {
    id: 'allone',
    title: 'AllOne Project',
    company: 'IE Soft',
    description:
      'All-in-one system for monitoring employee work, powered by Laravel APIs.',
    details:
      'As a backend developer I established an all-in-one tracking system to monitor employee work, using Laravel to build the APIs and integrating seamlessly with the frontend team.',
    image: '/works/zozo.png',
    tags: ['Laravel', 'REST API', 'MySQL'],
    role: 'Backend developer',
    url: 'https://zozo-staging-fe.iegaming.io/',
  },
]
