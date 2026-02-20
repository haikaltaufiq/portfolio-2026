import Navbar from "@/src/components/layouts/Navbar";
import AboutPage from "@/src/features/about/AboutPage";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-screen flex items-center justify-center p-6 bg-main-bg">
          <AboutPage />
        </section>
      </main>
    </>
  );
}
