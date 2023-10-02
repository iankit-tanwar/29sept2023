'use client'
import Header from '../../components/layouts/Header';
import Aside from '../../components/layouts/Aside';
import Footer from '../../components/layouts/Footer';
import Script from 'next/script';



import BreadCrumb from '../../components/layouts/BreadCrumb';


export default function DashboardLayout({ children }) {


    return (
        <>
            <Header />
            <Aside />
            <main id="main" className="main">
                <BreadCrumb />
                {children}
            </main>
            <Footer />


            <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js" data-nscript="afterInteractive"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.42.0/apexcharts.min.js" data-nscript="afterInteractive"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.js" data-nscript="afterInteractive"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js" data-nscript="afterInteractive"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.min.js" data-nscript="afterInteractive"></Script>
            <Script src="../../..//assets/vendor/simple-datatables/simple-datatables.js" data-nscript="afterInteractive"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.7.0/tinymce.min.js" data-nscript="afterInteractive"></Script>
            <Script src="/assets/vendor/php-email-form/validate.js" data-nscript="afterInteractive"></Script>


            <Script src="../../../assets/js/main.js" data-nscript="afterInteractive"></Script>

        </>
    )
}