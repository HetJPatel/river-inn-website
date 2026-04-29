import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/logo.png" 
                alt="River Inn Logo" 
                width={48} 
                height={48} 
                className="object-contain" 
              />
              <h3 className="text-2xl font-bold text-white tracking-tighter">
                River Inn
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your comfortable and convenient stay in the heart of San Antonio. Just minutes away from everything the city has to offer.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-indigo hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-indigo hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-indigo hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#amenities" className="hover:text-brand-indigo transition-colors">Amenities</Link></li>
              <li><Link href="#rooms" className="hover:text-brand-indigo transition-colors">Rooms & Rates</Link></li>
              <li><Link href="#location" className="hover:text-brand-indigo transition-colors">Location</Link></li>
              <li><Link href="#reviews" className="hover:text-brand-indigo transition-colors">Guest Reviews</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-indigo shrink-0 mt-0.5" />
                <span>909 S Frio St<br />San Antonio, TX 78207</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-indigo shrink-0" />
                <a href="tel:+12101234567" className="hover:text-brand-indigo transition-colors">(210) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-indigo shrink-0" />
                <a href="mailto:info@riverinnmotel.com" className="hover:text-brand-indigo transition-colors">info@riverinnmotel.com</a>
              </li>
            </ul>
          </div>

          {/* Map/Booking CTA */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Ready to Stay?</h4>
            <a
              href="https://bookingengine.stayflexi.com/?hotel_id=36119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center w-full bg-brand-indigo hover:bg-brand-indigo-dark text-white px-6 py-3 rounded-lg font-medium transition-colors mb-4"
            >
              Book Now
            </a>
            <div className="h-24 bg-slate-800 rounded-lg overflow-hidden relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.341398863641!2d-98.50858178490408!3d29.418491082114757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f66170d5175%3A0xc3b8ebbb6312cd61!2s909%20S%20Frio%20St%2C%20San%20Antonio%2C%20TX%2078207!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
              <a 
                href="https://maps.google.com/?q=909+S+Frio+St,+San+Antonio,+TX"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="View on Google Maps"
              ></a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} River Inn Motel. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
