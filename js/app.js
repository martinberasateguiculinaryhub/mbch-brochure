
/* =========================================================
   MARTÍN BERASATEGUI CULINARY HUB
   Interactive brochure
   Main application
   ========================================================= */

import {
  programs,
  categories,
  getProgram,
  filterPrograms
} from "./data.js";


/* ---------------------------------------------------------
   01. DOM REFERENCES
   --------------------------------------------------------- */

const programGrid = document.querySelector("#program-grid");
const programSearch = document.querySelector("#program-search");
const categoryFilters = document.querySelector("#category-filters");
const emptyState = document.querySelector("#empty-state");

const programDialog = document.querySelector("#program-dialog");
const programDetail = document.querySelector("#program-detail");
const programStickyCta = document.getElementById("program-sticky-cta");
const dialogClose = document.querySelector("#dialog-close");

const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

const navLinks = document.querySelectorAll(".nav-link");
const categoryCards = document.querySelectorAll(
  ".category-card[data-category]"
);


/* ---------------------------------------------------------
   02. APPLICATION STATE
   --------------------------------------------------------- */

const state = {
  category: "all",
  query: ""
};


/* ---------------------------------------------------------
   03. HELPERS
   --------------------------------------------------------- */

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}


function getCategoryLabel(categoryId) {
  const category = categories.find(
    (item) => item.id === categoryId
  );

  return category?.label ?? "Programa";
}


function getModalityLabel(program) {
  if (!Array.isArray(program.modality)) {
    return program.modality || "Consultar modalidad";
  }

  return program.modality.length
    ? program.modality.join(" · ")
    : "Consultar modalidad";
}


function getImageMarkup(program, className = "") {
  if (!program.image) {
    return `
      <div class="${className} program-card-image-placeholder">
        <span>Martín Berasategui<br>Culinary Hub</span>
      </div>
    `;
  }

  return `
    <img
      class="${className}"
      src="${escapeHTML(program.image)}"
      alt="${escapeHTML(program.title)}"
      loading="lazy"
    >
  `;
}


/* ---------------------------------------------------------
   04. PROGRAM CARD TEMPLATE
   --------------------------------------------------------- */

function createProgramCard(program) {
  const title = escapeHTML(program.title);
  const category = escapeHTML(
    getCategoryLabel(program.category)
  );
  const area = escapeHTML(program.area || "");
  const summary = escapeHTML(program.summary || "");
  const modality = escapeHTML(getModalityLabel(program));

  return `
    <article
      class="program-card"
      data-program-id="${escapeHTML(program.id)}"
    >
      <button
        class="program-card-button"
        type="button"
        data-open-program="${escapeHTML(program.id)}"
        aria-label="Ver detalles de ${title}"
      >
        <div class="program-card-image">
          ${getImageMarkup(program)}
          <span class="program-card-category">${category}</span>
        </div>

        <div class="program-card-body">
          ${area ? `
            <span class="program-card-area">${area}</span>
          ` : ""}

          <h4 class="program-card-title">${title}</h4>
          <span class="program-card-footer">
            <span class="program-card-modality">${modality}</span>
            <span class="program-card-link">
              Descubrir <span aria-hidden="true">↗</span>
            </span>
          </span>
        </div>
      </button>
    </article>
  `;
}


/* ---------------------------------------------------------
   05. RENDER CATALOG
   --------------------------------------------------------- */

function renderPrograms() {
  if (!programGrid) return;

  const filteredPrograms = filterPrograms(state);

  programGrid.innerHTML = filteredPrograms
    .map(createProgramCard)
    .join("");

  if (emptyState) {
    emptyState.hidden = filteredPrograms.length > 0;
  }

  programGrid.setAttribute(
    "aria-label",
    `${filteredPrograms.length} programas encontrados`
  );
}


/* ---------------------------------------------------------
   06. SEARCH
   --------------------------------------------------------- */

function handleSearch(event) {
  state.query = event.target.value;
  renderPrograms();
}

programSearch?.addEventListener("input", handleSearch);


/* ---------------------------------------------------------
   07. CATEGORY FILTERS
   --------------------------------------------------------- */

function updateFilterButtons() {
  if (!categoryFilters) return;

  const buttons = categoryFilters.querySelectorAll(
    "[data-filter]"
  );

  buttons.forEach((button) => {
    const isActive = button.dataset.filter === state.category;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}


function setCategory(categoryId, options = {}) {
  const { scrollToCatalog = false } = options;

  state.category = categoryId;
  updateFilterButtons();
  renderPrograms();

  if (scrollToCatalog) {
    document.querySelector("#program-browser")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


categoryFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");

  if (!button) return;

  setCategory(button.dataset.filter);
});


/* ---------------------------------------------------------
   08. CATEGORY CARDS
   --------------------------------------------------------- */

categoryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;

    if (!categories.some((item) => item.id === category)) {
      return;
    }

    setCategory(category);
  });
});


/* ---------------------------------------------------------
   09. PROGRAM DETAIL TEMPLATE
   --------------------------------------------------------- */

