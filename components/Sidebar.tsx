import React, { useState } from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    UserIcon,
    EnvelopeIcon,
    Square2StackIcon,
    EllipsisHorizontalCircleIcon,
    HomeIcon
} from '@heroicons/react/24/outline'
import SideBarRow from './SideBarRow'
import { useSession, signIn, signOut } from 'next-auth/react'

function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
        <img className="m-3 h-10 w-10 cursor-pointer" src="https:/links.papareact.com/drq" alt=""/>
        <SideBarRow Icon={HomeIcon} title="Home"/ >
        <SideBarRow Icon={HashtagIcon} title="Explore"/ >
        <SideBarRow Icon={BellIcon} title="Notifications"/ >
        <SideBarRow Icon={EnvelopeIcon} title="Messages"/ >
        <SideBarRow Icon={BookmarkIcon} title="Bookmarks"/ >
        <SideBarRow Icon={Square2StackIcon} title="Lists"/ >
        <SideBarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign Out' : "Sign In"}/ >
        <SideBarRow Icon={EllipsisHorizontalCircleIcon} title="More"/ >
    </div>
  )
}

export default Sidebar

