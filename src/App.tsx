import React from "react";
import NavBar from "./components/nav-bar";
import LandingSection from "./pages/landing/landing-section";
import EventsSection from "./pages/events/events-section";
import SocialsSection from "./pages/socials/socials-section";
import CommitteeSection from "./pages/committee/committee-section";

const App = () => {
  return (
    <div>
      <NavBar />
      <LandingSection />
      <EventsSection />
      <CommitteeSection />
      <SocialsSection />
    </div>
  );
};

export default App;
