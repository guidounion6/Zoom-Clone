"use client"

import React, { useEffect, useState } from 'react'
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import { Button } from './ui/button'

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void }) => {

    const [isMyCamToggledOn, setIsMyCamToggledOn] = useState(false)

    const call = useCall()

    if (!call) {
        throw new Error("useCall must be used within StreamCall component")
    }

    useEffect(() => {
        if (isMyCamToggledOn) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable()
            call?.microphone.enable()
        }
    }, [isMyCamToggledOn, call?.camera, call?.microphone])

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
            <h1 className="text-center text-2xl font-bold">Setup</h1>
            <VideoPreview />
            <div className="flex h-16 items-center justify-center gap-3">
                <label className="flex items-center justify-center gap-2 font-medium">
                    <input
                        type="checkbox"
                        checked={isMyCamToggledOn}
                        onChange={(e) => setIsMyCamToggledOn(e.target.checked)}
                    />
                    Join with mic and camera off
                </label>
                <DeviceSettings />
                <Button className="rounded-md bg-green-500 px-4 py-2.5" onClick={() => { call.join(); setIsSetupComplete(true) }} >
                    Join Meeting

                </Button>
            </div>
        </div>
    )
}

export default MeetingSetup