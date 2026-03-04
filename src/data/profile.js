import arup from "../assets/arup.jpg";
import agencyAi from "../assets/agency_ai.png";
import acme from "../assets/acme.png";
import arupsZone from "../assets/arups_zone.png";
import arupsSuits from "../assets/arups_suits.png";
import photography from "../assets/photography.png";
import mlAdvisor from "../assets/ml_advisor.png";
import sscCertificate from "../assets/ssc-certificate.png";
export const profile = {
  image: arup,
  
  name: "Arup Ratan Dey",
  title: "Competitive Programmer & Web Developer",
  university: "Metropolitan University, Sylhet",
  email: "arupratandey3250@gmail.com",
  github: "https://github.com/arup-ratan-dey",
  linkedin: "https://www.linkedin.com/in/arup-ratan-dey-8a0815249/",
  bio: "I am a final-year CSE student with a deep passion for problem-solving and competitive programming. With 1500+ problems solved across various platforms, I've achieved Codeforces Pupil (1275) and CodeChef 3star (1604) ratings. Besides CP, I build responsive web applications using React, Node.js, MongoDB, and modern technologies. I love turning complex problems into elegant solutions!",
  
  cpStats: {
    codeforces: { 
      url: "https://codeforces.com/profile/arupratandey",
      bestRankUrl: "https://codeforces.com/contest/2074/standings/participant/205615573#p205615573",
      rating: 1275, solved: 974, contests: 114, rank: "Pupil", bestRank: "3,815/24,445", color: "text-green-400" 
    },
    codechef: { 
      url: "https://www.codechef.com/users/arup_ratan_dey",
      bestRankUrl: "https://www.codechef.com/rankings/START130C?itemsPerPage=100&order=asc&page=1&sortBy=rank",
      rating: 1604, solved: 316, contests: 39, rank: "3⭐", bestRank: "211/4,266", color: "text-yellow-400" 
    },
    atcoder: { 
      url: "https://atcoder.jp/users/arup_ratan_dey",
      bestRankUrl: "https://atcoder.jp/contests/abc393/standings",
      rating: 288, solved: 39, contests: 11, rank: "9 Kyu", bestRank: "4,480/10,408", color: "text-blue-400" 
    },
    leetcode: { 
      url: "https://leetcode.com/u/arup_ratan_dey/",
      easy: 9, medium: 5 
    }
  },

  skills: {
    languages: ["C", "C++", "Java", "Python", "JavaScript"],
    frontend: ["React", "HTML5", "CSS3", "Tailwind CSS", "Figma"],
    backend: ["Node.js", "Express", "MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"]
  },

  projects: [
    {
      title: "Agency-Ai",
      description: "Built a modern digital agency landing page using React, Tailwind CSS, and Framer Motion. Features fully responsive design with dark/light theme toggle and smooth scroll-triggered animations. Includes interactive UI components and contact form with real-time validation. Designed for optimal performance across all devices with modern animations. Combines aesthetic appeal with technical excellence for engaging user experience.",
      image: agencyAi,
      tech: ["React", "Tailwind CSS", "Framer Motion", "HTML", "Web3Forms API"],
      liveLink: "https://agency-ai-iota-blond.vercel.app/",
      githubLink: "https://github.com/arup-ratan-dey/agency-ai"
    },
    {
      title: "Acme Web Design",
      description: "Built a responsive multi-page website for a web design company using HTML5 and CSS3. Features fully responsive layout across home, about, and services pages with intuitive navigation, newsletter subscription section, and interactive quote form with validation. Designed with mobile-first approach, smooth hover effects, and clean professional UI elements for optimal user experience across all devices and screen sizes",
      image: acme,
      tech: ["HTML5", "CSS3", "Media Queries", "Responsive Design"],
      liveLink: "https://acme-web-design-zeta.vercel.app/",
      githubLink: "https://github.com/arup-ratan-dey/acme-web-design"
    },
    {
      title: "ArupsZone",
      description: "A responsive Amazon-inspired e-commerce frontend UI built using HTML5 and CSS3. It features a navigation bar with search and cart, hero banner, product grid layout, interactive hover effects on product cards, category sections with images, footer with useful links, shopping cart preview panel, and a fully responsive design for desktop, tablet, and mobile devices with smooth transitions and modern UI elements",
      image: arupsZone,
      tech: ["HTML5", "CSS3", "Flexbox", "Media Queries", "Font Awesome"],
      liveLink: "https://arups-zone.vercel.app/",
      githubLink: "https://github.com/arup-ratan-dey/arups-zone"
    },
    {
      title: "ARUP'S SUITS",
      description: "A complete Java-based coffee shop management system featuring customer ordering, admin controls, sales tracking, and review submission. The project includes a modern GUI with Java Swing, interactive order management, visual sales charts, and secure admin authentication.",
      image: arupsSuits,
      tech: ["Java", "Java Swing", "JFreeChart", "File I/O", "Custom GUI Design"],
      liveLink: "https://drive.google.com/file/d/12w8D5faEoCB8ui6XaEfslwpB7bwM27Km/view?usp=drive_link",
      githubLink: "https://github.com/arup-ratan-dey/shop-main?tab=readme-ov-file"
    },
    {
      title: "Photography Club",
      description: "A web-based platform for photographers to share, categorize, and manage photos, participate in events, and interact with other enthusiasts. Features include user authentication, photo and event management, searchable photo gallery, interactive dashboard, and responsive design for all devices.",
      image: photography,
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL (PDO)", "Git"],
      liveLink: "https://drive.google.com/file/d/1hnXqVbK8JEoj4MzmjhyPMoEQNQB5pfXg/view?usp=drivesdk",
      githubLink: "https://github.com/arup-ratan-dey/photography-club"
    },
    {
      title: "ML Based Student Advisior",
      description: "AI-powered platform that predicts student grades with 83% accuracy and generates personalized improvement plans using machine learning and GroqCloud LLM. Features interactive student profiling, real-time risk assessment, and automated PDF report generation with Google Colab support.",
      image: mlAdvisor,
      tech: ["Python", "Scikit-learn", "GroqCloud API", "Pandas", "Matplotlib", "Google Colab"],
      // liveLink: "https://your-live-site.com",
      githubLink: "https://github.com/arup-ratan-dey/ml-student-advisor"
    }
  ],

  contests: [
    { 
      name: "ICPC Asia Dhaka Regional Site Online Preliminary(2025)", 
      team: "MU_CodeBlooded", 
      rank: "652/1717",
      year: "2025",
      link: "https://icpc.global/regionals/finder/Dhaka-Preliminary-2026/standings"
    },
    { 
      name: "ICPC Asia Dhaka Regional Site Online Preliminary(2024)", 
      team: "MU_LateCoders", 
      rank: "766/2490",
      year: "2024",
      link: "https://icpc.global/regionals/finder/Dhaka-Preliminary-2025/standings"
    },
    { 
      name: "ICPC Asia Dhaka Regional Site Online Preliminary(2023)", 
      team: "MU_Latecoders", 
      rank: "801/2460",
      year: "2023",
      link: "https://icpc.global/regionals/finder/Dhaka-Preliminary-2024/standings"
    },
    { 
      name: "IMUPC 2025", 
      team: "MU_ZeroPrompts_Given", 
      rank: "5th/57",
      year: "2025",
      link: "https://www.coderoj.com/c/imupc25/standings"
    },
    { 
      name: "IUPC National 2025 (MU CSE Fest)", 
      team: "MU_Aynaghor", 
      rank: "67th/100",
      year: "2025",
      link: "https://toph.co/c/inter-university-mu-cse-fest-2025/standings"
    },
    { 
      name: "IUPC Divisional(Sylhet) 2024 (MU CSE Fest)", 
      team: "MU_LateCoders", 
      rank: "17th/36",
      year: "2024",
      link: "https://toph.co/c/inter-university-sylhet-division-2024/standings"
    },
    { 
      name: "IUJPC Divisional(Sylhet) 2024 (Leading University)", 
      team: "MU_ChillGuys", 
      rank: "11th/35",
      year: "2024",
      link: "https://serious-oj.com/contest/67559b35a9f1c7000843e73f/scoreboard"
    },
    { 
      name: "IMUPC 2024", 
      team: "MU_LateCoderS", 
      rank: "11th/58",
      year: "2024",
      link: "https://coderoj.com/c/imupc-24/standings"
    },
  ],

  education: [
    { 
      degree: "Bachelor of Science in Computer Science & Engineering", 
      institution: "Metropolitan University, Sylhet", 
      year: "2023 - 2026", 
      grade: "Current CGPA 3.94/4.00",
      website: "https://www.metrouni.edu.bd/",
      // certificate: "/src/assets/university-certificate.pdf"
    },
    { 
      degree: "Higher Secondary Certificate (Science)", 
      institution: "Murari Chand College", 
      year: "2019 - 2021", 
      grade: "GPA 5.00/5.00",
      website: "https://mccollege.edu.bd/",
      // certificate: "/src/assets/hsc-certificate.pdf"
    },
    { 
      degree: "Secondary School Certificate (Science)", 
      institution: "R.K Lyceum School & College", 
      year: "2007 - 2019", 
      grade: "GPA 5.00/5.00",
      website: "https://www.rkls.edu.bd/",
      certificate: sscCertificate
    }
  ]
};
