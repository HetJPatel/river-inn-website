import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import RoomTypes from "@/components/RoomTypes";
import Attractions from "@/components/Attractions";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Amenities />
        <RoomTypes />
        <Attractions />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
