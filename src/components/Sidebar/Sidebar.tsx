'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ClipboardList, Buildings, UsersGroupRounded, User, Stethoscope, Logout3, RoundAltArrowLeft } from '@solar-icons/react';
import { Button } from '../ui/button';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const menuOptions = [
    {
        name: "Home",
        icon: <Home weight='BoldDuotone' size={24} />,
        page: "/"
    },
    {
        name: "Exames",
        icon: <ClipboardList weight='BoldDuotone' size={24}/>,
        page: "/appointments"
    },
    {
        name: "Clínica",
        icon: <Buildings weight='BoldDuotone' size={24}/>,
        page: "/clinica"
    },
    {
        name: "Pacientes",
        icon: <UsersGroupRounded weight='BoldDuotone' size={24}/>,
        page: "/pacientes"
    },
    {
        name: "Usuários",
        icon: <User weight='BoldDuotone' size={24}/>,
        page: "/usuarios"
    }
]

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [isDesktopOpen, setIsDesktopOpen] = useState(true)

  // Handle click outside on mobile
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.()
    }
  }

  return (
    <>
      {/* Mobile backdrop */}
      <div 
        onClick={handleBackdropClick}
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
      />

      {/* Sidebar */}
      <div className={`
        fixed lg:static h-screen bg-background border-r border-border flex flex-col justify-between 
        transition-all duration-300 ease-in-out z-[51]
        ${isDesktopOpen ? 'lg:w-[240px]' : 'lg:w-[80px]'}
        ${isOpen ? 'w-[240px] translate-x-0' : 'w-[240px] -translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center p-6">
            <div className="flex items-center gap-3">
              <Stethoscope weight='BoldDuotone' size={32} className='text-primary'/>
              <span className={`font-semibold transition-opacity duration-300 ${isDesktopOpen ? 'lg:opacity-100' : 'lg:opacity-0 lg:hidden'} ${!isOpen && 'hidden lg:block'}`}>
                Oh Doutor
              </span>
            </div>
          </div>
          
          {/* Toggle button - only show on desktop */}
          <button 
            onClick={() => setIsDesktopOpen(!isDesktopOpen)}
            className="absolute cursor-pointer -right-3 top-12 w-6 h-6 rounded-full bg-background hidden lg:flex items-center justify-center hover:bg-elevation-1 transition-colors"
          >
            <RoundAltArrowLeft weight='BoldDuotone' size={24} className={`text-muted-foreground transition-transform duration-300 ${!isDesktopOpen ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex flex-col gap-2 p-2 flex-1 justify-center">
            {menuOptions.map((option) => (
              <Link href={option.page} key={option.name} onClick={() => onClose?.()}>
                <div className={`flex items-center p-2 rounded-md gap-3 hover:bg-elevation-1 transition-colors
                  ${pathname === option.page ? 'text-primary bg-elevation-1' : 'text-foreground'} 
                  ${!isDesktopOpen ? 'lg:justify-center' : ''}`}
                >
                  {option.icon}
                  <h3 className={`text-sm font-medium whitespace-nowrap transition-opacity duration-300 
                    ${isDesktopOpen ? 'lg:opacity-100' : 'lg:opacity-0 lg:hidden'}
                    ${!isOpen && 'hidden lg:block'}`}
                  >
                    {option.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={`p-4 m-2 rounded-xl bg-elevation-1 flex items-center gap-3 transition-all duration-300`}>
          <Button className="w-10 h-10 rounded-full text-elevation-1 cursor-pointer bg-primary/10 flex items-center justify-center flex-shrink-0">
            <User weight='BoldDuotone' size={20} className="text-primary" />
          </Button>
          <div className={`flex-1 transition-opacity duration-300 
            ${isDesktopOpen ? 'lg:opacity-100' : 'lg:opacity-0 lg:hidden'}
            ${!isOpen && 'hidden lg:block'}`}
          >
            <h3 className="text-sm font-medium">Usuário</h3>
            <p className="text-xs text-muted-foreground">Administrador</p>
          </div>
          <button className={`w-8 h-8 cursor-pointer rounded-lg hover:bg-elevation-2 flex items-center justify-center transition-colors 
            ${!isDesktopOpen ? 'lg:hidden' : ''}
            ${!isOpen && 'hidden lg:flex'}`}
          >
            <Logout3 weight='BoldDuotone' size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar