"use client"
import { SafeUser } from '@/components/types'
import { SessionProvider } from 'next-auth/react'
import React, { Children } from 'react'

interface ProviderProps{
    currentUser : SafeUser  | null 
    children : React.ReactNode
}

const Provider = ({children ,currentUser} : ProviderProps) => {
  return <SessionProvider session={currentUser}>{children}</SessionProvider>
}

export default Provider