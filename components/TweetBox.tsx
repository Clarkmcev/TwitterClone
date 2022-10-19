import React, { useState } from 'react'
import {
    CalendarIcon,
} from '@heroicons/react/24/outline'

function TweetBox() {
  const [input, setInput] = useState<string>('')

  return (
    <div className="flex space-x-2 p-5">
        <img className="mt-4 h-14 w-14 rounded-full object-cover" src="https://links.papareact.com/gll" alt=""/>
        <div className="flex flex-1 items-center pl-2">
            <form className="flex flex-1 flex-col">
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="What's happening?" className="h-24 w-full text-xl outline-none placeholder:text-xl" />
                <div className="flex items-center justify-between ">
                <div className="flex space-x-2 text-twitter">
                  <CalendarIcon className="h-5 w-5 cursor-pointer transition-all duration-150 eas-out hover:scale-150"/>
                </div>
                <button disabled={!input} className="bg-twitter px-5 py-2 text-white font-bold rounded-full disabled:opacity-40">Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox