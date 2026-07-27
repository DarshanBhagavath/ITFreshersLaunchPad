import { Job } from "./types";

export const LOCATIONS = [
  "Bangalore / Bengaluru",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Mumbai",
  "Delhi NCR",
];

export const JOBS: Job[] = [
  {
    id: "1",
    title: "Junior Software Engineer",
    company: "Tech Mahindra",
    location: "Pune",
    description: "Looking for a fresh graduate with strong foundation in Java and Object-Oriented Programming. You will be working on enterprise web applications, collaborating with senior developers, and writing scalable code. BE/BTech freshers can apply.",
    tags: ["Java", "Spring Boot", "SQL"],
  },
  {
    id: "2",
    title: "Frontend Developer (Fresher)",
    company: "Infosys",
    location: "Bangalore",
    description: "We are hiring passionate freshers to build responsive user interfaces. You should have a good understanding of HTML, CSS, JavaScript, and ideally a modern framework like React or Angular. BE/BTech freshers can apply.",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: "3",
    title: "Data Analyst Trainee",
    company: "TCS",
    location: "Chennai",
    description: "Start your career in data! We need freshers with analytical minds. Familiarity with Python, basic SQL, and Excel is required. You will help clean data and generate insightful reports. BE/BTech freshers can apply.",
    tags: ["Python", "SQL", "Data Analysis"],
  },
  {
    id: "4",
    title: "Backend Developer (Node.js)",
    company: "Wipro",
    location: "Hyderabad",
    description: "Join our backend team! We are looking for recent graduates with knowledge of JavaScript, Node.js, and REST APIs. You will develop microservices and integrate with databases. BE/BTech freshers can apply.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: "5",
    title: "QA Automation Engineer",
    company: "Cognizant",
    location: "Mumbai",
    description: "Ensure software quality! We are seeking freshers interested in automated testing. Basic programming skills and an understanding of software testing lifecycles are required. BE/BTech freshers can apply.",
    tags: ["Testing", "Selenium", "Java"],
  },
  {
    id: "6",
    title: "Full Stack Developer Trainee",
    company: "HCL Technologies",
    location: "Delhi NCR",
    description: "Exciting opportunity for freshers to work across the stack. You will learn and work with React for the frontend and Node.js for the backend. Strong problem-solving skills needed. BE/BTech freshers can apply.",
    tags: ["React", "Node.js", "Full Stack"],
  },
  {
    id: "7",
    title: "Cloud Support Associate",
    company: "Amazon Web Services",
    location: "Bangalore",
    description: "Start your cloud journey. Looking for freshers with basic networking and Linux knowledge. You will assist customers in troubleshooting AWS cloud infrastructure. BE/BTech freshers can apply.",
    tags: ["AWS", "Linux", "Networking"],
  },
  {
    id: "8",
    title: "AI/ML Intern/Fresher",
    company: "Accenture",
    location: "Hyderabad",
    description: "Fascinated by AI? We are hiring freshers with a strong math background and Python skills to train and deploy machine learning models under the guidance of senior scientists. BE/BTech freshers can apply.",
    tags: ["Machine Learning", "Python", "AI"],
  }
];
