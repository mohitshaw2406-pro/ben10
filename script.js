
const alienData = {
    heatblast: { name: "Heatblast", color: "#ff4500", img: "ben 10 aliens/heatblast.png", info: "A pyro-kinetic alien that can manipulate fire and fly." },
    fourarms: { name: "Four Arms", color: "#d00000", img: "ben 10 aliens/fourarms.png", info: "Vast physical strength and nearly indestructible skin." },
    xlr8: { name: "XLR8", color: "#00bfff", img: "ben 10 aliens/XLR8.png", info: "Can reach speeds over 500mph in seconds." },
    diamondhead: { name: "Diamondhead", color: "#2ecc71", img: "ben 10 aliens/diamondhead.png", info: "Manipulates organic crystal for offense and defense." },
    ghostfreak: { name: "Ghostfreak", color: "#7f8c8d", img: "ben 10 aliens/ghostfreak.png", info: "Invisibility, intangibility, and possession." },
    wildmutt: { name: "Wildmutt", color: "#e67e22", img: "ben 10 aliens/wildmutt.png", info: "Superhuman tracking senses and primal agility." },
    cannonbolt: { name: "Cannonbolt", color: "#f1c40f", img: "ben 10 aliens/cannonbolt.png", info: "Curls into a sphere for high-speed impact attacks." },
    greymatter: { name: "Grey Matter", color: "#bdc3c7", img: "ben 10 aliens/grey matter.png", info: "Advanced intelligence for technical problem solving." },
    stinkfly: { name: "Stinkfly", color: "#27ae60", img: "ben 10 aliens/stinkfly.png", info: "Aerial maneuvers and toxic slime projection." },
    ripjaws: { name: "Ripjaws", color: "#34495e", img: "ben 10 aliens/rip jaws.png", info: "Aquatic adaptation and powerful steel-crushing jaws." },
    humungousaur: { name: "Humungousaur", color: "#5d4037", img: "ben 10 aliens/humangasour.png", info: "Enormous strength and size-shifting capabilities." },
    bigchill: { name: "Big Chill", color: "#3498db", img: "ben 10 aliens/bigchill.png", info: "Intangible flight and freezing vapor breath." },
    spidermonkey: { name: "Spidermonkey", color: "#3f51b5", img: "ben 10 aliens/spidermonkey.png", info: "Enhanced agility and high-tensile web production." },
    jetray: { name: "Jetray", color: "#e91e63", img: "ben 10 aliens/jetray.png", info: "Supersonic flight and neuroshock energy blasts." },
    chromastone: { name: "Chromastone", color: "#9c27b0", img: "ben 10 aliens/chromastone.png", info: "Energy absorption and redirection via ultraviolet beams." },
    echoecho: { name: "Echo Echo", color: "#ffffff", img: "ben 10 aliens/echo echo.png", info: "Sonic scream projection and self-duplication." },
    goop: { name: "Goop", color: "#8bc34a", img: "ben 10 aliens/goof.png", info: "Acidic body shifting and size manipulation." },
    swampfire: { name: "Swampfire", color: "#4caf50", img: "ben 10 aliens/swampfire.png", info: "Fire ignition and control over plant life." },
    alienx: { name: "Alien X", color: "#000000", img: "ben 10 aliens/alien x.png", info: "Omnipotent reality-warping and space-time control." },
    brainstorm: { name: "Brainstorm", color: "#ffeb3b", img: "ben 10 aliens/brainstorm.png", info: "Electrokinesis and massive calculating intelligence." }
};

const slider = document.getElementById("alienSlider");
const navbar = document.getElementById("navbar");
const btt = document.getElementById("backToTop");

Object.keys(alienData).forEach(key => {
    const alien = alienData[key];
    const card = document.createElement("div");
    card.className = "alien-card";
    card.dataset.name = alien.name.toLowerCase();
    card.style.setProperty('--theme-color', alien.color);
    card.style.setProperty('--alien-color', alien.color);
    card.style.setProperty('--alien-color-alpha', alien.color + '44');
    card.style.setProperty('--alien-color-gradient', `linear-gradient(135deg, ${alien.color}dd, #161b22)`);
    card.innerHTML = `<img src="${alien.img}" alt="${alien.name}"><p class="name">${alien.name}</p><div class="alien-info">${alien.info}</div>`;
    card.addEventListener("click", () => {
        const isActive = card.classList.contains("active");
        document.querySelectorAll(".alien-card").forEach(c => c.classList.remove("active"));
        if (!isActive) {
            card.classList.add("active");
            card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });
    slider.appendChild(card);
});

window.addEventListener("scroll", () => {
    const pos = window.scrollY;
    navbar.classList.toggle("scrolled", pos > 50);
    btt.style.display = pos > 600 ? "flex" : "none";

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(l => l.classList.remove('active-nav'));
    if (pos < 400) links[0].classList.add('active-nav');
    else if (pos < 1200) links[1].classList.add('active-nav');
    else if (pos < 2000) links[2].classList.add('active-nav');
    else links[3].classList.add('active-nav');
});

document.getElementById("alienSearch").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".alien-card").forEach(card => {
        card.style.display = card.dataset.name.includes(query) ? "block" : "none";
    });
});