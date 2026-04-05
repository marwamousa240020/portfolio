import { motion } from "framer-motion";
import { MapPin, Briefcase, Languages } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl border border-border p-8 shadow-sm"
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            Through my projects, I've worked on machine learning, computer vision, and robotics—developing models, designing pipelines, and integrating systems from start to finish. I enjoy turning complex problems into practical solutions and continuously improving performance through experimentation and iteration.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm currently looking for internship opportunities where I can apply my skills, learn from real-world challenges, and grow as an AI engineer.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender text-lavender-foreground text-sm font-medium">
              <MapPin size={14} />
              Netherlands
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peach text-peach-foreground text-sm font-medium">
              <Briefcase size={14} />
              Open to internships
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint text-mint-foreground text-sm font-medium">
              <Languages size={14} />
              Arabic · English · Nederlands · French
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
