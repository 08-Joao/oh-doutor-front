"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeClosed } from '@solar-icons/react'
import React, { useState, useEffect } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleLogin = async () => {
    setIsLoading(true)
    // Simulate login process
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="relative flex justify-center items-center h-screen w-screen overflow-hidden bg-background from-primary via-secondary to-accent">
      <div className="relative z-10 group">
        <div className="backdrop-blur-2xl bg-elevation-1/10 border border-border/20 rounded-3xl p-12 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-primary/25 hover:shadow-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2 leading-tight">
              Entrar
            </h1>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <Input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-96 h-14 bg-elevation-1 border-border/30 rounded-xl text-foreground placeholder-muted-foreground backdrop-blur-sm transition-all duration-300 focus:bg-elevation-1/20 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20"
                placeholder="E-mail"
              />
            </div>

            {/* Password field */}
            <div className="relative group">
              <Input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-96 h-14 bg-elevation-1/10 border-border/30 rounded-xl text-foreground placeholder-muted-foreground backdrop-blur-sm transition-all duration-300 focus:bg-elevation-1/20 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20 pr-12"
                placeholder="Senha"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {showPassword ? <Eye weight='BoldDuotone' className='cursor-pointer text-primary' size={20} /> : <EyeClosed weight='BoldDuotone' className='cursor-pointer text-primary' size={20} />}
              </button>
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Esqueci minha senha
              </a>
            </div>

            <Button 
              onClick={handleLogin}
              disabled={isLoading}
              className="cursor-pointer w-full h-14 bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-primary text-primary-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-primary/30 disabled:opacity-50 relative overflow-hidden group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                  <span>Entrando...</span>
                </div>
              ) : (
                <>
                  <span className="relative z-10">Entrar</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse opacity-80"></div>
        <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse opacity-80 animation-delay-1000"></div>
        <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-accent to-secondary rounded-full animate-pulse opacity-80"></div>
      </div>
    </div>
  )
}

export default Login