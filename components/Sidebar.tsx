import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    UserIcon,
    HomeIcon
} from '@heroicons/react/24/outline'
import SideBarRow from './SideBarRow'

function Sidebar() {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
        <img className="m-3 h-10 w-10" src="https:/links.papareact.com/drq" alt=""/>
        <SideBarRow Icon={HomeIcon} title="Home"/ >
        <SideBarRow Icon={HashtagIcon} title="Explore"/ >
        <SideBarRow Icon={BellIcon} title="Notifications"/ >
        <SideBarRow Icon={BookmarkIcon} title="Bookmarks"/ >
        <SideBarRow Icon={UserIcon} title="Sign In"/ >
    </div>
  )
}

export default Sidebar

