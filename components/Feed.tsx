import React from 'react'
import {
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import TweetBox from './TweetBox'

function Feed() {
  return (
    <div className="col-span-7 mt-2 px-2 lg:col-span-5">
      <div className="flex items-center justify-between">
          <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
          < AcademicCapIcon
 className="h-8 w-8 text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"/>
      </div>
      <TweetBox/>
    </div>
  )
}

export default Feed