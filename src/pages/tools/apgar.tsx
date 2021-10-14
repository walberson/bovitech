import {
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    Stack,
    UnorderedList,
    ListItem

} from "@chakra-ui/react"
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { useEffect, useState } from "react";

interface stepsProps {
    label: string,
    description: string,
    option1: string,
    option2: string,
    option3: string
}

const steps: stepsProps[] = [
    {
        label: "Reação da cabeça (à água fria)",
        description: 'Essa é a reação da cabeça',
        option1: 'Espontânea',
        option2: 'Diminuída',
        option3: 'Ausente',
    },
    {
        label: "Reflexos (palpebral e interdigital)", description: 'Essa é a reação da cabeça',
        option1: 'Responsivo a ambos',
        option2: 'Responsivo a um reflexo',
        option3: 'Ausente',
    },
    {
        label: "Coloração das mucosas", description: 'Essa é a reação da cabeça',
        option1: 'Rosa',
        option2: 'Branco azulada',
        option3: 'Azulada',
    },
    {
        label: "Respiração", description: 'Essa é a reação da cabeça',
        option1: 'Rítmica',
        option2: 'Arrítmica',
        option3: 'Ausente',
    },
]



export default function Apgar() {

    const [stepSelection, setStepSelection] = useState([0, 0, 0, 0])

    const [total, setTotal] = useState(0)

    const totalCalc = stepSelection.reduce((total, currentElement) => total + currentElement)

    useEffect(() => {
        setTotal(totalCalc)
    }, [totalCalc]);

    const { nextStep, prevStep, reset, activeStep } = useSteps({
        initialStep: 0,
    })



    function selectOption1() {

        let newStep = stepSelection
        newStep[activeStep] = 2
        setStepSelection(newStep)
        nextStep()


    }

    function selectOption2() {
        let newStep = stepSelection
        newStep[activeStep] = 1
        setStepSelection(newStep)
        nextStep()

    }

    function selectOption3() {
        let newStep = stepSelection
        newStep[activeStep] = 0
        setStepSelection(newStep)
        nextStep()

    }

    function backStep() {

        const newStep = stepSelection
        newStep[activeStep] = 0
        setStepSelection(newStep)

        prevStep()

    }

    function resetSteps() {

        setStepSelection([0, 0, 0, 0])
        reset()

    }


    return (

        <Flex
            align='center'
            justify='center'
            margin='8'

        >
            <VStack width="100%"
                maxW='768px'
            >
                <Steps orientation="vertical" activeStep={activeStep}>
                    {steps.map(({ label, description, option1, option2, option3 }) => (
                        <Step label={label} key={label}>
                            <Stack textAlign="justify" py={2} px={4}
                                align="center"
                                justify="center"
                                direction="column"
                                spacing='2'
                            >
                                <Text>
                                    {description}
                                </Text>
                                <Button
                                    size='lg'
                                    width='15rem'
                                    background='teal.500'
                                    onClick={selectOption1}
                                >{option1}</Button>
                                <Button
                                    size='lg'
                                    width='15rem'
                                    background='yellow.500'
                                    onClick={selectOption2}
                                >{option2}</Button>
                                <Button
                                    size='lg'
                                    width='15rem'
                                    background='red.500'
                                    onClick={selectOption3}
                                >{option3}</Button>


                            </Stack>
                        </Step>
                    ))}
                </Steps>
                {activeStep === 4 ? (

                    (total < 4) ? (
                        <Stack
                            direction="column"
                            align="center"
                            spacing="2"
                        >
                            <Heading
                                size='md'>
                                Resultado
                            </Heading>
                            <Heading
                                size='lg'
                                color='red.500'
                            >
                                Score APGAR {total}
                            </Heading>

                            <UnorderedList>
                                <ListItem>Vitalidade fraca ou ausente</ListItem>
                                <ListItem>Recém-nascido com pouca vitalidade,<br />inviável e com
                                    asfixia severa</ListItem>
                                <ListItem>Medidas de Emergência</ListItem>
                            </UnorderedList>

                            <Button
                                onClick={resetSteps}
                            >Reiniciar

                            </Button>
                        </Stack>
                    ) : ((total < 7) ? (
                        <Stack
                            direction="column"
                        >
                            <Heading
                                size='md'>
                                Resultado
                            </Heading>
                            <Heading
                                size='lg'
                                color='yellow.500'
                            >
                                Score APGAR {total}
                            </Heading>

                            <UnorderedList
                            >
                                <ListItem>Vitalidade Diminuída</ListItem>
                                <ListItem>Bezerro deprimido e com asfixia de <br />intensidade leve a moderada</ListItem>
                                <ListItem>Medidas de Urgência</ListItem>
                            </UnorderedList>

                            <Button
                                onClick={resetSteps}
                            >Reiniciar

                            </Button>
                        </Stack>
                    ) : (
                        <Stack
                            direction="column"
                        >
                            <Heading
                                size='md'>
                                Resultado
                            </Heading>
                            <Heading
                                size='lg'
                                color='green.500'
                            >
                                Score APGAR {total}
                            </Heading>
                            <UnorderedList>
                                <ListItem>Boa vitalidade</ListItem>
                                <ListItem>Paciente sadio e sem asfixia</ListItem>
                                <ListItem>Sem intervenção</ListItem>
                            </UnorderedList>

                            <Button
                                onClick={resetSteps}
                            >Reiniciar

                            </Button>
                        </Stack>
                    ))

                ) : (
                    <Stack
                        direction="row"
                        spacing="10">

                        <Button
                            disabled={activeStep === 0}
                            onClick={backStep}
                        >Voltar</Button>
                    </Stack>

                )}
            </VStack>
        </Flex>

    )
}