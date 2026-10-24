import Header from "./components/Header";
import Hero from "./components/Hero";
import StockTicker from "./components/StockTicker";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Countdown from "./components/Countdown";
import Calculator from "./components/Calculator";
import Pricing from "./components/Pricing";
import Instructions from "./components/Instructions";
import Testimonials from "./components/Testimonials";
import Detector from "./components/Detector";
import Donor from "./components/Donor";
import Struggle from "./components/Struggle";
import Licenses from "./components/Licenses";
import Company from "./components/Company";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ZinaidaChat from "./components/ZinaidaChat";
import CookiesBanner from "./components/CookiesBanner";
import NotFound from "./components/NotFound";

export default function App({ initialNotFound }: { initialNotFound: boolean }) {
  // Редирект с 404.html: если путь был не корневой — показываем страницу 404
  if (initialNotFound) {
    return (
      <div className="noise">
        <NotFound />
      </div>
    );
  }

  return (
    <div className="noise">
      <Header />
      <main>
        <Hero />
        <StockTicker />
        <Stats />
        <Products />
        <Countdown />
        <Calculator />
        <Pricing />
        <Instructions />
        <Testimonials />
        <Detector />
        <Donor />
        <Struggle />
        <Licenses />
        <Company />
        <Partners />
        <Roadmap />
        <Faq />
      </main>
      <Footer />
      <CartDrawer />
      <ZinaidaChat />
      <CookiesBanner />
    </div>
  );
}
