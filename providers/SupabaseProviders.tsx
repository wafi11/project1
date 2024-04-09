"use client"

import { Database } from "@/types_db"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import React, { useState } from "react"

interface SupabaseProviders {
    children : React.ReactNode
}

const SupabaseProviders : React.FC <SupabaseProviders> = ({
    children
}) => {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient<Database>())

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
        {children}
        </SessionContextProvider >
    )
}

export default SupabaseProviders