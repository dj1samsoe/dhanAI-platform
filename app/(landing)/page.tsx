import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import NextTopLoader from "nextjs-toploader";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <NextTopLoader />
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
