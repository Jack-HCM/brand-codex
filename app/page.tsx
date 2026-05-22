import Sidebar from "@/components/Sidebar";
import Cover from "@/components/sections/Cover";
import BrandOverview from "@/components/sections/BrandOverview";
import LogoSystem from "@/components/sections/LogoSystem";
import ColourPalette from "@/components/sections/ColourPalette";
import Typography from "@/components/sections/Typography";
import Iconography from "@/components/sections/Iconography";
import UIComponents from "@/components/sections/UIComponents";
import BrandApplications from "@/components/sections/BrandApplications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:pl-56 pt-[57px] lg:pt-0">
        <Cover />
        <BrandOverview />
        <LogoSystem />
        <ColourPalette />
        <Typography />
        <Iconography />
        <UIComponents />
        <BrandApplications />
        <Contact />
      </main>
    </div>
  );
}
