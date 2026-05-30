import Header from "./Header";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import FilterableGallery from "./FilterableGallery";
import { ScrollSmoother } from "gsap/all";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState(null);

  const projects = [
    {
      title: "Assistive Navigation System",
      category: ["ML/DL"],
      demo: "https://github.com/aayushiie/assistive-system",
      github: "https://github.com/aayushiie/assistive-system",
      description:
        "This system was developed to assist visually impaired people by enabling safe navigation and real-time object recognition. It uses MobileNet as the backbone of SSD model for object detection, combined with monocular distance estimation, motion analysis for tracking, and adaptive audio feedback. Several optimization techniques, including Structure Similarity Index (SSIM) were also employed to improve performance. The goal was to create a context-aware system that could prioritize the objects in its surrounding before giving any feedback to the users.",
      tech: ["TensorFlow", "Deep Learning", "Computer Vision"],
    },
    {
      title: "Kuisine",
      category: ["Web"],
      demo: "https://github.com/aayushiie/kuisine",
      github: "https://github.com/aayushiie/kuisine",
      description:
        "Built for the students at my university, this web application was developed to eliminate long waiting queues at campus food courts. Students can place order from anywhere and simply collect them from the respective food court once ready. In this group project, I was responsible for developing the authentication, order management, and student-facing APIs. I also designed the relational database using PostgreSQL and implemented the corresponding ORM models using Django.",
      tech: ["Django", "PostgreSQL", "React"],
    },
    {
      title: "K-Food",
      category: ["Web", "App"],
      demo: "https://github.com/aayushiie/k-food",
      github: "https://github.com/aayushiie/k-food",
      description:
        "This project is an enhanced iteration of the original Kuisine web application. The admin dashboard was rebuilt using Express.js with a non-relational MongoDB database, and the student-facing interface was redesigned as a cross-platform mobile application using React Native.",
      tech: ["React", "Express.js", "React Native", "Expo", "MongoDB", "Tailwind", "Docker"],
    },
    {
      title: "Blog Agent",
      category: ["GenAI"],
      demo: "https://github.com/aayushiie/blog-ai-agent",
      github: "https://github.com/aayushiie/blog-ai-agent",
      description:
        "A blog-writing planning agent built with LangGraph that turns scattered ideas into structured blog drafts. It automates the writing flow by planning, organizing, and generating content step by step.",
      tech: ["LangGraph", "LangChain", "Pydantic", "Streamlit"],
    },
    {
      title: "BookIt",
      category: ["App"],
      demo: "https://github.com/aayushiie/chat-app-reactnative",
      github: "https://github.com/aayushiie/chat-app-reactnative",
      description:
        "A real-time multi-user chat app built with React Native and Expo for readers to discuss whatever they're currently obsessed with. It features seamless authentication, live messaging, and dedicated book rooms that can be created or deleted anytime. Built with Clerk for Passkeys and Google Sign-In, and Appwrite for the backend.",
      tech: ["React Native", "Expo", "Clerk", "Appwrite"],
    },
    {
      title: "Hush",
      category: ["GenAI", "App"],
      demo: "https://github.com/aayushiie/hush",
      github: "https://github.com/aayushiie/hush",
      description:
        "Hush is a real-time speech-to-text app built with OpenAI's Whisper model through whisper.rn. The app supports live transcription with voice activity detection, file-based audio transcription, and dynamic switching between multiple AI models to balance speed and accuracy. It features local model caching and real-time progress tracking to enhance performance.",
      tech: ["React Native", "Expo", "OpenAI-Whisper"],
    },
    {
      title: "MedVault",
      category: ["Web", "App"],
      demo: "https://github.com/aayushiie/medvault",
      github: "https://github.com/aayushiie/medvault",
      description:
        "MedVault is a digital health record management platform designed to simplify medical visits by centralizing prescriptions, reports, and diagnostic results in one secure place. It enables patients to access and manage their complete medical history, while allowing doctors to access the records temporarily and in a time-controlled manner for enhanced privacy and secure consultations. Built using React Native with Expo for the mobile application, the backend with FastAPI, with a SQL-based relational database.",
      tech: ["FastAPI", "React Native", "Expo", "Docker"],
    },
    {
      title: "Insured",
      category: ["ML/DL", "Web", "MLOps"],
      demo: "#https://github.com/aayushiie/medical-insurance-model",
      github: "#https://github.com/aayushiie/medical-insurance-model",
      description:
        "[ONGOING] An end-to-end medical insurance predictive model built to practice and implement core MLOps concepts. The project covers the complete ML lifecycle, including experiment tracking with MLflow, data versioning with DVC, containerization using Docker, deployment on AWS, orchestration with Kubernetes, CI/CD pipeline automation, load balancing, monitoring with Prometheus, and infrastructure provisioning and governance tools. The goal is to build a production-grade ML system while exploring scalable deployment and operational best practices.",
      tech: ["Scikit-learn", "FastAPI", "Streamlit", "Docker", "Prometheus", "MLFlow", "DVC", "AWS", "Kubernetes", "GitHub Actions", "SQL"],
    },
    {
      title: "FineArts",
      category: ["ML/DL", "Web", "MLOps"],
      demo: "https://github.com/aayushiie/finearts",
      github: "https://github.com/aayushiie/finearts",
      description:
        "FineArts is a machine learning-based system designed to predict the historical era of a painting based on its color palette. The pipeline extracts dominant color features using Computer Vision techniques with OpenCV and K-Means clustering, which are then passed into a convolutional neural network for era classification. The system has been containerized using Docker for deployment consistency, and Redis is used for image caching to optimize performance. A web app was also developed for interactive use of the model.",
      tech: ["OpenCV", "Deep Learning", "Docker", "Redis", "TensorFlow"],
    },
    {
      title: "Sustainability Color Analysis",
      category: ["Data Science"],
      demo: "https://github.com/aayushiie/sustainability-color-analysis",
      github: "https://github.com/aayushiie/sustainability-color-analysis",
      description:
        "This data analysis project examines sustainability trends in fashion by analyzing color usage and design patterns across brands. Data was collected through web scraping, cleaned, and analyzed using exploratory data analysis and visualization techniques to identify how sustainability is reflected in fashion aesthetics and branding.",
      tech: ["Web Scraping", "Matplotlib", "Pandas", "NLP", "Scikit-learn"],
    },
    {
      title: "Bieberchella-BRATchella Analysis",
      category: ["Data Science"],
      demo: "",
      github: "",
      description:
        "[ONGOING] Both the 2025 and 2026 editions of Coachella were defined by headline performances from major pop artists. Although their artistic influences differed, both performances shared a striking similarity: a single artist commanding the entire stage with no backup dancers, elaborate props, or excessive production. But what made these performances become internet-defining festival moments, and which had the greater cultural impact? This analysis is to understand how pop-culture moments evolve into internet mythology through audience reception, digital discourse, and collective online storytelling.",
      tech: ["Web Scraping", "Matplotlib", "Pandas", "NLP", "Scikit-learn"],
    },
    {
      title: "Olympics EDA",
      category: ["Data Science"],
      demo: "https://github.com/aayushiie/olympics-analysis",
      github: "https://github.com/aayushiie/olympics-analysis",
      description:
        "An interactive data analysis dashboard built with Streamlit to explore over 120 years of Olympic history. Using the Olympics dataset from Kaggle, the application uncovers trends in athlete participation, medal distributions, country-wise performance, and the evolution of events across modern Olympic Games.",
      tech: ["Matplotlib", "Pandas", "Scikit-learn", "Streamlit"],
    },
    {
      title: "Blog",
      category: ["Web"],
      demo: "https://aayushiieblog.web.app/",
      github: "https://github.com/aayushiie/aayushi-blog",
      description:
        "A personal blog platform built using Next.js with TinaCMS for content management.",
      tech: ["Next.js", "TinaCMS", "Tailwind"],
    },
    {
      title: "Glassnote",
      category: ["Web"],
      demo: "https://glassnote-cv.vercel.app/",
      github: "https://github.com/aayushiie/glassnote",
      description:
        "This is a platform built to share lectures and resources related to Computer Vision, serving as a one-stop hub for learning everything related to the field.",
      tech: ["React", "Tailwind"],
    },
    {
      title: "JUNO",
      category: ["Web"],
      demo: "https://juno-magazine.web.app/",
      github: "https://github.com/aayushiie/junozine",
      description:
        "A website developed for my magazine to showcase the creativity and contributions of women and gender-expansive individuals in STEM, providing a platform to highlight their work, ideas, and achievements through an engaging digital presence.",
      tech: ["React", "GSAP", "Framer Motion", "Tailwind"],
    },
    {
      title: "Portfolio",
      category: ["Web"],
      demo: "https://aayushiie.netlify.app/",
      github: "https://github.com/aayushiie/portfolio-website",
      description:
        "The website that you're seeing right now, why not take a look at the code as well.",
      tech: ["React", "GSAP", "Framer Motion", "Tailwind"],
    },
    {
      title: "MRI-web",
      category: ["ML/DL", "Web"],
      demo: "https://github.com/aayushiie/mri-web",
      github: "https://github.com/aayushiie/mri-web",
      description:
        "A deep learning project for brain tumor detection using MRI scans and computer vision. It uses a simple Flask backend with an HTML frontend to let users upload MRI images and get prediction results, making the detection process easy to test and interact with.",
      tech: ["Deep Learning", "Flask"],
    },
    {
      title: "Dups",
      category: ["ML/DL"],
      demo: "https://github.com/aayushiie/dups-nlp",
      github: "https://github.com/aayushiie/dups-nlp",
      description:
        "An Natural Language Processing project focused on determining whether two questions are semantically equivalent. Built using the Kaggle Quora Question Pairs dataset, the model applies text preprocessing, feature engineering, and semantic similarity analysis to identify duplicate questions and improve question-pair classification accuracy.",
      tech: ["NLP", "Streamlit", "TensorFlow"],
    },
    {
      title: "gym-assistant",
      category: ["ML/DL", "Web"],
      demo: "https://github.com/aayushiie/gym-reps",
      github: "https://github.com/aayushiie/gym-reps",
      description:
        "A gym web app trained with Convolutional Neural Network models that can count your reps and track exercise posture in real time. It helps make workouts easier to monitor, and the next version will focus on giving feedback and corrections to improve form and performance.",
      tech: ["Deep Learning", "JavaScript", "FastAPI"],
    },
    {
      title: "Bored",
      category: ["Web", "ML/DL"],
      demo: "https://github.com/aayushiie/movie-recommender-system",
      github: "https://github.com/aayushiie/movie-recommender-system",
      description:
        "movies, books, shows recommenders all in one-place for moments when you're 'just bored.'",
      tech: ["Scikit-learn", "NLP", "Streamlit"],
    },
    {
      title: "Space Invaders",
      category: [""],
      demo: "https://github.com/aayushiie/space-invaders",
      github: "https://github.com/aayushiie/space-invaders",
      description:
        "A little retro chaos built for pure recreational fun. Space Invaders is a classic arcade-style shooting game made with Pygame, where the goal is simple: survive, shoot, and rack up the highest score you can.",
      tech: ["Pygame"],
    },
    {
      title: "Shake Snake",
      category: ["App"],
      demo: "https://github.com/aayushiie/snakes-game-app",
      github: "https://github.com/aayushiie/snakes-game-app",
      description:
        "Shake Snake is a playful React Native spin on the classic snake game — same old 'eat to grow' concept, except the food is replaced with the politicians we're all a little tired of. Built mostly for fun (and mild chaos), it's just a goofy modern take on the arcade classic.",
      tech: ["React Native", "Expo"],
    },
    {
      title: "ToDay",
      category: ["Web"],
      demo: "https://to-day-progress.netlify.app/",
      github: "https://github.com/aayushiie/to-day",
      description:
        "ToDay is a progress-based to-do app with a cute, minimal UI that does exactly what you think it does — helps you keep track of tasks, stay organized, and feel slightly more in control of your life one checkbox at a time.",
      tech: ["React", "Framer Motion"],
    },
    {
      title: "Sloth's Productivity",
      category: ["Web"],
      demo: "https://sloths-productivity.vercel.app/",
      github: "https://github.com/aayushiie/sloths-productivity",
      description:
        "cute cat pomodoro.",
      tech: ["JavaScript"],
    },
    {
      title: "Potions",
      category: ["App"],
      demo: "https://github.com/aayushiie/potions-app",
      github: "https://github.com/aayushiie/potions-app",
      description:
        "If you're thinking of creating a potion to finally get your letter from Hogwarts, here are all the potions you might need for reference. Potions is a React Native app that uses the Harry Potter API to fetch details of potions from the books, making it an easy little guide to explore their ingredients, effects, and uses — built purely for learning and experimentation.",
      tech: ["React Native", "Expo"],
    },
    {
      title: "py-music",
      category: [""],
      demo: "https://github.com/aayushiie/py-music",
      github: "https://github.com/aayushiie/py-music",
      description:
        "making music with python code.",
      tech: ["Python", "Mido", "Librosa"],
    },
  ];

  return (
    <>
      <Header heading="Projects" text="a collection of my technical projects, spanning full-stack web development, cross-platform app development, machine learning and deep learning models, analytics, and genai. a lot of them also focus on making things production-ready through performance improvements and deployment-focused engineering. i'm especially interested in how tech can be applied to medicine, which is why quite a few of these projects explore that intersection. right now, i'm exploring how ai can be used in iot devices and embedded systems." />

      <section className="min-h-screen p-16">
        <FilterableGallery
          projects={projects}
          onOpenProject={(project) => {
            const smoother = ScrollSmoother.get();
            smoother?.scrollTo(0, false);
            requestAnimationFrame(() => {
              setSelectedProject(project);
            });
          }}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </section>
    </>
  );
}