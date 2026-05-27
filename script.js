
// DRAGON BALL CENTRAL - MODERN DASHBOARD ENGINE v3.0

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

    // UI interna para Series -> Sagas (sin modificar navegación global)
    try { wireSeriesSagasUi(); } catch(e) {}
});

async function initDashboard() {
    // Inicializar navegación y carga de datos
    setupNavigation();
    await loadInitialData();
    
    // Animate counters after data loads
    animateCounters();

    // Ocultar loader inicial
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 800);
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

        // Initialize RPG game after data loads
        try { initRpgGame(); } catch(e) { console.warn('RPG game not available:', e.message); }

        // Initialize Cinematic Home
        initCinematicHome(media);
    } catch (error) {
        console.error(error);
        showError("No se pudieron cargar los datos del multiverso.");
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

function showSection(sectionId, updateHistory = true, evt) {
    // Evitar navegación por defecto y conflicto con Swiper/otros contenedores, si hay evento.
    const e = evt || window.event;
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
    // Guardar scroll de la sección anterior activa
    const currentActive = document.querySelector('.section-content:not(.d-none)');
    if (currentActive) {
        sessionStorage.setItem('scroll_' + currentActive.id, window.scrollY);
    }

    // Ocultar todas las secciones con transición suave
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.add('d-none');
    });

    // Mostrar sección activa
    let activeSection = document.getElementById(sectionId);
    if (!activeSection) {
        // Si la sección ya no existe (por ejemplo, #sagas eliminado), fallback seguro.
        sectionId = 'inicio';
        activeSection = document.getElementById(sectionId);
    }
    if (activeSection) {
        activeSection.classList.remove('d-none');
        // Re-trigger animation
        activeSection.style.animation = 'none';
        activeSection.offsetHeight; // Force reflow
        activeSection.style.animation = '';
        
        // Trigger AOS para re-animar si es necesario
        if (window.AOS) AOS.refresh();
    }

    // Actualizar Sidebar
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick')?.includes(`'${sectionId}'`)) {
            item.classList.add('active');
        }
    });

    // Manejar el historial
    if (updateHistory) {
        // Evitar duplicar entradas si ya estamos en la misma sección.
        if (history.state && history.state.sectionId === sectionId) {
            history.replaceState({ sectionId: sectionId }, "", `#${sectionId}`);
        } else {
            history.pushState({ sectionId: sectionId }, "", `#${sectionId}`);
        }
    }

    // Restaurar o restablecer scroll
    const savedScroll = sessionStorage.getItem('scroll_' + sectionId);
    if (savedScroll !== null) {
        setTimeout(() => {
            window.scrollTo({ top: parseInt(savedScroll), behavior: 'auto' });
        }, 50);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Animate counters if showing inicio
    if (sectionId === 'inicio') {
        setTimeout(() => animateCounters(), 300);
    }
}

function renderAll(characters, media, world) {
    renderCharacters(characters);
    renderMedia(media);
    renderWorld(world);
}

