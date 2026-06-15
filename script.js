
// DRAGON BALL CENTRAL - MODERN DASHBOARD ENGINE v3.0

// Utility: Debounce — evita re-renders excesivos en búsquedas
function debounce(fn, delay) {
    var timer;
    return function () {
        var ctx = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () { fn.apply(ctx, args); }, delay || 250);
    };
}

// Utility: DOM cache — selectores reutilizables sin repetir querySelector
function dom(sel) { return document.querySelector(sel); }
function domAll(sel) { return document.querySelectorAll(sel); }
function byId(id) { return document.getElementById(id); }

// Utility: Skeleton loader helpers
function showSkeleton(containerId, count, columns) {
    var container = byId(containerId);
    if (!container) return;
    var colClass = columns || 'col-xl-3 col-lg-4 col-md-6';
    container.innerHTML = '';
    for (var i = 0; i < count; i++) {
        container.innerHTML += '<div class="' + colClass + '"><div class="skeleton-card"><div class="skeleton-img"></div><div class="skeleton-body"><div class="skeleton-line medium"></div><div class="skeleton-line short"></div></div></div></div>';
    }
}

function hideSkeleton(containerId) {
    var container = byId(containerId);
    if (!container) return;
    container.querySelectorAll('.skeleton-card').forEach(function(el) { el.remove(); });
}

// Utility: IntersectionObserver lazy load for images
function initLazyImages() {
    if ('IntersectionObserver' in window) {
        var imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var img = entry.target;
                    var src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '200px 0px' });

        document.querySelectorAll('img[data-src]').forEach(function(img) {
            imageObserver.observe(img);
        });
    }
}

