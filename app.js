(() => {
  "use strict";

  const root = document.documentElement;
  const header = document.querySelector(".site-header");
  const progressBar = document.querySelector(".scroll-progress i");
  const opening = document.querySelector(".opening");
  const manifesto = document.querySelector(".manifesto");
  const experience = document.querySelector(".experience-reel");
  const projectBrowser = document.querySelector(".project-browser");
  const signalStage = document.querySelector(".ai-lab");
  const projectTracks = [...document.querySelectorAll("[data-project]")];
  const preview = document.querySelector("[data-preview-visual]");
  const previewCategory = document.querySelector("[data-preview-category]");
  const previewCode = document.querySelector("[data-preview-code]");
  const previewWords = document.querySelector("[data-preview-words]");
  const previewTitle = document.querySelector("[data-preview-title]");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeProject = null;
  let currentChapter = "开场";
  let rafQueued = false;

  const colors = {
    cobalt: ["#3548c8", "#fbfaf6"],
    coral: ["#ff6758", "#17171f"],
    mint: ["#77d7be", "#17171f"],
    pink: ["#f190b6", "#17171f"],
    violet: ["#a799f5", "#17171f"],
  };

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

  function sectionProgress(element) {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const distance = Math.max(1, rect.height - innerHeight);
    return clamp(-rect.top / distance);
  }

  function activateProject(track) {
    if (!track || track === activeProject) return;
    activeProject = track;
    projectTracks.forEach((item) => item.classList.toggle("is-active", item === track));

    const [background, foreground] = colors[track.dataset.color] || colors.cobalt;
    preview.style.setProperty("--active-color", background);
    preview.style.setProperty("--active-contrast", foreground);
    preview.className = `screen-visual visual-${track.dataset.visual || "flow"}`;
    previewCategory.textContent = track.dataset.category || "SELECTED WORK";
    previewCode.textContent = track.dataset.code || "MATERIAL → JUDGMENT";
    previewTitle.textContent = track.querySelector("h3").textContent.split("｜")[0];
    previewWords.replaceChildren(
      ...(track.dataset.words || "INPUT|METHOD|OUTPUT").split("|").map((word) => {
        const node = document.createElement("i");
        node.textContent = word;
        return node;
      }),
    );

    if (!reduceMotion) {
      preview.getAnimations().forEach(animation => animation.cancel());
      preview.animate(
        [
          { opacity: 0.8, transform: "translateY(4px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 180, easing: "ease-out" },
      );
    }
  }

  function update() {
    rafQueued = false;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const pageProgress = clamp(scrollY / maxScroll);
    progressBar.style.transform = `scaleX(${pageProgress})`;
    header.classList.toggle("is-scrolled", scrollY > 18);

    root.style.setProperty("--opening-progress", sectionProgress(opening).toFixed(4));
    root.style.setProperty("--experience-progress", sectionProgress(experience).toFixed(4));
    root.style.setProperty("--project-progress", sectionProgress(projectBrowser).toFixed(4));
    root.style.setProperty("--signal-progress", sectionProgress(signalStage).toFixed(4));

    if (manifesto) {
      const rect = manifesto.getBoundingClientRect();
      manifesto.style.setProperty("--manifesto-visible", rect.top < innerHeight * 0.72 ? "1" : "0");
    }

    if (projectTracks.length) {
      const screenBottom = document.querySelector('.project-screen').getBoundingClientRect().bottom;
      const targetLine = innerWidth <= 720 ? Math.min(innerHeight - 40, screenBottom + 48) : innerHeight * 0.52;
      let nearest = projectTracks[0];
      let nearestDistance = Infinity;
      for (const track of projectTracks) {
        const rect = track.getBoundingClientRect();
        const distance = rect.top <= targetLine && rect.bottom > targetLine ? 0 : Math.min(Math.abs(rect.top - targetLine), Math.abs(rect.bottom - targetLine));
        if (distance < nearestDistance) {
          nearest = track;
          nearestDistance = distance;
        }
      }
      activateProject(nearest);
    }
  }

  function requestUpdate() {
    if (rafQueued) return;
    rafQueued = true;
    requestAnimationFrame(update);
  }

  document.querySelectorAll(".details-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const track = button.closest(".project-track");
      const open = !track.classList.contains("is-open");
      track.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
      activateProject(track);
      setTimeout(requestUpdate, 440);
    });
  });

  projectTracks.forEach((track) => {
    track.addEventListener("focusin", () => activateProject(track));
    track.addEventListener("click", (event) => {
      if (!event.target.closest("a,button")) activateProject(track);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  });

  const chapters = [...document.querySelectorAll("section[data-chapter]")];
  const chapterColors = ["#3548c8", "#f190b6", "#ff6758", "#77d7be", "#a799f5", "#3548c8"];
  const chapterObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const nextChapter = entry.target.dataset.chapter;
        if (nextChapter === currentChapter) continue;
        currentChapter = nextChapter;
        document.body.dataset.chapter = nextChapter;
      }
    },
    { rootMargin: "-46% 0px -47% 0px", threshold: 0 },
  );
  chapters.forEach((chapter) => chapterObserver.observe(chapter));

  if (!reduceMotion && matchMedia("(pointer:fine)").matches) {
    const composition = document.querySelector(".hero-composition");
    addEventListener("pointermove", (event) => {
      if (scrollY > innerHeight) return;
      const x = (event.clientX / innerWidth - 0.5) * 12;
      const y = (event.clientY / innerHeight - 0.5) * 10;
      composition.style.translate = `${x}px ${y}px`;
    }, { passive: true });
  }

  addEventListener("scroll", requestUpdate, { passive: true });
  addEventListener("resize", requestUpdate, { passive: true });
  addEventListener("load", requestUpdate, { once: true });

  if (window.Lenis && !reduceMotion) {
    const lenis = new window.Lenis({ lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.86, touchMultiplier: 1.05 });
    lenis.on("scroll", requestUpdate);
    const loop = (time) => {
      lenis.raf(time);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  activateProject(projectTracks[0]);
  addEventListener('portfolio:language', () => {
    const track = activeProject;
    activeProject = null;
    activateProject(track);
    requestUpdate();
  });
  update();
})();