function createList(items = []) {
  if (!Array.isArray(items) || items.length === 0) {
    return "";
  }

  return `
    <ul>
      ${items.map((item) => `
        <li>${escapeHTML(item)}</li>
      `).join("")}
    </ul>
  `;
}



function createProgramDetail(program) {
  const image = program.image
    ? `
      <div class="program-detail-media">
        <img
          class="program-detail-image"
          src="${escapeHTML(program.image)}"
          alt="${escapeHTML(program.title)}"
        >
      </div>
    `
    : "";

  const highlights = createList(program.highlights);
  const careerPaths = createList(program.careerPaths);
  const validCtaUrl = isSafeExternalUrl(program.ctaUrl);
  const categoryLabel = getCategoryLabel(program.category);
  const validPdf =
  typeof program.pdf === "string" &&
  program.pdf.trim() !== "" &&
  program.pdf.toLowerCase().endsWith(".pdf");

  return `
    <article class="program-detail-content">

      ${image}

      <header class="program-detail-header">
        <p class="program-detail-category">
          <span class="program-detail-category-dot"></span>
          ${escapeHTML(categoryLabel)}
          ${program.area ? `
            <span class="program-detail-category-separator">/</span>
            ${escapeHTML(program.area)}
          ` : ""}
        </p>

        <h2 class="program-detail-title" id="dialog-title">
          ${escapeHTML(program.title)}
        </h2>

        ${program.summary ? `
          <p class="program-detail-summary">
            ${escapeHTML(program.summary)}
          </p>
        ` : ""}
      </header>

      <div class="program-detail-meta">
        <div class="program-detail-meta-item">
          <span class="program-detail-meta-label">Duración</span>
          <strong>
            ${escapeHTML(program.duration || "Por definir")}
          </strong>
        </div>

        <div class="program-detail-meta-item">
          <span class="program-detail-meta-label">Modalidad</span>
          <strong>
            ${escapeHTML(getModalityLabel(program) || "Por definir")}
          </strong>
        </div>

        <div class="program-detail-meta-item">
          <span class="program-detail-meta-label">Área de conocimiento</span>
          <strong>
            ${escapeHTML(program.area || "Por definir")}
          </strong>
        </div>
      </div>

      ${highlights ? `
        <section class="program-detail-section">
          <p class="program-detail-eyebrow">01 / Formación</p>
          <h3>¿Qué aprenderás?</h3>
          ${highlights}
        </section>
      ` : ""}

      ${careerPaths ? `
        <section class="program-detail-section">
          <p class="program-detail-eyebrow">02 / Desarrollo profesional</p>
          <h3>Salidas profesionales</h3>
          ${careerPaths}
        </section>
      ` : ""}

      ${program.requirements ? `
        <section class="program-detail-section">
          <p class="program-detail-eyebrow">03 / Admisión</p>
          <h3>Requisitos de acceso</h3>
          <p>${escapeHTML(program.requirements)}</p>
        </section>
      ` : ""}

      ${program.video && isSafeVideoUrl(program.video) ? `
        <section class="program-detail-section">
          <p class="program-detail-eyebrow">Descubre el programa</p>
          <a
            class="text-link"
            href="${escapeHTML(program.video)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver vídeo <span aria-hidden="true">↗</span>
          </a>
        </section>
      ` : ""}
${validPdf ? `
  <section class="program-detail-section program-detail-pdf-section">
    <a
      class="program-detail-pdf"
      href="${escapeHTML(program.pdf)}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir ficha completa de ${escapeHTML(program.title)} en PDF"
    >
      Abrir ficha completa
      <span aria-hidden="true">↗</span>
    </a>
  </section>
` : ""}
      ${validCtaUrl ? `
        <footer class="program-detail-cta">
          <div class="program-detail-cta-copy">
            <p>Da el siguiente paso</p>
            <span>Descubre más sobre este programa.</span>
          </div>

          <a
            class="button button-primary"
            href="${escapeHTML(program.ctaUrl)}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${escapeHTML(program.ctaLabel || "Solicitar información")}
            <span aria-hidden="true">↗</span>
          </a>
        </footer>
      ` : ""}
    </article>
  `;
}



/* ---------------------------------------------------------
   10. URL VALIDATION
   --------------------------------------------------------- */

function isSafeExternalUrl(value) {
  if (typeof value !== "string" || !value.trim()) {
    return false;
  }

  try {
    const url = new URL(value);

    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}


function isSafeVideoUrl(value) {
  return isSafeExternalUrl(value);
}


/* ---------------------------------------------------------
   11. OPEN AND CLOSE PROGRAM DIALOG
   --------------------------------------------------------- */


function openProgram(programId) {
  const program = getProgram(programId);

  if (!program || !programDialog || !programDetail) {
    return;
  }

  programDetail.innerHTML = createProgramDetail(program);

  if (programStickyCta) {
    const validCtaUrl = isSafeExternalUrl(program.ctaUrl);

    if (validCtaUrl) {
      programStickyCta.innerHTML = `
        <a
          class="button button-primary"
          href="${escapeHTML(program.ctaUrl)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${escapeHTML(program.ctaLabel || "Solicitar información")}
          <span aria-hidden="true">↗</span>
        </a>
      `;

      programStickyCta.hidden = false;
    } else {
      programStickyCta.innerHTML = "";
      programStickyCta.hidden = true;
    }
  }

  if (typeof programDialog.showModal === "function") {
    programDialog.showModal();
  } else {
    programDialog.setAttribute("open", "");
  }
}



function closeProgramDialog() {
  if (!programDialog) return;

  if (typeof programDialog.close === "function") {
    programDialog.close();
  } else {
    programDialog.removeAttribute("open");
  }
}


programGrid?.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-program]");

  if (!trigger) return;

  openProgram(trigger.dataset.openProgram);
});


