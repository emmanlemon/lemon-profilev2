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
import CertificateCard from './CertificateCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const CerificateSection = () => {
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
        Certificate & Awards.
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
          <CertificateCard
            idx={1}
            title="SAFC MVP Certificate"
            src="/certificate/Safc_logo.jpg"
            description="On August 16, amidst my talented colleagues, I was proudly awarded the esteemed title of Programmer of the Year on our campus. This recognition celebrates my relentless dedication and exceptional skills in programming, marking a significant milestone in my journey."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <CertificateCard
            idx={1}
            title="Programmer Of The Year"
            src="/certificate/programmer_of_the_year.jpg"
            description="On August 16, amidst my talented colleagues, I was proudly awarded the esteemed title of Programmer of the Year on our campus. This recognition celebrates my relentless dedication and exceptional skills in programming, marking a significant milestone in my journey."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <CertificateCard
            idx={2}
            title="Outsoar Completion"
            description="During my OJT at Outsoar, I gained a solid programming foundation. Ending my OJT on June 9, Outsoar promptly hired me as their employee, a testament to the skills and experience I acquired during my training."
            src="/certificate/Outsoar_cert.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <CertificateCard
            idx={3}
            title="Web Design Champion"
            description="During IT Week on June 1-2, I won the Web Design Champion title. It shows I'm good at making cool websites, making me feel proud and happy about my work."
            src="/certificate/IT_week.jpg"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(CerificateSection)
