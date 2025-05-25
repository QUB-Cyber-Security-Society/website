import React, { useRef } from "react";
import NavBar from "./components/nav-bar";
import LandingSection from "./pages/landing/landing-section";
import EventsSection from "./pages/events/events-section";
import SocialsSection from "./pages/socials/socials-section";
import CommitteeSection from "./pages/committee/committee-section";
import Footer from "./components/footer";
import Fab from "./components/common/fab";

export type Section = "landing" | "events" | "committee" | "socials";

const App = () => {
  const landingRef = useRef<HTMLDivElement | null>(null);
  const eventsRef = useRef<HTMLDivElement | null>(null);
  const socialsRef = useRef<HTMLDivElement | null>(null);
  const committeeRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (section: Section) => {
    switch (section) {
      case "landing":
        landingRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "events":
        eventsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "socials":
        socialsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "committee":
        committeeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <NavBar scrollToRef={scrollToRef} />
      <LandingSection ref={landingRef} />
      <EventsSection ref={eventsRef} />
      <SocialsSection ref={socialsRef} />
      <CommitteeSection ref={committeeRef} />
      <Footer />
      <Fab />
    </>
  );
};

export default App;
