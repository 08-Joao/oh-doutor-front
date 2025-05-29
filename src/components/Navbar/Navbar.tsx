'use client'
import React from 'react'
import { Bell, Settings, MenuDots } from '@solar-icons/react'

interface NavbarProps {
  onMobileMenuClick: () => void;
}

function Navbar({ onMobileMenuClick }: NavbarProps) {
  return (      
    <div className="w-full h-16 border-b border-border bg-background z-40">
      <div className="h-full flex items-center justify-between px-6">
        <button 
          onClick={onMobileMenuClick}
          className="lg:hidden w-10 h-10 cursor-pointer rounded-lg flex items-center justify-center hover:bg-elevation-2 transition-colors"
        >
          <MenuDots weight='BoldDuotone' size={24} className="text-muted-foreground" />
        </button>

        <div className="flex items-center gap-2 ml-auto">
          <button className="w-10 h-10 cursor-pointer rounded-lg relative flex items-center justify-center hover:bg-elevation-2 transition-colors">
            <Bell weight='BoldDuotone' size={24} className="text-muted-foreground" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <button className="w-10 h-10 cursor-pointer rounded-lg flex items-center justify-center hover:bg-elevation-2 transition-colors">
            <Settings weight='BoldDuotone' size={24} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar