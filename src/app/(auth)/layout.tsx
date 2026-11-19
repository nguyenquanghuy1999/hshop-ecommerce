import Footer from "@/src/components/shared/Footer";
import Header from "@/src/components/shared/Header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header variant="auth" />
      {children}
      <Footer />
    </>
  );
}
