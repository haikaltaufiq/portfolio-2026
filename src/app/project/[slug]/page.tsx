import { notFound } from "next/navigation";
import { projectsData, projectsList } from "@/src/data/project";
import ProjectDetailRenderer from "@/src/features/portfolio/components/project-details";
import Navbar from "@/src/components/layouts/Navbar";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }> | { slug: string };
};

export function generateStaticParams() {
  return projectsList.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await Promise.resolve(params);
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-screen flex items-center justify-center p-6 bg-main-bg">
          <ProjectDetailRenderer project={project} />
        </section>
      </main>
    </>
  );
}
