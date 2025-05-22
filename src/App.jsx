import Hero from "./components/Hero"
import Nav from "./components/Nav"
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


  return (
    <>
    <MouseTrackerProvider>
<CustomTracker/>
      <div style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
      <Nav />
      <Hero />
    </div>
    <Discover/>
    <CoffeStyle/>
    <Different/>
    <AmazingMorning/>
    <Feedback/>
    <Footer/>
    <FooterB/>
    </MouseTrackerProvider>
    </>
  )
}

export default App
