import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  category: string;
  categoryColor: "lavender" | "peach" | "mint" | "rose" | "sky";
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

const colorMap = {
  lavender: "bg-lavender text-lavender-foreground",
  peach: "bg-peach text-peach-foreground",
  mint: "bg-mint text-mint-foreground",
  rose: "bg-rose text-rose-foreground",
  sky: "bg-sky text-sky-foreground",
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Image placeholder */}
      <div className="relative h-48 bg-muted overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-lavender to-peach">
            <span className="text-muted-foreground text-sm">Project Image</span>
          </div>
        )}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${colorMap[project.categoryColor]}`}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink size={14} />
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
