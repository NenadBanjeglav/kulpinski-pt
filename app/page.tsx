import Hero from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

/* eslint-disable tailwindcss/no-custom-classname */
export default function Home() {
  return (
    <AuroraBackground>
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </AuroraBackground>
  );
}
