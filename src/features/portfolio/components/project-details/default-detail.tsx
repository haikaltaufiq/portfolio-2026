import { ProjectDetail } from "@/src/data/project";

type DefaultDetailProps = {
  project: ProjectDetail;
};

export default function DefaultDetail({ project }: DefaultDetailProps) {
  return (
    <div className="space-y-5 border-t border-main-text/10 pt-8">
      {project.content.map((paragraph, index) => (
        <p
          key={`${project.slug}-content-${index}`}
          className="text-base leading-relaxed opacity-75"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
