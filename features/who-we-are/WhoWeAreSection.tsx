import { PurposeTile } from "@/features/who-we-are/components/PurposeTile";
import { WhoWeAreHero } from "@/features/who-we-are/components/WhoWeAreHero";
import { whoWeAreContent } from "@/features/who-we-are/whoWeAre.constants";
export function WhoWeAreSection() {
  return (
    <section className="w-full px-6 py-10 lg:px-35 lg:py-14">
      <div className="mx-auto w-full max-w-[1240px]">
        <WhoWeAreHero
          title={whoWeAreContent.title}
          description={whoWeAreContent.heroDescription}
        />

        <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          <PurposeTile
            title={whoWeAreContent.missionTitle}
            description={whoWeAreContent.missionDescription}
            variant="blue"
          />
          <PurposeTile
            title={whoWeAreContent.visionTitle}
            description={whoWeAreContent.visionDescription}
            variant="yellow"
          />
        </div>
      </div>
    </section>
  );
}