// Utility: Scroll reveal with IntersectionObserver
function initScrollReveal() {
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(function(el) {
            revealObserver.observe(el);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initLazyImages();
    initScrollReveal();
});

document.addEventListener('DOMContentLoaded', () => {
    initDashboard();

    // Detener reproducción al cerrar el modal de cualquier forma (clic fuera, ESC, etc)
    const modalEl = document.getElementById('videoPlayerModal');
    if (modalEl) {
        modalEl.addEventListener('hidden.bs.modal', () => {
            closeVideo();
        });
    }

    // Topbar scroll effect
    initScrollEffect();

    // Botón volver arriba
    initBackToTop();

    // UI interna para Series -> Sagas (sin modificar navegación global)
    try { wireSeriesSagasUi(); } catch(e) {}

    // UI interna para Fan Animations
    try { wireFanAnimationUi(); } catch(e) {}

    // UI interna para Personajes
    try { wirePersonajesUi(); } catch(e) {}
});

async function initDashboard() {
    // Inicializar navegación y carga de datos
    setupNavigation();
    await loadInitialData();
    
    // Animate counters after data loads
    animateCounters();

    // Inicializar AOS después de que los datos estén listos
    if (typeof AOS !== 'undefined' && !window._aosInited) {
        AOS.init({ duration: 800, once: true });
        window._aosInited = true;
    }

    // Premium loader with messages, progress, particles
    initPremiumLoader();

    // Init premium effects for Inicio
    initInicioPremium();
}

async function loadInitialData() {
    try {
        const characters = await window.api.getCharacters();
        const media = await window.api.getMedia();
        const world = await window.api.getWorld();
        const music = await window.api.getMusic();

        renderAll(characters, media, world);
        
        window.ALL_CHARACTERS = characters;
        window.ALL_MEDIA = media;
        window.ALL_WORLD = world;
        window.WORLD_DATA = world;
        window.MEDIA_DATA = media;
        initSectionSearchers();
        // Initialize Music Player after data loads
        try { initMusicPlayer(music); } catch(e) { console.warn('Music player not available:', e.message); }

        // Initialize Cinematic Home
        initCinematicHome(media);

        // Hide loader when data is ready
        if (window._hideLoader) window._hideLoader();
    } catch (error) {
        console.error(error);
        showError("No se pudieron cargar los datos del multiverso.");
        if (window._hideLoader) window._hideLoader();
    }
}

function setupNavigation() {
    // Escuchar el evento popstate para atrás / adelante
    window.addEventListener('popstate', (e) => {
        const sectionId = (e.state && e.state.sectionId) || location.hash.replace('#', '') || 'inicio';
        showSection(sectionId, false);
    });

    // Detectar hash inicial
    const initialSection = location.hash.replace('#', '') || 'inicio';
    // En el primer render no debemos "push" al historial (rompe atrás/adelante).
    // Reemplazamos el estado actual y luego mostramos sin crear una entrada extra.
    history.replaceState({ sectionId: initialSection }, "", `#${initialSection}`);
    showSection(initialSection, false);
}

// Cache sections selector for faster show/hide
var _cachedSections = null;
function _getSections() {
    if (!_cachedSections) _cachedSections = domAll('.section-content');
    return _cachedSections;
}

function showSection(sectionId, updateHistory = true, evt) {
    // Evitar navegación por defecto y conflicto con Swiper/otros contenedores, si hay evento.
    var e = evt || window.event;
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
    // Guardar scroll de la sección anterior activa
    var currentActive = dom('.section-content:not(.d-none)');
    if (currentActive) {
        sessionStorage.setItem('scroll_' + currentActive.id, window.scrollY);
    }

    // Ocultar todas las secciones de forma eficiente
    var sections = _getSections();
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.add('d-none');
    }

    // Mostrar sección activa
    var activeSection = byId(sectionId);
    if (!activeSection) {
        sectionId = 'inicio';
        activeSection = byId(sectionId);
    }
    if (activeSection) {
        activeSection.classList.remove('d-none');
        
        // Reset vistas internas al entrar en secciones con detalle
        if (sectionId === 'universos') {
            var uList = byId('universosListView');
            var uDetail = byId('universosDetailView');
            if (uList) uList.classList.remove('d-none');
            if (uDetail) uDetail.classList.add('d-none');
        }
        if (sectionId === 'serie') {
            var sList = byId('seriesListView');
            var sDetail = byId('seriesDetailView');
            if (sList) sList.classList.remove('d-none');
            if (sDetail) sDetail.classList.add('d-none');
        }

        // Cuando se navega a personajes, reset a vista de series
        if (sectionId === 'personajes') {
            var pDetail = byId('personajesDetailView');
            var pList = byId('personajesListView');
            if (pDetail && pList) {
                pDetail.classList.add('d-none');
                pList.classList.remove('d-none');
                _currentChar = null;
                _currentSerie = null;
            }
            var searchInput = dom('#personajes .search-input');
            if (searchInput) {
                searchInput.value = '';
                var clearBtn = searchInput.parentElement && searchInput.parentElement.querySelector('.search-clear');
                if (clearBtn) clearBtn.classList.add('d-none');
            }
            goBackToSeries();
        }
        
        // Re-animar contenido de secciones que estaban ocultas al cargar
        setTimeout(function () {
            if (window.AOS) AOS.refresh();
            if (activeSection) {
                activeSection.querySelectorAll('[data-aos]').forEach(function (el) {
                    el.classList.add('aos-animate');
                });
            }
        }, 60);
    }

    // Actualizar navegación con for loop (más rápido que forEach)
    var navItems = domAll('.nav-item');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('active');
        var onclick = navItems[i].getAttribute('onclick');
        if (onclick && onclick.indexOf("'" + sectionId + "'") !== -1) {
            navItems[i].classList.add('active');
        }
    }

    // Manejar el historial
    if (updateHistory) {
        if (history.state && history.state.sectionId === sectionId) {
            history.replaceState({ sectionId: sectionId }, "", '#' + sectionId);
        } else {
            history.pushState({ sectionId: sectionId }, "", '#' + sectionId);
        }
    }

    // Restaurar o restablecer scroll (con rAF para evitar saltos)
    var savedScroll = sessionStorage.getItem('scroll_' + sectionId);
    if (savedScroll !== null) {
        requestAnimationFrame(function () {
            window.scrollTo({ top: parseInt(savedScroll), behavior: 'auto' });
        });
    } else {
        requestAnimationFrame(function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Animate counters if showing inicio
    if (sectionId === 'inicio') {
        setTimeout(function () { animateCounters(); }, 300);
    }
}

function renderAll(characters, media, world) {
    window.ALL_CHARACTERS = characters;
    renderSeriesCategories();
    renderMedia(media);
    renderWorld(world);
    // Start in series view
    const sContainer = document.getElementById('charactersSeriesContainer');
    const cContainer = document.getElementById('charactersContainer');
    if (sContainer) sContainer.classList.remove('d-none');
    if (cContainer) cContainer.classList.add('d-none');
}

function renderSeriesCategories() {
    const container = document.getElementById('charactersSeriesContainer');
    if (!container) return;
    container.innerHTML = SERIES_DATA.map((serie, idx) => `
        <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${(idx % 4) * 80}">
            <div class="premium-card serie-card" onclick="selectSerie('${serie.id}')" style="cursor:pointer;">
                <div class="card-image-box">
                    <img src="${serie.icono}" alt="${serie.nombre}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/500x700/1a1a1a/ff5e00?text=${encodeURIComponent(serie.nombre)}';">
                    <div class="position-absolute top-0 start-0 m-3">
                        <span class="category-badge">SERIE</span>
                    </div>
                    <div class="position-absolute top-0 end-0 m-3">
                        <span class="canon-badge ${serie.canon === 'OFICIAL Y CANON' ? 'canon-ok' : serie.canon === 'OFICIAL Y NO CANON' ? 'canon-neutral' : 'canon-no'}">${serie.canon}</span>
                    </div>
                    <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background: linear-gradient(transparent, rgba(0,0,0,0.85));">
                        <h5 class="text-white mb-1">${serie.nombre}</h5>
                        <p class="text-muted small mb-0">${serie.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function selectSerie(serieId) {
    _currentSerie = serieId;
    const serieData = SERIES_DATA.find(s => s.id === serieId);
    if (!serieData) return;

    document.getElementById('charactersSeriesContainer').classList.add('d-none');
    document.getElementById('charactersContainer').classList.remove('d-none');

    const bar = document.getElementById('personajesSerieBar');
    if (bar) {
        bar.classList.remove('d-none');
        const title = document.getElementById('personajesCurrentSerieTitle');
        if (title) title.textContent = serieData.nombre;
    }

    const filtered = (window.ALL_CHARACTERS || []).filter(c => c.serie === serieId);
    renderCharacters(filtered);
    if (window.AOS) AOS.refresh();
}

function goBackToSeries() {
    _currentSerie = null;
    const sContainer = document.getElementById('charactersSeriesContainer');
    const cContainer = document.getElementById('charactersContainer');
    if (sContainer) sContainer.classList.remove('d-none');
    if (cContainer) cContainer.classList.add('d-none');
    const bar = document.getElementById('personajesSerieBar');
    if (bar) bar.classList.add('d-none');
    const detail = document.getElementById('personajesDetailView');
    if (detail && !detail.classList.contains('d-none')) {
        detail.classList.add('d-none');
        const list = document.getElementById('personajesListView');
        if (list) list.classList.remove('d-none');
    }
    _currentChar = null;
    _selectedCharId = null;
    if (window.AOS) AOS.refresh();
}

function getCharId(char) {
    return char.id || char.Personaje;
}

function updateSelectedCharacterCards() {
    document.querySelectorAll('.character-premium-card').forEach((card) => {
        card.classList.toggle('is-selected', card.dataset.charId === _selectedCharId);
    });
}

function scrollToPageTop(instant) {
    window.scrollTo({ top: 0, left: 0, behavior: instant ? 'auto' : 'smooth' });
}

function selectCharacterCard(char) {
    if (!char) return;
    _selectedCharId = getCharId(char);
    updateSelectedCharacterCards();
    scrollToPageTop(true);
    setTimeout(() => showPersonajeDetail(char), 80);
}

function renderCharacters(characters, query = '') {
    const container = document.getElementById('charactersContainer');
    const seriesContainer = document.getElementById('charactersSeriesContainer');
    if (!container) return;
    if (seriesContainer) seriesContainer.classList.add('d-none');
    if (!characters || characters.length === 0) {
        container.innerHTML = renderEmptySearch('No se encontraron personajes.');
        return;
    }
    container.innerHTML = characters.map((char, idx) => {
        const charId = getCharId(char);
        const img = (char.imagenes && char.imagenes[0]) || 'https://via.placeholder.com/400x560/111/ff5e00?text=SIN+IMAGEN';
        const charJson = JSON.stringify(char).replace(/'/g, '&#39;');
        return `
        <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${(idx % 4) * 60}">
            <article class="character-premium-card${charId === _selectedCharId ? ' is-selected' : ''}"
                data-char-id="${charId}"
                onclick='selectCharacterCard(${charJson})'>
                <div class="character-card-glow" aria-hidden="true"></div>
                <div class="character-card-frame">
                    <div class="character-card-portrait">
                        <img src="${img}" alt="${char.Personaje}" loading="lazy" decoding="async"
                            onerror="this.onerror=null; this.src='https://via.placeholder.com/400x560/111/ff5e00?text=SIN+IMAGEN';">
                        <div class="character-card-play-overlay">
                            <span class="play-icon"><i class="bi bi-eye-fill"></i></span>
                        </div>
                        <span class="character-card-universe">U${char.Universo}</span>
                    </div>
                    <div class="character-card-body">
                        <h5 class="character-card-name">${highlightText(char.Personaje, query)}</h5>
                        <span class="character-card-race">${highlightText(char.Raza, query)}</span>
                        <p class="character-card-desc">${highlightText(char.descripcion, query)}</p>
                    </div>
                </div>
            </article>
        </div>`;
    }).join('');
}

function renderMedia(media) {
    renderSeriesGrid(media.series);
    renderMangas(media.mangas);
    renderVideojuegos(media.videojuegos);

    // Renderizar películas con su propio diseño
    renderPeliculas(media.peliculas);

    // Guardar y renderizar sección de videos
    window.ALL_VIDEOS = media.videos || [];
    renderVideos(window.ALL_VIDEOS);

    // Guardar fan animations
    window.ALL_FAN_ANIMATIONS = media.fanAnimations || [];
}

const PLATFORM_META = {
    ps: { label: 'PlayStation', icon: '🎮' },
    xbox: { label: 'Xbox', icon: '🎮' },
    nintendo: { label: 'Nintendo', icon: '🎮' },
    pc: { label: 'PC', icon: '💻' },
    android: { label: 'Android', icon: '📱' },
    ios: { label: 'iOS', icon: '📱' }
};

const GAME_DEFAULTS = {
    'Dragon Ball Sparking! ZERO': { plataformas: ['ps', 'xbox', 'pc'], salida: '11/10/2024' },
    'Dragon Ball FighterZ': { plataformas: ['ps', 'xbox', 'pc'], salida: '26/01/2018' },
    'Dragon Ball Z: Kakarot': { plataformas: ['ps', 'xbox', 'pc'], salida: '17/01/2020' },
    'Dragon Ball Xenoverse 2': { plataformas: ['ps', 'xbox', 'pc'], salida: '25/10/2016' },
    'Dragon Ball Legends': { plataformas: ['android', 'ios'], salida: '17/05/2018' },
    'Dragon Ball Z: Dokkan Battle': { plataformas: ['android', 'ios'], salida: '30/01/2015' }
};

function getGameExtra(item) {
    const extra = GAME_DEFAULTS[item.titulo] || {};
    return {
        plataformas: item.plataformas || extra.plataformas || ['pc'],
        salida: item.salida || extra.salida || '—'
    };
}

function renderPlatformBadges(platforms) {
    return (platforms || []).map(p => {
        const meta = PLATFORM_META[p] || { label: p, icon: '🎮' };
        return `<span class="platform-badge" title="${meta.label}">${meta.icon} ${meta.label}</span>`;
    }).join('');
}

function renderSeriesGrid(series, query = '') {
    const container = document.getElementById('seriesContainer');
    if (!container) return;
    const list = series || [];
    if (!list.length) {
        container.innerHTML = renderEmptySearch('No se encontraron series.');
        return;
    }
    container.innerHTML = list.map(item => `
        <div class="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="zoom-in">
            <div class="premium-card" onclick="showSeriesDetailByTitle('${String(item.titulo).replace(/'/g, "\\'")}')" style="cursor: pointer;">
                <div class="card-image-box" style="aspect-ratio: 2/3;">
                    <img src="${item.imagen}" alt="${item.titulo}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/111/ff5e00?text=SIN+IMAGEN';">
                    <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background: linear-gradient(transparent, rgba(0,0,0,0.8));">
                        <span class="category-badge">Series</span>
                        <h6 class="text-white small mb-0 text-truncate" title="${item.titulo}">${highlightText(item.titulo, query)}</h6>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderMangas(mangas, query = '') {
    const container = document.getElementById('mangasContainer');
    if (!container) return;
    const list = mangas || [];
    const oficiales = list.filter(m => m.tipo === 'oficial');
    const fan = list.filter(m => m.tipo === 'fan');

    if (!list.length) {
        container.innerHTML = renderEmptySearch('No se encontraron mangas.');
        return;
    }

    const renderCards = (items) => items.map(item => `
        <div class="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="zoom-in">
            <div class="premium-card">
                <div class="card-image-box" style="aspect-ratio: 2/3;">
                    <img src="${item.imagen}" alt="${item.titulo}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/111/ff5e00?text=SIN+IMAGEN';">
                    <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background: linear-gradient(transparent, rgba(0,0,0,0.8));">
                        <span class="category-badge">Manga</span>
                        <h6 class="text-white small mb-0 text-truncate" title="${item.titulo}">${highlightText(item.titulo, query)}</h6>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="col-12 mb-2"><h4 class="epic-section-title manga-subsection-title">Mangas Oficiales</h4></div>
        ${oficiales.length ? renderCards(oficiales) : '<div class="col-12"><p class="text-muted small">Sin resultados oficiales.</p></div>'}
        <div class="col-12 mt-4 mb-2"><h4 class="epic-section-title manga-subsection-title">Mangas de fans</h4></div>
        ${fan.length ? renderCards(fan) : '<div class="col-12"><p class="text-muted small">Sin mangas de fans.</p></div>'}
    `;
}

function renderVideojuegos(games, query = '') {
    const container = document.getElementById('videojuegosContainer');
    if (!container) return;
    const list = games || [];
    if (!list.length) {
        container.innerHTML = renderEmptySearch('No se encontraron juegos.');
        return;
    }
    container.innerHTML = list.map(item => {
        const extra = getGameExtra(item);
        return `
        <div class="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="zoom-in">
            <div class="premium-card">
                <div class="card-image-box" style="aspect-ratio: 2/3;">
                    <img src="${item.imagen}" alt="${item.titulo}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/111/ff5e00?text=SIN+IMAGEN';">
                    <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background: linear-gradient(transparent, rgba(0,0,0,0.8));">
                        <span class="category-badge">Juego</span>
                        <h6 class="text-white small mb-1 text-truncate" title="${item.titulo}">${highlightText(item.titulo, query)}</h6>
                        <div class="game-platforms mb-1">${renderPlatformBadges(extra.plataformas)}</div>
                        <div class="text-muted" style="font-size: 0.7rem;">Salida: ${extra.salida}</div>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');
}

function renderPeliculas(peliculas, query = '') {
    const container = document.getElementById('peliculasContainer');
    if (!container) return;

    if (!peliculas || peliculas.length === 0) {
        container.innerHTML = renderEmptySearch('No se encontraron películas.');
        return;
    }

    // Categorizar películas
    const seriesConfig = [
        {
            id: 'clasico',
            titulo: 'Dragon Ball',
            logo: 'https://lh3.googleusercontent.com/d/1qQpBNW2f3shwQ113-uYGW402PUFQu2rg',
            match: (desc) => desc.includes('Dragon Ball') && !desc.includes('Z') && !desc.includes('GT') && !desc.includes('Super')
        },
        {
            id: 'z',
            titulo: 'Dragon Ball Z',
            logo: 'https://lh3.googleusercontent.com/d/1mLnQCc538fRHq5HUUcLFMIUHKQDhA7__',
            match: (desc) => desc.includes('Dragon Ball Z')
        },
        {
            id: 'gt',
            titulo: 'Dragon Ball GT',
            logo: 'https://lh3.googleusercontent.com/d/1jEl3udZrYhfD-_8XhsZkZYOLexf5WG3m',
            match: (desc) => desc.includes('Dragon Ball GT')
        },
        {
            id: 'super',
            titulo: 'Dragon Ball Super',
            logo: 'https://lh3.googleusercontent.com/d/1EPRurrdmcUaaGmaID41wp6pSCpIPX1B9',
            match: (desc) => desc.includes('Dragon Ball Super')
        }
    ];

    let html = '';

    seriesConfig.forEach((serie) => {
        const peliculasSerie = peliculas.filter(p => serie.match(p.descripcion));
        if (peliculasSerie.length === 0 && query) return;
        html += `
            <div class="col-12 mb-5">
                <div class="d-flex flex-wrap align-items-center mb-4" data-aos="fade-right">
                    <img src="${serie.logo}" alt="${serie.titulo}" style="height: 70px; object-fit: contain; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.5));">
                    <span class="badge bg-primary ms-4 px-3 py-2" style="font-size: 1rem; border-radius: 50rem;">${peliculasSerie.length} película${peliculasSerie.length !== 1 ? 's' : ''}</span>
                </div>
                <div class="row g-4">
        `;

        if (peliculasSerie.length > 0) {
            html += peliculasSerie.map(item => {
                const estreno = item.estreno || item.info || '—';
                const duracion = item.duracion || '90 min';
                return `
                <div class="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="zoom-in">
                    <div class="premium-card">
                        <div class="card-image-box" style="aspect-ratio: 2/3;">
                            <img src="${item.imagen}" alt="${item.titulo}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/111/ff5e00?text=SIN+IMAGEN';">
                            <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background: linear-gradient(transparent, rgba(0,0,0,0.8));">
                                <span class="category-badge">Film</span>
                                <h6 class="text-white small mb-1 text-truncate" title="${item.titulo}">${highlightText(item.titulo, query)}</h6>
                                <div class="text-muted" style="font-size: 0.7rem;">Estreno: ${estreno}</div>
                                <div class="text-muted" style="font-size: 0.7rem;">Duración: ${duracion}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `}).join('');
        } else {
            html += `
                <div class="col-12">
                    <div class="text-muted p-4 text-center rounded" style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1);">
                        <i class="bi bi-film mb-2 d-block" style="font-size: 1.5rem; opacity: 0.5;"></i>
                        Aún no hay películas en esta categoría.
                    </div>
                </div>
            `;
        }

        html += `
                </div>
            </div>
            ${serie.id !== 'super' ? '<hr class="border-secondary opacity-25 my-5">' : ''}
        `;
    });

    container.innerHTML = html;
}

function renderWorld(world, query = '') {
    renderEsferas(world, query);
    renderUniversos(world, query);
    renderBiomas(world, query);
}

function renderEsferas(world, query = '') {
    const esferasContainer = document.getElementById('esferasContainer');
    if (!esferasContainer || !world?.esferas) return;
    const groups = [
        { title: 'Cristales especiales', items: world.esferas.cristalesEspeciales || [] },
        { title: 'Esferas del Dragón principales', items: world.esferas.principales || [] },
        { title: 'Variantes', items: world.esferas.variantes || [] }
    ];
    const allItems = groups.flatMap(g => g.items.map(i => ({ ...i, group: g.title })));
    const filtered = filterByQuery(allItems, query, (e) => [e.nombre, e.descripcion, e.dragon, e.group].join(' '));

    if (!filtered.length) {
        esferasContainer.innerHTML = renderEmptySearch('No se encontraron esferas.');
        return;
    }
    esferasContainer.innerHTML = groups.map(group => {
        const items = filtered.filter(i => i.group === group.title);
        if (!items.length) return '';
        return `
            <div class="col-12 mb-3"><h4 class="epic-section-title esferas-subsection-title">${group.title}</h4></div>
            ${items.map(esfera => `
                <div class="col-md-4" data-aos="fade-up">
                    <div class="esfera-card premium-card" onclick="showEsferaDetail(this)" data-nombre="${esfera.nombre}" data-descripcion="${esfera.descripcion}" data-dragon="${esfera.dragon}" data-color="${esfera.color}" data-imagen="${esfera.imagen || ''}">
                        <div class="esfera-card-image">
                            <img src="${esfera.imagen || ''}" alt="${esfera.nombre}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x225/111/ff5e00?text=SIN+IMAGEN';">
                        </div>
                        <div class="esfera-card-body">
                            <h5 class="text-white">${highlightText(esfera.nombre, query)}</h5>
                            <p class="text-muted">${highlightText(esfera.descripcion, query)}</p>
                            <span class="badge bg-${esfera.color} bg-opacity-10 text-${esfera.color} border border-${esfera.color} border-opacity-25">${highlightText(esfera.dragon, query)}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        `;
    }).join('');
}

function showEsferaDetail(cardEl) {
    const nombre = cardEl.dataset.nombre;
    const descripcion = cardEl.dataset.descripcion;
    const dragon = cardEl.dataset.dragon;
    const color = cardEl.dataset.color;
    const imagen = cardEl.dataset.imagen;

    const modalId = 'esferaDetailModal';
    let modalEl = document.getElementById(modalId);

    if (!modalEl) {
        modalEl = document.createElement('div');
        modalEl.className = 'modal fade';
        modalEl.id = modalId;
        modalEl.setAttribute('tabindex', '-1');
        modalEl.setAttribute('aria-hidden', 'true');
        modalEl.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-black border-orange-glow" style="border-radius: var(--radius-lg); overflow: hidden; background: rgba(13,13,18,0.95); backdrop-filter: blur(20px);">
                    <div class="modal-header border-0 pb-0">
                        <h5 class="modal-title text-white">Esfera del Dragón</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="row g-4 align-items-center">
                            <div class="col-md-5 text-center">
                                <img id="esferaModalImg" src="" alt="Esfera" class="img-fluid esfera-modal-img">
                                <h4 id="esferaModalTitle" class="text-white mt-3 mb-1"></h4>
                                <span id="esferaModalBadge" class="badge mt-2 px-3 py-1.5"></span>
                            </div>
                            <div class="col-md-7">
                                <p id="esferaModalDesc" class="text-muted" style="font-size: 0.95rem; line-height: 1.6;"></p>
                                <div class="mt-4 pt-3 border-top border-secondary border-opacity-10">
                                    <h6 class="text-white mb-3"><i class="bi bi-dragon me-2" style="color: var(--accent-primary);"></i>Dragón invocado</h6>
                                    <div class="text-center">
                                        <div class="dragon-modal-placeholder">
                                            <p id="esferaModalDragon" class="text-white fw-bold mb-0" style="font-size: 1.2rem;"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalEl);

        modalEl.addEventListener('hidden.bs.modal', () => {
            const inst = bootstrap.Modal.getInstance(modalEl);
            if (inst) inst.dispose();
        });
    }

    document.getElementById('esferaModalImg').src = imagen || 'https://via.placeholder.com/300x300/111/ff5e00?text=ESFERA';
    document.getElementById('esferaModalTitle').textContent = nombre;
    document.getElementById('esferaModalDesc').textContent = descripcion || 'Sin descripción disponible.';
    document.getElementById('esferaModalBadge').textContent = dragon || '—';
    document.getElementById('esferaModalBadge').className = `badge bg-${color || 'secondary'} bg-opacity-10 text-${color || 'secondary'} border border-${color || 'secondary'} border-opacity-25 px-3 py-1.5 mt-2`;
    document.getElementById('esferaModalDragon').textContent = dragon || '—';

    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
}

function renderUniversos(world, query = '') {
    const universosContainer = document.getElementById('universosContainer');
    if (!universosContainer) return;
    const list = filterByQuery(world.universos || [], query, (u) => [`Universo ${u.id}`, u.dios, u.angel, u.descripcion].join(' '));
    if (!list.length) {
        universosContainer.innerHTML = renderEmptySearch('No se encontraron universos.');
        return;
    }
    universosContainer.innerHTML = list.map(u => `
        <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div class="universo-card ${u.highlight ? 'border-orange-glow' : ''}" onclick='showUniversoDetail(${JSON.stringify(u).replace(/'/g, "&#39;")})'>
                <img src="${u.imagen}" alt="Universo ${u.id}" class="universo-card-img" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x338/111/ff5e00?text=Universo+${u.id}';">
                <div class="universo-card-body">
                    <span class="category-badge" style="align-self: flex-start;">Universo ${u.id}</span>
                    <h5 class="text-white">${highlightText(u.dios, query)}</h5>
                    <p>${highlightText(u.descripcion || '', query)}</p>
                </div>
                <div class="universo-card-footer">
                    <span class="text-muted small"><i class="bi bi-feather me-1"></i>${highlightText(u.angel, query)}</span>
                    <span class="text-muted small"><i class="bi bi-arrow-right-circle"></i></span>
                </div>
            </div>
        </div>
    `).join('');
}

function setCharImg(id, url, alt) {
    const img = document.getElementById(id);
    if (!img) return;
    if (url) {
        img.src = url;
        img.style.display = 'block';
        img.alt = alt || '';
        img.onerror = function() { this.style.display = 'none'; };
    } else {
        img.style.display = 'none';
    }
}

function showUniversoDetail(u) {
    if (!u) return;

    document.getElementById('universosListView').classList.add('d-none');
    document.getElementById('universosDetailView').classList.remove('d-none');

    document.getElementById('universoDetailTitle').textContent = `Universo ${u.id}`;
    document.getElementById('universoDetailSub').textContent = `Dios: ${u.dios} · Ángel: ${u.angel}`;
    document.getElementById('universoDetailCover').src = u.imagen || 'https://via.placeholder.com/800x450/111/ff5e00?text=Universo+' + u.id;
    document.getElementById('universoDetailDesc').textContent = u.descripcion || '';

    // God of Destruction
    const di = u.diosInfo || {};
    document.getElementById('universoDiosNombre').textContent = di.nombre || u.dios;
    document.getElementById('universoDiosDesc').textContent = di.descripcion || '';
    document.getElementById('universoDiosHabilidades').textContent = di.habilidades || '';
    setCharImg('universoDiosImg', di.imagen, di.nombre || u.dios);

    // Angel
    const ai = u.angelInfo || {};
    document.getElementById('universoAngelNombre').textContent = ai.nombre || u.angel;
    document.getElementById('universoAngelDesc').textContent = ai.descripcion || '';
    document.getElementById('universoAngelFuncion').textContent = ai.funcion || '';
    setCharImg('universoAngelImg', ai.imagen, ai.nombre || u.angel);

    // Kaioshin
    const kList = document.getElementById('universoKaioshinList');
    const kaioshin = u.kaioshin || [];
    if (kaioshin.length === 0) {
        kList.innerHTML = '<p class="text-muted small mb-0">No hay información disponible sobre los Supremos Kaioshin de este universo.</p>';
    } else {
        kList.innerHTML = kaioshin.map(k => `
            <div class="kaioshin-item d-flex align-items-start gap-3">
                <div class="kaioshin-img-placeholder" style="overflow: hidden;">
                    ${k.imagen ? `<img src="${k.imagen}" alt="${k.nombre || 'Kaioshin'}" loading="lazy" decoding="async" class="w-100 h-100" style="object-fit: contain;" onerror="this.style.display='none'">` : `<i class="bi bi-gem" style="color: var(--accent-secondary); opacity: 0.5;"></i>`}
                </div>
                <div>
                    <h6 class="text-white mb-1" style="font-size: 0.9rem;">${k.nombre || 'Kaioshin'}</h6>
                    <p class="text-muted small mb-1">${k.descripcion || ''}</p>
                    <span class="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25" style="font-size: 0.7rem;">${k.rol || ''}</span>
                </div>
            </div>
        `).join('');
    }

    if (window.AOS) AOS.refresh();
}

function wireUniversosUi() {
    const back = document.getElementById('universoBackBtn');
    const listView = document.getElementById('universosListView');
    const detailView = document.getElementById('universosDetailView');

    if (back && listView && detailView) {
        back.addEventListener('click', (e) => {
            e.preventDefault();
            detailView.classList.add('d-none');
            listView.classList.remove('d-none');
            if (window.AOS) AOS.refresh();
        });
    }
}

// =========================
// PERSONAJE DETAIL
// =========================
var _currentChar = null;
var _currentGalleryIdx = 0;
var _selectedCharId = null;
var _currentSerie = null;
var SERIES_DATA = [
    { id: 'db-classic', nombre: 'Dragon Ball Clásico', descripcion: 'La aventura original de Goku niño.', icono: 'https://lh3.googleusercontent.com/d/1-9iYR9tDzA3vZQyK4j8gkoI1GG-O8hEl', canon: 'OFICIAL Y CANON' },
    { id: 'db-z', nombre: 'Dragon Ball Z', descripcion: 'Saiyans, Freezer, Cell y Buu.', icono: 'https://lh3.googleusercontent.com/d/1sk_RHuD7tLc0junztslnag4CgCisW0hy', canon: 'OFICIAL Y CANON' },
    { id: 'db-gt', nombre: 'Dragon Ball GT', descripcion: 'Secuela alternativa con Goku niño.', icono: 'https://lh3.googleusercontent.com/d/1hEN8OUh65JHzYgOO67te3YL7x1TJ2z91', canon: 'OFICIAL Y NO CANON' },
    { id: 'db-super', nombre: 'Dragon Ball Super', descripcion: 'Continuación oficial con los dioses.', icono: 'https://lh3.googleusercontent.com/d/1LU6auOSGf5z2bzTEOS-O4d0gsc8AV3Ux', canon: 'OFICIAL Y CANON' },
    { id: 'db-daima', nombre: 'Dragon Ball Daima', descripcion: 'Nueva serie con personajes en miniatura.', icono: 'https://lh3.googleusercontent.com/d/1etdNiG1mN5VsA4FEnnaIIHKind9joCWs', canon: 'OFICIAL Y NO CANON' },
    { id: 'db-games', nombre: 'Dragon Ball Games', descripcion: 'Personajes de videojuegos y Heroes.', icono: 'https://lh3.googleusercontent.com/d/115sLGIdzioiaRAsxG4ATFfliXWObYpQF', canon: 'OFICIAL Y NO CANON' },
    { id: 'db-af', nombre: 'Dragon Ball AF', descripcion: 'El legendario doujinshi con SSJ5.', icono: 'https://lh3.googleusercontent.com/d/1qHsFQJOTLlQKxoaBHyoOB2tWWye_qFN0', canon: 'NO OFICIAL Y NO CANON' }
];

function showPersonajeDetail(char) {
    if (!char) return;

    _currentChar = char;
    _selectedCharId = getCharId(char);
    _currentGalleryIdx = 0;
    updateSelectedCharacterCards();

    document.getElementById('personajesListView').classList.add('d-none');
    document.getElementById('personajesDetailView').classList.remove('d-none');

    // Badges
    document.getElementById('personajeUniversoBadge').textContent = 'U' + (char.Universo || '?');
    document.getElementById('personajeRazaBadge').textContent = char.Raza || '';
    document.getElementById('personajeEstadoBadge').textContent = char.estado || '';

    // Name
    document.getElementById('personajeNombre').textContent = char.Personaje || '';

    // Info grid
    document.getElementById('personajeRaza').textContent = char.Raza || '—';
    document.getElementById('personajeAfiliacion').textContent = char.afiliaciones || '—';
    document.getElementById('personajeEdad').textContent = char.edad || '—';

    // First appearance (anime)
    const anime = char.primeraAparicionAnime || {};
    document.getElementById('personajePrimerAnime').innerHTML = anime.serie
        ? (anime.titulo ? `<small>${anime.serie} Ep. ${anime.episodio}</small><br><span style="font-size:0.75rem;opacity:0.6;">${anime.titulo}</span>` : `${anime.serie} Ep. ${anime.episodio}`)
        : '—';

    // First appearance (manga)
    const manga = char.primeraAparicionManga || {};
    document.getElementById('personajePrimerManga').innerHTML = manga.manga
        ? (manga.titulo ? `<small>${manga.manga} Cap. ${manga.capitulo}</small><br><span style="font-size:0.75rem;opacity:0.6;">${manga.titulo}</span>` : `${manga.manga} Cap. ${manga.capitulo}`)
        : '—';

    // Description
    document.getElementById('personajeDesc').textContent = char.descripcion || '';

    // History
    document.getElementById('personajeHistoria').textContent = char.historia || '';

    // Techniques
    const techs = char.tecnicas || [];
    document.getElementById('personajeTecnicas').innerHTML = techs.length
        ? techs.map(t => `<span class="tech-tag tech-tag-tech">${t}</span>`).join('')
        : '<span class="text-muted small">—</span>';

    // Transformations
    renderTransformations(char);

    // Gallery
    renderGallery(char);

    // Set current form name
    updateFormLabel(char);

    // Siempre mostrar el detalle desde arriba
    scrollToPageTop(true);

    if (window.AOS) AOS.refresh();
}

function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    const toggleVisibility = () => {
        btn.classList.toggle('visible', window.scrollY > 320);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    btn.addEventListener('click', () => {
        scrollToPageTop(false);
    });
}

function getTransNombre(t, fallback) {
    return typeof t === 'string' ? t : (t.nombre || fallback || '');
}

function renderTransformations(char) {
    const trans = char.transformaciones || [];
    const container = document.getElementById('personajeTransformaciones');
    if (!trans.length) {
        container.innerHTML = '<span class="text-muted small">—</span>';
        return;
    }
    container.innerHTML = trans.map((t, i) => `
        <span class="tech-tag tech-tag-trans ${i === _currentGalleryIdx ? 'active' : ''}" data-idx="${i}" onclick="jumpToGallery(${i})">${getTransNombre(t)}</span>
    `).join('');
}

function renderGallery(char) {
    const images = char.imagenes || [];
    const imgEl = document.getElementById('galleryImage');
    const dotsEl = document.getElementById('galleryDots');
    const prevBtn = document.getElementById('galleryPrevBtn');
    const nextBtn = document.getElementById('galleryNextBtn');

    if (!images.length) {
        imgEl.style.display = 'none';
        dotsEl.innerHTML = '';
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        return;
    }

    imgEl.style.display = 'block';

    // Clamp index
    if (_currentGalleryIdx < 0) _currentGalleryIdx = images.length - 1;
    if (_currentGalleryIdx >= images.length) _currentGalleryIdx = 0;

    // Fade transition
    imgEl.classList.remove('fade-in');
    imgEl.classList.add('fade-out');
    setTimeout(() => {
        const t = (char.transformaciones && char.transformaciones[_currentGalleryIdx]) || '';
        imgEl.src = images[_currentGalleryIdx];
        imgEl.alt = (char.Personaje || '') + ' - ' + getTransNombre(t);
        imgEl.classList.remove('fade-out');
        imgEl.classList.add('fade-in');
    }, 200);

    // Dots
    dotsEl.innerHTML = images.map((_, i) => `
        <button class="gallery-dot ${i === _currentGalleryIdx ? 'active' : ''}" onclick="jumpToGallery(${i})"></button>
    `).join('');

    // Arrows visibility
    if (prevBtn) prevBtn.style.display = images.length > 1 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = images.length > 1 ? 'flex' : 'none';

    // Update transformation tags
    const tags = document.querySelectorAll('#personajeTransformaciones .tech-tag-trans');
    tags.forEach((tag, i) => {
        tag.classList.toggle('active', i === _currentGalleryIdx);
    });

    updateFormLabel(char);
}

function updateFormLabel(char) {
    const trans = char.transformaciones || [];
    const label = document.getElementById('personajeFormaActual');
    const t = trans[_currentGalleryIdx];
    if (t) {
        label.textContent = getTransNombre(t);
    } else {
        label.textContent = 'Base';
    }
}

function prevGallery() {
    const images = (_currentChar && _currentChar.imagenes) || [];
    if (images.length < 2) return;
    _currentGalleryIdx--;
    renderGallery(_currentChar);
}

function nextGallery() {
    const images = (_currentChar && _currentChar.imagenes) || [];
    if (images.length < 2) return;
    _currentGalleryIdx++;
    renderGallery(_currentChar);
}

function jumpToGallery(idx) {
    _currentGalleryIdx = idx;
    renderGallery(_currentChar);
}

function wirePersonajesUi() {
    // Prevent duplicate wiring
    if (window.__personajesUiWired) return;
    window.__personajesUiWired = true;

    const seriesBack = document.getElementById('personajesSeriesBackBtn');
    const back = document.getElementById('personajeBackBtn');
    const prev = document.getElementById('galleryPrevBtn');
    const next = document.getElementById('galleryNextBtn');

    if (seriesBack) {
        seriesBack.addEventListener('click', (e) => {
            e.preventDefault();
            goBackToSeries();
        });
    }

    if (back) {
        back.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('personajesDetailView').classList.add('d-none');
            document.getElementById('personajesListView').classList.remove('d-none');
            _currentChar = null;
            _selectedCharId = null;
            if (_currentSerie) {
                const filtered = (window.ALL_CHARACTERS || []).filter(c => c.serie === _currentSerie);
                renderCharacters(filtered);
            } else {
                goBackToSeries();
            }
            if (window.AOS) AOS.refresh();
        });
    }

    const serieBackBtn = document.getElementById('personajesSerieBack');
    if (serieBackBtn) {
        serieBackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            goBackToSeries();
        });
    }

    if (prev) {
        prev.addEventListener('click', (e) => {
            e.preventDefault();
            prevGallery();
        });
    }

    if (next) {
        next.addEventListener('click', (e) => {
            e.preventDefault();
            nextGallery();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!_currentChar) return;
        const detail = document.getElementById('personajesDetailView');
        if (!detail || detail.classList.contains('d-none')) return;
        if (e.key === 'ArrowLeft') { prevGallery(); e.preventDefault(); }
        if (e.key === 'ArrowRight') { nextGallery(); e.preventDefault(); }
        if (e.key === 'Escape') {
            document.getElementById('personajesDetailView').classList.add('d-none');
            document.getElementById('personajesListView').classList.remove('d-none');
            _currentChar = null;
            _selectedCharId = null;
            if (_currentSerie) {
                const filtered = (window.ALL_CHARACTERS || []).filter(c => c.serie === _currentSerie);
                renderCharacters(filtered);
            } else {
                goBackToSeries();
            }
        }
    });
}

