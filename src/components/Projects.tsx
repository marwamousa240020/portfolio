import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Project One",
    category: "ML",
    categoryColor: "lavender",
    description:
      "Describe your first project here. What problem did it solve? What technologies did you use? What was the outcome?",
    tags: ["Python", "TensorFlow", "Computer Vision"],
    link: "#",
  },
  {
    title: "Project Two",
    category: "NLP",
    categoryColor: "peach",
    description:
      "Describe your second project here. Add details about the approach and results you achieved.",
    tags: ["Whisper", "Transformers", "NLP"],
    link: "#",
  },
  {
    title: "Project Three",
    category: "BI",
    categoryColor: "mint",
    description:
      "Another project description. Highlight the key challenges and how you overcame them.",
    tags: ["Power BI", "Python", "Data Viz"],
    link: "#",
  },
  {
    title: "Project Four",
    category: "DS",
    categoryColor: "rose",
    description:
      "Yet another project. Share what makes this work unique and the impact it had.",
    tags: ["Scikit-learn", "Pandas", "EDA"],
    link: "#",
  },
  {
    title: "Project Five",
    category: "CV",
    categoryColor: "sky",
    description:
      "Describe one more project. Include methods, tools, and what you learned.",
    tags: ["CNN", "Transfer Learning", "XAI"],
    link: "#",
  },
  {
    title: "Project Six",
    category: "AI",
    categoryColor: "lavender",
    description:
      "Your final showcase project. Summarize the scope, approach, and deliverables.",
    tags: ["Random Forest", "Deep Learning", "API"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
