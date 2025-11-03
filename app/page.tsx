import CompanionCard from "@/components/CompanionCard";
import React from "react";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          subject="science"
          topic="Neural Network of the Brain"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy the number wizard"
          subject="Math"
          topic="Derivatives & Integrals"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="678"
          name="Verba the Vocabulary Builder"
          subject="Language"
          topic="English Literature"
          duration={45}
          color="#bde7ff"
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
