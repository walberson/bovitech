import { Text, Heading, Stack, Image, Box } from '@chakra-ui/react'

export function Create() {
    return (
        <Stack
            justify="center"
            align="center"
            padding="10"
            direction="column"
            background="#00856F"
        >
            {/* <Box boxSize="160" mb="-8">
                <Image alt="Gaia Logo" src="gaia.png" />
            </Box> */}
            <Heading color="white">Quem desenvolveu o BoviTech?</Heading>
            <Text textAlign="justify" color="white" fontSize="md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                praesentium laboriosam expedita soluta ab, voluptates sed nihil?
                Tenetur quaerat, quod distinctio reiciendis minus ipsum
                veritatis ratione minima illum ad! Fugit? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Maiores rem quasi enim
                corrupti eaque nostrum illum quas. Libero labore, delectus
                corporis, unde adipisci suscipit officiis fuga odit non ex quae?
            </Text>
        </Stack>
    )
}
