
import { motion } from "framer-motion";
import { TimelineCard } from "@/components/TimelineCard";

const timelineData = [
  {
    year: "1895",
    event: "First Public Film Screening",
    description:
      "The Lumière brothers hold the first public screening of films in Paris. This event marks the birth of cinema as we know it.",
  },
  {
    year: "1915",
    event: "The Birth of a Nation",
    description:
      "Release of D.W. Griffith's The Birth of a Nation. Notable for its groundbreaking film techniques and controversial content; it is one of the first feature-length films.",
  },
  {
    year: "1927",
    event: "The Jazz Singer",
    description:
      "The release of The Jazz Singer, the first feature-length 'talkie.' This film revolutionized the industry by integrating synchronized sound, leading to the decline of silent films.",
  },
  {
    year: "1939",
    event: "The Wizard of Oz",
    description:
      "The release of The Wizard of Oz, one of the first full-color films using Technicolor. This film showcased the power of color in storytelling, making it visually stunning and beloved.",
  },
  {
    year: "1950s",
    event: "The Rise of Television",
    description:
      "Television becomes popular, impacting movie attendance. Many film studios begin to adapt by creating new formats and genres to attract audiences back to theaters.",
  },
  {
    year: "1977",
    event: "Star Wars",
    description:
      "Release of Star Wars, directed by George Lucas. This film revolutionized special effects and merchandising, becoming a cultural phenomenon.",
  },
  {
    year: "1995",
    event: "First Fully Computer-Generated Feature Film",
    description:
      "Release of Toy Story, the first entirely CGI animated film. This marked a new era in animation, paving the way for future animated films.",
  },
  {
    year: "2000s",
    event: "The Rise of Streaming Platforms",
    description:
      "The emergence of platforms like Netflix and Hulu. Streaming changes how audiences access and consume films, leading to new distribution models.",
  },
  {
    year: "2020s",
    event: "The Impact of the Pandemic on Cinema",
    description:
      "The COVID-19 pandemic forces theaters to close, and studios release films directly to streaming services. This event accelerates the trend toward streaming and digital releases, reshaping the film industry.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] overflow-x-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            The Evolution of Cinema
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A journey through the most significant moments that shaped the history
            of filmmaking
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:items-end" : "md:items-start"
                  }`}
                >
                  <div
                    className={`relative md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <TimelineCard {...item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
