/** Single social link: platform name, URL, and icon key (must match SocialIcons iconMap). */
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

/** Optional skill item (e.g. for future icon-per-skill); currently skills are string arrays. */
export interface Skill {
  name: string;
  icon?: string;
}

/** One job/role entry for the Experience timeline. */
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

/** One project for the Projects grid (thumbnail path is under public/). */
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail: string;
}

/** Root data shape: all sections read from this single object. Edit to customize the portfolio. */
export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  profileImage: string;
  blogUrl?: string;
  social: SocialLink[];
  skills: {
    mobile: string[];
    libraries: string[];
    web: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
}

/** Single source of truth for hero, experience, skills, projects, and social links. */
export const portfolioData: PortfolioData = {
  name: "John Doe",
  role: "Android & Flutter Developer",
  about:
    "I’m an Android Developer with 4+ years of experience creating high-quality mobile applications. My expertise spans Java, Kotlin, Jetpack Compose, and modern Android architecture, with additional experience in Flutter for cross-platform development. I’ve also worked extensively with AOSP and Chromium, giving me a strong foundation across both software and system-level development.",
  profileImage: "/images/profile.webp",
  blogUrl: "https://google.com",
  social: [
    {
      platform: "GitHub",
      url: "https://google.com",
      icon: "Github",
    },
    {
      platform: "LinkedIn",
      url: "https://google.com",
      icon: "Linkedin",
    },
    {
      platform: "X",
      url: "https://google.com",
      icon: "Twitter", // Lucide might not have X yet, using Twitter as fallback or X if available in next step
    },
    {
      platform: "Instagram",
      url: "https://google.com",
      icon: "Instagram",
    },
    {
      platform: "Medium",
      url: "https://google.com",
      icon: "BookText", // Using BookText as a generic icon for Medium if branded one is missing
    },
    {
      platform: "Email",
      url: "mailto:john@doe",
      icon: "Mail",
    },
  ],
  skills: {
    mobile: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Flutter",
      "Dart",
      "Android SDK",
      "AOSP",
    ],
    libraries: [
      "Hilt",
      "Retrofit",
      "Room",
      "Coroutines",
      "Flow",
      "Bloc",
      "GetIt",
    ],
    web: [
      "REST APIs",
      "AWS Lambda",
      "Firebase",
      "Supabase",
      "MySQL",
      "SQLite",
      "Cloudflare",
      "AWS S3",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    tools: ["Git", "Android Studio", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  experience: [
    {
      company: "Primebook India",
      role: "Senior Software Engineer (SDE-2)",
      period: "May, 2023 - Present",
      description: [
        "Built PrimeSecure MDM for PrimeOS 3.0, leveraging DevicePolicyManager.",
        "Enhanced Prime Browser with features like background playback, MDM, etc.",
        "Created SOPs and Scripts for syncing, managing and building Chromium.",
        "Migrated App Store storage to Cloudflare R2, saving over $2000/month.",
        "Developed internal APIs, tools, & the early Cloud PC backend with Cashfree PG.",
      ],
    },
    {
      company: "Primebook India",
      role: "Android Engineer",
      period: "Sep, 2021 - May, 2023",
      description: [
        "Built the PikaPika MDM dashboard in Flutter Web.",
        "Developed PrimeOS apps including Game Center and App Store.",
        "Initiated the PrimeOS Browser project and maintained it.",
        "Worked on APIs supporting PrimeOS MDM and system services.",
      ],
    },
  ],
  projects: [
    {
      title: "Covid-19 Status",
      description:
        "COVID-19 Status is a free and open-source Android app that provides real-time COVID-19 statistics across India and worldwide, featuring a clean, fast, and responsive user interface.",
      techStack: ["Java", "XML", "Firebase", "Rest APIs"],
      link: "https://project.vipuljha.com/covid",
      github: "https://google.com",
      thumbnail: "/images/projects/covid.webp",
    },
    {
      title: "ElectraBlue Kernel",
      description:
        "ElectraBlue is a flash-and-forget custom kernel for supported Android devices, built to deliver a stable, smooth, and battery-efficient experience with thoughtful customization options using apps like Kernel Adiutor.",
      techStack: ["Linux", "C", "Makefile", "Bash"],
      link: "https://xdaforums.com/t/kernel-mido-oreo-pie-electrablue-kernel-21-0-july-06-redmi-note-4.3655651",
      github: "https://google.com",
      thumbnail: "/images/projects/eb.webp",
    },
    {
      title: "Portfolio Website",
      description:
        "A previous version of my personal portfolio website showcasing my projects, work experience, and resume before launching the further iterations built in more modern tech stack.",
      techStack: ["HTML", "CSS", "Bootstrap", "JQuery"],
      link: "https://project.vipuljha.com/website",
      github: "https://google.com",
      thumbnail: "/images/projects/portfolio.webp",
    },
    {
      title: "ABS Tweaks",
      description:
        "ABS Tweaks (Arkaynine Boost Script) is a collection of shell-based performance optimizations for Android devices, designed to improve speed and battery life. It has been downloaded over 200,000 times.",
      techStack: ["Shell", "BusyBox", "Terminal Emulator", "SuperSU"],
      link: "https://xdaforums.com/t/tweak-mod-arm-x86-project-dark-booster-abs-tweaks-v5-0-2-3-6-0-23-01-2016.3120404",
      github: "https://google.com",
      thumbnail: "/images/projects/abs.webp",
    },
    {
      title: "Lenovo SNAPit Camera",
      description:
        "Lenovo SNAPit Camera was one of the most feature-rich OEM camera apps of its time, offering a wide range of unique capabilities. I successfully ported it to run on nearly all supported Android devices back then.",
      techStack: ["Java", "XML", "Libs", "Smali", "Apktool"],
      link: "https://xdaforums.com/t/app-port-6-0-lenovo-snapit-camera-5-8-53-for-all-devices.3608065/",
      github: "https://google.com",
      thumbnail: "/images/projects/snapit.webp",
    },
    {
      title: "CyanogenOS Apps",
      description:
        "CyanogenOS 12.1 included exclusive apps such as the updated theme engine and a Truecaller-integrated dialer. I successfully ported these features to work on CyanogenMod 13 and CyanogenMod13-based ROMs.",
      techStack: ["Java", "Libs", "Updater Script", "Apktool"],
      link: "https://xdaforums.com/t/c-apps-v2-unofficial-6-0-x-cyanogen-os-capps-v2-for-cm13-and-cm13-based-roms.3254865/",
      github: "https://google.com",
      thumbnail: "/images/projects/capps.webp",
    },
  ],
};
