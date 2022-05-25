import { Flex } from '@chakra-ui/react'

import { GridBlurredBackdrop } from '../components/index/Testimonial'
import { CallToActionWithVideo } from '../components/index/Hero'
import { Create } from '../components/index/Create'

import { useSession } from 'next-auth/react'
import { Dashboard } from '../components/index/Dashboard'
import { BasicStatistics } from '../components/index/statistics'
import { GridListWithHeading } from '../components/index/services'

export default function Home() {
    const { data: session } = useSession()

    return session ? (
        <>
            <Dashboard name={session.user.name} />
        </>
    ) : (
        <>
            <Flex flexDir="column">
                <CallToActionWithVideo />

                <GridListWithHeading />
                {/* <BasicStatistics /> */}
                <Create />
                <GridBlurredBackdrop />
            </Flex>
        </>
    )
}
