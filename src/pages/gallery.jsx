import React, { useEffect, useState } from 'react';
import { Container, Heading, Box, SimpleGrid, Image, useColorModeValue, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Flex, IconButton, Skeleton, Center, Spinner, useBreakpointValue } from '@chakra-ui/react';
import Article from '../components/layout/article';
import { Section } from '../components/section';
import Paragraph from '../components/paragraph';
import Masonry from 'react-masonry-css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Import both original and thumbnail versions
const originalImages = import.meta.glob('/src/imgs/*.(png|PNG|JPG|jpg|jpeg|webp)', {
  eager: true,
  as: 'url'
});

const thumbnailImages = import.meta.glob('/src/imgs/thumbnails/*.(png|PNG|JPG|jpg|jpeg|webp)', {
  eager: true,
  as: 'url'
});

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalImageLoading, setModalImageLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const loadedImages = Object.entries(originalImages).map(([path, originalUrl], index) => {
      const filename = path.split('/').pop();
      const thumbnailPath = Object.keys(thumbnailImages).find(tPath => tPath.includes(filename));
      const thumbnailUrl = thumbnailPath ? thumbnailImages[thumbnailPath] : originalUrl;

      return {
        id: index + 1,
        src: originalUrl,
        thumbnailSrc: thumbnailUrl,
        alt: `Gallery image ${index + 1}`,
        originalPath: path
      };
    });

    const shuffledImages = [...loadedImages];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
    }

    setImages(shuffledImages);
    setLoading(false)
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalImageLoading(true);
    onOpen();
  };

  const handlePrevImage = () => {
    setModalImageLoading(true);
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setSelectedImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    setModalImageLoading(true);
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
  };

  const handleModalImageLoad = () => {
    setModalImageLoading(false);
  };

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  const containerWidth = useBreakpointValue({
    base: '90%',     // 0-480px
    sm: '70%',      // 480px+
    md: '70%',      // 768px+
    lg: '60%',     // 1024px+
    xl: '40%',     // 1280px+
    '2xl': '40%'   // 1536px+
  });

  return (
    <Article title="Gallery">
      <Container maxW={containerWidth} pt={20}>
        <Section delay={0.1}>
          <Heading as="h3" fontSize={20} mb={4}>
            Photography
          </Heading>
        </Section>
        <Section delay={0.2}>
          I photograph in my free time and while travelling. This page showcases a few of my favourite shots.
          <Container pl={3} pt={3} margin={0}>
            📸 Fujifilm XT-30II - Fujinon XF 35mm f/1.4 R Lens
          </Container>
        </Section>

        <Box
          className="masonry-grid"
          css={{
            '.masonry-grid': {
              display: 'flex',
              marginLeft: '-16px',
              width: 'auto'
            },
            '.masonry-grid_column': {
              paddingLeft: '16px',
              backgroundClip: 'padding-box'
            },
            '.masonry-grid_column > div': {
              marginBottom: '16px'
            }
          }}
        >
          <Masonry
            breakpointCols={breakpointColumns}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {images.map((image) => (
              <Box
                key={image.id}
                borderRadius="lg"
                overflow="hidden"
                mb={4}
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
                cursor="pointer"
                onClick={() => handleImageClick(image)}
              >
                <Skeleton isLoaded={!loading} fadeDuration={1}>
                  <Image
                    src={image.thumbnailSrc}
                    alt={image.alt}
                    w="100%"
                    h="auto"
                    transition="transform 0.3s ease"
                    _hover={{
                      transform: 'scale(1.02)'
                    }}
                    loading="lazy"
                  />
                </Skeleton>
              </Box>
            ))}
          </Masonry>
        </Box>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="6xl"
          isCentered
        >
          <ModalOverlay
            bg="blackAlpha.800"
            backdropFilter="blur(10px)"
          />
          <ModalContent
            bg="transparent"
            boxShadow="none"
            maxW="90vw"
            maxH="90vh"
          >
            
            <ModalCloseButton
              color="white"
              size="lg"
              top={2}
              right={2}
              zIndex={2}
            />
            <ModalBody p={0}>
              <Flex
                justify="center"
                align="center"
                position="relative"
                h="100%"
              >
                <IconButton
                  aria-label="Previous image"
                  icon={<ChevronLeftIcon />}
                  onClick={handlePrevImage}
                  position="absolute"
                  left={4}
                  size="lg"
                  variant="ghost"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  zIndex={2}
              />
                <Box
                  maxH="85vh"
                  maxW="85vw"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {modalImageLoading && (
                    <Center
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="transparent"
                      zIndex={1}
                    >
                      <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='teal.500'
                        size='xl'
                      />
                    </Center>
                  )}
                  <Image
                    src={selectedImage?.src}
                    alt={selectedImage?.alt}
                    objectFit="contain"
                    maxH="90vh"
                    maxW="75vw"
                    opacity={modalImageLoading ? 0 : 1}
                    transition="opacity 0.3s ease"
                    onLoad={handleModalImageLoad}
                  />
                </Box>
                <IconButton
                  aria-label="Next image"
                  icon={<ChevronRightIcon />}
                  onClick={handleNextImage}
                  position="absolute"
                  right={4}
                  size="lg"
                  variant="ghost"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  zIndex={2}
                />
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Article>
  );
};

export default Gallery;