dialogClose?.addEventListener("click", closeProgramDialog);


programDialog?.addEventListener("click", (event) => {
  if (event.target === programDialog) {
    closeProgramDialog();
  }
});


programDialog?.addEventListener("close", () => {
  programDetail.innerHTML = "";
});


/* ---------------------------------------------------------
   12. MOBILE NAVIGATION
   --------------------------------------------------------- */

function closeMenu() {
  if (!menuButton || !mainNav) return;

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
  mainNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}


function toggleMenu() {
  if (!menuButton || !mainNav) return;

  const isOpen =
    menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Abrir menú" : "Cerrar menú"
  );

  mainNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
}


menuButton?.addEventListener("click", toggleMenu);


navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});


/* ---------------------------------------------------------
   13. ACTIVE NAVIGATION
   --------------------------------------------------------- */

function updateActiveNavigation() {
  const currentHash = window.location.hash || "#home";

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === currentHash;

    link.classList.toggle("active", isActive);
  });
}


window.addEventListener("hashchange", updateActiveNavigation);



function initActiveSectionObserver() {
  const navLinks = [...document.querySelectorAll(".main-nav .nav-link")];

  const sections = navLinks
    .map((link) => {
      const targetId = link.getAttribute("href");

      if (!targetId || !targetId.startsWith("#")) {
        return null;
      }

      const section = document.querySelector(targetId);

      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  function setActiveLink(activeSection) {
    sections.forEach(({ link, section }) => {
      const isActive = section === activeSection;

      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = sections
        .map(({ link, section }) => {
          const entry = entries.find(
            (item) => item.target === section
          );

          return {
            link,
            section,
            entry,
            top: section.getBoundingClientRect().top
          };
        })
        .filter(({ entry }) => entry?.isIntersecting);

      if (!visibleSections.length) return;

      // Destacar la sección que ocupa la zona superior
      // de la página, no simplemente la última pulsada.
      visibleSections.sort((a, b) => {
        const aDistance = Math.abs(a.top - 120);
        const bDistance = Math.abs(b.top - 120);

        return aDistance - bDistance;
      });

      setActiveLink(visibleSections[0].section);
    },
    {
      root: null,
      rootMargin: "-15% 0px -65% 0px",
      threshold: 0
    }
  );

  sections.forEach(({ section }) => observer.observe(section));

  // Estado inicial
  const initialSection = sections.find(
    ({ section }) => section.id === location.hash.slice(1)
  ) || sections[0];

  setActiveLink(initialSection.section);
}


/* ---------------------------------------------------------
   14. INITIALIZE APPLICATION
   --------------------------------------------------------- */

function init() {
  updateFilterButtons();
  renderPrograms();
  updateActiveNavigation();
  initActiveSectionObserver();
  console.info(
    `MBCH brochure initialized: ${programs.length} demo programs`
  );

  const institutionHistoryDialog = document.getElementById(
    "institution-history-dialog"
  );

  const openInstitutionHistory = document.getElementById(
    "open-institution-history"
  );

  const closeInstitutionHistory = document.getElementById(
    "close-institution-history"
  );

  if (institutionHistoryDialog && openInstitutionHistory) {
    openInstitutionHistory.addEventListener("click", (event) => {
      event.preventDefault();
      institutionHistoryDialog.showModal();
    });
  }

  if (institutionHistoryDialog && closeInstitutionHistory) {
    closeInstitutionHistory.addEventListener("click", () => {
      institutionHistoryDialog.close();
    });
  }

  if (institutionHistoryDialog) {
    institutionHistoryDialog.addEventListener("click", (event) => {
      if (event.target === institutionHistoryDialog) {
        institutionHistoryDialog.close();
      }
    });
  }

  const degreesDialog = document.getElementById("degrees-dialog");
  const openDegreesPopup = document.getElementById("open-degrees-popup");
  const closeDegreesDialog = document.getElementById("close-degrees-dialog");

  if (degreesDialog && openDegreesPopup) {
    openDegreesPopup.addEventListener("click", (event) => {
      event.preventDefault();
      degreesDialog.showModal();
    });
  }

  if (degreesDialog && closeDegreesDialog) {
    closeDegreesDialog.addEventListener("click", () => {
      degreesDialog.close();
    });
  }

  if (degreesDialog) {
    degreesDialog.addEventListener("click", (event) => {
      if (event.target === degreesDialog) {
        degreesDialog.close();
      }
    });
  }

}

init();
