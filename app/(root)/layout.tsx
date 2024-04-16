import StreamClientProvider from '@/providers/stream-client-provider'
import React from 'react'

interface RootLayoutProps {
    children:React.ReactNode
}


// every component in root dir knows about video client
const RootLayout:React.FC<RootLayoutProps> = ({children}) => {
    return (
        <div>
            <StreamClientProvider>
                {children}
            </StreamClientProvider>
        </div>
    )
}

export default RootLayout