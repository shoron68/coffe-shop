import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import bannerImg from './assets/bannerimg.png';
import CoffeStyle from "./components/CoffeStyle";
import Discover from "./components/Discover";
import Different from "./components/Different";
import AmazingMorning from "./components/AmazingMorning";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import FooterB from "./components/FooterB";
import { MouseTrackerProvider } from '@devdogukan/mouse-tracker';
import CustomTracker from "./components/CustomTracker";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const content = (
    <>
      <div
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Nav />
        <Hero />
      </div>
      <Discover />
      <CoffeStyle />
      <Different />
      <AmazingMorning />
      <Feedback />
      <Footer />
      <FooterB />
    </>
  );

  return (
    <>
      {!isMobile ? (
        <MouseTrackerProvider>
          <CustomTracker />
          {content}
        </MouseTrackerProvider>
      ) : (
        content
      )}
    </>
  );
}

export default App;
