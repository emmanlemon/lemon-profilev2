import { Link } from '@chakra-ui/react'

export type Company = 'IE' | 'Exlink' | 'Outsoar'

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
  IE: {
    name: 'IE',
    longName: 'IE Soft Technology',
    // subDetail: 'Consulthing Phils. Delivery Center',
    url: '',
    position: 'Backend Developer',
    duration: 'Feb 2021 - Present',
    logo: {
      light: '/worked_at_logos/ie_soft/ie_logo.png',
      dark: '/worked_at_logos/ie_soft/ie_logo.png',
    },
    roles: [
      <>
       Contributed to the design and development of a comprehensive .NET payment integration project for a client
       That covered credit card payments and subscription management.
       Introduced Stripe as a new payment provider within the system architecture.
       Participated in triaging, fixing and adding new functionalitiesto multiple Azure powered APIs of the same client.
      </>,
      <>
        Worked as a Sitecore Backend on new{' '}
        <Link
          aria-label="Deloitte Digital AU"
          href="https://www.deloittedigital.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Deloitte Digital AU Site.
        </Link>
      </>,
      <>
        Udergone training for .NET Sitecore 10,
        Sitecore SXA and different topologies it provides.{' '} and Passed {' '}
        <Link
          aria-label="Sitecore 10 .NET Developer Certification"
          href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Sitecore 10 .NET Developer Certification.
        </Link>
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
        Revamping the legacy Partner Portal into a new{' '}
        <Link
          aria-label="Westfield Marketing Hub"
          href="https://partner.scentregroup.com/"
          target="_blank"
          rel="noreferrer"
        >
          Westfield Marketing Hub
        </Link>{' '}
        using NextJS and Typescript. Restructuring the old express app into a
        newer architectural design approach.
      </>,
      <>
        Created multiple Contentful and Bynder extensions to improve BX process
        better.
      </>,
      <>
        Worked on maintaining{' '}
        <Link
          variant="primaryLink"
          href="https://www.westfield.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Westfield
        </Link>{' '}
        main site and Graphql apis written in NodeJS.
      </>,
      <>
        Migrating of existing marketing email related tools and batch jobs from
        Responsys into new platform called Braze.
      </>,
      <>
        Hired at early 2020, first major task was helping with selecting a new
        marketing vendor that can scale and also enable us to have
        personalisation as well, selecting{' '}
        <Link
          aria-label="Braze"
          href="https://www.braze.com/"
          target="_blank"
          rel="noreferrer"
        >
          Braze
        </Link>{' '}
        as a result.
      </>,
    ],
  },
  Outsoar: {
    name: 'Outsoar PH',
    longName: 'Outsoar Philippines',
    // subDetail: 'formerly IVP Global Inc.',
    url: 'https://outsoar.ph/',
    position: 'Junior Web Developer',
    duration: 'April 2023 - Feb 2024',
    logo: {
      light: '/worked_at_logos/outsoar/outsoar_logo.png',
      dark: '/worked_at_logos/outsoar/outsoar_logo.png',
    },
    roles: [
      <>
        Developed a Twitter Raffle Campaign / Contest Bot called Camps with
        statistics similar to Facebook Ads.
      </>,
      <>
        In 2019 got promoted as Senior Software Engineer and worked with Cryto
        Exchange, Smart Contracts and other APIs using several techs such as
        NodeJS, .NET Core and React.
      </>,
      <>
        Create highly scalable Japanese e-commerce sites. Most notable clients
        were TV Tokyo, Layla EC using .NET.
      </>,
      <>
        Hired at 2016, Undergone Japanese language training first. Shortly
        after, worked with in-house .NET MVC Framework called ERS.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.IE,
  Experiences.Exlink,
  Experiences.Outsoar,
]
