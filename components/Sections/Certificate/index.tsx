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
            title="Programmer Of The Year"
            src="/certificate/programmer_of_the_year.jpg"
            description="Japanese social media platform for travelers to show off their
          adventure to the world. I was incharge of Front end integration, made using React, Antd and Styled Components."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <CertificateCard
            idx={2}
            title="Outsoar Completion"
            description="RSV is a smart contract (ERC20) powered reservation system. I am incharge of backend using NET.Core 2.1."
            src="/certificate/Outsoar_cert.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <CertificateCard
            idx={3}
            title="Web Design Champion"
            description="A quizz - reviewer LMS, I made as a freelancer. Backend were powered by PHPSlim and VueJS for Front end."
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