function renderBiomas(world, query = '') {
    const biomasContainer = document.getElementById('biomasContainer');
    if (!biomasContainer || !world?.biomas) return;
    const list = filterByQuery(world.biomas, query, (b) => [b.nombre, b.clima, b.descripcion].join(' '));
    if (!list.length) {
        biomasContainer.innerHTML = renderEmptySearch('No se encontraron biomas.');
        return;
    }
    biomasContainer.innerHTML = list.map(bioma => `
        <div class="col-md-4" data-aos="fade-up">
            <div class="premium-card p-4">
                <div class="mb-2">
                    <span class="category-badge">${highlightText(bioma.clima, query)}</span>
                </div>
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="text-white mb-0">${highlightText(bioma.nombre, query)}</h5>
                    <i class="bi bi-geo-alt text-primary"></i>
                </div>
                <p class="text-muted small mb-0">${highlightText(bioma.descripcion, query)}</p>
            </div>
        </div>
    `).join('');
}

// =========================
// BUSCADORES POR SECCIÓN
// =========================

function normalizeQuery(q) {
    return (q || '').toLowerCase().trim();
}

function filterByQuery(items, query, getText) {
    const q = normalizeQuery(query);
    if (!q) return items;
    return items.filter(item => getText(item).toLowerCase().includes(q));
}

function escapeHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function highlightText(text, query) {
    const safe = String(text ?? '');
    const q = normalizeQuery(query);
    if (!q) return escapeHtml(safe);
    const lower = safe.toLowerCase();
    const idx = lower.indexOf(q);
    if (idx === -1) return escapeHtml(safe);
    const before = escapeHtml(safe.slice(0, idx));
    const match = escapeHtml(safe.slice(idx, idx + q.length));
    const after = escapeHtml(safe.slice(idx + q.length));
    return `${before}<mark class="search-hit">${match}</mark>${after}`;
}

function renderEmptySearch(msg) {
    return `<div class="col-12"><div class="text-muted p-4 text-center rounded empty-search-msg" style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1);"><i class="bi bi-search mb-2 d-block" style="font-size: 1.5rem; opacity: 0.5;"></i>${msg}</div></div>`;
}

function getSeriesSearchText(item) {
    const key = normalizeSeriesKey(item.titulo);
    const group = (window.WORLD_DATA?.sagas || []).find(g => g.id === key);
    const sagaTitles = (group?.sagas || []).map(s => s.titulo).join(' ');
    return [item.titulo, item.descripcion, item.info, ...(item.alias || []), sagaTitles].join(' ');
}

function injectSectionSearch(sectionId, placeholder, onSearch) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const header = section.querySelector('.section-header');
    if (!header || header.querySelector('.section-search-wrap')) return;

    header.classList.add('flex-column', 'flex-md-row', 'align-items-start', 'align-items-md-end', 'gap-3');

    const wrap = document.createElement('div');
    wrap.className = 'section-search-wrap d-flex gap-2 align-items-center w-100 w-md-auto ms-auto';
    wrap.innerHTML = `
        <div class="search-box-wrapper position-relative flex-grow-1" style="min-width: 220px;">
            <input type="search" class="form-control bg-dark border-orange-glow text-white section-search-input pe-5" placeholder="${placeholder}" autocomplete="off" style="border-radius: var(--radius-md);">
            <i class="bi bi-search position-absolute end-0 top-50 translate-middle-y me-3 text-muted"></i>
        </div>
        <button type="button" class="btn btn-outline-primary btn-sm section-search-clear d-none" style="border-radius: var(--radius-md);">Limpiar</button>
    `;
    header.appendChild(wrap);

    const input = wrap.querySelector('.section-search-input');
    const clearBtn = wrap.querySelector('.section-search-clear');

    var debouncedSearch = debounce(function (q) { onSearch(q); }, 220);
    input.addEventListener('input', function () {
        clearBtn.classList.toggle('d-none', !input.value);
        debouncedSearch(input.value);
    });
    clearBtn.addEventListener('click', function () {
        input.value = '';
        clearBtn.classList.add('d-none');
        onSearch('');
        input.focus();
    });
}

