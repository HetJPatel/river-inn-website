"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const attractions = [
  { name: "UTSA Downtown Campus", distance: "0.5 mi", description: "The University of Texas at San Antonio downtown campus." },
  { name: "Market Square", distance: "0.8 mi", description: "Historic market area with Mexican culture, shops, and dining." },
  { name: "San Antonio Riverwalk", distance: "1.9 mi", description: "Iconic city park and network of walkways along the banks of the San Antonio River." },
  { name: "The Alamo", distance: "2.0 mi", description: "Historic Spanish mission and fortress compound." },
  { name: "Henry B. González Convention Center", distance: "2.1 mi", description: "Major event venue in downtown San Antonio." },
];

export default function Attractions() {
  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-slate-50 rounded-full opacity-50 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Best of San Antonio, <span className="text-brand-indigo">At Your Doorstep</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Location is everything. Situated near the heart of downtown San Antonio and just minutes from the UTSA campus, River Inn Motel puts you right where you need to be. Spend less time commuting and more time experiencing our vibrant city.
              </p>

              <div className="space-y-6">
                {attractions.map((item, index) => (
                  <div key={item.name} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-10 h-10 bg-brand-indigo/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-brand-indigo" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-lg font-semibold text-slate-900">{item.name}</h4>
                        <span className="text-sm font-medium text-brand-indigo bg-brand-indigo/10 px-2 py-0.5 rounded">
                          {item.distance}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-brand-indigo/5 border border-slate-100">
            {/* Simple Map Embed Placeholder - In production, this would be a real map embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.341398863641!2d-98.50858178490408!3d29.418491082114757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f66170d5175%3A0xc3b8ebbb6312cd61!2s909%20S%20Frio%20St%2C%20San%20Antonio%2C%20TX%2078207!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing River Inn Motel location"
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
