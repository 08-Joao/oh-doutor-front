'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { User, Stethoscope, Logout3, RoundAltArrowLeft } from '@solar-icons/react';
import { Button } from '../ui/button';
import { menuOptions } from '@/utils/constants/sidebar-options';
import { useAuth } from '@/contexts/AuthContext';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [isDesktopOpen, setIsDesktopOpen] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { logout, user } = useAuth() // Added user from useAuth

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.()
    }
  }

  
  const getRoleDisplay = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Administrador'
      case 'root':
        return 'Raiz'
      case 'owner':
        return 'Proprietário'
      default:
        return 'Usuário'
    }
  }

  return (
    <>
      <div 
        onClick={handleBackdropClick}
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
      />

     <div className={`
        fixed lg:static h-screen bg-background/80 backdrop-blur-xl border-r border-border/20 flex flex-col justify-between 
        transition-all duration-500 ease-in-out z-[51] shadow-lg shadow-black/5
        ${isDesktopOpen ? 'lg:w-[280px]' : 'lg:w-[100px]'}
        ${isOpen ? 'w-[280px] translate-x-0' : 'w-[280px] -translate-x-full lg:translate-x-0'}
      `}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-accent/5"></div>
        
        <div className="relative flex flex-col h-full">
          <div className="flex items-center p-8">
            <div className="flex items-center gap-4 group">
              <div className="p-2 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-border/20 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                <Stethoscope weight='BoldDuotone' size={32} className='text-primary'/>
              </div>
              <span className={`font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-500 ${isDesktopOpen ? 'lg:opacity-100' : 'lg:opacity-0 lg:hidden'} ${!isOpen && 'hidden lg:block'}`}>
                Oh Doutor
              </span>
            </div>
          </div>
          
          <button 
            onClick={() => setIsDesktopOpen(!isDesktopOpen)}
            className="absolute cursor-pointer -right-3 top-16 w-6 h-6 rounded-full bg-background/80 backdrop-blur-sm border border-border/20 hidden lg:flex items-center justify-center hover:bg-elevation-1/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110 group z-10"
          >
            <RoundAltArrowLeft weight='BoldDuotone' size={20} className={`text-muted-foreground group-hover:text-primary transition-all duration-300 ${!isDesktopOpen ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex flex-col gap-3 p-4 flex-1 justify-center">
            {menuOptions.map((option) => (
              <Link href={option.page} key={option.name} onClick={() => onClose?.()}>
                <div className={`group relative flex items-center p-4 rounded-xl gap-4 backdrop-blur-sm border transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg
                  ${pathname === option.page 
                    ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/30 shadow-lg shadow-primary/20' 
                    : 'bg-elevation-1/30 border-border/20 text-foreground hover:bg-elevation-1/50 hover:border-primary/30 hover:shadow-primary/10'
                  } 
                  ${!isDesktopOpen ? 'lg:justify-center' : ''}`}
                >
                  <div className={`p-1 rounded-lg transition-all duration-300 ${pathname === option.page ? 'bg-primary/10' : 'group-hover:bg-primary/10'}`}>
                    {option.icon}
                  </div>
                  <h3 className={`text-sm font-medium whitespace-nowrap transition-all duration-500 
                    ${isDesktopOpen ? 'lg:opacity-100' : 'lg:opacity-0 lg:hidden'}
                    ${!isOpen && 'hidden lg:block'}`}
                  >
                    {option.name}
                  </h3>
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${pathname === option.page ? 'opacity-100' : ''}`}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={`relative p-4 m-4 rounded-2xl bg-elevation-1/30 backdrop-blur-sm border border-border/20 flex items-center gap-4 transition-all duration-500 hover:bg-elevation-1/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 group ${!isDesktopOpen ? 'lg:justify-center' : ''}`}>
          
          <button className="relative w-12 h-12 rounded-xl text-elevation-1 cursor-pointer bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center flex-shrink-0 hover:from-primary/30 hover:to-secondary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105">
            <User weight='BoldDuotone' size={20} className="text-primary" />
          </button>
          
          <div className={`relative flex-1 transition-all duration-500 
            ${isDesktopOpen ? 'lg:opacity-100' : 'lg:opacity-0 lg:hidden'}
            ${!isOpen && 'hidden lg:block'}`}
          >
            <h3 className="text-sm font-semibold text-foreground">
              {user?.name || 'Usuário'}
            </h3>
            <p className="text-xs text-muted-foreground">
              {user?.role ? getRoleDisplay(user.role) : 'Carregando...'}
            </p>
          </div>
          
          <button className={`relative w-12 h-12 cursor-pointer rounded-xl bg-elevation-1/30 backdrop-blur-sm border border-border/20 hover:bg-elevation-1/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 flex items-center justify-center transition-all duration-300 transform hover:scale-105 group/logout
            ${!isDesktopOpen ? 'lg:hidden' : ''}
            ${!isOpen && 'hidden lg:flex'}`}
            onClick={logout}
          >
            <Logout3 weight='BoldDuotone' size={18} className="text-muted-foreground group-hover/logout:text-primary transition-colors duration-300" />
          </button>
        </div>

        
      </div>
    </>
  )
}

export default Sidebar