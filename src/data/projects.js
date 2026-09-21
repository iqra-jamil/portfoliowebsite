export const projectGroups = [
  {
    id: "wordpress", title: "WordPress Client Projects", description: "Client websites designed to be practical, polished, and easy to manage.",
    projects: [
      { id: "sare-aam", title: "Sar-e-Aam News", description: "An Urdu news portal with breaking-news sections, live tickers, and a responsive reader-first layout.", tags: ["WordPress"], image: "/thumbnails/image1.jpg", live: "https://vt.tiktok.com/ZSVtRPU5P/", screenshots: ["news1 (1).png", "news1 (2).png", "news1 (3).png", "news1 (4).png", "news1 (5).png", "news1 (6).png", "news1 (7).png", "news1 (8).png"] },
      { id: "therapy", title: "Therapy by Xaineb", description: "A calming professional website for an art therapist, with services, testimonials, gallery, and booking details.", tags: ["WordPress"], image: "/thumbnails/therapy_thumbnail.jpg", live: "https://vt.tiktok.com/ZSVt88EsY/", screenshots: ["psy1 (1).jpg", "psy1 (1).png", "psy1 (2).png", "psy1 (3).png", "psy1 (4).png"] },
      { id: "rich-calories", title: "Rich Calories Restaurant", description: "A food-focused restaurant website with menu, bakery, cash-and-carry, and online ordering pages.", tags: ["WordPress"], image: "/thumbnails/richcalories_thumbnail2.jpg", live: "https://vt.tiktok.com/ZSVtRKvDH/", screenshots: ["ric1.png", "rich2.png", "rich3.png", "rich4.png", "rich5.png"] },
      { id: "tax", title: "Professional Tax Consultants & Advocates", description: "A clear corporate website presenting tax, trademark, and company-registration services.", tags: ["WordPress"], image: "/thumbnails/tax_thumbnail.jpg", live: "https://vt.tiktok.com/ZSVtRnV84/", screenshots: ["tax1 (1).jpg", "tax1 (1).png", "tax1 (2).png", "tax1 (3).png", "tax1 (4).png", "tax1 (5).png"] },
      { id: "mind-learning", title: "Center of Mind & Learning", description: "A psychology clinic site for counseling, therapy, testing, and online appointment booking.", tags: ["WordPress"], image: "/thumbnails/mindlearning_thumbnail.jpg", live: "https://centreofmindandlearning.com/", screenshots: ["CML1 (1).png", "CML1 (2).png", "CML1 (3).png", "CML1 (4).png", "CML1 (5).png"] },
      { id: "aero-spectra", title: "Aero Spectra Systems", description: "A technology company site showcasing UAV, agriculture drone, surveillance, and radar solutions.", tags: ["WordPress"], image: "/thumbnails/aerospectra_thumbnail.jpg", live: "https://aerospectratech.com", screenshots: ["aero1.jpg", "aero2.png", "aero3.png"] },
      { id: "daily-wears", title: "Daily Wears Fashion E-Commerce", description: "A WooCommerce fashion store with product categories, collections, offers, and support information.", tags: ["WordPress"], image: "/thumbnails/dailywears_thumbnail2.jpg", live: "https://dailywears.pk", screenshots: ["ecom.png"] },
    ],
  },
  {
    id: "frontend", title: "Frontend Projects", description: "Responsive interfaces built with modern frontend tools.",
    projects: [
      { id: "therapy-frontend", title: "Therapy by Xaineb", description: "A thoughtful, responsive therapy website with clear service information, a personal story, and an approachable path to booking support.", category: "frontend", tags: ["React", "CSS"], image: "/thumbnails/image.png", imageFit: "contain", github: "https://github.com/iqra-jamil/Therapistwebsite", live: "https://therapybyxaineb.online/" },
      { id: "shifa", title: "Shifa International Hospitals Management System", description: "A React hospital management dashboard with patient registration, appointments, and staff management.", category: "frontend", tags: ["React", "CSS", "Ant Design"], image: "/thumbnails/hospital.png", github: "https://github.com/iqra-jamil/hospital-management-system", showLiveButton: true },
      { id: "fashion-flayer", title: "Fashion Flayer Static E-Commerce Frontend", description: "A responsive fashion storefront with product categories, sale highlights, blog, and newsletter UI.", category: "frontend", tags: ["HTML", "CSS", "JavaScript"], image: "/thumbnails/fashion.png", github: "https://github.com/iqra-jamil/fasion-flayer-web", live: "https://fashionflayer.netlify.app/" },
    ],
  },
  {
    id: "python-ai", title: "Python & AI Projects", description: "Learning-focused Python applications and AI experiments.",
    projects: [
      { id: "chatbot", title: "AI Chatbot", description: "An interactive conversational AI application built with Python and Streamlit, delivering real-time assistance through a clean, user-friendly interface.", category: "python", tags: ["Python"], image: "/thumbnails/iqra_thumbnail2.jpg", github: "https://github.com/iqra-jamil/python-learning/blob/main/Chatbot/project.py", live: "https://iqra-ai.streamlit.app/" },
      { id: "pdf-summarizer", title: "PDF Summarizer", description: "An AI-powered document summarization tool that transforms uploaded PDFs into clear, concise summaries, helping users review essential information faster.", category: "python", tags: ["Python"], image: "/thumbnails/iqra_thumbnail2.jpg", github: "https://github.com/iqra-jamil/python-learning/blob/main/pdfsummarizer/project.py", live: "https://iqra-jamil-python-learning-pdfsummarizerproject-eaccja.streamlit.app/" },
      { id: "fyp", title: "AI Waste Management System", description: "An AI-focused waste management application developed to support smarter waste-handling workflows through an accessible, data-driven web interface.", category: "python", tags: ["Python"], image: "/thumbnails/iqra.jpeg", github: "https://github.com/iqra-jamil/FYP-AI-Waste-Management-System", live: "https://iqra-jamil-fyp-working-application-app-tcnwxd.streamlit.app/" },
    ],
  },
];

export const featuredProjects = [projectGroups[0].projects[0], projectGroups[1].projects[0], projectGroups[2].projects[0]];
