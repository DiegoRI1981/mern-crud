import { usePosts } from "../context/postContext"

export function HomePage() {

    const myContext = usePosts()

    return (
        <div>
            Homa Page
            <button >
                Add
            </button>
        </div>
    )
}
