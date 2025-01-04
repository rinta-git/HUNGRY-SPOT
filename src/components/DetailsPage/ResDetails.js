import { useParams } from "react-router"

export const ResDetails = () => {
    const {resId} = useParams();
    return <h1>Details Page: {resId}</h1>
}