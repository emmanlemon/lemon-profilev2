'use client'

import { useState } from 'react'
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Flex,
  Box,
  Image,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function ProjectView({ ctaUrl = '', images = [] }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const renderArrows = () => (
    <>
      <IconButton
        icon={<FaArrowLeft />}
        aria-label="Previous"
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        color="white"
        onClick={handlePrevClick}
        zIndex={2}
        _hover={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
        transition="background-color 0.3s"
      />
      <IconButton
        icon={<FaArrowRight />}
        aria-label="Next"
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        color="white"
        onClick={handleNextClick}
        zIndex={2}
        _hover={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
        transition="background-color 0.3s"
      />
    </>
  )

  const renderSlideCounter = () => (
    <Box
      position="absolute"
      bottom="0px"
      left="50%"
      transform="translateX(-50%)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      fontWeight="bold"
      zIndex={2}
    >
      <Text>{currentSlide + 1}</Text>
      <Text mx={2}>/</Text>
      <Text>{images.length}</Text>
    </Box>
  )

  const renderCtaButton = () =>
    ctaUrl && (
      <Button
        variant="outline"
        fontWeight="light"
        size="sm"
        as="a"
        href={ctaUrl}
        target="_blank"
        rel="noreferrer"
        marginTop={4}
      >
        Click Here to View Projects
      </Button>
    )

  return (
    <>
      <Button
        variant="outline"
        fontWeight="light"
        size="sm"
        onClick={onOpen}
        my={{ base: 3, md: 0 }}
      >
        View Project
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Project Preview</DrawerHeader>

          <DrawerBody>
            <Flex direction="column" gap={4}>
              {images.length > 0 && (
                <Box
                  overflow="hidden"
                  borderRadius="md"
                  position="relative"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    key={currentSlide}
                    animation="fadeIn 0.5s ease-out"
                    position="relative"
                    w="100%"
                    h="450px"
                  >
                    <Heading size="md" textAlign="center" mb={2}>
                      {images[currentSlide]?.title}
                    </Heading>
                    <Image
                      src={images[currentSlide]?.src}
                      alt={images[currentSlide]?.alt}
                      w="100%"
                      h="400px"
                      objectFit="contain"
                      transition="opacity 0.5s ease-out"
                    />
                  </Box>

                  {renderArrows()}
                  {renderSlideCounter()}
                </Box>
              )}

              {renderCtaButton()}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
