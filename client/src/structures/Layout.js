import { Outlet } from 'react-router-dom'
import Container from '../layout/Container/Container'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'
const Layout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    )
}

export default Layout
