import { set } from 'react-hook-form'
import {create} from 'zustand'

interface useSidebarProps {
    isOpen : boolean
    onOpen : () => void
    onClose : () => void
}

export const useSidebar = create<useSidebarProps>((set) => ({
    isOpen : false,
    onOpen : () => set({ isOpen : true}),
    onClose : () => set({ isOpen : false}) 
}))