import {
    Box,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Select,
    Stack,
    HStack,
    Button,
    useDisclosure,
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import Router from 'next/dist/client/router'

import { useState } from 'react'
import { RiArrowLeftCircleLine } from 'react-icons/ri'

export default function Weight() {
    const [thoracicPerimeter, setThoracicPerimeter] = useState(0)

    const [species, setSpecies] = useState('')

    const [weight, setWeight] = useState(0)

    function testSpecies() {
        if (species == 'Bubalino') {
            setWeight(-248.441 + thoracicPerimeter * 3.158)
        }
        if (species == 'Bovino') {
            setWeight(5000)
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    function result() {
        event.preventDefault()
        onOpen()
        testSpecies()
    }

    return (
        <Stack
            as="form"
            width="100%"
            p="8"
            border-radius={8}
            flexDir="column"
            spacing="6"
        >
            <Stack spacing="2rem" direction="row" align="center">
                <RiArrowLeftCircleLine size="3rem" onClick={Router.back} />

                <Box>
                    <Stack spacing="0" direction="row">
                        <Heading textColor="#EF8E9E">Weight</Heading>
                        <Heading color="#7EBAAD">Predict</Heading>
                    </Stack>
                    <Heading size="md" fontWeight="md">
                        Calcule rapidamente o peso do seu animal
                    </Heading>
                </Box>
            </Stack>

            <Text fontSize="md">
                O perímetro torácico é a melhor variável escolhida como
                preditora do peso vivo de bezerros
            </Text>
            <Heading size="md" color="gray">
                Modo de uso
            </Heading>
            <Text fontSize="md" textAlign="justify">
                Passe a fita métrica caudalmente à escápula passando pelo
                esterno e pelos processos espinhais das vértebras torácicas
                envolvendo todo tórax do animal
            </Text>
            <HStack spacing="10" align="end">
                <form>
                    <FormControl>
                        <FormLabel>
                            {' '}
                            Digite o perímetro torácico do animal &#40;cm&#41;
                        </FormLabel>

                        <NumberInput
                            size="lg"
                            min={80}
                            onChange={(thoracicPerimeter) =>
                                setThoracicPerimeter(Number(thoracicPerimeter))
                            }
                            value={thoracicPerimeter}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    <FormControl>
                        <FormLabel> Selecione a espécie</FormLabel>
                        <Select
                            size="lg"
                            placeholder="Espécie"
                            onChange={(species) =>
                                setSpecies(String(species.target.value))
                            }
                        >
                            <option value="Bubalino">Bubalino</option>
                            <option value="Bovino">
                                Bovino (Raças Grandes)
                            </option>
                            <option value="Caprino">
                                Bovino (Raças Médias){' '}
                            </option>
                            <option value="Ovino">
                                Bovino (Raças Pequenas){' '}
                            </option>
                        </Select>
                        <Button
                            mt="6"
                            colorScheme="pink"
                            onClick={result}
                            type="submit"
                            refresh="false"
                        >
                            Calcular Peso
                        </Button>
                    </FormControl>
                </form>
            </HStack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Predição do peso vivo de bezerros por morfometria
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {species === '' ? (
                            <div>
                                <Heading>Selecione uma espécie</Heading>
                            </div>
                        ) : (
                            <div>
                                <Heading>O peso do seu animal é:</Heading>
                                <Heading color="pink.600">
                                    {Math.round(weight)}Kg
                                </Heading>
                            </div>
                        )}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={onClose}>
                            Fechar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    )
}
