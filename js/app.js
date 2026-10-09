/**
 * ARTs - Masterpieces & Stories Controller
 * Features:
 * 1. Minimalist museum presentation (Stories monograph & Wall exhibition grid)
 * 2. High-definition zoom lightbox with multi-level magnification & touch swipe
 * 3. Classical background music player (Beethoven, Satie, Debussy, Chopin) with mute toggle
 * 4. Full-screen exhibition screensaver slideshow with configurable transitions, countdown bar, and informative floating card
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  let currentFilter = "all";
  let searchQuery = "";
  let currentView = "stream"; // 'stream' (Story View) or 'grid' (Gallery Wall)
  let activeLightboxIndex = 0;
  let zoomLevel = 1; // 1x, 2x, 3x
  
  // Progressive loading for story view
  const STREAM_BATCH_SIZE = 12;
  let streamVisibleCount = STREAM_BATCH_SIZE;

  // DOM Elements - General
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

  // DOM Elements - Lightbox
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");
  const lightboxZoomToggle = document.getElementById("lightboxZoomToggle");
  const lightboxFullResLink = document.getElementById("lightboxFullResLink");

  // DOM Elements - Audio Player
  const audioWidget = document.getElementById("audioWidget");
  const audioToggleBtn = document.getElementById("audioToggleBtn");
  const audioSpeakerIcon = document.getElementById("audioSpeakerIcon");
  const audioMutedIcon = document.getElementById("audioMutedIcon");
  const audioBtnText = document.getElementById("audioBtnText");
  const audioFlyout = document.getElementById("audioFlyout");
  const audioStatusPill = document.getElementById("audioStatusPill");
  const audioTrackTitle = document.getElementById("audioTrackTitle");
  const audioTrackComposer = document.getElementById("audioTrackComposer");
  const audioFlyoutPlayBtn = document.getElementById("audioFlyoutPlayBtn");
  const audioFlyoutNextBtn = document.getElementById("audioFlyoutNextBtn");
  const audioTrackSelect = document.getElementById("audioTrackSelect");
  const audioVolumeSlider = document.getElementById("audioVolumeSlider");

  // DOM Elements - Screensaver
  const screensaverModal = document.getElementById("screensaverModal");
  const screensaverCounter = document.getElementById("screensaverCounter");
  const screensaverDurationSelect = document.getElementById("screensaverDurationSelect");
  const screensaverPlayPauseBtn = document.getElementById("screensaverPlayPauseBtn");
  const screensaverPlayPauseIcon = document.getElementById("screensaverPlayPauseIcon");
  const screensaverPlayPauseText = document.getElementById("screensaverPlayPauseText");
  const screensaverMusicBtn = document.getElementById("screensaverMusicBtn");
  const screensaverMusicText = document.getElementById("screensaverMusicText");
  const screensaverCloseBtn = document.getElementById("screensaverCloseBtn");
  const screensaverProgressBar = document.getElementById("screensaverProgressBar");
  const screensaverPrevBtn = document.getElementById("screensaverPrevBtn");
  const screensaverNextBtn = document.getElementById("screensaverNextBtn");
  const screensaverLayerA = document.getElementById("screensaverLayerA");
  const screensaverLayerB = document.getElementById("screensaverLayerB");
  const screensaverImgA = document.getElementById("screensaverImgA");
  const screensaverImgB = document.getElementById("screensaverImgB");
  const screensaverCard = document.getElementById("screensaverCard");
  const screensaverCardArtistImg = document.getElementById("screensaverCardArtistImg");
  const screensaverCardTitle = document.getElementById("screensaverCardTitle");
  const screensaverCardArtist = document.getElementById("screensaverCardArtist");
  const screensaverCardYear = document.getElementById("screensaverCardYear");
  const screensaverCardEra = document.getElementById("screensaverCardEra");
  const screensaverCardMedium = document.getElementById("screensaverCardMedium");
  const screensaverCardLocation = document.getElementById("screensaverCardLocation");
  const screensaverCardStoryBtn = document.getElementById("screensaverCardStoryBtn");

  /* ==========================================================================
     Classical Background Music Player State & Setup
     ========================================================================== */
  const CLASSICAL_PLAYLIST = [
    {
      title: "Moonlight Sonata (Adagio sostenuto)",
      composer: "Ludwig van Beethoven",
      year: "1801",
      url: "https://ia803202.us.archive.org/3/items/MoonlightSonata_755/Beethoven-MoonlightSonata.mp3"
    },
    {
      title: "Gymnopédie No. 1",
      composer: "Erik Satie",
      year: "1888",
      url: "https://archive.org/download/GymnopedieNo.1/Gymnopedie%20No.1.mp3"
    },
    {
      title: "Clair de Lune",
      composer: "Claude Debussy",
      year: "1905",
      url: "https://archive.org/download/ClairDeLunedebussy/2009-03-30-clairdelune.mp3"
    },
    {
      title: "Nocturne in E-flat major, Op. 9 No. 2",
      composer: "Frédéric Chopin",
      year: "1832",
      url: "https://archive.org/download/Chopin-NocturneOp.9No.2/20120420_Chopin_Nocturne_op9-2_amplified.mp3"
    },
    {
      title: "Canon in D",
      composer: "Johann Pachelbel",
      year: "1698",
      url: "https://archive.org/download/100ClassicalMusicMasterpieces/1698%20Pachelbel%20%2C%20Canon%20in%20D.mp3"
    },
    {
      title: "Air on the G String (Orchestral Suite No. 3)",
      composer: "Johann Sebastian Bach",
      year: "1727",
      url: "https://archive.org/download/100ClassicalMusicMasterpieces/1727%20Bach%20%2C%20Air%20%28from%20Orchestral%20Suite%20No.%203%20in%20D%29.mp3"
    },
    {
      title: "Adagio in G minor",
      composer: "Tomaso Albinoni",
      year: "1730",
      url: "https://archive.org/download/100ClassicalMusicMasterpieces/1730%20Albinoni%20%2C%20Adagio.mp3"
    },
    {
      title: "Dance of the Blessed Spirits",
      composer: "Christoph Willibald Gluck",
      year: "1762",
      url: "https://archive.org/download/100ClassicalMusicMasterpieces/1762%20Gluck%20%2C%20Dance%20of%20the%20Blessed%20Spirtis%20%28from%20%27Orpheus%20and%20Eurydice%27%29.mp3"
    },
    {
      title: "Largo (from 'Xerxes')",
      composer: "George Frideric Handel",
      year: "1734",
      url: "https://archive.org/download/100ClassicalMusicMasterpieces/1734%20Handel%20%2C%20Largo%20%28from%20%27Xerxes%27%29.mp3"
    },
    {
      title: "Piano Concerto No. 21 — Andante ('Elvira Madigan')",
      composer: "Wolfgang Amadeus Mozart",
      year: "1785",
      url: "https://archive.org/download/100ClassicalMusicMasterpieces/1785%20Piano%20Concerto%20No.%2021%20in%20C%2C%202nd%20movement%20%28%27Elvira%20Madigan%27%29.mp3"
    },
    {
      title: "The Four Seasons — Spring",
      composer: "Antonio Vivaldi",
      year: "1725",
      url: "https://archive.org/download/100ClassicalMusicMasterpieces/1725%20Vivaldi%20%2C%20The%20Four%20Seasons%20-%20Spring.mp3"
    },
    {
      title: "Brandenburg Concerto No. 3 — Allegro",
      composer: "Johann Sebastian Bach",
      year: "1721",
      url: "https://archive.org/download/100ClassicalMusicMasterpieces/1721%20Bach%20%2C%20Brandenburg%20Concerto%20No.%203%2C%201st%20movement.mp3"
    }
  ];

  let currentTrackIndex = 0;
  let isAudioPlaying = false;
  let audioVolume = 0.55;
  const audioObj = new Audio();
  audioObj.preload = "none";
  audioObj.volume = audioVolume;

  // Restore saved volume if any
  try {
    const savedVol = localStorage.getItem("arts_volume");
    if (savedVol !== null) {
      audioVolume = parseFloat(savedVol);
      audioObj.volume = audioVolume;
      if (audioVolumeSlider) audioVolumeSlider.value = String(audioVolume);
    }
  } catch(e) {}

  function setTrack(index, autoPlay = true) {
    currentTrackIndex = (index + CLASSICAL_PLAYLIST.length) % CLASSICAL_PLAYLIST.length;
    const track = CLASSICAL_PLAYLIST[currentTrackIndex];
    audioObj.src = track.url;
    
    if (audioTrackTitle) audioTrackTitle.textContent = track.title;
    if (audioTrackComposer) audioTrackComposer.textContent = `${track.composer} \u2022 ${track.year}`;
    if (audioTrackSelect) audioTrackSelect.value = String(currentTrackIndex);

    if (autoPlay) {
      playAudio();
    }
  }

  function playAudio() {
    if (!audioObj.src) {
      setTrack(currentTrackIndex, false);
    }
    audioObj.play().then(() => {
      isAudioPlaying = true;
      updateAudioUI();
    }).catch(err => {
      console.warn("Audio autoplay blocked or network error:", err);
      isAudioPlaying = false;
      updateAudioUI();
    });
  }

  function pauseAudio() {
    audioObj.pause();
    isAudioPlaying = false;
    updateAudioUI();
  }

  function toggleAudio() {
    if (isAudioPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  function nextTrack() {
    setTrack(currentTrackIndex + 1, true);
  }

  function updateAudioUI() {
    if (audioToggleBtn) {
      audioToggleBtn.classList.toggle("playing", isAudioPlaying);
    }
    if (audioSpeakerIcon && audioMutedIcon) {
      audioSpeakerIcon.style.display = isAudioPlaying ? "inline-block" : "none";
      audioMutedIcon.style.display = isAudioPlaying ? "none" : "inline-block";
    }
    if (audioBtnText) {
      audioBtnText.textContent = isAudioPlaying ? "Mute" : "Sound";
    }
    if (audioStatusPill) {
      audioStatusPill.textContent = isAudioPlaying ? "Playing" : "Paused";
      audioStatusPill.classList.toggle("playing", isAudioPlaying);
    }
    if (audioFlyoutPlayBtn) {
      audioFlyoutPlayBtn.innerHTML = isAudioPlaying ? "&#10074;&#10074; Pause Music" : "&#9654; Play Music";
    }
    if (screensaverMusicBtn) {
      screensaverMusicBtn.classList.toggle("active", isAudioPlaying);
    }
    if (screensaverMusicText) {
      screensaverMusicText.textContent = isAudioPlaying ? "Mute" : "Music";
    }
  }

  // Audio Object events
  audioObj.addEventListener("ended", () => {
    nextTrack();
  });

  audioObj.addEventListener("play", () => {
    isAudioPlaying = true;
    updateAudioUI();
  });

  audioObj.addEventListener("pause", () => {
    isAudioPlaying = false;
    updateAudioUI();
  });

  audioObj.addEventListener("error", () => {
    console.warn("Audio track playback error, skipping to next piece...");
    setTimeout(() => {
      nextTrack();
    }, 1200);
  });

  // Pre-seed initial track info in UI
  setTrack(0, false);

  /* ==========================================================================
     Full-Screen Exhibition Screensaver Mode (Slideshow with Crossfade)
     ========================================================================== */
  let isScreensaverActive = false;
  let isScreensaverPaused = false;
  let screensaverSlideIndex = 0;
  let screensaverDuration = 12000; // default 12 seconds
  let screensaverSlideTimer = null;
  let screensaverProgressTimer = null;
  let screensaverStartTime = 0;
  let screensaverIdleTimeout = null;
  let screensaverCurrentLayer = "A"; // 'A' or 'B'

  function openScreensaver(startIndex = 0) {
    const artworks = getFilteredArtworks();
    if (artworks.length === 0) return;

    isScreensaverActive = true;
    isScreensaverPaused = false;
    screensaverSlideIndex = startIndex >= 0 && startIndex < artworks.length ? startIndex : 0;
    
    if (screensaverModal) {
      screensaverModal.classList.add("active");
      screensaverModal.classList.remove("controls-hidden");
    }
    document.body.style.overflow = "hidden";

    if (screensaverDurationSelect) {
      screensaverDuration = parseInt(screensaverDurationSelect.value, 10) || 12000;
    }

    if (screensaverPlayPauseIcon) screensaverPlayPauseIcon.innerHTML = "&#10074;&#10074;";
    if (screensaverPlayPauseText) screensaverPlayPauseText.textContent = "Pause";

    renderScreensaverSlide(screensaverSlideIndex, true);
    startScreensaverProgress();
    resetScreensaverIdleTimer();
  }

  function closeScreensaver() {
    isScreensaverActive = false;
    clearTimeout(screensaverSlideTimer);
    clearInterval(screensaverProgressTimer);
    clearTimeout(screensaverIdleTimeout);
    
    if (screensaverModal) {
      screensaverModal.classList.remove("active");
      screensaverModal.classList.remove("controls-hidden");
    }
    document.body.style.overflow = "";
  }

  function renderScreensaverSlide(index, isInitial = false) {
    const artworks = getFilteredArtworks();
    if (artworks.length === 0) return;

    screensaverSlideIndex = (index + artworks.length) % artworks.length;
    const art = artworks[screensaverSlideIndex];

    const targetLayer = isInitial ? "A" : (screensaverCurrentLayer === "A" ? "B" : "A");
    const targetImg = targetLayer === "A" ? screensaverImgA : screensaverImgB;
    const targetContainer = targetLayer === "A" ? screensaverLayerA : screensaverLayerB;
    const otherContainer = targetLayer === "A" ? screensaverLayerB : screensaverLayerA;

    if (targetImg) {
      targetImg.src = art.image;
      targetImg.alt = `${art.title} by ${art.artist.name}`;
      targetImg.onerror = () => {
        targetImg.src = art.imageFallback;
      };
    }

    if (targetContainer) targetContainer.classList.add("active");
    if (otherContainer && !isInitial) otherContainer.classList.remove("active");
    screensaverCurrentLayer = targetLayer;

    // Update Counter
    if (screensaverCounter) {
      screensaverCounter.textContent = `${screensaverSlideIndex + 1} of ${artworks.length}`;
    }

    // Update Floating Info Card
    if (screensaverCardTitle) screensaverCardTitle.textContent = art.title;
    if (screensaverCardArtist) screensaverCardArtist.textContent = art.artist.name;
    if (screensaverCardYear) screensaverCardYear.textContent = art.year;
    if (screensaverCardEra) screensaverCardEra.textContent = art.era;
    if (screensaverCardMedium) screensaverCardMedium.textContent = art.medium;
    if (screensaverCardLocation) screensaverCardLocation.textContent = art.location;
    if (screensaverCardArtistImg) {
      screensaverCardArtistImg.src = art.artist.portrait;
      screensaverCardArtistImg.alt = art.artist.name;
    }

    if (screensaverCardStoryBtn) {
      screensaverCardStoryBtn.onclick = () => {
        closeScreensaver();
        switchView("stream");
        setTimeout(() => {
          const el = document.getElementById(`artwork-${art.id}`);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      };
    }

    // Reset countdown progress
    if (!isScreensaverPaused) {
      startScreensaverProgress();
    }
  }

  function startScreensaverProgress() {
    clearTimeout(screensaverSlideTimer);
    clearInterval(screensaverProgressTimer);

    if (isScreensaverPaused) return;

    screensaverStartTime = Date.now();
    if (screensaverProgressBar) {
      screensaverProgressBar.style.width = "0%";
    }

    screensaverProgressTimer = setInterval(() => {
      if (isScreensaverPaused) return;
      const elapsed = Date.now() - screensaverStartTime;
      const pct = Math.min((elapsed / screensaverDuration) * 100, 100);
      if (screensaverProgressBar) {
        screensaverProgressBar.style.width = `${pct}%`;
      }
      if (elapsed >= screensaverDuration) {
        clearInterval(screensaverProgressTimer);
      }
    }, 50);

    screensaverSlideTimer = setTimeout(() => {
      if (!isScreensaverPaused) {
        renderScreensaverSlide(screensaverSlideIndex + 1);
      }
    }, screensaverDuration);
  }

  function toggleScreensaverPlayPause() {
    isScreensaverPaused = !isScreensaverPaused;
    if (screensaverPlayPauseIcon) {
      screensaverPlayPauseIcon.innerHTML = isScreensaverPaused ? "&#9654;" : "&#10074;&#10074;";
    }
    if (screensaverPlayPauseText) {
      screensaverPlayPauseText.textContent = isScreensaverPaused ? "Play" : "Pause";
    }

    if (isScreensaverPaused) {
      clearTimeout(screensaverSlideTimer);
      clearInterval(screensaverProgressTimer);
    } else {
      startScreensaverProgress();
    }
  }

  function nextScreensaverSlide() {
    renderScreensaverSlide(screensaverSlideIndex + 1);
  }

  function prevScreensaverSlide() {
    renderScreensaverSlide(screensaverSlideIndex - 1);
  }

  function resetScreensaverIdleTimer() {
    if (!screensaverModal) return;
    screensaverModal.classList.remove("controls-hidden");
    clearTimeout(screensaverIdleTimeout);
    screensaverIdleTimeout = setTimeout(() => {
      if (isScreensaverActive && !isScreensaverPaused) {
        screensaverModal.classList.add("controls-hidden");
      }
    }, 3500);
  }

  /* ==========================================================================
     Main Gallery Controller (Filter, Search, Views)
     ========================================================================== */
  renderGallery();
  setupEventListeners();

  function getFilteredArtworks() {
    return ARTWORKS_DATA.filter((art) => {
      let matchesEra = currentFilter === "all";
      if (!matchesEra) {
        const filterLower = currentFilter.toLowerCase();
        matchesEra =
          art.era.toLowerCase().includes(filterLower) ||
          art.artist.movement.toLowerCase().includes(filterLower);
      }

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

  function renderGallery() {
    const artworks = getFilteredArtworks();

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

  function renderStreamView(artworks) {
    exhibitionStream.innerHTML = "";
    const visibleArtworks = artworks.slice(0, streamVisibleCount);

    visibleArtworks.forEach((art, index) => {
      const article = document.createElement("article");
      article.className = "artwork-article";
      article.id = `artwork-${art.id}`;

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
      if (artworks.length <= STREAM_BATCH_SIZE) {
        loadMoreContainer.style.display = "none";
      } else {
        loadMoreContainer.style.display = "flex";
        const currentCount = Math.min(streamVisibleCount, artworks.length);
        if (streamStatusText) {
          streamStatusText.textContent = `Displaying ${currentCount} of ${artworks.length} Masterpieces`;
        }

        if (currentCount >= artworks.length) {
          if (loadMoreBtn) loadMoreBtn.style.display = "none";
          if (loadAllBtn) loadAllBtn.style.display = "none";
        } else {
          if (loadMoreBtn) loadMoreBtn.style.display = "inline-block";
          if (loadAllBtn) loadAllBtn.style.display = "inline-block";
        }
      }
    }

    // Attach click-to-lightbox events
    exhibitionStream.querySelectorAll(".painting-frame-wrapper").forEach((frame) => {
      frame.addEventListener("click", () => {
        openLightboxById(frame.getAttribute("data-art-id"));
      });
    });
  }

  function renderGridView(artworks) {
    galleryGrid.innerHTML = "";

    artworks.forEach((art) => {
      const card = document.createElement("div");
      card.className = "grid-card";

      const excerpt = art.story.length > 140 
        ? `${art.story.substring(0, 140).trim()}...` 
        : art.story;

      card.innerHTML = `
        <div class="grid-image-box" data-art-id="${art.id}" title="Click to view full painting">
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
            <span>${escapeHtml(art.year)}</span>
            <span>${escapeHtml(art.era)}</span>
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
          </div>
        </div>
      `;

      galleryGrid.appendChild(card);
    });

    galleryGrid.querySelectorAll(".grid-image-box").forEach((box) => {
      box.addEventListener("click", () => {
        openLightboxById(box.getAttribute("data-art-id"));
      });
    });

    galleryGrid.querySelectorAll(".grid-read-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-jump-id");
        switchView("stream");
        setTimeout(() => {
          const target = document.getElementById(`artwork-${id}`);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 120);
      });
    });
  }

  function switchView(view) {
    if (view === "screensaver") {
      openScreensaver(0);
      return;
    }
    currentView = view;
    viewButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-view") === view);
    });
    renderGallery();
  }

  /* ==========================================================================
     Lightbox Inspector Functions
     ========================================================================== */
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
    lightboxCaption.textContent = `${art.artist.name} \u2014 ${art.medium} \u2014 ${art.location}`;

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

  /* ==========================================================================
     Event Listeners Attachment
     ========================================================================== */
  function setupEventListeners() {
    // Search input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        streamVisibleCount = STREAM_BATCH_SIZE;
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
        streamVisibleCount = STREAM_BATCH_SIZE;
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

      // Mobile Touch Swipe Navigation (left/right swipe)
      let touchStartX = 0;
      let touchStartY = 0;
      let touchEndX = 0;
      let touchEndY = 0;

      lightboxModal.addEventListener(
        "touchstart",
        (e) => {
          if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
          }
        },
        { passive: true }
      );

      lightboxModal.addEventListener(
        "touchend",
        (e) => {
          if (e.changedTouches.length === 1) {
            touchEndX = e.changedTouches[0].clientX;
            touchEndY = e.changedTouches[0].clientY;
            if (zoomLevel === 1) {
              const diffX = touchEndX - touchStartX;
              const diffY = touchEndY - touchStartY;
              if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
                if (diffX < 0) {
                  nextLightbox();
                } else {
                  prevLightbox();
                }
              }
            }
          }
        },
        { passive: true }
      );
    }

    /* ==========================================================================
       Audio Widget Event Listeners
       ========================================================================== */
    if (audioToggleBtn) {
      audioToggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleAudio();
      });
    }

    const audioMenuBtn = document.getElementById("audioMenuBtn");
    if (audioMenuBtn) {
      audioMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (audioFlyout) {
          audioFlyout.classList.toggle("active");
        }
      });
    }

    if (audioFlyoutPlayBtn) {
      audioFlyoutPlayBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleAudio();
      });
    }

    if (audioFlyoutNextBtn) {
      audioFlyoutNextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        nextTrack();
      });
    }

    if (audioTrackSelect) {
      audioTrackSelect.addEventListener("change", (e) => {
        setTrack(parseInt(e.target.value, 10), true);
      });
    }

    if (audioVolumeSlider) {
      audioVolumeSlider.addEventListener("input", (e) => {
        audioVolume = parseFloat(e.target.value);
        audioObj.volume = audioVolume;
        try {
          localStorage.setItem("arts_volume", String(audioVolume));
        } catch(err) {}
      });
    }

    // Close audio flyout when clicking outside
    document.addEventListener("click", (e) => {
      if (audioFlyout && audioWidget && !audioWidget.contains(e.target)) {
        audioFlyout.classList.remove("active");
      }
    });

    /* ==========================================================================
       Screensaver Event Listeners
       ========================================================================== */
    if (screensaverCloseBtn) {
      screensaverCloseBtn.addEventListener("click", closeScreensaver);
    }

    if (screensaverPlayPauseBtn) {
      screensaverPlayPauseBtn.addEventListener("click", toggleScreensaverPlayPause);
    }

    if (screensaverNextBtn) {
      screensaverNextBtn.addEventListener("click", () => {
        nextScreensaverSlide();
        resetScreensaverIdleTimer();
      });
    }

    if (screensaverPrevBtn) {
      screensaverPrevBtn.addEventListener("click", () => {
        prevScreensaverSlide();
        resetScreensaverIdleTimer();
      });
    }

    if (screensaverDurationSelect) {
      screensaverDurationSelect.addEventListener("change", (e) => {
        screensaverDuration = parseInt(e.target.value, 10) || 12000;
        if (!isScreensaverPaused) {
          startScreensaverProgress();
        }
      });
    }

    if (screensaverMusicBtn) {
      screensaverMusicBtn.addEventListener("click", () => {
        toggleAudio();
      });
    }

    if (screensaverModal) {
      screensaverModal.addEventListener("mousemove", resetScreensaverIdleTimer);
      screensaverModal.addEventListener("touchstart", resetScreensaverIdleTimer, { passive: true });

      // Swipe navigation inside Screensaver
      let ssTouchStartX = 0;
      let ssTouchStartY = 0;
      let ssTouchEndX = 0;
      let ssTouchEndY = 0;

      screensaverModal.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
          ssTouchStartX = e.touches[0].clientX;
          ssTouchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      screensaverModal.addEventListener("touchend", (e) => {
        if (e.changedTouches.length === 1) {
          ssTouchEndX = e.changedTouches[0].clientX;
          ssTouchEndY = e.changedTouches[0].clientY;
          const diffX = ssTouchEndX - ssTouchStartX;
          const diffY = ssTouchEndY - ssTouchStartY;
          if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
            if (diffX < 0) {
              nextScreensaverSlide();
            } else {
              prevScreensaverSlide();
            }
          }
        }
      }, { passive: true });
    }

    /* ==========================================================================
       Global Keyboard Navigation
       ========================================================================== */
    window.addEventListener("keydown", (e) => {
      // Screensaver active shortcuts
      if (isScreensaverActive) {
        if (e.key === "Escape") {
          closeScreensaver();
          return;
        }
        if (e.key === " " || e.code === "Space") {
          e.preventDefault();
          toggleScreensaverPlayPause();
          return;
        }
        if (e.key === "ArrowRight") {
          nextScreensaverSlide();
          return;
        }
        if (e.key === "ArrowLeft") {
          prevScreensaverSlide();
          return;
        }
        if (e.key === "m" || e.key === "M") {
          toggleAudio();
          return;
        }
      }

      // Lightbox active shortcuts
      if (lightboxModal && lightboxModal.classList.contains("active")) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextLightbox();
        if (e.key === "ArrowLeft") prevLightbox();
        return;
      }

      // Global hotkey 'S' to launch screensaver if not typing in search
      if ((e.key === "s" || e.key === "S") && document.activeElement !== searchInput) {
        if (!isScreensaverActive) {
          openScreensaver(0);
        }
      }

      // Global hotkey 'M' to toggle music
      if ((e.key === "m" || e.key === "M") && document.activeElement !== searchInput) {
        toggleAudio();
      }
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
