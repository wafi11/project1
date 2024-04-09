import { Subscription, UserDetails } from "@/types"
import { User } from "@supabase/auth-helpers-nextjs"
import { useSessionContext ,useUser as useSupaUser,} from "@supabase/auth-helpers-react"
import { createContext, useEffect, useState } from "react"

type UserContextType = {
    access_token : string | null
    user : User | null
    userDetails : UserDetails | null
    isLoading : boolean
    subscription : Subscription | null
}

export const UserContext = createContext<UserContextType | undefined > (
    undefined
)
export interface Props {
    (propName : string) : any
}

export const MyUserContextProvider = (props : Props) =>{
    const {
        session,
        isLoading : isLoadingUser,
        supabaseClient : supabase
    } = useSessionContext()
    const user = useSupaUser()
    const access_token = session?.access_token ?? null
    const [isLoadingData,setIsLoadingData] = useState(false)
    const [userDetails ,setIsUserDetails] = useState<UserDetails | null>(null)
    const [subscription,setSubscription] = useState<Subscription  | null>(null)


    const getUserDetails = () => supabase.from('users').select('*').single()
    const getSubscription = () => supabase
        .from('subscriptions')
        .select('*, prices(* ,products(*)')
        .in('status',['traveling','active'])
        .single()


    useEffect(() => {
        if(user && !isLoadingData && !userDetails && !subscription){
            setIsLoadingData(true)

            Promise.allSettled([!getUserDetails(), getSubscription()])
            .then(())
        }
    },[])
}