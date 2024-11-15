// File: src/app/components/Footer.js
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: info@alameenbaithulmal.org</p>
            <p>Phone: +1234567890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/members">Members</Link></li>
              <li><Link href="/donate">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons/links */}
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Alameenbaithulmal Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}