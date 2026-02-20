import Navbar from "@/src/components/layouts/Navbar";
import ContactPage from "@/src/features/contact/ContactPage";

export default function Project() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-screen flex items-center justify-center p-6 bg-main-bg">
          <ContactPage />
        </section>
      </main>
    </>
  );
}
