import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages & Tools",
    color: "bg-lavender text-lavender-foreground",
    skills: ["Python", "SQL"],
  },
  {
    title: "ML & Data",
    color: "bg-peach text-peach-foreground",
    skills: ["Machine Learning", "Computer Vision", "Robotics"],
  },
  {
    title: "Core Skills",
    color: "bg-mint text-mint-foreground",
    skills: ["Data Pipelines", "Model Development", "System Integration"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 text-center"
            >
              <h3 className="font-display text-lg font-semibold mb-4 text-primary">
                {cat.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${cat.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
