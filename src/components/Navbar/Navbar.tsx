// 'use client'
// import React from 'react'
// import { Bell, Settings, MenuDots } from '@solar-icons/react'
// import ThemeSwitcher from '../ThemeSwitcher';

// interface NavbarProps {
//   onMobileMenuClick: () => void;
// }

// function Navbar({ onMobileMenuClick }: NavbarProps) {
//   return (      
//     <div className="w-full h-16 border-b border-border bg-background z-40">
//       <div className="h-full flex items-center justify-between px-6">
//         <button 
//           onClick={onMobileMenuClick}
//           className="lg:hidden w-10 h-10 cursor-pointer rounded-lg flex items-center justify-center hover:bg-elevation-2 transition-colors"
//         >
//           <MenuDots weight='BoldDuotone' size={24} className="text-muted-foreground" />
//         </button>

//         <div className="flex items-center gap-2 ml-auto">
//           <ThemeSwitcher />
//           <button className="w-10 h-10 cursor-pointer rounded-lg relative flex items-center justify-center hover:bg-elevation-2 transition-colors">
//             <Bell weight='BoldDuotone' size={24} className="text-muted-foreground" />
//             <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
//           </button>
//           <button className="w-10 h-10 cursor-pointer rounded-lg flex items-center justify-center hover:bg-elevation-2 transition-colors">
//             <Settings weight='BoldDuotone' size={24} className="text-muted-foreground" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

'use client'
import React, { useState, useEffect } from 'react'
import { Bell, Settings, MenuDots } from '@solar-icons/react'
import ThemeSwitcher from '../ThemeSwitcher';

interface NavbarProps {
  onMobileMenuClick: () => void;
}

function Navbar({ onMobileMenuClick }: NavbarProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (      
    <div className="relative w-full h-16 border-b border-border/20 bg-background/80 backdrop-blur-xl z-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"></div>
      
      <div className="relative h-full flex items-center justify-between px-6">
        <button 
          onClick={onMobileMenuClick}
          className="lg:hidden group relative w-12 h-12 cursor-pointer rounded-xl bg-elevation-1/30 backdrop-blur-sm border border-border/20 flex items-center justify-center hover:bg-elevation-1/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:scale-105"
        >
          <MenuDots weight='BoldDuotone' size={24} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <div className="flex items-center gap-3 ml-auto">
          <div className="transform transition-all duration-300 hover:scale-105">
            <ThemeSwitcher />
          </div>
          
          <button className="group relative w-12 h-12 cursor-pointer rounded-xl bg-elevation-1/30 backdrop-blur-sm border border-border/20 flex items-center justify-center hover:bg-elevation-1/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:scale-105">
            <Bell weight='BoldDuotone' size={24} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            <span className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse shadow-lg shadow-primary/50"></span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group relative w-12 h-12 cursor-pointer rounded-xl bg-elevation-1/30 backdrop-blur-sm border border-border/20 flex items-center justify-center hover:bg-elevation-1/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:scale-105">
            <Settings weight='BoldDuotone' size={24} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar