"use client";

import { motion } from "framer-motion";
import { Users, BedDouble, ArrowRight } from "lucide-react";
import Image from "next/image";

const STAYFLEXI_URL = "https://bookingengine.stayflexi.com/?hotel_id=36119";

const rooms = [
  {
    title: "King Room",
    description: "Experience ultimate comfort in our spacious King Room, perfect for couples or solo travelers looking for extra space to relax.",
    image: "/images/king.png",
    capacity: "2 Guests",
    bed: "1 King Bed",
  },
  {
    title: "Double Queen Room",
    description: "Ideal for families or friends traveling together, offering two comfortable queen beds with all the modern amenities you need.",
    image: "/images/queen.png",
    capacity: "4 Guests",
    bed: "2 Queen Beds",
  },
  {
    title: "Deluxe Room",
    description: "Our premium offering featuring a King bed and elegant mirrored walls, creating a sophisticated and spacious atmosphere.",
    image: "/images/deluxe.png",
    capacity: "2 Guests",
    bed: "1 King Bed",
  },
  {
    title: "Accessible Room",
    description: "Thoughtfully designed for comfort and ease of use, featuring spacious layouts, roll-in showers, and accessible amenities.",
    image: "/images/accessible.png",
    capacity: "2 Guests",
    bed: "1 King or Queen Bed",
  }
];


export default function RoomTypes() {
  return (
    <section id="rooms" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Rest & Recharge
            </h2>
            <p className="text-lg text-slate-600">
              Choose from our selection of recently updated rooms, designed with your comfort in mind.
            </p>
          </div>
          <a
            href={STAYFLEXI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-brand-indigo font-semibold hover:text-brand-indigo-dark transition-colors group"
          >
            Check Availability 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
            >
              <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {room.title}
                </h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg text-sm font-medium">
                    <Users className="w-4 h-4 text-brand-indigo" />
                    {room.capacity}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg text-sm font-medium">
                    <BedDouble className="w-4 h-4 text-brand-indigo" />
                    {room.bed}
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {room.description}
                </p>
                <a
                  href={STAYFLEXI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-slate-900 hover:bg-brand-indigo text-white px-6 py-3.5 rounded-xl font-medium transition-colors"
                >
                  Book This Room
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <a
            href={STAYFLEXI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 text-brand-indigo font-semibold hover:text-brand-indigo-dark transition-colors"
          >
            Check All Availability 
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
