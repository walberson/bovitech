import { Button, Center, Text } from '@chakra-ui/react'
import { FaGoogle, FaTimes } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton() {
    const { data: session } = useSession()

    console.log(session)

    return session ? (
        <Button
            onClick={() => signOut()}
            leftIcon={<FaGoogle />}
            w={'full'}
            background="white"
            variant={'outline'}
            borderRadius="full"
        >
            <Text mr="1.5rem">{session.user.name}</Text>
            <FaTimes />
        </Button>
    ) : (
        <Button
            background="white"
            onClick={() => signIn('github')}
            w={'full'}
            variant={'outline'}
            borderRadius="full"
            leftIcon={<FcGoogle />}
        >
            <Center>
                <Text>Entrar com Google</Text>
            </Center>
        </Button>
    )
}
