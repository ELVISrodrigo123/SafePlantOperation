import ResponsiveGreeting from "../components/ui/AnnualProgressChart/InfoSection";
import HeaderNavbar from "../components/ui/HeaderNavbar/HeaderNavbar";
import PreventCardSection from "../components/ui/PreventCard/SafetySection";
import SectionIA from "../components/ui/SectionIA/SectionIA";
import SectorCard from "../components/ui/SectorCard/SectorCard";
import FeaturesSection from "../components/ui/SimpletComponent/SimpletComponent";
import Leo from "../components/ui/leo/leo";

export default function Home() {
  return (
    <main>
      <HeaderNavbar></HeaderNavbar>
      <ResponsiveGreeting></ResponsiveGreeting>
      <FeaturesSection></FeaturesSection>
      <SectorCard></SectorCard>
      <PreventCardSection></PreventCardSection>
      <SectionIA></SectionIA>
      <Leo></Leo>
    </main>
  );
}
