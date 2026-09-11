export interface SyntrixCommunityData {
  name: string;
  tagline: string;
  founderRole: string;
  memberCount: string;
  weeklyVoiceAttendees: string;
  cadence: string;
  bannerImage: string;
  mission: string;
  pillars: {
    title: string;
    description: string;
    metrics: string;
  }[];
  networkNodes: {
    id: string;
    label: string;
    role: string;
    connections: string[];
    details: string;
  }[];
  weeklyFormat: {
    step: string;
    title: string;
    description: string;
  }[];
  outcomes: {
    title: string;
    detail: string;
  }[];
}

export const SYNTRIX_DATA: SyntrixCommunityData = {
  name: "SYNTRIX",
  tagline: "A developer community built to connect people who love technology and relentless building.",
  founderRole: "Co-Founder & Technical Community Lead",
  memberCount: "~250 Members",
  weeklyVoiceAttendees: "20+ Active Participants",
  cadence: "Weekly Live Technical Voice Meetups",
  bannerImage: "/images/syntrix/syntix_flex.png",
  mission: "Syntrix was founded alongside close friends to dismantle the isolation of solitary coding. We created a high-signal environment where builders showcase works-in-progress, dissect low-level systems, form competitive hackathon squads, and exchange raw technical feedback.",
  pillars: [
    {
      title: "PEER TECHNICAL SCRUTINY",
      description: "Live screen-shares where members debug graphics shaders, memory leaks, and system daemons in front of each other.",
      metrics: "50+ Code Review Hours"
    },
    {
      title: "HACKATHON ALLIANCES",
      description: "Assembling interdisciplinary teams combining systems engineers, UI specialists, and technical artists for state & national hackathons.",
      metrics: "12+ Teams Formed"
    },
    {
      title: "CONTINUOUS VOICE FORUM",
      description: "Consistent weekly technical voice sessions diving into emerging architectures, low-level C++, Unreal Engine, and modern AI experiments.",
      metrics: "20+ Typical Attendance"
    }
  ],
  networkNodes: [
    {
      id: "people",
      label: "PEOPLE",
      role: "Curious Builders",
      connections: ["ideas"],
      details: "250+ passionate students, indie game devs, and systems programmers seeking high-signal engineering peers."
    },
    {
      id: "ideas",
      label: "IDEAS",
      role: "Unfiltered Exploration",
      connections: ["projects"],
      details: "Raw technical hypotheses, graphics experiments, IoT security questions, and game mechanics prototypes."
    },
    {
      id: "projects",
      label: "PROJECTS",
      role: "Working Prototypes",
      connections: ["hackathons", "collaboration"],
      details: "Translating whiteboard architectures into functional GitHub repositories, 3D modular assets, and pipelines."
    },
    {
      id: "hackathons",
      label: "HACKATHONS",
      role: "Pressure Crucible",
      connections: ["collaboration"],
      details: "Competing in 24-to-48-hour marathons to validate systems under strict deadlines and live jury scrutiny."
    },
    {
      id: "collaboration",
      label: "COLLABORATION",
      role: "Cross-Disciplinary Squads",
      connections: ["community"],
      details: "Systems programmers pairing with environment artists and ML researchers to build complete systems."
    },
    {
      id: "community",
      label: "COMMUNITY",
      role: "Self-Sustaining Collective",
      connections: ["people"],
      details: "Syntrix: where knowledge compounds, victories are shared, and members inspire each other to keep shipping."
    }
  ],
  weeklyFormat: [
    {
      step: "01",
      title: "SHOWCASE & WORK-IN-PROGRESS",
      description: "Members share screens showing raw Blender blockouts, C++ rendering passes, or terminal packet dumps."
    },
    {
      step: "02",
      title: "TECHNICAL ARCHITECTURE DEEP-DIVE",
      description: "A 30-minute structured breakdown of a specific technology (e.g. Vulkan swapchains, PBR energy conservation, Linux eBPF)."
    },
    {
      step: "03",
      title: "OPEN MIC & DEBUG LAB",
      description: "Collaborative troubleshooting of tricky bugs, compilation errors, and hackathon project ideation."
    }
  ],
  outcomes: [
    {
      title: "Top Podium Finishes",
      detail: "Community squads regularly place at regional & national hackathons (CMS College 3rd Place, SRCAS Runner-Up)."
    },
    {
      title: "Cross-Pollination of Skills",
      detail: "Pure software engineers learn 3D pipelines; 3D artists learn version control, shader math, and C++ scripting."
    },
    {
      title: "Durable Builder Culture",
      detail: "Cultivating an ethos of shipping tangible code over passive consumption or tutorial-hell."
    }
  ]
};
