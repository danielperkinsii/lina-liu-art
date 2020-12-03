import { useRouter } from 'next/router'

export default function Painting() {
    const router = useRouter()
    const { id } = router.query

    return (
    <p>Art: {id}</p>
    )
}