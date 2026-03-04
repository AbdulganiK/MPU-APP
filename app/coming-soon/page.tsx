import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ComingSoon from "@/components/coming-soon";

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />
      <ComingSoon 
        title="Coming Soon"
        description="Diese Seite ist in Arbeit. Wir arbeiten hart daran, dir bald das beste Erlebnis zu bieten."
      />
      <Footer />
    </>
  );
}
