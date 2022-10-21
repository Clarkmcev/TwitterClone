import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
    onClick?: () => {}
}

function SideBarRow({Icon, title, onClick}: Props) {
  return (
    <div onClick={() => onClick?.()}className="flex items-center space-x-2 px-2 py-3 max-w-fit hover:bg-gray-100 transition-all duration-200 group cursor-pointer">
        <Icon className="h-6 w-6"/>
        <p className="hidden md:inline-flex group-hover:text-twitter text-base lg:text-xl">{title}</p>
    </div>
  )
}

export default SideBarRow