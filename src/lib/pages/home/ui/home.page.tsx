import {
  CallToActionButtons,
  Experience,
  HeroImage,
  HeroWelcome,
  SocialLinks,
} from "./components";

export const HomePage = () => {
  return (
    <section>
      <div className="container py-[136px] grid grid-cols-2 gap-10">
        <div>
          <HeroWelcome />
          <SocialLinks />
          <CallToActionButtons />
          <Experience />
        </div>
        <div className="h-full flex items-start justify-center">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};
