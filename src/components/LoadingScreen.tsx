import React from 'react'
import { Stethoscope } from '@solar-icons/react'

interface LoadingScreenProps {
  message?: string
}

export default function LoadingScreen({ message = "Carregando..." }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-xl flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 animate-pulse"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '25%', top: '60%', animationDelay: '0.5s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '40%', top: '15%', animationDelay: '1s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '60%', top: '80%', animationDelay: '1.5s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '75%', top: '35%', animationDelay: '2s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '85%', top: '70%', animationDelay: '2.5s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '15%', top: '85%', animationDelay: '3s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '90%', top: '25%', animationDelay: '0.3s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '5%', top: '45%', animationDelay: '1.2s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '65%', top: '10%', animationDelay: '1.8s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '35%', top: '90%', animationDelay: '2.3s' }} />
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-ping" style={{ left: '80%', top: '55%', animationDelay: '0.8s' }} />
      </div>
      
      <div className="relative flex flex-col items-center gap-8 p-8">
        <div className="relative group">
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-spin" 
               style={{ animationDuration: '3s' }}>
            <div className="absolute inset-2 rounded-full bg-background/80 backdrop-blur-sm"></div>
          </div>
          
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 backdrop-blur-sm border border-primary/20 flex items-center justify-center shadow-2xl shadow-primary/20 animate-pulse">
            <Stethoscope 
              weight='BoldDuotone' 
              size={40} 
              className='text-primary animate-bounce' 
              style={{ animationDuration: '2s' }}
            />
          </div>
          
          <div className="absolute -inset-4 w-32 h-32">
            <div className="absolute inset-0 rounded-full border-2 border-primary/10 border-t-primary/40 animate-spin"
                 style={{ animationDuration: '2s' }}></div>
            <div className="absolute inset-2 rounded-full border border-secondary/10 border-r-secondary/40 animate-spin"
                 style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
            Oh Doutor
          </h1>
          
          <p className="text-lg text-muted-foreground animate-pulse">
            {message}
          </p>
          
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
        
        <div className="w-64 h-1 bg-elevation-1/30 rounded-full overflow-hidden backdrop-blur-sm border border-border/20">
          <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse origin-left">
            <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/5 to-transparent rounded-tl-full"></div>
    </div>
  )
}