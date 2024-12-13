import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Restaurents } from "./Body/Restaurents"

export const Home = () => {
    return (
        <>
            <Header />
            <hr />
            <Restaurents />
            <Footer />
        </>
    )
}