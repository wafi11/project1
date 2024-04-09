import { useRouter } from "next/navigation"

interface UsernotFound {
    title? : string
    subtitle? : string
}

const EmptyState : React.FC<UsernotFound> = ({
    title = "Don't Access Route",
    subtitle = "Please Login first",
}) => {
    const router = useRouter()
    return (
        <div className="flex flex-col gap-4 justify-center items-center ">
            <h2 className="text-3xl font-bold">
                {title}
            </h2>
            <p className="">{subtitle}</p>
            <button className="W-48 mt-4" onClick={() => router.push('/register')}>
                Login
            </button>
        </div>
    )
}

export default EmptyState