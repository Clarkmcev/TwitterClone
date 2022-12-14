import React from 'react'
import {
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


function Widgets() {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
        {/* Search */}
        <div className="my-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
            <MagnifyingGlassIcon className="h5 w-5 text-gray-400" />
            <input type="text" placeholder="search twitter" className="bg-transparent flex-1 outline-none"/>
        </div>

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Elon musk"
        options={{height: 400}}
        />
    </div>
  )
}

export default Widgets