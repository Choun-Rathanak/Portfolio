import About from "@/components/About";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "About Me - Choun Rathanak",
  description: "Learn more about Choun Rathanak, an aspiring Software developer",
};

export default function AboutPage() {
  return (
    <>
      <BackToHome />
      <About />
    </>
  );
}
