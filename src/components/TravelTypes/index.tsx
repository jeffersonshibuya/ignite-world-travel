import { Box, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Box w="100%">
      <Flex maxWidth={1160} justify="space-between">
         <Flex direction="column" align="center">
          <Image src="/images/types/cocktail.svg" alt="building"/>
          <Text
            mt="3"
            fontWeight={600}
            fontSize="lg"
          > 
            vida noturna
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/images/types/surf.svg" alt="building"/>
          <Text
            mt="3"
            fontWeight={600}
            fontSize="lg"
          > 
            praia
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/images/types/building.svg" alt="building"/>
          <Text
            mt="3"
            fontWeight={600}
            fontSize="lg"
          > 
            moderno
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/images/types/museum.svg" alt="building"/>
          <Text
            mt="3"
            fontWeight={600}
            fontSize="lg"
          > 
            clássico
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="/images/types/earth.svg" alt="building"/>
          <Text
            mt="3"
            fontWeight={600}
            fontSize="lg"
          > 
            e mais...
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}