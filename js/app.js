/**
 * ARTs - Masterpieces & Stories Controller
 * Minimalistic museum presentation, live search, era filtering,
 * progressive loading for 100+ masterworks, and high-definition lightbox.
 */

document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentFilter = "all";
  let searchQuery = "";
  let currentView = "stream"; // 'stream' (Story View) or 'grid' (Gallery Wall)
  let activeLightboxIndex = 0;
  let zoomLevel = 1; // 1x, 2x, 3x
  
  // Progressive loading for story view
  const STREAM_BATCH_SIZE = 12;
  let streamVisibleCount = STREAM_BATCH_SIZE;

  // DOM Elements
  const exhibitionStream = document.getElementById("exhibitionStream");
  const galleryGrid = document.getElementById("galleryGrid");
  const emptyState = document.getElementById("emptyState");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const viewButtons = document.querySelectorAll(".view-btn");
  const collectionCounter = document.getElementById("collectionCounter");
  const progressBar = document.getElementById("progressBar");
  const backToTopBtn = document.getElementById("backToTop");
  const loadMoreContainer = document.getElementById("loadMoreContainer");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const loadAllBtn = document.getElementById("loadAllBtn");
  const streamStatusText = document.getElementById("streamStatusText");

  // Lightbox Elements
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const lightboxZoomToggle = document.getElementById("lightboxZoomToggle");
  const lightboxFullResLink = document.getElementById("lightboxFullResLink");
  const lightboxImgContainer = document.querySelector(".lightbox-image-container");

  // Initialize
  renderGallery();
  setupEventListeners();

  /**
   * Filter & Search Data
   */
  function getFilteredArtworks() {
    return ARTWORKS_DATA.filter((art) => {
      // Era filter matching
      let matchesEra = currentFilter === "all";
      if (!matchesEra) {
        const filterLower = currentFilter.toLowerCase();
        matchesEra =
          art.era.toLowerCase().includes(filterLower) ||
          art.artist.movement.toLowerCase().includes(filterLower);
      }

      // Search query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        art.title.toLowerCase().includes(q) ||
        art.originalTitle.toLowerCase().includes(q) ||
        art.artist.name.toLowerCase().includes(q) ||
        art.year.toLowerCase().includes(q) ||
        art.era.toLowerCase().includes(q) ||
        art.location.toLowerCase().includes(q) ||
        art.story.toLowerCase().includes(q) ||
        art.historicalReferences.toLowerCase().includes(q);

      return matchesEra && matchesSearch;
    });
  }

  /**
   * Render Masterpiece Collection
   */
  function renderGallery() {
    const artworks = getFilteredArtworks();

    // Update Counter
    if (collectionCounter) {
      collectionCounter.textContent = `${artworks.length} Masterpieces`;
    }

    if (artworks.length === 0) {
      exhibitionStream.style.display = "none";
      galleryGrid.style.display = "none";
      if (loadMoreContainer) loadMoreContainer.style.display = "none";
      emptyState.classList.add("active");
      return;
    }

    emptyState.classList.remove("active");

    if (currentView === "stream") {
      exhibitionStream.style.display = "flex";
      galleryGrid.style.display = "none";
      renderStreamView(artworks);
    } else {
      exhibitionStream.style.display = "none";
      galleryGrid.style.display = "grid";
      if (loadMoreContainer) loadMoreContainer.style.display = "none";
      renderGridView(artworks);
    }
  }

  /**
   * Render Story / Monograph Stream View (Progressive Batch Loading)
   */
  function renderStreamView(artworks) {
    exhibitionStream.innerHTML = "";

    const visibleArtworks = artworks.slice(0, streamVisibleCount);

    visibleArtworks.forEach((art, index) => {
      const article = document.createElement("article");
      article.className = "artwork-article";
      article.id = `artwork-${art.id}`;

      // Format story paragraphs
      const storyParagraphs = art.story
        .split("\n\n")
        .map((p) => `<p>${escapeHtml(p)}</p>`)
        .join("");

      article.innerHTML = `
        <div class="artwork-stage">
          <div class="painting-frame-wrapper" data-art-id="${art.id}" title="Click to inspect in Full HD">
            <img 
              class="painting-img" 
              src="${art.image}" 
              alt="${escapeHtml(art.title)} by ${escapeHtml(art.artist.name)}" 
              loading="lazy" 
              decoding="async"
              onerror="this.onerror=null; this.src='${art.imageFallback}';"
            />
          </div>
          <div class="stage-caption">
            <span><strong>${escapeHtml(art.title)}</strong> (${escapeHtml(art.year)})</span>
            <span>&bull;</span>
            <span>${escapeHtml(art.medium)}</span>
            <span>&bull;</span>
            <span class="zoom-hint">Click image to inspect high-definition scan</span>
          </div>
        </div>

        <div class="artwork-editorial">
          <!-- Artist & Provenance Column -->
          <aside class="artwork-sidebar">
            <div class="artist-card">
              <div class="artist-portrait-box">
                <img 
                  class="artist-portrait-img" 
                  src="${art.artist.portrait}" 
                  alt="${escapeHtml(art.artist.name)}" 
                  loading="lazy"
                  decoding="async"
                  onerror="this.onerror=null; this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/640px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg';"
                />
              </div>
              <div class="artist-role-label">The Artist</div>
              <h3 class="artist-name">${escapeHtml(art.artist.name)}</h3>
              <div class="artist-meta">${escapeHtml(art.artist.lifespan)} &bull; ${escapeHtml(art.artist.nationality)}</div>
              <p class="artist-bio">${escapeHtml(art.artist.bio)}</p>
            </div>

            <div class="placard-box">
              <div class="placard-heading">Museum Placard</div>
              <ul class="placard-list">
                <li class="placard-item">
                  <span class="label">Medium</span>
                  <span class="value">${escapeHtml(art.medium)}</span>
                </li>
                <li class="placard-item">
                  <span class="label">Dimensions</span>
                  <span class="value">${escapeHtml(art.dimensions)}</span>
                </li>
                <li class="placard-item">
                  <span class="label">Location / Collection</span>
                  <span class="value">${escapeHtml(art.location)}</span>
                </li>
                <li class="placard-item">
                  <span class="label">Movement</span>
                  <span class="value">${escapeHtml(art.era)}</span>
                </li>
              </ul>
            </div>
          </aside>

          <!-- Main Narrative: Story & Historical References -->
          <div class="artwork-narrative">
            <header class="artwork-header-area">
              <div class="artwork-index-num">Plate No. ${String(index + 1).padStart(2, "0")} of ${artworks.length}</div>
              <h2 class="artwork-title">${escapeHtml(art.title)}</h2>
              <div class="artwork-subhead">
                ${art.originalTitle ? `<span class="original-title">${escapeHtml(art.originalTitle)}</span> &bull; ` : ""}
                <span class="artwork-year-badge">${escapeHtml(art.year)}</span>
                <span class="era-tag">${escapeHtml(art.era)}</span>
              </div>
            </header>

            <!-- The Story -->
            <section class="story-block">
              <h3 class="story-heading">The Story Behind the Masterpiece</h3>
              <div class="story-body">
                ${storyParagraphs}
              </div>
            </section>

            <!-- Historical References & Context -->
            <section class="history-block">
              <h3 class="history-heading">Historical References & Context</h3>
              <div class="history-body">
                ${escapeHtml(art.historicalReferences)}
              </div>
            </section>

            <!-- Notable Curatorial Insight -->
            ${art.notableFact ? `
            <div class="insight-block">
              <div class="insight-icon">&#9670;</div>
              <div class="insight-text">${escapeHtml(art.notableFact)}</div>
            </div>
            ` : ""}
          </div>
        </div>
      `;

      exhibitionStream.appendChild(article);
    });

    // Handle "Load More" controls for story mode
    if (loadMoreContainer) {
      if (visibleArtworks.length < artworks.length) {
        loadMoreContainer.style.display = "flex";
        if (streamStatusText) {
          streamStatusText.textContent = `Displaying ${visibleArtworks.length} of ${artworks.length} Masterpieces`;
        }
      } else {
        loadMoreContainer.style.display = "none";
      }
    }

    // Attach click listeners to images for lightbox
    document.querySelectorAll(".painting-frame-wrapper").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-art-id");
        openLightboxById(id);
      });
    });
  }

  /**
   * Render Gallery Wall (Grid) View - Displays all items
   */
  function renderGridView(artworks) {
    galleryGrid.innerHTML = "";

    artworks.forEach((art, index) => {
      const card = document.createElement("div");
      card.className = "grid-card";

      const excerpt = art.story.slice(0, 140).trim() + "...";

      card.innerHTML = `
        <div class="grid-image-box" data-art-id="${art.id}" title="Click to view full screen">
          <img 
            class="grid-image" 
            src="${art.image}" 
            alt="${escapeHtml(art.title)}" 
            loading="lazy"
            decoding="async"
            onerror="this.onerror=null; this.src='${art.imageFallback}';"
          />
        </div>
        <div class="grid-card-body">
          <div class="grid-card-meta">
            <span>No. ${index + 1}</span>
            <span>${escapeHtml(art.year)}</span>
          </div>
          <h3 class="grid-card-title">${escapeHtml(art.title)}</h3>
          <div class="grid-card-artist">
            <img class="grid-artist-thumb" src="${art.artist.portrait}" alt="${escapeHtml(art.artist.name)}" loading="lazy" />
            <span class="grid-artist-name">${escapeHtml(art.artist.name)}</span>
          </div>
          <p class="grid-card-excerpt">${escapeHtml(excerpt)}</p>
          <div class="grid-card-actions">
            <button class="grid-read-btn" data-jump-id="${art.id}">
              Read Story &rarr;
            </button>
            <button class="view-btn" data-art-id="${art.id}" style="padding: 0.25rem 0.6rem; font-size: 0.68rem;">
              Enlarge
            </button>
          </div>
        </div>
      `;

      galleryGrid.appendChild(card);
    });

    // Attach click events
    galleryGrid.querySelectorAll(".grid-image-box, button[data-art-id]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-art-id");
        openLightboxById(id);
      });
    });

    galleryGrid.querySelectorAll(".grid-read-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-jump-id");
        switchView("stream");
        
        // Ensure the item is within streamVisibleCount
        const filtered = getFilteredArtworks();
        const targetIndex = filtered.findIndex((item) => item.id === id);
        if (targetIndex >= streamVisibleCount) {
          streamVisibleCount = targetIndex + 1;
          renderGallery();
        }

        setTimeout(() => {
          const target = document.getElementById(`artwork-${id}`);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 120);
      });
    });
  }

  /**
   * Switch View Mode
   */
  function switchView(view) {
    currentView = view;
    viewButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-view") === view);
    });
    renderGallery();
  }

  /**
   * Lightbox Modal Functions with High-Definition Pan & Zoom
   */
  function openLightboxById(id) {
    const filtered = getFilteredArtworks();
    const index = filtered.findIndex((item) => item.id === id);
    if (index !== -1) {
      activeLightboxIndex = index;
      resetZoom();
      updateLightboxContent();
      lightboxModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function updateLightboxContent() {
    const filtered = getFilteredArtworks();
    const art = filtered[activeLightboxIndex];
    if (!art) return;

    resetZoom();

    lightboxImg.src = art.image;
    lightboxImg.alt = art.title;
    lightboxImg.onerror = () => {
      lightboxImg.src = art.imageFallback;
    };

    lightboxTitle.textContent = `${art.title} (${art.year})`;
    lightboxCaption.textContent = `${art.artist.name} — ${art.medium} — ${art.location}`;

    if (lightboxFullResLink) {
      lightboxFullResLink.href = art.image;
    }
  }

  function closeLightbox() {
    lightboxModal.classList.remove("active");
    document.body.style.overflow = "";
    resetZoom();
  }

  function nextLightbox() {
    const filtered = getFilteredArtworks();
    if (filtered.length === 0) return;
    activeLightboxIndex = (activeLightboxIndex + 1) % filtered.length;
    updateLightboxContent();
  }

  function prevLightbox() {
    const filtered = getFilteredArtworks();
    if (filtered.length === 0) return;
    activeLightboxIndex = (activeLightboxIndex - 1 + filtered.length) % filtered.length;
    updateLightboxContent();
  }

  function toggleZoom() {
    if (zoomLevel === 1) {
      zoomLevel = 2;
    } else if (zoomLevel === 2) {
      zoomLevel = 3;
    } else {
      zoomLevel = 1;
    }
    applyZoom();
  }

  function resetZoom() {
    zoomLevel = 1;
    applyZoom();
  }

  function applyZoom() {
    if (zoomLevel === 1) {
      lightboxImg.style.transform = "scale(1)";
      lightboxImg.style.cursor = "zoom-in";
      if (lightboxZoomToggle) lightboxZoomToggle.textContent = "Zoom 2x";
    } else if (zoomLevel === 2) {
      lightboxImg.style.transform = "scale(1.8)";
      lightboxImg.style.cursor = "zoom-in";
      if (lightboxZoomToggle) lightboxZoomToggle.textContent = "Zoom 3x";
    } else {
      lightboxImg.style.transform = "scale(2.8)";
      lightboxImg.style.cursor = "zoom-out";
      if (lightboxZoomToggle) lightboxZoomToggle.textContent = "Reset Zoom";
    }
  }

  /**
   * Event Listeners
   */
  function setupEventListeners() {
    // Search input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        streamVisibleCount = STREAM_BATCH_SIZE; // reset pagination on new search
        if (searchClear) {
          searchClear.classList.toggle("visible", searchQuery.length > 0);
        }
        renderGallery();
      });
    }

    if (searchClear) {
      searchClear.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        streamVisibleCount = STREAM_BATCH_SIZE;
        searchClear.classList.remove("visible");
        renderGallery();
        searchInput.focus();
      });
    }

    // Reset button in empty state
    const resetSearchBtn = document.getElementById("resetSearchBtn");
    if (resetSearchBtn) {
      resetSearchBtn.addEventListener("click", () => {
        searchQuery = "";
        currentFilter = "all";
        streamVisibleCount = STREAM_BATCH_SIZE;
        if (searchInput) searchInput.value = "";
        if (searchClear) searchClear.classList.remove("visible");
        filterButtons.forEach((btn) => {
          btn.classList.toggle("active", btn.getAttribute("data-filter") === "all");
        });
        renderGallery();
      });
    }

    // Filter buttons
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        streamVisibleCount = STREAM_BATCH_SIZE; // reset pagination on filter change
        renderGallery();
      });
    });

    // View toggle buttons
    viewButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        switchView(btn.getAttribute("data-view"));
      });
    });

    // Load More & Load All buttons
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        streamVisibleCount += STREAM_BATCH_SIZE;
        renderGallery();
      });
    }

    if (loadAllBtn) {
      loadAllBtn.addEventListener("click", () => {
        streamVisibleCount = ARTWORKS_DATA.length;
        renderGallery();
      });
    }

    // Lightbox events
    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener("click", nextLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener("click", prevLightbox);
    if (lightboxZoomToggle) lightboxZoomToggle.addEventListener("click", toggleZoom);
    if (lightboxImg) lightboxImg.addEventListener("click", toggleZoom);

    // Close on background click
    if (lightboxModal) {
      lightboxModal.addEventListener("click", (e) => {
        if (e.target === lightboxModal || e.target.classList.contains("lightbox-body")) {
          closeLightbox();
        }
      });
    }

    // Keyboard navigation
    window.addEventListener("keydown", (e) => {
      if (!lightboxModal.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    });

    // Scroll Progress & Back to Top
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }

      if (backToTopBtn) {
        backToTopBtn.classList.toggle("visible", scrollTop > 500);
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  // Utility to prevent XSS
  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});
