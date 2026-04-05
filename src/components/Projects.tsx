import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Skin-Tone Image Classifier",
    category: "Deep Learning",
    categoryColor: "lavender",
    description:
      "Built an AI-powered skin-tone image classifier for Innovation Square at BUas. Combined a TensorFlow/Keras deep learning model with Grad-CAM explainability, bias analysis, and a human-centered UI prototype — pitched as a venture to BUas Startup Support.",
    tags: ["TensorFlow", "Keras", "Grad-CAM", "XAI", "UX Design"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Healthcare ML Analysis",
    category: "ML",
    categoryColor: "mint",
    description:
      "Analysed healthcare datasets (diabetes, house prices) by building and comparing classification, regression, and clustering models. Evaluated model performance and serialised the best models for deployment.",
    tags: ["scikit-learn", "Pandas", "NumPy", "Logistic Regression", "Clustering"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Stock Market Prediction Engine",
    category: "MLOps",
    categoryColor: "peach",
    description:
      "Collaborated with a team and individually for Move Tickers to predict NASDAQ-100 opening gaps and trading dynamics. Built production-ready ML pipelines with XGBoost and a deep neural network, using global market indices, macroeconomic indicators, and time series forecasting.",
    tags: ["XGBoost", "TensorFlow", "Time Series", "PostgreSQL", "pytest"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Data Exploration Dashboard",
    category: "BI",
    categoryColor: "sky",
    description:
      "Built interactive Power BI dashboards to explore and visualise datasets as part of foundational data science work, developing skills in data wrangling, storytelling, and Python scripting.",
    tags: ["Power BI", "Python", "Data Viz", "EDA"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
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
