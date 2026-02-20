import Navbar from "@/src/components/layouts/Navbar";
import ProjectsPage from "@/src/features/project/ProjectPage";

export default function Project() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-screen flex items-center justify-center p-6 bg-main-bg">
          <ProjectsPage />
        </section>
      </main>
    </>
  );
}
