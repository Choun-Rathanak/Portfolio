import Projects from "@/components/Projects";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "Projects - Choun Rathanak",
  description: "Portfolio of Software Development projects and work",
};

export default function ProjectsPage() {
  return (
    <>
      <BackToHome />
      <Projects />
    </>
  );
}
