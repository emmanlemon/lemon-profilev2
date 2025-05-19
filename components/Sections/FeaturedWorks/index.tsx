import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made at freelancing, company projects and
        even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Exlink Ticketing System"
            src="/works/exlink_work.png"
            description="Create an EXLINK Ticketing System using Svelte with TypeScript, designing interfaces, and ensuring efficient ticket management and timely notifications.            ."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://exlink.com/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Outsoar 3.0"
            description="Develop OUTSOAR 3.0 using Nuxt.js, designing intuitive user interfaces, enhancing user experience, and ensuring efficient navigation and functionality for seamless performance."
            src="/works/outsoar_3.0.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://outsoar.ph/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Outsoar Tracker"
            description="Develop OUTSOAR Tracker with Laravel, emphasizing efficient data handling, robust security measures, and seamless backend functionality for optimal performance and user experience."
            src="/works/outsoar_tracker.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://dev.agora-school.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="AllOne Project"
            description="As a backend developer, in All one I established an all-in-one tracking system to monitor employee work, utilizing Laravel to create APIs and integrate with the team seamlessly."
            src="/works/zozo.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://zozo-staging-fe.iegaming.io/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="SAFC CRM Project"
            description="Build the SAFC CRM on-premise solution using Express and React, focusing on a scalable architecture, real-time data handling, strong authentication measures, and a user-friendly interface."
            src="works/SAFC.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            // ctaUrl="https://dev.agora-school.com"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem> */}
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="SAFC Ticketing System"
            description="
I led the development of SAFC’s ticketing system, using React for the frontend and Laravel for the backend. Solely handling backend development, I ensured seamless API integration, secure data management, and scalable architecture, delivering an efficient and user-friendly solution."
            src="/works/ticketing-safc.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            // ctaUrl="https://zozo-staging-fe.iegaming.io/"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={6}
            title="SAFC Fair Market Value"
            description="
I led the development of SAFC’s ticketing system, using React for the frontend and Laravel for the backend. Solely handling backend development, I ensured seamless API integration, secure data management, and scalable architecture, delivering an efficient and user-friendly solution."
            src="/works/fmv_work.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            // ctaUrl="https://zozo-staging-fe.iegaming.io/"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={7}
            title="SAFC Employee Management"
            description="
I led the development of SAFC’s ticketing system, using React for the frontend and Laravel for the backend. Solely handling backend development, I ensured seamless API integration, secure data management, and scalable architecture, delivering an efficient and user-friendly solution."
            src="/works/hr_work.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            // ctaUrl="https://zozo-staging-fe.iegaming.io/"
            isMobile={isMobile}
          />
        </MotionGridItem>
         <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={8}
            title="SAFC Lead Management"
            description="
I led the development of SAFC’s ticketing system, using React for the frontend and Laravel for the backend. Solely handling backend development, I ensured seamless API integration, secure data management, and scalable architecture, delivering an efficient and user-friendly solution."
            src="/works/lead_work.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            // ctaUrl="https://zozo-staging-fe.iegaming.io/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
