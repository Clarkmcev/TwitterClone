import React from 'react'
import {
    ArrowDownIcon
} from '@heroicons/react/24/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


function Widgets() {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
        {/* Search */}
        <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
            <ArrowDownIcon className="h5 w-5 text-gray-400" />
            <input type="text" placeholder="search twitter" className="bg-transparent flex-1 outline-none"/>
        </div>

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{height: 400}}
        />
    </div>
  )
}

export default Widgets