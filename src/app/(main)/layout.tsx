import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import { Toaster } from "../../components/ui/toast";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mt-20 min-h-screen px-2.5 md:mt-30.5 md:px-12.5 lg:px-17.5 xl:px-25">
        {children}
      </main>
      <Toaster />
      <Footer />
    </>
  );
}