function initSectionSearchers() {
    injectSectionSearch('personajes', 'Buscar personaje...', (q) => {
        const listView = document.getElementById('personajesListView');
        const detailView = document.getElementById('personajesDetailView');
        const seriesContainer = document.getElementById('charactersSeriesContainer');
        const charsContainer = document.getElementById('charactersContainer');
        if (detailView && !detailView.classList.contains('d-none')) {
            detailView.classList.add('d-none');
            listView.classList.remove('d-none');
            _currentChar = null;
        }
        var list;
        if (q) {
            const seriesContainer = document.getElementById('charactersSeriesContainer');
            const serieBar = document.getElementById('personajesSerieBar');
            if (seriesContainer) seriesContainer.classList.add('d-none');
            if (serieBar) serieBar.classList.add('d-none');
            list = filterByQuery(window.ALL_CHARACTERS || [], q, c => [c.Personaje, c.Raza, c.descripcion, ...(c.tecnicas || []), ...(c.transformaciones || []).map(function(x) { return typeof x === 'string' ? x : x.nombre; })].join(' '));
            _currentSerie = null;
        } else {
            _currentSerie = null;
            return goBackToSeries();
        }
        renderCharacters(list, q);
    });

    injectSectionSearch('serie', 'Buscar serie o saga...', (q) => {
        const list = filterByQuery(window.ALL_MEDIA?.series || [], q, getSeriesSearchText);
        renderSeriesGrid(list, q);
    });

    injectSectionSearch('peliculas', 'Buscar película...', (q) => {
        const list = filterByQuery(window.ALL_MEDIA?.peliculas || [], q, p => [p.titulo, p.descripcion, p.info, p.estreno].join(' '));
        renderPeliculas(list, q);
    });

    injectSectionSearch('manga', 'Buscar manga...', (q) => {
        const list = filterByQuery(window.ALL_MEDIA?.mangas || [], q, m => [m.titulo, m.descripcion, m.tipo].join(' '));
        renderMangas(list, q);
    });

    injectSectionSearch('videojuegos', 'Buscar juego...', (q) => {
        const list = filterByQuery(window.ALL_MEDIA?.videojuegos || [], q, g => {
            const extra = getGameExtra(g);
            return [g.titulo, g.descripcion, extra.salida, ...extra.plataformas].join(' ');
        });
        renderVideojuegos(list, q);
    });

    injectSectionSearch('esferas', 'Buscar esfera...', (q) => {
        renderEsferas(window.ALL_WORLD, q);
    });

    injectSectionSearch('universos', 'Buscar universo...', (q) => {
        const listView = document.getElementById('universosListView');
        const detailView = document.getElementById('universosDetailView');
        if (detailView && !detailView.classList.contains('d-none')) {
            detailView.classList.add('d-none');
            listView.classList.remove('d-none');
        }
        renderUniversos(window.ALL_WORLD, q);
    });

    wireUniversosUi();

    injectSectionSearch('biomas', 'Buscar bioma...', (q) => {
        renderBiomas(window.ALL_WORLD, q);
    });
}

