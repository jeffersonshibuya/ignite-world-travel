import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { api } from "../../services/api";

interface ContinentProps {
  info: {
    name: string;
    description: string;
    countries: number,
    languages: number,
    cities100: number,
    picture: string;
  };
}

export default function Continent({info}: ContinentProps) {
  return (
    <Flex direction="column">
      <Box w="100%" height="500px" 
        backgroundImage={`url(${info.picture})`}
        backgroundSize="100% 100%"
        objectFit="cover"
        filter="brightness(0.9)"
      >
        
        {/* <Text 
          as="p" 
          color="white"
          fontSize="4xl"
          fontWeight={700}
          position="absolute"
          bottom="8"
          left="28"
          mb="4"
          zIndex="3"
        >
          {info.name}
        </Text> */}
      </Box>

      <Flex 
        width={1160} 
        mx="auto"
        direction="column"
        mb="8"
      >
        <Heading color="white" mt={-24} zIndex="10">{info.name}</Heading>
        <Flex>
          <SimpleGrid mt="28" flex="1" gap="28" minChildWidth="320px">
            <Box>
              <Text align="justify" fontSize="18" fontWeight={400}>{info.description}</Text>
            </Box>
            <Flex w={490} align="center" justify="space-between">
              <Box align="center">
                <Text fontSize="38" fontWeight={600} color="#FFBA08">{info.countries}</Text>
                <Text fontWeight={600}>países</Text>
              </Box>
              <Box align="center">
                <Text fontSize="38" fontWeight={600} color="#FFBA08">{info.languages}</Text>
                <Text fontWeight={600}>línguas</Text>
              </Box>
              <Box align="center">
                <Text fontSize="38" fontWeight={600} color="#FFBA08">{info.cities100}</Text>
                <Text fontWeight={600}>cidades +100</Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Flex>

        <Heading mt="20"> Cidades +100</Heading>
        <SimpleGrid mt="20" mb="20" flex="1" gap="4" minChildWidth="256px">
          <Flex direction="column" border="1px solid #FFBA08" borderRadius="6" boxShadow="md">
            <Image src="/images/londres.png" objectFit="cover" />
            <Flex justify="space-around" align="center">
              <Box py="4">
                <Text fontWeight={600} color="#47585B">Londres</Text>
                <Text mt="2" fontWeight="normal" color="#999">Reino Unido</Text>
              </Box>

              <Image src="/images/flag-londres.png" width="30px" height="30px"/>
            </Flex>
          </Flex>
          <Flex direction="column" border="1px solid #FFBA08" borderRadius="6" boxShadow="md">
            <Image src="/images/paris.png" objectFit="cover" />
            <Flex justify="space-around" align="center">
              <Box py="4">
                <Text fontWeight={600} color="#47585B">Paris</Text>
                <Text mt="2" fontWeight="normal" color="#999">França</Text>
              </Box>

              <Image src="/images/flag-paris.png" width="30px" height="30px"/>
            </Flex>
          </Flex>
          <Flex direction="column" border="1px solid #FFBA08" borderRadius="6" boxShadow="md">
            <Image src="/images/roma.png" objectFit="cover" />
            <Flex justify="space-around" align="center">
              <Box py="4">
                <Text fontWeight={600} color="#47585B">Roma</Text>
                <Text mt="2" fontWeight="normal" color="#999">Itália</Text>
              </Box>

              <Image src="/images/flag-roma.png" width="30px" height="30px"/>
            </Flex>
          </Flex>
          <Flex direction="column" border="1px solid #FFBA08" borderRadius="6" boxShadow="md">
            <Image src="/images/praga.png" objectFit="cover" />
            <Flex justify="space-around" align="center">
              <Box py="4">
                <Text fontWeight={600} color="#47585B">Praga</Text>
                <Text mt="2" fontWeight="normal" color="#999">Republica Tcheca</Text>
              </Box>

              <Image src="/images/flag-praga.png" width="30px" height="30px"/>
            </Flex>
          </Flex>
          <Flex direction="column" border="1px solid #FFBA08" borderRadius="6" boxShadow="md">
            <Image src="/images/amsterda.png" objectFit="cover" />
            <Flex justify="space-around" align="center">
              <Box py="4">
                <Text fontWeight={600} color="#47585B">Amsterdã</Text>
                <Text mt="2" fontWeight="normal" color="#999">Holanda</Text>
              </Box>

              <Image src="/images/flag-amsterda.png" width="30px" height="30px"/>
            </Flex>
          </Flex>

          <Flex direction="column" border="1px solid #FFBA08" borderRadius="6" boxShadow="md">
            <Image src="/images/washington.png" objectFit="cover" />
            <Flex justify="space-around" align="center">
              <Box py="4">
                <Text fontWeight={600} color="#47585B">Washington DC</Text>
                <Text mt="2" fontWeight="normal" color="#999">Estados Unidos</Text>
              </Box>

              <Image src="/images/flag-usa.png" width="30px" height="30px"/>
            </Flex>
          </Flex>
          <Flex direction="column" border="1px solid #FFBA08" borderRadius="6" boxShadow="md">
            <Image src="/images/vancouver.png" objectFit="cover" />
            <Flex justify="space-around" align="center">
              <Box py="4">
                <Text fontWeight={600} color="#47585B">Vancouver</Text>
                <Text mt="2" fontWeight="normal" color="#999">Canadá</Text>
              </Box>

              <Image src="/images/flag-canada.png" width="30px" height="30px"/>
            </Flex>
          </Flex>
          
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async({params}) => {
  const {slug} = params;

  const response = await api.get(`?slug=${slug}`);

  return {
    props: {
      info: response.data[0]
    }
  }
}