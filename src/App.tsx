import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Detector from "./components/Detector";
import Donor from "./components/Donor";
import Struggle from "./components/Struggle";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  return (
    <div className="noise">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Products />
        <Pricing />
        <Testimonials />
        <Detector />
        <Donor />
        <Struggle />
        <Roadmap />
        <Faq />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
