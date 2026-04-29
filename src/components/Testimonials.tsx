"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    author: "Jessica",
    date: "2 weeks ago",
    content: "5 Stars: Amazing stay! The rooms were very clean and the staff is absolutely amazing. It was quiet and in a perfect location—very close to convenience stores, Historic Market Square, The Alamo, and the Riverwalk. Having a laundromat nearby was also a huge plus for us! We were for 2 days. ",
    rating: 5,
  },
  {
    author: "Danielle",
    date: "1 month ago",
    content: "I give 5 star because I been there one time in my life n I remember it being no complaining fr lol",
    rating: 5,
  },
  {
    author: "Brandy",
    date: "2 months ago",
    content: "Me and my husband stop here while traveling back home to Kentucky the rooms we clean and it was quite it is located right off of I-35 but you don’t hear the interstate traffic we will definitely be going back if we are down here there is a key and remote deposit but you get it back when you return the remote definitely a great room at a great price",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-indigo via-slate-900 to-slate-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Guest Experiences
          </h2>
          <p className="text-lg text-slate-400">
            Don't just take our word for it. Here is what our recent guests have to say about their stay at River Inn Motel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 transition-colors"
            >
              <div className="flex text-brand-indigo mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-slate-600 mb-4" />
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-indigo flex items-center justify-center font-bold text-lg text-white">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{review.author}</h4>
                  <span className="text-sm text-slate-400">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
