import { AccordionData } from "@/components/Shared/Interfaces/accordionData.interface";
import student from "@/assets/Images/Emojies/Student.png";
import designer from "@/assets/Images/Emojies/Designer.png";
import companies from "@/assets/Images/Emojies/Companies.png";
import qa from "@/assets/Images/Emojies/QA.png";
import manbehindpc from "@/assets/Images/Emojies/ManBehindPC.png";

export const info: AccordionData[] = [
  {
    questionName: "Student Developers",
    summary: "Student Developers",
    description:
      "Unlock your coding potential and turn your passion for coding into tangible experience. Our platform connects you with like-minded student developers, enabling you to collaborate on pet projects and real-world assignments from our pool of esteemed customers. Build your portfolio, enhance your skills, and make valuable connections that will propel your career forward. Participate in thrilling coding tournaments that will not only test your skills but also determine your proficiency level. Take advantage of mentorship opportunities from seasoned developers and receive premium projects and AI code review to supercharge your growth.",
    icon: student,
  },
  {
    questionName: "Experienced Developers",
    summary: "Experienced Developers",
    description:
      "Your expertise is invaluable, and we provide a platform where you can inspire and guide the next generation of developers. Become a mentor and help shape the careers of aspiring developers, offering your insights, knowledge, and real-world experience. Showcase your skills through collaborative projects with other experienced developers, tackling complex challenges that will keep your skills razor-sharp. Participate in coding tournaments and benchmark yourself against the best. Access premium projects and take advantage of AI code review to further refine your craft.",
    icon: manbehindpc,
  },
  {
    questionName: "UX/UI Designers",
    summary: "UX/UI Designers",
    description:
      "Your expertise in crafting seamless user experiences is in high demand. Join our platform to collaborate with developers, companies, and startups on cutting-edge projects. Showcase your design skills, work in multidisciplinary teams, and contribute to the creation of exceptional digital products. Join us and make a significant impact with your designs.",
    icon: designer,
  },
  {
    questionName: "QA/Test Engineers",
    summary: "QA/Test Engineers",
    description:
      "Quality assurance is a crucial aspect of any software project, and as a QA/test engineer, your expertise ensures that applications meet the highest standards. At our platform, you'll have the opportunity to collaborate with developers and companies as a QA/test engineer, ensuring the functionality, reliability, and performance of software solutions. Join project teams, contribute to testing strategies, and validate the quality of applications.",
    icon: qa,
  },
  {
    questionName: "Companies & Startups",
    summary: "Companies & Startups",
    description:
      "Finding the right talent for your projects can be a daunting task, but we're here to simplify it for you. Tap into our extensive pool of skilled developers, carefully curated and ready to take on your challenges. Post your projects on our platform and let our  talented student and experienced developer teams bring them to life.Say goodbye to lengthy hiring processes, as our platform streamlines the process of finding the right developers for your team. Connect with a community passionate about coding and access a talent pool eager to contribute to your success.",
    icon: companies,
  },
];