// =========================
// SERIES -> SAGAS INTEGRADAS
// =========================

function normalizeSeriesKey(title) {
    const t = (title || '').toLowerCase();
    if (t.includes('dragon ball z')) return 'z';
    if (t.includes('dragon ball gt')) return 'gt';
    if (t.includes('dragon ball super')) return 'super';
    if (t.includes('dragon ball daima')) return 'daima';
    // "Dragon Ball" clásico
    if (t.trim() === 'dragon ball' || t.startsWith('dragon ball')) return 'clasico';
    return null;
}

function showSeriesDetailByTitle(title) {
    const key = normalizeSeriesKey(title);
    showSeriesDetail(key, title);
}

function showSeriesDetail(seriesKey, seriesTitle) {
    // No tocamos navegación global: esto ocurre dentro de la misma sección "serie".
    const listView = document.getElementById('seriesListView');
    const detailView = document.getElementById('seriesDetailView');
    if (!listView || !detailView) return;

    listView.classList.add('d-none');
    detailView.classList.remove('d-none');

    const titleEl = document.getElementById('seriesDetailTitle');
    const subEl = document.getElementById('seriesDetailSub');
    if (titleEl) titleEl.textContent = seriesTitle || 'Serie';

    // Extraer info de MEDIA_DATA si está disponible (sin cambiar el contenido actual del card list)
    const mediaSeries = window.MEDIA_DATA?.series || [];
    const m = mediaSeries.find(s => s.titulo === seriesTitle) || null;
    if (subEl) {
        if (m && (m.capitulos || m.inicio || m.fin)) {
            subEl.innerHTML = `
                <div class="series-meta text-muted small">
                    <div><strong class="text-white">Capítulos:</strong> ${m.capitulos ?? '—'}</div>
                    <div><strong class="text-white">Inicio:</strong> ${m.inicio ?? '—'}</div>
                    <div><strong class="text-white">Fin:</strong> ${m.fin ?? '—'}</div>
                </div>`;
        } else {
            subEl.textContent = (m && m.info) ? m.info : 'Información actual';
        }
    }

    const sagasRoot = (window.WORLD_DATA && window.WORLD_DATA.sagas) ? window.WORLD_DATA.sagas : [];
    const group = sagasRoot.find(g => g.id === seriesKey) || null;
    const sagas = group?.sagas || [];

    const countEl = document.getElementById('seriesSagasCount');
    if (countEl) countEl.textContent = sagas.length;

    const listEl = document.getElementById('seriesSagasList');
    if (!listEl) return;

    if (!seriesKey || !group) {
        listEl.innerHTML = `
            <div class="col-12">
                <div class="text-muted p-4 text-center rounded" style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1);">
                    Aún no hay sagas disponibles para esta serie.
                </div>
            </div>
        `;
        return;
    }

    // Distribución y apariencia tipo "póster" igual a Series (como en la imagen).
    listEl.innerHTML = sagas.map((s, index) => `
        <div class="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="zoom-in" data-aos-delay="${(index % 6) * 60}">
            <div class="premium-card">
                <div class="card-image-box" style="aspect-ratio: 2/3;">
                    <img src="${s.imagen}" alt="${s.titulo}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/111/ff5e00?text=SIN+IMAGEN';">
                    <div class="position-absolute bottom-0 start-0 w-100 p-3" style="background: linear-gradient(transparent, rgba(0,0,0,0.85));">
                        <span class="category-badge">SAGA</span>
                        <h6 class="text-white small mb-0 text-truncate" title="${s.titulo}">${s.titulo}</h6>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function wireSeriesSagasUi() {
    const back = document.getElementById('seriesDetailBackBtn');
    const listView = document.getElementById('seriesListView');
    const detailView = document.getElementById('seriesDetailView');

    if (back && listView && detailView) {
        back.addEventListener('click', (e) => {
            e.preventDefault();
            detailView.classList.add('d-none');
            listView.classList.remove('d-none');
            if (window.AOS) AOS.refresh();
        });
    }
}

function showError(msg) {
    console.error(msg);
    // Podría implementarse un toast o mensaje en UI
}

// Estilos extra inyectados para utilidades rápidas
const style = document.createElement('style');
style.textContent = `
    .extra-small { font-size: 0.65rem; letter-spacing: 0.1em; }
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    mark.search-hit {
        background: rgba(255, 179, 0, 0.35);
        color: #fff;
        padding: 0 2px;
        border-radius: 3px;
    }
    .platform-badge {
        display: inline-block;
        font-size: 0.62rem;
        margin: 1px 2px 0 0;
        padding: 2px 6px;
        border-radius: 999px;
        background: rgba(255,255,255,0.06);
        border: 1px solid rgba(255,255,255,0.1);
        white-space: nowrap;
    }
    .game-platforms { display: flex; flex-wrap: wrap; gap: 3px; }
    .manga-subsection-title, .esferas-subsection-title { font-size: 1.35rem; margin-bottom: 0.25rem; }
    .series-meta div { margin-bottom: 2px; }
`;
document.head.appendChild(style);

// --- ANIMATED COUNTERS ---

// --- TOPBAR SCROLL EFFECT ---

function initScrollEffect() {
    const topbar = document.getElementById('mainTopbar');
    if (!topbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            topbar.classList.add('scrolled');
        } else {
            topbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

// --- NUEVA LÓGICA DE VIDEOS Y REPRODUCTOR MULTIVERSAL ---

function renderVideos(videosList) {
    const container = document.getElementById('videosContainer');
    if (!container) return;

    if (!videosList || videosList.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5" data-aos="fade-in">
                <div class="premium-card p-5 border-orange-glow mx-auto" style="max-width: 600px;">
                    <i class="bi bi-camera-video-off display-1 text-primary mb-4 d-block" style="opacity: 0.5;"></i>
                    <h3 class="text-white mb-3">Sin videos</h3>
                    <p class="text-muted mb-0">No se encontraron videos que coincidan con la búsqueda o filtro seleccionado.</p>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = videosList.map((video, index) => `
        <div class="col-xl-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${(index % 3) * 100}">
            <div class="premium-card video-card" onclick="playVideo('${video.youtubeId}')">
                <div class="card-image-box">
                    <img src="${video.imagen}" alt="${video.titulo}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x338/111/ff5e00?text=SIN+IMAGEN';">
                    <div class="video-card-overlay">
                        <div class="video-play-btn">
                            <i class="bi bi-play-fill"></i>
                        </div>
                    </div>
                    <span class="category-badge position-absolute top-0 start-0 m-3" style="z-index: 10;">${video.categoria}</span>
                </div>
                <div class="video-card-body">
                    <h5 class="video-card-title text-truncate" title="${video.titulo}">${video.titulo}</h5>
                    <p class="video-card-desc text-muted line-clamp-2">${video.descripcion}</p>
                </div>
            </div>
        </div>
    `).join('');
}

let currentVideoCategory = 'Todos';

function filterVideoCategory(category, buttonEl) {
    currentVideoCategory = category;
    
    // Actualizar clase activa en pestañas
    const buttons = document.querySelectorAll('.video-tabs button');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (buttonEl) {
        buttonEl.classList.add('active');
    }
    
    // Asegurar que volvemos a la vista normal de videos
    document.getElementById('videosContainer').classList.remove('d-none');
    document.getElementById('fanAnimationListView').classList.add('d-none');
    document.getElementById('fanAnimationDetailView').classList.add('d-none');
    
    filterVideos();
}

function filterVideos() {
    const searchQuery = document.getElementById('videoSearchInput').value.toLowerCase().trim();
    
    let filtered = window.ALL_VIDEOS || [];
    
    // Filtrar por categoría
    if (currentVideoCategory !== 'Todos') {
        filtered = filtered.filter(v => v.categoria === currentVideoCategory);
    }
    
    // Filtrar por búsqueda
    if (searchQuery !== '') {
        filtered = filtered.filter(v => 
            v.titulo.toLowerCase().includes(searchQuery) || 
            v.descripcion.toLowerCase().includes(searchQuery)
        );
    }
    
    renderVideos(filtered);
}

function playVideo(youtubeId) {
    const player = document.getElementById('youtubePlayer');
    const modalEl = document.getElementById('videoPlayerModal');
    if (!player || !modalEl) return;
    
    // Inyectar URL con Autoplay
    player.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    
    // Mostrar Modal de Bootstrap 5
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
}

function closeVideo() {
    const player = document.getElementById('youtubePlayer');
    if (player) {
        player.src = ''; // Vaciar src para detener la reproducción
    }
}

// --- Fan Animations ---

function showFanAnimations(buttonEl) {
    // Desactivar otras pestañas
    const buttons = document.querySelectorAll('.video-tabs button');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (buttonEl) {
        buttonEl.classList.add('active');
    }

    document.getElementById('videosContainer').classList.add('d-none');
    document.getElementById('fanAnimationListView').classList.remove('d-none');
    document.getElementById('fanAnimationDetailView').classList.add('d-none');

    renderFanAnimations(window.ALL_FAN_ANIMATIONS || []);
}

function renderFanAnimations(list) {
    const grid = document.getElementById('fanAnimationGrid');
    if (!grid) return;

    if (!list || list.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5" data-aos="fade-in">
                <div class="premium-card p-5 border-orange-glow mx-auto" style="max-width: 600px;">
                    <i class="bi bi-camera-reels display-1 text-primary mb-4 d-block" style="opacity: 0.5;"></i>
                    <h3 class="text-white mb-3">Sin animaciones</h3>
                    <p class="text-muted mb-0">No hay fan animations disponibles.</p>
                </div>
            </div>
        `;
        return;
    }

    grid.innerHTML = list.map((fa, index) => `
        <div class="col-xl-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${(index % 3) * 100}">
            <div class="premium-card video-card" onclick="showFanAnimationDetail(${index})">
                <div class="card-image-box">
                    <img src="${fa.imagen}" alt="${fa.titulo}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x338/111/ff5e00?text=SIN+IMAGEN';">
                    <div class="video-card-overlay">
                        <div class="video-play-btn">
                            <i class="bi bi-collection-play-fill"></i>
                        </div>
                    </div>
                    <a href="${fa.url || '#'}" target="_blank" rel="noopener noreferrer" class="category-badge text-decoration-none" style="position: absolute; top: 12px; left: 12px; z-index: 10;" onclick="event.stopPropagation();"><i class="bi bi-youtube me-1"></i>${fa.creador}</a>
                </div>
                <div class="video-card-body">
                    <h5 class="video-card-title text-truncate" title="${fa.titulo}">${fa.titulo}</h5>
                    <p class="video-card-desc text-muted line-clamp-2">${fa.descripcion}</p>
                    <div class="mt-2">
                        <span class="badge bg-dark text-white border border-secondary">
                            <i class="bi bi-camera-reels me-1"></i> ${fa.capitulos.length} capítulo${fa.capitulos.length !== 1 ? 's' : ''}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function showFanAnimationDetail(index) {
    const list = window.ALL_FAN_ANIMATIONS || [];
    const fa = list[index];
    if (!fa) return;

    document.getElementById('fanAnimationListView').classList.add('d-none');
    document.getElementById('fanAnimationDetailView').classList.remove('d-none');

    const titleEl = document.getElementById('fanAnimationDetailTitle');
    const subEl = document.getElementById('fanAnimationDetailSub');
    if (titleEl) titleEl.textContent = fa.titulo;
    if (subEl) subEl.textContent = `Por ${fa.creador} · ${fa.descripcion}`;

    const countEl = document.getElementById('fanAnimationChapterCount');
    if (countEl) countEl.textContent = fa.capitulos.length;

    const listEl = document.getElementById('fanAnimationChapterList');
    if (!listEl) return;

    listEl.innerHTML = fa.capitulos.map((cap, i) => `
        <div class="col-lg-4 col-md-6">
            <div class="premium-card video-card" onclick="playVideo('${cap.youtubeId}')">
                <div class="card-image-box">
                    <img src="https://img.youtube.com/vi/${cap.youtubeId}/mqdefault.jpg" alt="${cap.titulo}" loading="lazy" onerror="this.onerror=null; this.src='https://via.placeholder.com/600x338/111/ff5e00?text=SIN+IMAGEN';">
                    <div class="video-card-overlay">
                        <div class="video-play-btn">
                            <i class="bi bi-play-fill"></i>
                        </div>
                    </div>
                </div>
                <div class="video-card-body">
                    <h6 class="video-card-title text-truncate mb-0" title="${cap.titulo}">${cap.titulo}</h6>
                </div>
            </div>
        </div>
    `).join('');

    if (window.AOS) AOS.refresh();
}

function wireFanAnimationUi() {
    const back = document.getElementById('fanAnimationBackBtn');
    const listView = document.getElementById('fanAnimationListView');
    const detailView = document.getElementById('fanAnimationDetailView');

    if (back && listView && detailView) {
        back.addEventListener('click', (e) => {
            e.preventDefault();
            detailView.classList.add('d-none');
            listView.classList.remove('d-none');
            if (window.AOS) AOS.refresh();
        });
    }
}

function initCinematicHome(media) {
    initHeroCarousel(media);
    initNetflixRows(media);
}

function initHeroCarousel(media) {
    const container = document.getElementById('dokkanCardsContainer');
    const dotsEl = document.getElementById('dokkanDots');
    const blurBg = document.getElementById('heroBgBlur');
    if (!container) return;

    const items = [];
    (media.series || []).forEach(s => items.push({ ...s, tipo: 'Serie', section: 'serie' }));
    (media.peliculas || []).forEach(p => items.push({ ...p, tipo: 'Película', section: 'peliculas' }));

    if (!items.length) {
        items.push({
            titulo: 'Dragon Ball Central',
            descripcion: 'La base de datos definitiva del universo Dragon Ball.',
            imagen: 'https://lh3.googleusercontent.com/d/1sk_RHuD7tLc0junztslnag4CgCisW0hy',
            info: 'Multiverso Dragon Ball',
            tipo: 'Serie', section: 'inicio'
        });
    }

    // Shuffle items randomly
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }

    window.HERO_ITEMS = items;

    let currentIndex = 0;
    let autoplayTimer = null;

    function renderCards() {
        const total = items.length;
        container.innerHTML = items.map((item, i) => {
            const typeClass = item.tipo === 'Serie' ? 'serie' : 'pelicula';
            const year = item.inicio ? item.inicio.split('/').pop() : (item.info || '');
            const meta = year + (item.capitulos ? ' · ' + item.capitulos + ' ep.' : '');
            return `
                <div class="dokkan-card" data-index="${i}" onclick="dokkanGoTo(${i})">
                    <div class="dokkan-card-img" style="background-image: url('${item.imagen}')"></div>
                    <div class="dokkan-card-overlay"></div>
                    <div class="dokkan-card-glow"></div>
                    <span class="dokkan-card-type-badge ${typeClass}">${item.tipo}</span>
                </div>
            `;
        }).join('');
    }

    function updatePositions() {
        const cards = container.querySelectorAll('.dokkan-card');
        const total = items.length;

        cards.forEach((card, i) => {
            card.classList.remove('active', 'prev', 'prev-2', 'next', 'next-2', 'hidden');

            let diff = i - currentIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            if (diff === 0) {
                card.classList.add('active');
            } else if (diff === 1) {
                card.classList.add('next');
            } else if (diff === 2) {
                card.classList.add('next-2');
            } else if (diff === -1) {
                card.classList.add('prev');
            } else if (diff === -2) {
                card.classList.add('prev-2');
            } else {
                card.classList.add('hidden');
            }
        });

        // Update dots
        if (dotsEl) {
            dotsEl.innerHTML = items.map((_, i) =>
                `<button class="dokkan-dot${i === currentIndex ? ' active' : ''}" onclick="dokkanGoTo(${i})" aria-label="Slide ${i + 1}"></button>`
            ).join('');
        }

        // Update info panel
        updateInfoPanel(currentIndex);
    }

    function updateInfoPanel(index) {
        const item = items[index];
        if (!item) return;
        const exploreBtn = document.getElementById('dokkanExploreBtn');
        const charsBtn = document.getElementById('dokkanCharsBtn');

        if (exploreBtn) {
            exploreBtn.setAttribute('onclick', "showSection('" + item.section + "', true, event)");
        }
        if (charsBtn) {
            charsBtn.setAttribute('onclick', "showSection('personajes', true, event)");
        }

        // Update blur bg
        if (blurBg) blurBg.style.backgroundImage = "url('" + item.imagen + "')";
    }

    window.dokkanGoTo = function(index) {
        currentIndex = index;
        updatePositions();
        resetAutoplay();
    };

    window.dokkanNext = function() {
        currentIndex = (currentIndex + 1) % items.length;
        updatePositions();
    };

    window.dokkanPrev = function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updatePositions();
    };

    function resetAutoplay() {
        if (autoplayTimer) clearInterval(autoplayTimer);
        autoplayTimer = setInterval(window.dokkanNext, 5000);
    }

    // Arrows
    const arrowLeft = document.getElementById('dokkanArrowLeft');
    const arrowRight = document.getElementById('dokkanArrowRight');
    if (arrowLeft) arrowLeft.addEventListener('click', window.dokkanPrev);
    if (arrowRight) arrowRight.addEventListener('click', window.dokkanNext);

    // Keyboard
    document.addEventListener('keydown', function(e) {
        const hero = document.getElementById('inicio');
        if (!hero || hero.classList.contains('d-none')) return;
        if (e.key === 'ArrowLeft') window.dokkanPrev();
        if (e.key === 'ArrowRight') window.dokkanNext();
    });

    // Touch/swipe
    let touchStartX = 0;
    container.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    container.addEventListener('touchend', function(e) {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) window.dokkanNext();
            else window.dokkanPrev();
        }
    }, { passive: true });

    renderCards();
    updatePositions();
    resetAutoplay();
}

function showMediaInfoByIndex(index, evt) {
    const e = evt || window.event;
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
    const item = window.HERO_ITEMS[index];
    if (!item) return;
    showMediaInfo(item.titulo, item.descripcion, item.imagen, item.info, item.tipo);
}

function showMediaInfo(title, description, image, info, tipo) {
    const modalEl = document.getElementById('mediaInfoModal');
    if (!modalEl) return;
    
    document.getElementById('mediaInfoTitle').textContent = title;
    document.getElementById('mediaInfoDesc').textContent = description || 'Sin descripción disponible para este contenido multiversal.';
    document.getElementById('mediaInfoImg').src = image || 'https://via.placeholder.com/400x600/111/ff5e00';
    document.getElementById('mediaInfoImg').alt = title;
    document.getElementById('mediaInfoSub').textContent = info || 'Dragon Ball Central';
    
    const badge = document.getElementById('mediaInfoBadge');
    badge.textContent = tipo || 'Franquicia';
    
    const sectionId = tipo === 'Manga' ? 'manga' : (tipo === 'Película' ? 'peliculas' : 'serie');
    const exploreBtn = document.getElementById('mediaInfoBtn');
    exploreBtn.onclick = () => {
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
        showSection(sectionId);
    };
    
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
}

function initNetflixRows(media) {
    const renderRow = (containerId, items, sectionType) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = '';
        items.forEach((item, index) => {
            const imageUrl = item.imagen || 'https://via.placeholder.com/400x600/111/ff5e00';
            const meta = item.info || item.año || item.descripcion || '';
            const titulo = item.titulo || '';
            const descripcion = item.descripcion || '';
            const info = item.info || meta;
            const tipo = sectionType === 'serie' ? 'Serie' : (sectionType === 'peliculas' ? 'Película' : 'Manga');
            html += `
                <div class="netflix-card" onclick="showMediaInfo('${titulo.replace(/'/g, "\\'")}', '${descripcion.replace(/'/g, "\\'")}', '${imageUrl}', '${info.replace(/'/g, "\\'")}', '${tipo}')" data-aos="fade-up" data-aos-delay="${(index % 6) * 40}">
                    <div class="netflix-card-shine" aria-hidden="true"></div>
                    <img src="${imageUrl}" alt="${item.titulo}" loading="lazy" decoding="async"
                        onerror="this.onerror=null; this.src='https://via.placeholder.com/400x600/111/ff5e00?text=SIN+IMAGEN';">
                    <div class="netflix-card-info">
                        <h6>${item.titulo}</h6>
                        <span>${meta}</span>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    };
    
    renderRow('row-series', media.series, 'serie');
    renderRow('row-peliculas', media.peliculas, 'peliculas');
    renderRow('row-mangas', media.mangas, 'manga');
}

