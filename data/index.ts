import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Podcasting App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Connect with me on my Gmail",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Podcastr - A podcast Platform",
    des: "A Unique software as a service App, AI powered features like text to speech and AI generated images to host podcasts.",
    img: "./p1.svg",
    iconLists: [
      ,
      "./ts.svg",
      "./next.svg",
      "./zod.svg",
      "./convex.svg",
      "./tail.svg",
      "./openAI.svg",
      "./shadcn.svg",
    ],
    link: "https://github.com/adrianhajdin/podcastr",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./ts.svg",
      "./stream.svg",
      "./c.svg",
    ],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./three.svg", "./c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: [
      "./next.svg",
      "./tail.svg",
      "./ts.svg",
      "./three.svg",
      "./gsap.svg",
    ],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    id: "1",
    quote:
      "Ved Srivastava is a consistently good performer and a quick learner. Once he had good understanding of the project, he would proceed with a single-minded dedication. He used to figure out how the website can be user friendly and easy to access for others. He also contributed to streamlined data organization and improved resource utilization. He is very much proactive and ready to take initiative to help others as well. In addition to their technical skills, Ved Srivastava demonstrated outstanding professional conduct throughout the internship. His punctuality, attention to detail, and ability to meet deadlines consistently impressed our team. He approached his responsibilities with a high level of integrity and professionalism. We wish him bright and successful career ahead.",
    name: "Ms. Chanchal Sagar",
    title:
      "Sr. Technical Officer at The Council of Scientific and Industrial Research, Govt. of India, Delhi",
  },
  {
    id: "2",
    quote:
      "Ved worked hard during his internship in React.js at Staqu. He learned quickly and always tried his best. He has a strong desire to learn and isn't afraid to ask questions to improve his understanding. He actively seeks guidance from the team, showing his commitment to growth and collaboration. I'm sure he'll do some good work in the future.",
    name: "Dev Prasan Bhardwaj",
    title: "Frontend Team Lead at Staqu Technologies, Gurugram",
  },
  {
    id: "3",
    quote:
      "I had the pleasure of working closely with Ved on several projects at Staqu technologies, and I can confidently say that he is one of the most talented and dedicated frontend developers I've ever met. I highly recommend Ved for any frontend development role. He will undoubtedly bring innovation, expertise, and a positive attitude to any project he undertakes.",
    name: "Shubham Baswal",
    title: "Senior Frontend Developer at Staqu Techologies, Gurugram",
  },

  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    // name: "Staqu Technologies",
    img: "./staquLogo.svg",
    title: "Staqu Technologies",
  },
  {
    id: 2,
    // name: "Council of Scientific and Industrial Research",
    img: "./CSIR_Logo.svg",
    title: "Council of Scientific and Industrial Research",
  },
  {
    id: 3,
    // name: "HOSTINGER",
    img: "./microsoftLogo.svg",
    title: "Microsoft",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based Sales Panel using React.js, Redux.js enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    desc: "Designed and developed a Project Management Dashboard with mock data using GraphQL and Nest.js",
    className: "md:col-span-2",
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "App Dev Project - DeliBuddy",
    desc: "Developed the Frontend of a web-based application for ordering food and ameneties within my college campus",
    className: "md:col-span-2",
    thumbnail: "./exp3.svg",
  },
  {
    id: 4,
    title: "Apprenticeship at Microsoft",
    desc: "Learnt some core cocepts of DSA as a Mentee through Microsoft Engage",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: "https://github.com/Ved-srv",
  },
  {
    id: 2,
    img: "./twit.svg",
    link: "https://x.com/v3dgasm",
  },
  {
    id: 3,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/ved-srivastava-5362a3186/",
  },
];
