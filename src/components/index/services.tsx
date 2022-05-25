import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = [
    {
        id: 1,
        title: 'Contagem de animais',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {
        id: 2,
        title: 'Predição de peso',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {
        id: 1,
        title: 'Imageamento estratégico',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
    {
        id: 2,
        title: 'Pecuária de precisão',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    },
]

export function GridListWithHeading() {
    return (
        <Box p={4} my="5rem">
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Text size="sm" fontWeight="bold" color="green.600">
                    Serviços
                </Text>
                <Heading color={'gray.600'} fontSize={'3xl'}>
                    Como podemos ajudá-lo?
                </Heading>
            </Stack>

            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600}>{feature.title}</Text>
                                <Text color={'gray.600'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
