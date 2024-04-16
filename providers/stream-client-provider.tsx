'use client';

import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/loader';
import { useUser } from '@clerk/nextjs';
import {
    StreamVideo,
    StreamVideoClient,
  } from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';
  
const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

// we will have to connect this to clerk so that each clerk user is connected to a stream user

  
const StreamClientProvider = ({ children}:{children:React.ReactNode}) => {
    const { user, isLoaded } = useUser();
    const [videoClient, setVideoClient] =useState<StreamVideoClient>()

    useEffect(()=>{
        // we will create new stream user of course we need it to start its own meeeting room.
        // but we're going to create that stream user directly from our currently logged in clerk user.
        if(!isLoaded || !user) return;
        if(!apiKey) throw new Error('Stream API Key missing.');

        const client = new StreamVideoClient({
            apiKey,
            user:{
                id:user?.id,
                name:user?.username || user?.id,
                image:user?.imageUrl
            },
            tokenProvider:tokenProvider
        });

        setVideoClient(client);

    },[user, isLoaded])

    if(!videoClient) return <Loader />
    
    return (
      <StreamVideo client={videoClient}>
        {children}
      </StreamVideo>
    );
};

export default StreamClientProvider;