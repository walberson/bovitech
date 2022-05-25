import {
    Box,
    chakra,
    Container,
    Flex,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ReactNode } from 'react'
import Link from 'next/link'

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export function Footer() {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Stack align="left">
                    <Link href="/">
                        <Flex
                            as="button"
                            ml="2rem"
                            flex={{ base: 1 }}
                            justify={{ base: 'center', md: 'start' }}
                        >
                            <Text
                                fontSize="xl"
                                fontWeight="bold"
                                textAlign={useBreakpointValue({
                                    base: 'center',
                                    md: 'left',
                                })}
                                fontFamily={'heading'}
                                color={useColorModeValue('black', 'white')}
                            >
                                Bovi
                            </Text>
                            <Text
                                fontWeight="bold"
                                fontSize="xl"
                                textAlign={useBreakpointValue({
                                    base: 'center',
                                    md: 'left',
                                })}
                                fontFamily={'heading'}
                                color={useColorModeValue('pink.800', 'white')}
                            >
                                Tech
                            </Text>

                            <Flex
                                display={{ base: 'none', md: 'flex' }}
                                ml={10}
                            >
                                {/* <DesktopNav /> */}
                            </Flex>
                        </Flex>
                    </Link>
                    <Text>© 2021. All rights reserved</Text>
                </Stack>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'#'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}