function renderCharacters(characters, query = '') {
    const container = document.getElementById('charactersContainer');
    if (!container) return;

    if (!characters || characters.length === 0) {
        container.innerHTML = renderEmptySearch('No se encontraron personajes.');
        return;
    }

    container.innerHTML = characters.map(char => `
        <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div class="premium-card">
                <div class="card-image-box">
                    <img src="${char.imagenes[0]}" alt="${char.Personaje}">
                    <div class="position-absolute top-0 start-0 m-3">
                        <span class="category-badge">U${char.Universo}</span>
                    </div>
                </div>
                <div class="card-content">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="mb-0 text-white">${highlightText(char.Personaje, query)}</h5>
                        <span class="text-muted small">${highlightText(char.Raza, query)}</span>
                    </div>
                    <p class="text-muted small mb-4 line-clamp-2">${highlightText(char.descripcion, query)}</p>
                    
                    <div class="stats-group">
                        <div class="d-flex justify-content-between mb-1">
                            <span class="text-muted extra-small">KI LEVEL</span>
                            <span class="text-primary extra-small fw-bold">${char.stats.ki}%</span>
                        </div>
                        <div class="progress mb-3" style="height: 4px; background: rgba(255,255,255,0.05)">
                            <div class="progress-bar bg-primary" style="width: ${char.stats.ki}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
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
        <div class="col-12 mt-4 mb-2"><h4 class="epic-section-title manga-subsection-title">Fan Mangas</h4></div>
        ${fan.length ? renderCards(fan) : '<div class="col-12"><p class="text-muted small">Sin resultados fan.</p></div>'}
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
                        <span class="category-badge">Game</span>
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
                    <div class="premium-card p-4 text-center">
                        <div class="mb-3 display-6">✨</div>
                        <h5 class="text-white mb-2">${highlightText(esfera.nombre, query)}</h5>
                        <p class="text-muted small mb-3">${highlightText(esfera.descripcion, query)}</p>
                        <span class="badge bg-${esfera.color} bg-opacity-10 text-${esfera.color} border border-${esfera.color} border-opacity-25">${highlightText(esfera.dragon, query)}</span>
                    </div>
                </div>
            `).join('')}
        `;
    }).join('');
}

function renderUniversos(world, query = '') {
    const universosContainer = document.getElementById('universosContainer');
    if (!universosContainer) return;
    const list = filterByQuery(world.universos || [], query, (u) => [`Universo ${u.id}`, u.dios, u.angel].join(' '));
    if (!list.length) {
        universosContainer.innerHTML = renderEmptySearch('No se encontraron universos.');
        return;
    }
    universosContainer.innerHTML = `
        <div class="row g-4">
            ${list.map(u => `
                <div class="col-xl-2 col-lg-3 col-md-4 col-6" data-aos="fade-up">
                    <div class="premium-card universo-card ${u.highlight ? 'border-orange-glow' : ''}">
                        <div class="card-image-box" style="aspect-ratio: 3/4;">
                            <img src="${u.imagen}" alt="Universo ${u.id}" loading="lazy">
                        </div>
                        <div class="card-content text-center">
                            <span class="category-badge mb-2">Universo ${u.id}</span>
                            <h6 class="text-white mb-1">${highlightText(u.dios, query)}</h6>
                            <p class="text-muted small mb-0">Ángel: ${highlightText(u.angel, query)}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
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

    input.addEventListener('input', () => {
        clearBtn.classList.toggle('d-none', !input.value);
        onSearch(input.value);
    });
    clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.classList.add('d-none');
        onSearch('');
        input.focus();
    });
}

function initSectionSearchers() {
    injectSectionSearch('personajes', 'Buscar personaje...', (q) => {
        const list = filterByQuery(window.ALL_CHARACTERS || [], q, c => [c.Personaje, c.Raza, c.descripcion, ...(c.tecnicas || []), ...(c.transformaciones || [])].join(' '));
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
        renderUniversos(window.ALL_WORLD, q);
    });

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

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const suffix = target >= 100 ? '+' : '';
        const duration = 1500;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out cubic)
            const eased = 1 - Math.pow(1 - progress, 3);
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


function initCinematicHome(media) {
    const seriesWithType = media.series.map(item => ({ ...item, tipo: 'Serie' }));
    const peliculasWithType = media.peliculas.map(item => ({ ...item, tipo: 'Película' }));
    const mangasWithType = media.mangas.map(item => ({ ...item, tipo: 'Manga' }));
    
    const allMedia = [...seriesWithType, ...peliculasWithType, ...mangasWithType];
    
    // 1. Init Hero Fullscreen
    initFullscreenHero(allMedia);
    
    // 2. Init Netflix-style Rows
    initNetflixRows(media);
}

function initFullscreenHero(mediaList) {
    const swiperWrapper = document.getElementById('fullscreenHeroSlides');
    if (!swiperWrapper) return;
    
    // Shuffle and pick 8 top items for the hero
    const heroItems = mediaList.sort(() => 0.5 - Math.random()).slice(0, 8);
    
    // Store globally to reference safely by index
    window.HERO_ITEMS = heroItems;
    
    let slidesHtml = '';
    heroItems.forEach((item, index) => {
        const imageUrl = item.imagen || 'https://via.placeholder.com/1920x1080/111/ff5e00';
        slidesHtml += `
            <div class="swiper-slide fullscreen-slide" data-bg="${imageUrl}">
                <div class="container d-flex align-items-center justify-content-between h-100 w-100">
                    <div class="slide-content-container col-lg-6 col-md-8">
                        <span class="slide-badge">${item.tipo || 'Franquicia'}</span>
                        <h2 class="slide-title">${item.titulo}</h2>
                        <p class="slide-desc">${item.descripcion ? item.descripcion.substring(0, 150) + '...' : 'Explora el asombroso multiverso.'}</p>
                        <div class="hero-actions">
                            <button class="epic-btn main-action" onclick="showSection('${item.tipo === 'Manga' ? 'manga' : (item.tipo === 'Película' ? 'peliculas' : 'serie')}', true, event)">
                                <i class="bi bi-play-fill"></i> Explorar
                            </button>
                            <button class="epic-btn secondary-action" onclick="showMediaInfoByIndex(${index}, event)">
                                <i class="bi bi-info-circle"></i> Info
                            </button>
                        </div>
                    </div>
                    <div class="slide-poster-container col-lg-5 d-none d-lg-flex justify-content-end">
                        <img src="${imageUrl}" alt="${item.titulo}" class="slide-poster-img">
                    </div>
                </div>
            </div>
        `;
    });
    
    swiperWrapper.innerHTML = slidesHtml;
    
    // Initialize Swiper
    if(window.Swiper) {
        const swiper = new Swiper('.fullscreenSwiper', {
            effect: 'fade', // Efecto cinemático suave
            fadeEffect: {
                crossFade: true
            },
            grabCursor: true,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                init: function () {
                    updateHeroBlurBg(this);
                },
                slideChangeTransitionStart: function () {
                    updateHeroBlurBg(this);
                }
            }
        });
    }
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

function updateHeroBlurBg(swiperInstance) {
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    const bgUrl = activeSlide.getAttribute('data-bg');
    const blurBg = document.getElementById('heroBgBlur');
    if (blurBg && bgUrl) {
        blurBg.style.backgroundImage = `url('${bgUrl}')`;
    }
}

function initNetflixRows(media) {
    const renderRow = (containerId, items, sectionType) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        let html = '';
        items.forEach(item => {
            const imageUrl = item.imagen || 'https://via.placeholder.com/400x600/111/ff5e00';
            html += `
                <div class="netflix-card" onclick="showSection('${sectionType}')">
                    <img src="${imageUrl}" alt="${item.titulo}">
                    <div class="netflix-card-info">
                        <h6>${item.titulo}</h6>
                        <span>${item.info || item.año || ''}</span>
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
