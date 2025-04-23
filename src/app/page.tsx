import Card from "@/components/card/card";
import ContactForm from "@/components/contactForm/contactForm";
import photo from '../../public/photo.jpg';

export default function Home() {
  const name = "Alex Davis";
  const college = "The University of Alabama";
  const fact = "Im working on getting my pilot's licence.";
  const timeAtCgi = "I have been with cgi for 3 years."

  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="grid grid-cols-2 gap-4 mx-auto">
        <div className="pt-5">
          <Card title={name} subtitle={college} image={photo}>{fact+" " + timeAtCgi}</Card>
        </div>
        <div className="pt-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
