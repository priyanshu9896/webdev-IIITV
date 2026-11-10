/* FOURWARD — member details, projects and simple page interactions */

// Edit these objects when you want to update a member's information.
const members = [
  {
    id: "priyanshu", number: "01", name: "Priyanshu Dubey", initials: "PD", photo: "Priyanshu-headshot.jpeg", label: "THE BUILDER",
    role: "MCA Student · Aspiring Software Developer · Tech Enthusiast",
    punchline: "One more bug, one more over, one more commit.",
    bio: "I'm a first-year MCA student at IIIT Vadodara interested in software development, web technologies and artificial intelligence. I enjoy understanding how things work and turning that curiosity into practical projects. I've explored frontend and backend development, databases and AI integration, and I'm currently strengthening my programming fundamentals and core computer science concepts.",
    education: ["MCA — IIIT Vadodara (First Year)", "BCA — K.R. Mangalam University, Gurugram · AI & Data Science · CGPA: 6.82"],
    experience: ["Software Development Engineer Intern — Bluestock Fintech. Gained practical exposure to software development and modern technologies.", "Frontend Developer Intern — IG Infosystems Pvt. Ltd. (Talent Gum). Worked on VedaAI interface development and feature testing."],
    skills: ["Python", "JavaScript", "C", "C++ (Fundamentals)", "HTML", "CSS", "React.js", "Node.js", "FastAPI", "MongoDB", "SQL", "Git", "GitHub", "Postman", "Figma", "LLM Integration", "Gemini API", "OpenRouter"],
    learning: ["Java", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Spring Boot"],
    interests: ["Software development", "Web development", "Artificial intelligence", "Problem solving", "Cricket", "Virat Kohli"],
    projects: ["MockStar — AI interview preparation platform", "Lerno.ai — AI-powered learning workspace", "VedaAI — AI assessment generation platform"],
    links: [{ name: "GitHub", url: "https://github.com/priyanshu9896" }, { name: "LinkedIn", url: "https://www.linkedin.com/in/priyanshu-dubey-ai/" }, { name: "Portfolio", url: "https://www.priyanshh.site/" }, { name: "X", url: "https://x.com/priyanshu_9896" }, { name: "Email", url: "mailto:reach-priyanshu@outlook.com" }, { name: "Phone", url: "tel:+917496006515" }]
  },
  {
    id: "mridul", number: "02", name: "Mridul Sharma", initials: "MS", photo: "mridul-headshot.png", label: "THE REEL RACER",
    role: "MCA Student · Movie & F1 Enthusiast", punchline: "One good plot twist. One clean overtake. Perfect weekend.",
    bio: "Mridul is a first-year MCA student at IIIT Vadodara, exploring technology and building his understanding of software development one step at a time. Outside academics, you'll usually find him watching a good movie or keeping an eye on the next Formula 1 race.",
    education: ["MCA — IIIT Vadodara (First Year)"], skills: [], interests: ["Movies", "Formula 1", "Race weekends"], links: []
  },
  {
    id: "pranjal", number: "03", name: "Pranjal Shukla", initials: "PS", photo: "pumpo-headshot.jpeg", label: "THE WEB BUILDER",
    role: "MCA Student · Full-stack Developer", punchline: "If there's a match on, the score gets checked between commits.",
    bio: "I'm an MCA student at IIIT Vadodara with a strong interest in web development and software engineering. I enjoy building modern, responsive and user-friendly applications while continuously improving my problem-solving and programming skills.",
    education: ["MCA — IIIT Vadodara (First Year)"],
    experience: ["React Developer Intern — May 2025 to October 2025. Worked on live web projects, responsive interfaces and interactive applications."],
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "MongoDB", "TypeScript", "Express.js", "Redis", "RTK Query"],
    interests: ["Web development", "Software engineering", "Problem solving", "Cricket", "Virat Kohli"],
    projects: ["KnowledgebleHub — online learning platform"],
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/pranjal-shukla-68253a226/" },
      { name: "GitHub", url: "https://github.com/pranjalshukla0" }
    ],
    socialLinks: {
      "linkedin": "https://www.linkedin.com/in/pranjal-shukla-68253a226/",
      "github": "https://github.com/pranjalshukla0"
    }
  },
  {
    id: "adarsh", number: "04", name: "Adarsh Prajapati", initials: "AP", photo: "Adarsh-headshot.png", label: "THE LO-FI LOOP",
    role: "MCA Student · Music Enthusiast", punchline: "Low-fi beats. High-focus mode.",
    bio: "Adarsh is a first-year MCA student at IIIT Vadodara, exploring technology and learning through practical work. When it's time to take a break from screens and coursework, lo-fi music is usually the soundtrack.",
    education: ["MCA — IIIT Vadodara (First Year)"], skills: [], interests: ["Lo-fi music", "Music discovery", "Relaxed playlists"],
    links: [{ name: "LinkedIn", url: "https://www.linkedin.com/in/adarsh-prajapati-044304431/" }]
  }
];

