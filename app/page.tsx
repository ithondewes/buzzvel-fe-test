import { ClosingCta } from "@/components/closing-cta";
import { ContactSection } from "@/components/contact-section";
import { FeaturedCourse } from "@/components/featured-course";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { People } from "@/components/people";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillTracks } from "@/components/skill-tracks";
import { SocialProof } from "@/components/social-proof";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Luma",
  description:
    "Practical courses taught by people who do the work. Learn design, technology, business and more.",
  email: "contact@luma.com",
};

export default function HomePage() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        <SkillTracks />
        <FeaturedCourse />
        <HowItWorks />
        <SocialProof />
        <People />
        <ContactSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
