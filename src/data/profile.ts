export interface ProfileData {
  name: string;
  handle: string;
  roles: string[];
  primaryTitle: string;
  supportingStack: string[];
  tagline: string;
  subTagline: string;
  status: string[];
  bio: string;
  coordinates: {
    label: string;
    lat: string;
    lng: string;
  };
  degree: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
  };
  stats: {
    hackathons: string;
    gameJams: string;
    communityMembers: string;
    voiceSessionsCount: string;
  };
}

export const PROFILE: ProfileData = {
  name: "SAIRAM R",
  handle: "SAIRAMSSSS",
  primaryTitle: "Environment Artist / Graphics Programmer / Technical Builder",
  roles: [
    "Environment Artist",
    "Graphics Programmer",
    "Game Systems Developer",
    "Technical Artist",
    "Community Founder"
  ],
  supportingStack: [
    "C++",
    "OpenGL 4.6",
    "Vulkan",
    "Unreal Engine 5",
    "Blender",
    "Substance Painter",
    "InstaMAT",
    "Python",
    "PyTorch"
  ],
  tagline: "I BUILD WORLDS AND THE SYSTEMS THAT RUN THEM.",
  subTagline: "Environment Art · Graphics Programming · Game Development · AI",
  status: [
    "Vulkan Pipeline & Shader Architecture",
    "Unreal Engine 5 LifeSupport Environment Reel",
    "C++ Real-Time Rendering Testbed",
    "Sub-D Topology & Texel Density Optimization",
    "PBR Shader Mathematics & Raymarching"
  ],
  bio: "A builder who exists in the tension between code, art, and technology. Pursuing B.E. Computer Science Engineering while engineering real-time graphics pipelines, crafting AAA-grade modular 3D environments, architecting decoupled C++ game systems, and leading Syntrix, an independent 250+ member developer collective outside college.",
  coordinates: {
    label: "COIMBATORE, TN // IN",
    lat: "11.0168° N",
    lng: "76.9558° E"
  },
  degree: "Pursuing B.E. Computer Science Engineering",
  links: {
    github: "https://github.com/SAIRAMSSSS",
    linkedin: "https://www.linkedin.com/in/sairam-r-7900b136b/",
    email: "sairam2k6proff@gmail.com",
    resume: "#resume"
  },
  stats: {
    hackathons: "50+",
    gameJams: "3",
    communityMembers: "~250",
    voiceSessionsCount: "20+ active"
  }
};
