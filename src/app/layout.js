import '../../public/assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../public/assets/vendor/boxicons/css/boxicons.min.css';
import '../../public/assets/vendor/quill/quill.snow.css';
import '../../public/assets/vendor/quill/quill.bubble.css';
import '../../public/assets/vendor/remixicon/remixicon.css';
import '../../public/assets/vendor/simple-datatables/style.css';
import '../../public/assets/css/style.css';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/lara-light-indigo/theme.css";

import 'primereact/resources/themes/saga-blue/theme.css'; // Replace with your preferred theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


import './globals.css'
import { Inter } from 'next/font/google'


import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard-FKAUTO',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <PrimeReactProvider>


    <html lang="en">
      <body className={inter.className}>
        {children}
        

       
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js" data-nscript="afterInteractive"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.42.0/apexcharts.min.js" data-nscript="afterInteractive"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.js" data-nscript="afterInteractive"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js" data-nscript="afterInteractive"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.min.js" data-nscript="afterInteractive"></Script>
        <Script src="/assets/vendor/simple-datatables/simple-datatables.js" data-nscript="afterInteractive"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.7.0/tinymce.min.js" data-nscript="afterInteractive"></Script>
        <Script src="/assets/vendor/php-email-form/validate.js" data-nscript="afterInteractive"></Script>

  
        <Script src="/assets/js/main.js" data-nscript="afterInteractive"></Script>
        
        </body>
    </html>
    </PrimeReactProvider>
  )
}