// Add or edit projects in this list.
const projects = [
  {
    id: "mockstar", number: "01", title: "MockStar", category: "ai", categoryLabel: "AI / INTERVIEW PREP", visual: "project-visual-blue", image: "",
    description: "An AI-based interview preparation application designed to simulate interview experiences and help users prepare with more confidence.",
    technologies: ["Python", "AI / LLMs", "MediaPipe", "OpenCV", "Speech Recognition"], contributors: "Priyanshu Dubey",
    links: [{ name: "Live demo", url: "https://www.mockstar.in" }]
  },
  {
    id: "knowledgeblehub", number: "02", title: "KnowledgebleHub", category: "web", categoryLabel: "WEB / LEARNING PLATFORM", visual: "project-visual-orange", image: "",
    description: "A modern online learning platform with course management, an admin dashboard and an interactive course-building experience.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redis", "RTK Query"], contributors: "Pranjal Shukla", links: []
  }
];

const $ = selector => document.querySelector(selector);
const memberGrid = $("#memberGrid"), projectGrid = $("#projectGrid");
const modal = $("#modalBackdrop"), modalContent = $("#modalContent");

// Keep text entered in these data lists from being read as HTML.
function safe(text = "") {
  return String(text).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function portrait(person, extra = "") {
  const photo = person.photo ? `<img src="${safe(person.photo)}" alt="${safe(person.name)}">` : "";
  return `<div class="member-photo ${extra} ${person.photo ? "has-photo" : "photo-placeholder"}">${photo}
    <span class="photo-initials">${safe(person.initials)}</span><span class="photo-index">${person.number} / 04</span><span class="photo-cross">✳</span></div>`;
}

function section(title, items, chips = false) {
  if (!items || !items.length) return "";
  const content = items.map(item => chips ? `<span class="skill-chip">${safe(item)}</span>` : `<li>${safe(item)}</li>`).join("");
  return `<div class="modal-detail-block"><span class="mono">${title}</span>${chips ? `<div class="skill-list">${content}</div>` : `<ul class="profile-bullet-list">${content}</ul>`}</div>`;
}

function openModal(content) {
  modalContent.innerHTML = content;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("#detailModal").focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalContent.innerHTML = "";
}

function showMember(person) {
  const details = [
    section("EDUCATION", person.education), section("EXPERIENCE", person.experience),
    section("SKILLS & TOOLKIT", person.skills, true), section("CURRENTLY LEARNING", person.learning, true),
    section("INTERESTS", person.interests), section("PROJECTS & EXPLORATIONS", person.projects)
  ].join("");
  const personLinks = (person.links && person.links.length)
    ? person.links
    : person.socialLinks
      ? Object.entries(person.socialLinks).filter(([_, url]) => Boolean(url)).map(([k, url]) => ({
          name: k === "github" ? "GitHub" : k === "linkedin" ? "LinkedIn" : k.charAt(0).toUpperCase() + k.slice(1),
          url
        }))
      : [];
  const links = personLinks.map(link => `<a class="detail-social" href="${safe(link.url)}" target="_blank" rel="noopener">${safe(link.name)} ↗</a>`).join("");
  openModal(`<div class="member-modal-layout"><div class="modal-portrait-wrap">${portrait(person, "modal-portrait")}</div>
    <div class="modal-detail-copy"><span class="mono modal-kicker">${person.number} / MEMBER PROFILE</span>
    <h2 id="modalTitle">${safe(person.name)}</h2><p class="modal-role">${safe(person.role)}</p>
    <p class="modal-punchline">“${safe(person.punchline)}”</p><p class="modal-bio">${safe(person.bio)}</p>
    ${details}${links ? `<div class="modal-socials">${links}</div>` : ""}</div></div>`);
}

function showProject(project) {
  const links = (project.links || []).map(link => `<a class="detail-social" href="${safe(link.url)}" target="_blank" rel="noopener">${safe(link.name)} ↗</a>`).join("");
  const image = project.image
    ? `<div class="modal-project-image"><img src="${safe(project.image)}" alt="${safe(project.title)} preview"></div>`
    : `<div class="modal-project-image ${project.visual}"><span class="project-modal-placeholder-title">${safe(project.title)}</span><small>ADD PROJECT SCREENSHOT HERE</small></div>`;
  openModal(`<div class="project-modal-content"><span class="mono modal-kicker">${safe(project.categoryLabel)} / FEATURED BUILD</span>
    <h2 id="modalTitle">${safe(project.title)}</h2>${image}<p class="modal-project-intro">${safe(project.description)}</p>
    ${section("BUILT WITH", project.technologies, true)}
    <div class="project-modal-footer"><p><span class="mono">CONTRIBUTORS</span><br>${safe(project.contributors)}</p>${links ? `<div class="modal-socials">${links}</div>` : ""}</div></div>`);
}

function renderMembers() {
  memberGrid.innerHTML = members.map(person => `<article class="member-card"><button class="member-open" data-member="${person.id}" type="button">
    ${portrait(person)}<span class="member-card-meta"><span class="mono">${person.number} / ${safe(person.label)}</span><span class="member-arrow">↗</span></span>
    <span class="member-name">${safe(person.name)}</span><span class="member-role">${safe(person.role)}</span>
    <span class="member-punchline">“${safe(person.punchline)}”</span></button></article>`).join("");
}

function renderProjects(category = "all") {
  const visible = projects.filter(project => category === "all" || project.category === category);
  projectGrid.innerHTML = visible.map(project => `<article class="project-card"><button class="project-open" data-project="${project.id}" type="button">
    <div class="project-image ${project.visual}">${project.image ? `<img src="${safe(project.image)}" alt="${safe(project.title)} screenshot">` : `<span class="project-placeholder-mark">${project.number}</span><span class="project-placeholder-copy">${safe(project.title)} <span>↗</span></span><span class="project-placeholder-note mono">ADD PROJECT SCREENSHOT HERE</span>`}<span class="project-view">View project <b>↗</b></span></div>
    <div class="project-card-meta"><span class="mono">${safe(project.categoryLabel)}</span><span class="mono">FEATURED BUILD</span></div>
    <div class="project-title-row"><h3>${safe(project.title)}</h3><span>↗</span></div><p>${safe(project.description)}</p></button></article>`).join("");
}

// One click handler works for all member and project cards.
memberGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-member]");
  if (button) showMember(members.find(person => person.id === button.dataset.member));
});
projectGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-project]");
  if (button) showProject(projects.find(project => project.id === button.dataset.project));
});

// Project category filters.
const filters = $("#projectFilters");
filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  filters.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
  renderProjects(button.dataset.filter);
});

// Close a profile or project popup.
$("#modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });

// Save the selected light or dark theme in the browser.
const themeButton = $("#themeToggle");
document.documentElement.dataset.theme = localStorage.getItem("fourward-theme") || "light";
themeButton.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("fourward-theme", theme);
});

// Open and close the small-screen navigation.
const mobileMenu = $("#mobileMenu"), menuButton = $("#menuToggle");
menuButton.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("is-open");
  menuButton.classList.toggle("is-active", open);
  menuButton.setAttribute("aria-expanded", open);
  mobileMenu.setAttribute("aria-hidden", !open);
});
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
  menuButton.classList.remove("is-active");
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}));

renderMembers();
renderProjects();