/* ========================================
   PREMIUM INICIO EFFECTS ENGINE
   ======================================== */

// --- Ki Particle System ---
function initParticleSystem() {
    const hero = document.querySelector('.hero-carousel-wrapper');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'hero-particle-canvas';
    canvas.id = 'particleCanvas';
    hero.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId = null;
    let w, h;

    function resize() {
        w = canvas.width = hero.offsetWidth;
        h = canvas.height = hero.offsetHeight;
    }

    function createParticle() {
        const colors = [
            '255, 94, 0',
            '255, 215, 0',
            '0, 210, 255',
            '255, 255, 255',
            '153, 51, 255'
        ];
        return {
            x: Math.random() * w,
            y: Math.random() * h,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4 - 0.15,
            opacity: Math.random() * 0.5 + 0.15,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 0,
            maxLife: Math.random() * 200 + 150,
            pulse: Math.random() * Math.PI * 2
        };
    }

    function initParticles() {
        const count = Math.min(100, Math.floor(w * h / 12000));
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(createParticle());
        }
    }

    function isVisible() {
        return document.getElementById('inicio') && !document.getElementById('inicio').classList.contains('d-none');
    }

    function drawParticles(time) {
        if (!isVisible()) {
            animId = requestAnimationFrame(drawParticles);
            return;
        }
        ctx.clearRect(0, 0, w, h);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.life++;
            p.x += p.speedX;
            p.y += p.speedY;
            p.pulse += 0.02;

            const pulseOpacity = Math.sin(p.pulse) * 0.2 + 0.8;
            const currentOpacity = p.opacity * pulseOpacity * (1 - p.life / p.maxLife);

            if (currentOpacity <= 0 || p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) {
                particles[i] = createParticle();
                continue;
            }

            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
            gradient.addColorStop(0, `rgba(${p.color}, ${currentOpacity})`);
            gradient.addColorStop(0.4, `rgba(${p.color}, ${currentOpacity * 0.3})`);
            gradient.addColorStop(1, `rgba(${p.color}, 0)`);

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color}, ${currentOpacity * 0.8})`;
            ctx.fill();
        }

        // Draw energy lines (subtle connections between nearby particles)
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const lineOpacity = (1 - dist / 120) * 0.05;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 94, 0, ${lineOpacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        animId = requestAnimationFrame(drawParticles);
    }

    function start() {
        resize();
        initParticles();
        if (animId) cancelAnimationFrame(animId);
        drawParticles(0);
        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });
    }

    start();
}

// --- Floating Decorative Elements ---
function initDecorativeElements() {
    const hero = document.querySelector('.hero-carousel-wrapper');
    if (!hero) return;

    // Ki Energy Orbs
    const orbConfigs = [
        { className: 'ki-energy-orb ki-orb-1' },
        { className: 'ki-energy-orb ki-orb-2' },
        { className: 'ki-energy-orb ki-orb-3' }
    ];
    orbConfigs.forEach(cfg => {
        const orb = document.createElement('div');
        orb.className = cfg.className;
        hero.appendChild(orb);
    });

    // Dragon Ball spheres
    const sphereConfigs = [
        { className: 'db-sphere db-sphere-1' },
        { className: 'db-sphere db-sphere-2' },
        { className: 'db-sphere db-sphere-3' },
        { className: 'db-sphere db-sphere-4' }
    ];
    sphereConfigs.forEach(cfg => {
        const sphere = document.createElement('div');
        sphere.className = cfg.className;
        hero.appendChild(sphere);
    });

    // Vortex rings
    const vortex1 = document.createElement('div');
    vortex1.className = 'ki-vortex ki-vortex-1';
    hero.appendChild(vortex1);

    const vortex2 = document.createElement('div');
    vortex2.className = 'ki-vortex ki-vortex-2';
    hero.appendChild(vortex2);

    // Energy streak lines
    const streak1 = document.createElement('div');
    streak1.className = 'ki-streak ki-streak-1';
    hero.appendChild(streak1);

    const streak2 = document.createElement('div');
    streak2.className = 'ki-streak ki-streak-2';
    hero.appendChild(streak2);

    const streak3 = document.createElement('div');
    streak3.className = 'ki-streak ki-streak-3';
    hero.appendChild(streak3);

    // Glow lines
    const glowLine1 = document.createElement('div');
    glowLine1.className = 'hero-glow-line hero-glow-line-1';
    hero.appendChild(glowLine1);

    const glowLine2 = document.createElement('div');
    glowLine2.className = 'hero-glow-line hero-glow-line-2';
    hero.appendChild(glowLine2);

    const glowLine3 = document.createElement('div');
    glowLine3.className = 'hero-glow-line hero-glow-line-3';
    hero.appendChild(glowLine3);
}

// --- Parallax Hero Effect ---
function initHeroParallax() {
    const hero = document.querySelector('.hero-carousel-wrapper');
    if (!hero) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.pageYOffset;
                const heroHeight = hero.offsetHeight;
                if (scrollY <= heroHeight) {
                    const offset = scrollY * 0.3;
                    hero.style.transform = `translateY(${offset}px)`;
                    hero.style.willChange = 'transform';
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// --- Enhanced Counter Animation ---
function animateCounters() {
    const counters = document.querySelectorAll('.epic-stat-val[data-count], .destacado-stat-val[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const suffix = target >= 100 ? '+' : '';
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(eased * target);
            counter.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        }
        requestAnimationFrame(updateCounter);
    });
}

// --- Premium Loader ---
function initPremiumLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;

    const messages = [
        'Preparando las Esferas del Dragón...',
        'Reuniendo el Ki...',
        'Cargando el universo Dragon Ball...',
        'Sincronizando personajes...',
        'Accediendo al multiverso...',
        'Despertando a los Saiyans...'
    ];
    const textEl = document.getElementById('loaderText');
    let msgIdx = 0;
    let msgTimeout = null;

    function cycleMessage() {
        if (!textEl) return;
        textEl.style.opacity = '0';
        msgTimeout = setTimeout(() => {
            msgIdx = (msgIdx + 1) % messages.length;
            textEl.textContent = messages[msgIdx];
            textEl.style.opacity = '1';
        }, 350);
    }

    const msgInterval = setInterval(cycleMessage, 2400);

    const barFill = document.querySelector('.loader-bar-fill');
    let progress = 0;

    const percentEl = document.getElementById('loaderPercent');

    function advanceProgress() {
        if (!barFill) return;
        progress += Math.random() * 12 + 4;
        if (progress > 92) progress = 92;
        barFill.style.width = progress + '%';
        if (percentEl) percentEl.textContent = Math.round(progress) + '%';
    }

    const progInterval = setInterval(advanceProgress, 500);

    const minLoadTime = 1800;
    const loadStart = Date.now();

    function hideLoader() {
        clearInterval(msgInterval);
        clearInterval(progInterval);
        if (msgTimeout) clearTimeout(msgTimeout);
        const elapsed = Date.now() - loadStart;
        const delay = Math.max(0, minLoadTime - elapsed);

        setTimeout(() => {
            if (barFill) {
                barFill.style.transition = 'width 0.4s ease';
                barFill.style.width = '100%';
            }
            if (percentEl) percentEl.textContent = '100%';
            setTimeout(() => {
                loader.classList.add('loaded');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 600);
            }, 350);
        }, delay);
    }

    window._hideLoader = hideLoader;
    setTimeout(hideLoader, 4000);
}

// --- Fix: Scroll to top on section change ---
// Patch showSection to always scroll to top
(function patchShowSectionScroll() {
    const origShowSection = window.showSection;
    if (origShowSection) {
        window.showSection = function(sectionId, updateHistory, evt) {
            // Call original
            origShowSection(sectionId, updateHistory, evt);
            // Force scroll to top after section switch
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50);
        };
    }
})();

// --- Init All Inicio Premium Effects ---
function initInicioPremium() {
    setTimeout(() => {
        initDecorativeElements();
        initParticleSystem();
        initHeroParallax();
    }, 200);
}
