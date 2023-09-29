
import Header from '../../components/layouts/Header';
import Aside from '../../components/layouts/Aside';
import Footer from '../../components/layouts/Footer';


export default function DashboardLayout({ children }) {
    return (
        <>
            <Header />
            <Aside />

            {children}
            <Footer />


            

        </>
    )
}