export const signupUrl = "https://duke.campusgroups.com/IEEE/club_signup";
export const eventsUrl = "https://duke.campusgroups.com/ical/duke/ical_club_28735.ics";
export const startupsUrl = "https://www.workatadukestartup.com/";
export const email = "dukeieee@duke.edu";
export const instagramUrl = "https://instagram.com/ieeeduke";
export const connectionFormUrl =
  "https://www.notion.so/20fb8d983fd880e7affaf8288afa8b0b?pvs=21";
export const meetingUrl = "https://cal.com/sanjeev.one/30min";

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Halo Kwok",
    role: "Co-President",
    image: "/team/halo-kwok.jpg",
    bio: "Halo is a junior from Los Angeles County studying Electrical Engineering and Physics, with a certificate in Innovation & Entrepreneurship. Apart from her work in control systems at the Duke Quantum Center with the Noel Lab, she's exploring interests across wearable health tech, fintech, and AI development. Outside of school, she enjoys the gym, curating a good outfit, and keeping her caffeine intake at healthy (debatable) levels.",
  },
  {
    name: "Manahil Tariq",
    role: "Co-President",
    image: "/team/manahil-tariq.jpg",
    bio: "Manahil serves as the Co-President for Duke IEEE. She's a Junior pursuing Electrical & Computer Engineering, Documentary Studies and Innovation & Entrepreneurship. In her spare time, she likes to go on walks (or anxiously pace her room), try new food, and try to learn poker (or any game she can get too competitive about). So far at Duke, she's created a photography book, presented at DC with David Hoffman, and done cybersecurity & ML research.",
  },
  {
    name: "Aniketh (Ani) Shenoy Kota",
    role: "Senior Advisor",
    image: "/team/aniketh-shenoy-kota.jpg",
    bio: "Aniketh (Ani) Shenoy Kota is a product leader and global changemaker, known for scaling a healthcare SaaS platform to a multimillion-dollar acquisition. He currently serves on the various global IEEE committees, shaping global strategies and leading young professional and student initiatives worldwide, and being the Global Chapters & Branches Coordinator for IEEE TEMS.",
  },
  {
    name: "Leo Zhang",
    role: "Co-Director of Events",
    image: "/team/leo-zhang.jpg",
    bio: "Leo is pursuing his Bachelor's in Electrical and Computer Engineering at Duke. His interests are in Applied ML and Computer Vision. In his free time, he likes to read sci-fi and fantasy novels, play the piano, and hit the gym.",
  },
  {
    name: "Imadh Mashoor",
    role: "Director of Conferences",
    image: "/team/imadh-mashoor.jpg",
    bio: "Imadh Mashoor is a rising senior studying Electrical and Computer Engineering and Biomedical Engineering with interests in physiological sensing, embedded systems, and technology for environmental and healthcare applications. As Duke IEEE's Director of Conferences he helps create events that connect students with engineers, researchers, and companies doing exciting work across fields. Outside of engineering Imadh loves traveling and finding any excuse to try new food.",
  },
  {
    name: "Ryan Shin",
    role: "Director of Marketing",
    image: "/team/ryan-shin.jpg",
    bio: "Ryan is a sophomore studying Electrical and Computer Engineering at Duke University. He grew up in Auburn, GA and plans on going back after graduation. In his free time, he enjoys working with circuitry, playing violin, and sleeping.",
  },
  {
    name: "Eric Cai",
    role: "Co-Director of Events",
    image: "/team/eric-cai.jpg",
    bio: "Eric is studying ECE and CS at Duke University, where he is also actively interested in startups and building. His technical interests and research include neural network applications in drones, aerospace hardware, and deeptech. Eric is from Kansas City, KS, and is a keen retro-tech hobbyist and mechanical watchmaker. He also enjoys building hardware/software projects/startup ideas, and hopes to further expand and improve the IEEE community.",
  },
  {
    name: "Kaijing Zheng",
    role: "Treasurer",
    image: "/team/kaijing-zheng.jpg",
    bio: "Kaijing Zheng is an undergraduate student from the Bay Area, California studying Electrical and Computer Engineering and Computer Science at Duke. Outside of IEEE, she is involved with Duke Robotics and Duke Applied Machine Learning. In her free time, she enjoys reading, drawing and cooking.",
  },
  {
    name: "Jerry Xu",
    role: "Member-at-Large",
    image: "/team/jerry-xu.jpg",
    bio: "Jerry is an undergraduate student from the Bay Area, California, studying Electrical & Computer Engineering and Computer Science at Duke. He's particularly interested in embedded systems, photonics, and machine learning. Outside of IEEE, Jerry is active in HackDuke and Catalyst. He also enjoys hiking, cooking, and playing tennis.",
  },
];

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "sources"; items: { label: string; href: string }[] }
  | { type: "callout"; title: string; text: string; href: string; label: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  imageAlt: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "supercomputing-26-st-louis",
    title: "Duke IEEE Takes 7 Students to Supercomputing 26 in St. Louis",
    excerpt:
      "This November, Duke IEEE sponsored seven students to attend SC26 in St. Louis, giving them firsthand exposure to the cutting-edge world of high-performance computing and valuable networking opportunities with industry leaders.",
    author: "Sanjeev Chauhan",
    date: "November 2026",
    readTime: "5 min read",
    tags: ["HPC", "Conference", "Networking", "Career"],
    image: "/blog/supercomputing-26-hero.jpg",
    imageAlt: "Supercomputing 26 Conference",
    body: [
      {
        type: "p",
        text: "This November, Duke IEEE sponsored seven students to attend SC26 (Supercomputing 2026) in St. Louis, Missouri. The annual conference is the premier event for high-performance computing, networking, storage, and analysis, bringing together researchers, industry professionals, and students from around the world.",
      },
      { type: "h2", text: "Why Supercomputing Matters" },
      {
        type: "p",
        text: "High-performance computing underpins some of the most important technological advances of our time—from climate modeling and drug discovery to AI training and financial simulations. For ECE and CS students at Duke, understanding HPC is increasingly essential as the field continues to grow in importance across every industry.",
      },
      { type: "h2", text: "The SC26 Experience" },
      {
        type: "p",
        text: "Our delegation of seven students had the opportunity to:",
      },
      {
        type: "ul",
        items: [
          "Tour the exhibition floor featuring the latest supercomputing hardware from NVIDIA, AMD, Intel, and HPE",
          "Attend technical sessions on parallel programming, GPU computing, and emerging architectures",
          "Network with engineers and researchers from national laboratories including Oak Ridge, Argonne, and Lawrence Livermore",
          "Participate in the student job fair with direct recruiting from top HPC employers",
          "Connect with Duke alumni working in the supercomputing field",
        ],
      },
      { type: "h2", text: "Student Perspectives" },
      {
        type: "quote",
        text: "Seeing the scale of the systems on display was incredible. It really put into perspective the kind of engineering challenges that go into building these machines. I came back with a much clearer idea of where I want to take my career.",
      },
      {
        type: "p",
        text: "Another student noted the value of the networking opportunities:",
      },
      {
        type: "quote",
        text: "I had conversations with engineers from companies I'd only read about. Several of them encouraged me to apply for internships and gave me their contact information. That kind of access is invaluable.",
      },
      { type: "h2", text: "Looking Forward" },
      {
        type: "p",
        text: "Duke IEEE is committed to providing students with opportunities to engage directly with industry. Trips like SC26 help bridge the gap between classroom learning and real-world applications, giving students the context and connections they need to succeed in their careers.",
      },
      {
        type: "p",
        text: "Interested in joining us for future conferences? Make sure you are a member of Duke IEEE and stay tuned for announcements about upcoming opportunities.",
      },
    ],
  },
  {
    slug: "hpc-workshop-duke-campus",
    title: "Duke IEEE Hosts 2-Day HPC Workshop on Campus",
    excerpt:
      "Duke IEEE brought high-performance computing education directly to students with a hands-on two-day workshop covering parallel programming, GPU computing, and cluster management.",
    author: "Austin Harrison",
    date: "October 2026",
    readTime: "4 min read",
    tags: ["HPC", "Workshop", "Education", "Hands-on"],
    image: "/blog/hpc-workshop-hero.jpg",
    imageAlt: "Students at the Duke IEEE HPC workshop",
    body: [
      {
        type: "p",
        text: "Duke IEEE brought high-performance computing education directly to campus with a comprehensive two-day workshop designed to give students hands-on experience with the tools and techniques used in modern HPC environments.",
      },
      { type: "h2", text: "Workshop Overview" },
      {
        type: "p",
        text: "The workshop covered a range of topics essential for anyone looking to work with high-performance computing systems. Over two intensive days, participants learned about parallel programming paradigms, GPU acceleration, and cluster management—all with hands-on exercises using real computing resources.",
      },
      { type: "h2", text: "What Students Learned" },
      { type: "p", text: "Day 1 focused on foundational concepts:" },
      {
        type: "ul",
        items: [
          "Introduction to parallel computing architectures",
          "MPI (Message Passing Interface) basics and patterns",
          "OpenMP for shared-memory parallelism",
          "Performance analysis and optimization strategies",
        ],
      },
      { type: "p", text: "Day 2 covered advanced topics:" },
      {
        type: "ul",
        items: [
          "CUDA programming for NVIDIA GPUs",
          "Job scheduling with SLURM",
          "Containerization with Singularity for HPC",
          "Best practices for reproducible research computing",
        ],
      },
      { type: "h2", text: "Hands-On Learning" },
      {
        type: "quote",
        text: "We wanted students to leave with practical skills they could immediately apply. Every session included coding exercises, and by the end of the workshop, participants had written parallel programs that ran on actual cluster resources.",
      },
      { type: "h2", text: "Community Impact" },
      {
        type: "p",
        text: "The workshop attracted over 40 students from ECE, Computer Science, and related departments. Many participants noted that the hands-on format helped them understand concepts that had seemed abstract in coursework.",
      },
      {
        type: "quote",
        text: "I've read about parallel programming in textbooks, but actually writing code that runs across multiple nodes made everything click.",
      },
      { type: "h2", text: "Learn More" },
      {
        type: "p",
        text: "For more information about our HPC workshop series, including materials from past workshops and announcements for future events, visit our dedicated workshop site.",
      },
      {
        type: "callout",
        title: "Workshop Resources",
        text: "Access workshop materials, slides, and code examples at our dedicated workshop site.",
        href: "https://workshop.dukeieee.org",
        label: "Visit workshop.dukeieee.org",
      },
    ],
  },
  {
    slug: "satellite-2026-duke-ieee",
    title: "Duke IEEE at SATELLITE 2026: Connecting Students to the Future of Space",
    excerpt:
      "SATELLITE 2026 could not be landing in a more fitting place than Washington, DC—and for Duke IEEE, there could not be a better moment to step directly into the heart of the satellite and space industry.",
    author: "Sanjeev Chauhan",
    date: "March 2026",
    readTime: "12 min read",
    tags: ["Space", "Satellite", "Industry", "Professional Development"],
    image: "/blog/satellite-2026-hero.jpg",
    imageAlt: "SATELLITE 2026",
    body: [
      {
        type: "p",
        text: "SATELLITE 2026 could not be landing in a more fitting place than Washington, DC—and for Duke IEEE, there could not be a better moment to step directly into the heart of the satellite and space industry. This year, our chapter is bringing a cohort of students to SATELLITE (SATShow Week) as part of a focused professional development initiative, connecting Duke's emerging talent with the ecosystem that is rapidly redefining global communications, security, and commerce.",
      },
      { type: "h2", text: "Why SATELLITE Matters Now" },
      {
        type: "p",
        text: "SATELLITE 2026 is one of the flagship global gatherings for the satellite and broader space sector, hosted March 23–26 at the Walter E. Washington Convention Center in Washington, DC. The event unites satellite operators, launch providers, terminal and antenna manufacturers, ground segment innovators, financing and insurance, and a large government and defense presence under one roof.",
      },
      {
        type: "image",
        src: "/blog/washington-dc-convention.jpg",
        alt: "The Walter E. Washington Convention Center",
        caption: "The Walter E. Washington Convention Center, host of SATELLITE 2026",
      },
      {
        type: "p",
        text: "This year's program places particular emphasis on integrating commercial innovation with national security and government needs, including themes like resilient multi-orbit communications, secure satellite architectures, and hybrid terrestrial–non-terrestrial networks. For students interested in communications, RF, autonomy, security, and climate applications, this is where technology, policy, and real-world deployment intersect in the same hallway conversation.",
      },
      { type: "h2", text: "Duke's Deep Roots in Satellite Innovation" },
      {
        type: "p",
        text: "Duke's connection to the satellite industry is not new—it is embedded in the university's leadership in metamaterials and advanced antenna design. Professor David R. Smith, James B. Duke Distinguished Professor of Electrical and Computer Engineering, has led pioneering work on metamaterials and metasurface antennas that directly underpin modern satellite communications platforms.",
      },
      {
        type: "image",
        src: "/blog/satellite-antenna.jpg",
        alt: "Metamaterial antenna technology",
        caption: "Modern metamaterial antenna technology pioneered at Duke",
      },
      {
        type: "p",
        text: "Kymeta Corporation, founded to commercialize metamaterial antennas for satellite connectivity, traces core technology and talent back to Duke. The company's flat-panel, electronically steered antennas were built on metamaterial concepts developed in the Smith group and have attracted partnerships with major players across mobility and communications. Duke alumni such as Nathan Kundtz have played central roles in translating these lab-scale innovations into deployable satellite connectivity products, reinforcing a pipeline from campus research to space-industry impact.",
      },
      { type: "h2", text: "Learning from Practitioners: Duke IEEE and the Naval Research Lab" },
      {
        type: "p",
        text: "Within Duke IEEE, a major focus has been exposing students to practitioners who operate at the intersection of cutting-edge engineering and mission-critical applications. The chapter recently hosted Bill Raynor from the U.S. Naval Research Laboratory's Naval Center for Space Technology, where he helps oversee spacecraft engineering, integration, and test activities. His work spans the complex environments spacecraft must survive—thermal vacuum, RF performance, vibration, acoustics, and more—providing students with a realistic picture of what it takes to get hardware from the lab bench to orbit.",
      },
      {
        type: "p",
        text: "That conversation underscored an important lesson for Duke students: space is not just about bold ideas; it is about rigorous engineering, qualification, and systems thinking. As Duke IEEE heads to SATELLITE, the group is building on that foundation by having students actively interview professionals across industry, defense, and startups about how ideas scale into resilient, operational systems in space.",
      },
      { type: "h2", text: "Duke Aero and the Broader Flight-to-Orbit Pipeline" },
      {
        type: "p",
        text: "The Duke Aero community—spanning student teams working on aircraft, UAVs, rocketry-adjacent projects, and autonomous systems—forms another bridge between campus and the space sector. While many Duke projects begin in the realm of atmospheric flight, the underlying skill sets in controls, propulsion-adjacent systems, structures, autonomy, and RF/communications map naturally into the satellite and launch ecosystem.",
      },
      {
        type: "p",
        text: 'As low-Earth orbit becomes increasingly congested and satellite architectures become more software-defined and responsive, the boundary between "aerospace" and "space systems" continues to blur. Duke Aero and related engineering groups give students practical experience with multidisciplinary design and flight-like constraints, making SATELLITE an ideal venue to see how those same principles play out at orbital scale.',
      },
      { type: "h2", text: "A Gap in the Curriculum—and How Students Are Responding" },
      {
        type: "p",
        text: "Despite Duke's world-class research in metamaterials, communications, and remote sensing, there is relatively limited formal undergraduate curriculum dedicated specifically to space systems and satellite engineering. Many students interested in space and satellite careers piece together their own pathway through RF, controls, embedded systems, data science, and policy courses, supplemented by research, clubs, and internships.",
      },
      {
        type: "p",
        text: 'That gap is also an opportunity. By organizing a coordinated presence at SATELLITE, Duke IEEE is giving students a way to "major in space" experientially—through direct exposure to industry roadmaps, system architectures, regulatory debates, and career paths that are not yet fully captured in a traditional course catalogue. The chapter\'s goal is to take lessons, contacts, and interview content from SATELLITE back to campus and translate them into mentorship, technical talks, and guidance for future students who want to navigate into the space sector.',
      },
      { type: "h2", text: "Students as Reporters and Translators" },
      {
        type: "p",
        text: "During SATELLITE 2026, the Duke IEEE delegation is not just attending sessions; the students are actively documenting what they learn. They will be:",
      },
      {
        type: "ul",
        items: [
          "Conducting short, focused interviews with engineers, founders, and government leaders about key technical and career themes across the satellite value chain.",
          "Capturing insights on topics such as resilient multi-orbit networks, secure ground systems, AI at the edge in space, and climate and Earth observation applications.",
          "Translating these conversations into digestible content for the Duke community—blog posts, recaps, and technical debriefs that lower the barrier for peers who are space-curious but do not yet see the on-ramps.",
        ],
      },
      {
        type: "p",
        text: 'In doing so, the students are effectively acting as a bridge between a global industry conference and a campus that is full of talent, but where "space" is still an emerging organized pathway.',
      },
      { type: "h2", text: "The Future of Trade Is Moving Off-Planet" },
      {
        type: "p",
        text: "One of the most compelling reasons to bring students to SATELLITE is that satellite infrastructure is quietly becoming the backbone of 21st-century trade. Space-based communications, navigation, timing, and Earth observation already underpin logistics, finance, agriculture, energy, and global supply chains. As multi-orbit constellations, optical inter-satellite links, and software-defined payloads mature, the line between \"internet infrastructure\" and \"space infrastructure\" is disappearing.",
      },
      {
        type: "p",
        text: "Looking forward, several trends point toward trade itself increasingly moving into and through space:",
      },
      {
        type: "ul",
        items: [
          "Orbital logistics and manufacturing: As launch costs fall and in-orbit servicing matures, orbital depots, refueling, assembly, and even specialized manufacturing will start to resemble trade networks—moving fuel, materials, and components between orbits rather than ports.",
          "Data as the primary export: Satellites already export data at global scale: climate and Earth observation datasets, maritime and aviation tracking, financial-relevant imagery, and broadband capacity. In many ways, the satellite sector is a data-export economy, selling latency, coverage, and insight rather than physical goods.",
          "Regimes and standards as \"space trade policy\": Spectrum allocation, space traffic management, debris mitigation, and cyber-secure architectures are becoming the equivalent of customs rules and shipping standards for orbital commerce. Engineers who understand both technology and policy will shape how fair, resilient, and sustainable that space-enabled trade system becomes.",
        ],
      },
      {
        type: "p",
        text: "For Duke IEEE students, SATELLITE is not only a venue to explore jobs; it is a front-row seat to how the rules and rails of tomorrow's commerce are being built.",
      },
      { type: "h2", text: "Where Duke IEEE Goes from Here" },
      {
        type: "p",
        text: "This is the first year Duke IEEE is attending SATELLITE as an organized group, but the chapter's ambition is to turn this into a recurring and expanding program. The vision is to:",
      },
      {
        type: "ul",
        items: [
          "Build a sustained pipeline from Duke labs, clubs, and classrooms into satellite and space careers, grounded in relationships with industry, government, and startups.",
          "Use each year's conference as a \"pulse check\" on where the satellite sector is heading—from non-terrestrial 5G to space security—and translate that signal into project ideas and speaker invitations back on campus.",
          "Help catalyze a more visible and coherent \"space track\" at Duke, tying together research groups, student organizations like Duke Aero, and alumni working across the satellite ecosystem.",
        ],
      },
      {
        type: "p",
        text: "The Satellite Show is where the industry gathers to decide what comes next—and Duke IEEE is committed to ensuring that Duke students are not just watching from the sidelines, but participating, asking good questions, and preparing to lead.",
      },
      {
        type: "sources",
        items: [
          { label: "SATShow 2026 - SATShow Week", href: "https://www.satshow.com" },
          {
            label: "SATELLITE 2026 | L3Harris",
            href: "https://www.l3harris.com/events/trade-show/satellite-2026",
          },
          {
            label: "Satellite Show - Intellian",
            href: "https://intelliantech.com/en/news/shows-events/satellite-show-march-23-26-2026-washington-dc-usa",
          },
          {
            label: "David R. Smith | Scholars@Duke",
            href: "https://scholars.duke.edu/person/drsmith/research",
          },
          {
            label: "Metamaterials Commercialization - David R. Smith Group",
            href: "https://people.ee.duke.edu/~drsmith/commercialization.htm",
          },
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
