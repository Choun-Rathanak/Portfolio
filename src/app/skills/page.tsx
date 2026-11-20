import Skills from "@/components/Skills";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "Skills - Choun Rathanak",
  description: "Technical skills and expertise in Software development",
};

export default function SkillsPage() {
  return (
    <>
      <BackToHome />
      <Skills />
    </>
  );
}
