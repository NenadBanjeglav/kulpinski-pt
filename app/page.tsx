import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

/* eslint-disable tailwindcss/no-custom-classname */
export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center  overflow-hidden p-5 dark:bg-black/95 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Clients />
        <Footer />
      </div>
    </main>
  );
}
