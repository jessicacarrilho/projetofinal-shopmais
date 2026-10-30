import { Outlet } from 'react-router-dom'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import styles from './Layout.module.css'

//template aplicado a todas as paginas

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />

            <main className={styles.principal}>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout
