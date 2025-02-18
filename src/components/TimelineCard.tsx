
import { motion } from "framer-motion";

interface TimelineCardProps {
  year: string;
  event: string;
  description: string;
}

export const TimelineCard = ({ year, event, description }: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="timeline-card"
    >
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
