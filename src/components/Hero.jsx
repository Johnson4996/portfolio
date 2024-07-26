import React from 'react'; 
import { Typewriter } from './Typewriter';

export const Hero = () => {
    return (
        <div className="flex flex-col items-left justify-center h-full gap-2 overflow-hidden">
            <h1 id="text-title" class="text-6xl font-bold text-accent"><Typewriter text="Hi, I'm Sam."/></h1>
            <br/>
            <p id='text-desc' className="text-2xl"><Typewriter text='I am a software developer based in Nashville, TN'/></p>
            <br/>
            <div className="flex gap-2 text-center text-xl mt-3">
                {/* maybe icons below */}
                <p className="text-green-500">Github</p>
                <p className="text-blue-500">Linkedin</p>
            </div>
        </div>
    )
}   