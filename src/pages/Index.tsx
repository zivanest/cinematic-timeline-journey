
import { motion } from "framer-motion";
import { TimelineCard } from "@/components/TimelineCard";

const researchQuestions = [
  {
    question: "Who were the Lumière brothers, and what was their contribution to cinema?",
    answer: "The Lumière brothers, Auguste and Louis, were French inventors and pioneers in early cinema. In 1895, they developed the Cinématographe, a motion-picture camera and projector system. Their first public screening on December 28, 1895, in Paris, is traditionally regarded as the birth of cinema.",
  },
  {
    question: "What is silent cinema and who were its key figures?",
    answer: "Silent cinema refers to films produced without synchronized sound, relying on visual storytelling, exaggerated acting, and intertitles for dialogue. One of the most iconic figures of this era was Charlie Chaplin, a comedian and filmmaker known for his character 'The Tramp' and films like The Kid (1921) and City Lights (1931).",
  },
  {
    question: "What was the significance of The Jazz Singer (1927)?",
    answer: "The Jazz Singer was the first feature-length film to incorporate synchronized dialogue, marking the transition from silent films to 'talkies.' Released in 1927, it revolutionized the film industry and demonstrated the commercial potential of synchronized sound in cinema.",
  },
  {
    question: "How did color influence cinema?",
    answer: "The introduction of color in cinema added a new layer of realism and artistic expression. Early films like The Wizard of Oz (1939) and Gone with the Wind (1939) showcased Technicolor technology, enhancing storytelling and visual appeal. Over time, color became the standard, allowing filmmakers to create more immersive experiences.",
  },
  {
    question: "What are three key technological advancements in film?",
    answer: "1. Sound in film revolutionized cinema by enabling synchronized dialogue and music. 2. CGI (Computer-Generated Imagery) transformed visual effects, allowing creation of realistic fantastical scenes as seen in Jurassic Park (1993). 3. Digital filmmaking made production more efficient and accessible while providing high-definition visuals.",
  },
  {
    question: "How has streaming changed cinema?",
    answer: "Streaming platforms like Netflix, Hulu, and Disney+ have transformed how audiences consume films, making them more accessible worldwide. Traditional movie theaters face competition as more people prefer on-demand content at home. Additionally, streaming services now produce original films, blurring the line between theatrical and digital releases.",
  },
];

const timelineData = [
  {
    year: "1895",
    event: "First Public Film Screening",
    description:
      "The Lumière brothers hold the first public screening of films in Paris. This event marks the birth of cinema as we know it.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
  },
  {
    year: "1915",
    event: "The Birth of a Nation",
    description:
      "Release of D.W. Griffith's The Birth of a Nation. Notable for its groundbreaking film techniques and controversial content; it is one of the first feature-length films.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
  },
  {
    year: "1927",
    event: "The Jazz Singer",
    description:
      "The release of The Jazz Singer, the first feature-length 'talkie.' This film revolutionized the industry by integrating synchronized sound, leading to the decline of silent films.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
  },
  {
    year: "1939",
    event: "The Wizard of Oz",
    description:
      "The release of The Wizard of Oz, one of the first full-color films using Technicolor. This film showcased the power of color in storytelling, making it visually stunning and beloved.",
    image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
  },
  {
    year: "1950s",
    event: "The Rise of Television",
    description:
      "Television becomes popular, impacting movie attendance. Many film studios begin to adapt by creating new formats and genres to attract audiences back to theaters.",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
  },
  {
    year: "1977",
    event: "Star Wars",
    description:
      "Release of Star Wars, directed by George Lucas. This film revolutionized special effects and merchandising, becoming a cultural phenomenon.",
    image: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
  },
  {
    year: "1995",
    event: "First Fully Computer-Generated Feature Film",
    description:
      "Release of Toy Story, the first entirely CGI animated film. This marked a new era in animation, paving the way for future animated films.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
  },
  {
    year: "2000s",
    event: "The Rise of Streaming Platforms",
    description:
      "The emergence of platforms like Netflix and Hulu. Streaming changes how audiences access and consume films, leading to new distribution models.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
  },
  {
    year: "2020s",
    event: "The Impact of the Pandemic on Cinema",
    description:
      "The COVID-19 pandemic forces theaters to close, and studios release films directly to streaming services. This event accelerates the trend toward streaming and digital releases, reshaping the film industry.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80",
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Key Research Questions</h2>
          <div className="grid gap-8">
            {researchQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {item.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Timeline</h2>
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
