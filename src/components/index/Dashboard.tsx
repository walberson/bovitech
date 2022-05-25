import {
    RiHealthBookLine,
    RiHeartPulseLine,
    RiInsertColumnLeft,
    RiMedicineBottleLine,
    RiSearchEyeLine,
} from 'react-icons/ri'
import Link from 'next/link'
import { Image, Heading, Stack, Text, Box } from '@chakra-ui/react'

interface userProps {
    name: string
}

export function Dashboard({ name }: userProps) {
    return (
        <Stack direction="column" m="2rem" spacing="2rem">
            <Heading fontWeight="md">Olá {name}</Heading>
            <Box boxSize="md" height="xsm">
                <Image
                    borderRadius="full"
                    src="https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2016/10/141016-c-newborn-calf-c-Kathy-Horniblow.jpg"
                />
            </Box>
            <Stack>
                <Heading size="md">Neonatology</Heading>
                <Text>Ferramentas para auxiliar nos cuidados de bezerros</Text>
            </Stack>
            <Stack direction="row">
                <Link href="/calfbook">
                    <Stack
                        w="150px"
                        h="150px"
                        justify="center"
                        align="center"
                        textAlign="center"
                        borderColor="gray.100"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p="6"
                        bg="white"
                        as="button"
                        _hover={{
                            transition: '0.5s',
                            backgroundColor: '#f5ebee',
                        }}
                    >
                        <RiHealthBookLine size="30px" color="#e8235e" />
                        <Text>CalfBook</Text>
                    </Stack>
                </Link>
                <Link href="/tools/apgar">
                    <Stack
                        w="150px"
                        h="150px"
                        justify="center"
                        align="center"
                        textAlign="center"
                        borderColor="gray.100"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p="6"
                        bg="white"
                        as="button"
                        _hover={{
                            transition: '0.5s',
                            backgroundColor: '#f5ebee',
                        }}
                    >
                        <RiHeartPulseLine size="30px" color="#e8235e" />
                        <Text>APGARScore</Text>
                    </Stack>
                </Link>
                <Link href="/tools/weight">
                    <Stack
                        w="150px"
                        h="150px"
                        justify="center"
                        align="center"
                        textAlign="center"
                        borderColor="gray.100"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p="6"
                        bg="white"
                        as="button"
                        _hover={{
                            transition: '0.5s',
                            backgroundColor: '#f5ebee',
                        }}
                    >
                        <RiMedicineBottleLine size="30px" color="#e8235e" />
                        <Text>WeightPredict</Text>
                    </Stack>
                </Link>
                <Link href="/tools/weight">
                    <Stack
                        w="150px"
                        h="150px"
                        justify="center"
                        align="center"
                        textAlign="center"
                        borderColor="gray.100"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p="6"
                        bg="white"
                        as="button"
                        _hover={{
                            transition: '0.5s',
                            backgroundColor: '#f5ebee',
                        }}
                    >
                        <RiSearchEyeLine size="30px" color="#e8235e" />
                        <Text>SpecialistDiag</Text>
                    </Stack>
                </Link>
                <Link href="/tools/weight">
                    <Stack
                        w="150px"
                        h="150px"
                        justify="center"
                        align="center"
                        textAlign="center"
                        borderColor="gray.100"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p="6"
                        bg="white"
                        as="button"
                        _hover={{
                            transition: '0.5s',
                            backgroundColor: '#f5ebee',
                        }}
                    >
                        <RiInsertColumnLeft size="30px" color="#e8235e" />
                        <Text>ColostrumQuality</Text>
                    </Stack>
                </Link>
            </Stack>
            <Stack>
                <Heading size="md">Neurology</Heading>
                <Text>
                    Ferramentas para auxiliar no diagnóstico de enfermidades do
                    sistema nervoso de bovinos
                </Text>
            </Stack>

            <Stack direction="row">
                <Stack
                    align="center"
                    maxW="160px"
                    textAlign="center"
                    borderColor="gray.100"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    p="6"
                    bg="white"
                >
                    <RiSearchEyeLine size="30px" color="#e8235e" />
                    <Text>SpecialistDiag</Text>
                </Stack>
            </Stack>
        </Stack>
    )
}
