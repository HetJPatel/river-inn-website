"use client";

import { motion } from "framer-motion";
import { Wifi, Clock, Tv, Snowflake, Coffee, Car } from "lucide-react";

const amenities = [
  { name: "Free Wi-Fi", icon: Wifi, description: "Stay connected with high-speed internet." },
  { name: "24/7 Front Desk", icon: Clock, description: "We're always here to assist you." },
  { name: "Flat-screen TVs", icon: Tv, description: "Premium cable channels included." },
  { name: "Air Conditioning", icon: Snowflake, description: "Individual climate control." },
  { name: "Fridge & Microwave", icon: Coffee, description: "In-room convenience for your snacks." },
  { name: "Free Parking", icon: Car, description: "Complimentary parking for all guests." },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-slate-600">
            Enjoy our thoughtfully curated amenities designed to make your stay in San Antonio comfortable and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-brand-indigo/20 hover:shadow-lg hover:shadow-brand-indigo/5 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-brand-indigo" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.name}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
