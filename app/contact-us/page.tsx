import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";
import CTASection from "../../components/CTASection/CTASection";
import Footer from "../../components/Footer/Footer";

export default function ContactUs() {
  return (
    <main style={{ background: '#fff' }}>
      <Header />
      <ContactForm />
      <CTASection />
      <Footer />
    </main>
  );
}
