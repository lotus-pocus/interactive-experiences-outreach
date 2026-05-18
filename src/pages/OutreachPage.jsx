import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import Capabilities from "../components/Capabilities";
import AudienceSection from "../components/AudienceSection";
import WorkSection from "../components/WorkSection";
import "../styles/work.css";
import CTASection from "../components/CTASection";
import "../styles/cta.css";
import "../styles/hero.css";
import "../styles/intro.css";
import "../styles/capabilities.css";
import "../styles/audience.css";
import LiveEngagement from "../components/LiveEngagement";
import "../styles/live-engagement.css";
import BrowserBenefits from "../components/BrowserBenefits";
import "../styles/browser-benefits.css";
import MoreWork from "../components/MoreWork";
import "../styles/more-work.css";
import StatsSection from "../components/StatsSection";
import "../styles/stats.css";

export default function OutreachPage() {
  return (
    <div>
      <Hero />
      <IntroSection />
      <BrowserBenefits />
      <WorkSection />
      <StatsSection />
      <Capabilities />
      <AudienceSection />
      <LiveEngagement />
      <MoreWork />
      <CTASection />
    </div>
  );
}