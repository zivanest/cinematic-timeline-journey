
import { motion } from "framer-motion";

interface TimelineCardProps {
  year: string;
  event: string;
  description: string;
  image?: string;
}

export const TimelineCard = ({ year, event, description, image }: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="timeline-card"
    >
      {image && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img 
            src={image} 
            alt={event}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <span className="text-primary text-sm font-medium tracking-wider">
          {year}
        </span>
        <h3 className="text-xl font-semibold tracking-tight">{event}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
