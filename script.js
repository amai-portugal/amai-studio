/* Amai Studio — renders the product catalogue and handles the PT/EN toggle */

(function () {
  // ---------- Product rendering ----------
  const main = document.getElementById('produtos');

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function bilingual(tag, className, pt, en) {
    const node = el(tag, className);
    const spanPt = el('span', 'lang-pt', pt);
    const spanEn = el('span', 'lang-en', en);
    node.append(spanPt, spanEn);
    return node;
  }

  SECTIONS.forEach((sec) => {
    const section = el('section', 'products-section');

    const head = el('div', 'section-head');
    const titleWrap = el('div', 'section-title-wrap');
    // In PT the heading is the Portuguese name with the English name beneath;
    // in EN the two swap places.
    titleWrap.append(
      bilingual('h2', 'section-title', sec.pt, sec.en),
      bilingual('div', 'section-subtitle', sec.en, sec.pt)
    );
    const jp = el('div', 'section-jp', sec.jp);
    jp.setAttribute('lang', 'ja');
    head.append(titleWrap, jp);
    section.append(head);

    const grid = el('div', 'products-grid');
    sec.items.forEach((p) => {
      const card = el('article', 'product-card');

      const img = el('img', 'product-img');
      img.src = p.img;
      img.alt = p.pt;
      img.loading = 'lazy';

      const body = el('div', 'product-body');

      const titleRow = el('div', 'product-title-row');
      const cardJp = el('span', 'product-jp', p.jp);
      cardJp.setAttribute('lang', 'ja');
      titleRow.append(bilingual('h3', 'product-title', p.pt, p.en), cardJp);

      const altName = bilingual('div', 'product-alt-name', p.en, p.pt);
      const desc = bilingual('p', 'product-desc', p.descPt, p.descEn);

      body.append(titleRow, altName, desc);

      if (p.tags.length) {
        const tags = el('div', 'product-tags');
        p.tags.forEach((t) => {
          const label = TAG_LABELS[t];
          tags.append(bilingual('span', 'product-tag', label.pt, label.en));
        });
        body.append(tags);
      }

      card.append(img, body);
      grid.append(card);
    });

    section.append(grid);
    main.append(section);
  });

  // ---------- PT / EN language toggle ----------
  const html = document.documentElement;
  const toggle = document.getElementById('langToggle');

  function setLang(lang) {
    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', lang);
    try { localStorage.setItem('amai-lang', lang); } catch (e) { /* private mode */ }
    toggle.querySelectorAll('.lang-opt').forEach((opt) => {
      opt.classList.toggle('active', opt.dataset.setLang === lang);
    });
  }

  toggle.addEventListener('click', () => {
    setLang(html.getAttribute('data-lang') === 'pt' ? 'en' : 'pt');
  });

  let saved = null;
  try { saved = localStorage.getItem('amai-lang'); } catch (e) { /* private mode */ }
  setLang(saved === 'en' ? 'en' : 'pt');
})();
