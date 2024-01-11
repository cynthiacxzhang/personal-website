import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { Projects } from "@/components/Projects";
import Aboutme from "@/components/Aboutme";
import Homepage from "@/components/Homepage";



export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Aboutme />
      <Projects />
      <Contact />

    </>
  )
}
