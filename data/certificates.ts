export type Certificate = {
  title: string
  issuer: string
  date: string
  description: string
  image: string
}

export const certificates: Certificate[] = [
  {
    title: 'MVP Certificate',
    issuer: 'South AsiaLink Finance Corporation',
    date: '2024',
    description:
      'Recognised as MVP within my first month at SAFC for dedication and contributions to the team.',
    image: '/certificate/Safc_logo.jpg',
  },
  {
    title: 'Programmer of the Year',
    issuer: 'Campus award',
    date: 'August 16',
    description:
      'Awarded Programmer of the Year on campus, recognising relentless dedication and exceptional programming skills.',
    image: '/certificate/programmer_of_the_year.jpg',
  },
  {
    title: 'OJT Completion',
    issuer: 'Outsoar Philippines',
    date: 'June 9, 2023',
    description:
      'Completed on-the-job training at Outsoar and was promptly hired as a full-time developer.',
    image: '/certificate/Outsoar_cert.png',
  },
  {
    title: 'Web Design Champion',
    issuer: 'IT Week',
    date: 'June 1-2',
    description:
      'Won the Web Design Champion title during IT Week for building a standout website.',
    image: '/certificate/IT_week.jpg',
  },
]
