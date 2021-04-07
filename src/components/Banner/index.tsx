import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      h="335px"
      w="100%"
      backgroundImage="url('/images/background.svg')"
      align="center"
    >
      <Flex maxWidth={1160} h="100%" 
        justify="space-between"
        align="center"
      >
        
          <Flex direction="column">
            <Text 
              color="white"
              fontSize="3xl"
              w="426px"
              fontWeight={500}
              textAlign="left"
            > 
              5 Continentes,
              infinitas possibilidades.
            </Text>
            <Text 
              color="white"
              mt="5"
              w="524px"
              fontSize="lg"
              fontWeight={100} 
              textAlign="left"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Flex>

          <Image src="/images/Airplane.svg" alt="airplane" mt={24}/>
        </Flex>
    </Box>
  )
}