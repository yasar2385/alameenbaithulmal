// File: src/app/layout.js
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import './globals.css'

export const metadata = {
  title: 'Alameenbaithulmal Trust',
  description: 'Supporting communities through charitable initiatives and social welfare programs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}