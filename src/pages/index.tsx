import { useRouter } from 'next/router'
import { Flex, Box, Center, Text, Image, Button } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { StarIcon } from '@chakra-ui/icons'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/core';
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay])

export default function Home() {
  const router = useRouter();

  return (
    <Flex direction="column">
      <Banner />
      <Box 
        maxWidth={1160}
        w="100%"
        my="20"
        mx="auto"
      >
        <TravelTypes />

        <Box w="100%" py="20" align="center">
          <Center w="90px" borderBottom="2px solid #47585B">
          </Center>
        </Box>

        <Box w="100%" align="center" >
          <Text
            fontSize="32"
            fontWeight={500}
            letterSpacing="wide"
            lineHeight="10"
          >
            Vamos nessa? <br />
            Então escolha seu continente
          </Text>
        </Box>
      </Box>

      <Box
        w="100%"
        maxWidth={1260}
        mx="auto"
        my="8"
      >
        <Swiper
          effect="fade"
          // autoplay
          loop
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ 
            clickable: true, 
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          navigation={{ lockClass: 'swiper-button-lock' }}
        >
          
          <SwiperSlide>
            <Image src="/images/europa.jpg" 
              position="absolute"
              objectFit="cover"
              filter="brightness(0.5)"
            />
            <Box w="100%" h="450px" align="center" justify="center">
              <Flex 
                w="100%" 
                h="100%" 
                align="center" 
                justify="center" 
                direction="column"
              >
                
                <Text 
                  as="p" 
                  color="white"
                  fontSize="4xl"
                  fontWeight={700}
                  mb="4"
                  zIndex="3"
                >
                  Europa
                </Text>
                <Text 
                  as="p" 
                  color="white"
                  fontSize="md"
                  fontWeight={700}
                  zIndex="3"
                >
                  O continente mais antigo. <br />
                  <Text mt="4">
                    <Button 
                      variant="outline"
                      colorScheme="yellow"
                      // filter= 'brightness(0.8)'
                      leftIcon={<StarIcon />}
                      _hover={{
                        // filter: 'brightness(1)'
                        bg: 'yellow.500',
                        color: 'white'
                      }}
                      color="#FFBA08"
                      size="lg"
                      onClick={() => router.push('/continent/europe')}
                    >
                      saiba mais...
                    </Button>
                  </Text>
                </Text>
                
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
          <Image src="/images/north-america.jpg" 
              position="absolute"
              objectFit="cover"
              filter="brightness(0.5)"
              height="450px"
              width="100%"
            />
          <Box w="100%" h="450px" align="center" justify="center"
            >
              <Flex 
                w="100%" 
                h="100%" 
                align="center" 
                justify="center" 
                direction="column"
              >
                <Text 
                  as="p" 
                  color="white"
                  fontSize="4xl"
                  fontWeight={700}
                  mb="4"
                  zIndex="3"
                >
                  América de norte
                </Text>
                <Text 
                  as="p" 
                  color="white"
                  fontSize="md"
                  fontWeight={700}
                  zIndex="3"
                >
                  O continente mais antigo.
                  <Text mt="4">
                    <Button 
                      variant="outline"
                      colorScheme="yellow"
                      // filter= 'brightness(0.8)'
                      leftIcon={<StarIcon />}
                      _hover={{
                        // filter: 'brightness(1)'
                        bg: 'yellow.500',
                        color: 'white'
                      }}
                      color="#FFBA08"
                      size="lg"
                      onClick={() => router.push('/continent/north-america')}
                    >
                      saiba mais...
                    </Button>
                  </Text>
                </Text>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/south-america.jpg" 
              position="absolute"
              objectFit="cover"
              filter="brightness(0.5)"
              height="450px"
              width="100%"
            />
            <Box w="100%" h="450px" align="center" justify="center">
              <Flex 
                w="100%" 
                h="100%" 
                align="center" 
                justify="center" 
                direction="column"
              >
                
                <Text 
                  as="p" 
                  color="white"
                  fontSize="4xl"
                  fontWeight={700}
                  mb="4"
                  zIndex="3"
                >
                  América do sul
                </Text>
                <Text 
                  as="p" 
                  color="white"
                  fontSize="md"
                  fontWeight={700}
                  zIndex="3"
                >
                  O continente mais antigo.
                  <Text mt="4">
                    <Button 
                      variant="outline"
                      colorScheme="yellow"
                      // filter= 'brightness(0.8)'
                      leftIcon={<StarIcon />}
                      _hover={{
                        // filter: 'brightness(1)'
                        bg: 'yellow.500',
                        color: 'white'
                      }}
                      color="#FFBA08"
                      size="lg"
                      onClick={() => router.push('/continent/south-america')}
                    >
                      saiba mais...
                    </Button>
                  </Text>
                </Text>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/asia.jpg" 
              position="absolute"
              objectFit="cover"
              filter="brightness(0.5)"
              height="450px"
              width="100%"
            />
            <Box w="100%" h="450px" align="center" justify="center">
              <Flex 
                w="100%" 
                h="100%" 
                align="center" 
                justify="center" 
                direction="column"
              >
                
                <Text 
                  as="p" 
                  color="white"
                  fontSize="4xl"
                  fontWeight={700}
                  mb="4"
                  zIndex="3"
                >
                  Asia
                </Text>
                <Text 
                  as="p" 
                  color="white"
                  fontSize="md"
                  fontWeight={700}
                  zIndex="3"
                >
                  O continente mais antigo.
                  <Text mt="4">
                    <Button 
                      variant="outline"
                      colorScheme="yellow"
                      // filter= 'brightness(0.8)'
                      leftIcon={<StarIcon />}
                      _hover={{
                        // filter: 'brightness(1)'
                        bg: 'yellow.500',
                        color: 'white'
                      }}
                      color="#FFBA08"
                      size="lg"
                      onClick={() => router.push('/continent/asia')}
                    >
                      saiba mais...
                    </Button>
                  </Text>
                </Text>
              </Flex>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/oceania.jpg" 
              position="absolute"
              objectFit="cover"
              filter="brightness(0.5)"
              height="450px"
              width="100%"
            />
            <Box w="100%" h="450px" align="center" justify="center">
              <Flex 
                w="100%" 
                h="100%" 
                align="center" 
                justify="center" 
                direction="column"
              >
                <Text 
                  as="p" 
                  color="white"
                  fontSize="4xl"
                  fontWeight={700}
                  mb="4"
                  zIndex="3"
                >
                  Oceania
                </Text>
                <Text 
                  as="p" 
                  color="white"
                  fontSize="md"
                  fontWeight={700}
                  zIndex="3"
                >
                  O continente mais antigo.
                  <Text mt="4">
                    
                    <Button 
                      variant="outline"
                      colorScheme="yellow"
                      // filter= 'brightness(0.8)'
                      leftIcon={<StarIcon />}
                      _hover={{
                        // filter: 'brightness(1)'
                        bg: 'yellow.500',
                        color: 'white'
                      }}
                      color="#FFBA08"
                      size="lg"
                      onClick={() => router.push('/continent/oceania')}
                    >
                      saiba mais...
                    </Button>
                  </Text>
                  </Text>
              </Flex>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  )
}
