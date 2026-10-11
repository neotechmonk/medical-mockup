/* Preview-only theme switcher. Not part of the site design.
   Swaps colour custom properties only; layout, spacing and copy never change. */
(function () {
  var THEMES = [
    { id: 'wine-saffron', name: 'Wine & Saffron', bg: '#6E1F2B', surface: '#8A2F3B', text: '#F8E9D6', accent: '#F0B54A', cta: '#F08A3C', ink: '#2A0A10', ring: '#8A2F3B', support: '#6FA28F' },
    { id: 'wine-clay', name: 'Wine & Clay', bg: '#6E1F2B', surface: '#8A2F3B', text: '#F8E9D6', accent: '#EDB5A9', cta: '#B5472B', ink: '#F8E9D6', ring: '#F8E9D6', support: '#6FA28F' },
    { id: 'oxblood-bone', name: 'Oxblood & Bone', bg: '#4A0F17', surface: '#66202B', text: '#F3E9DC', accent: '#D8A08F', cta: '#F1DCC8', ink: '#2A0A10', ring: '#66202B', support: '#8FB3A0' },
    { id: 'oxblood-saffron', name: 'Oxblood & Saffron', bg: '#4A0F17', surface: '#66202B', text: '#F8E9D6', accent: '#F0B54A', cta: '#F08A3C', ink: '#2A0A10', ring: '#66202B', support: '#6FA28F' },
    { id: 'mulberry-mint', name: 'Mulberry & Mint', bg: '#5B1232', surface: '#7A2146', text: '#FAEAEE', accent: '#F2A7BE', cta: '#BFE3D0', ink: '#1F0A14', ring: '#7A2146', support: '#E8C0A0' },
    { id: 'titanium-rose', name: 'Titanium & Rose', bg: '#2E2B2D', surface: '#423D40', text: '#F2EFEE', accent: '#B9B4B6', cta: '#D8A9A5', ink: '#261718', ring: '#423D40', support: '#9DB5A5' },
    { id: 'mulberry-silver', name: 'Mulberry & Silver', bg: '#5B1232', surface: '#7A2146', text: '#FAEAEE', accent: '#CBC6C8', cta: '#E6E2E3', ink: '#1F0A14', ring: '#7A2146', support: '#A8C4B4' },
    { id: 'mulberry-pewter', name: 'Mulberry & Pewter', bg: '#5B1232', surface: '#7A2146', text: '#FAEAEE', accent: '#C4BDB9', cta: '#E2DCD6', ink: '#1F0A14', ring: '#7A2146', support: '#9FB9A9' }
  ];
  var TEXTS = [
    { id: 'cool-grey', name: 'Cool grey', color: '#D3D9DF' },
    { id: 'taupe-grey', name: 'Taupe grey', color: '#D6CBC1' },
    { id: 'stone-grey', name: 'Stone grey', color: '#D9D8D2' },
    { id: 'metal-grey', name: 'Metal grey', color: '#C8C8C8' }
  ];
  var INTIMACY = [
    { id: 'mugs', name: 'Two mugs, shared warmth' },
    { id: 'ripples', name: 'Ripples meeting' },
    { id: 'flames', name: 'Two flames leaning together' },
    { id: 'orbit', name: 'Two lights in slow orbit' }
  ];
  var WEIGHT = [
    { id: 'pot', name: 'Simmering pot' },
    { id: 'stones', name: 'Balanced stones' },
    { id: 'path', name: 'A path, one step at a time' },
    { id: 'tide', name: 'Slow tides' },
    { id: 'pend', name: 'Steady pendulum' }
  ];
  var MENO = [
    { id: 'window', name: 'Dawn window' },
    { id: 'sunrise', name: 'Sunrise to dusk' },
    { id: 'warmth', name: 'Warmth rising and settling' },
    { id: 'leaf', name: 'A leaf turning with the season' }
  ];
  var MKEY = 'mh-menopause';
  var WPHOTO = [
    { id: '1', name: 'Option 1: Hand garnishing food' },
    { id: '2', name: 'Option 2: Hand dusted with powder' },
    { id: '3', name: 'Option 3: Dusting flour onto a table' },
    { id: '4', name: 'Option 4: Vegetable salad in a grey bowl' },
    { id: '5', name: 'Option 5: Ceramic bowl with nuts' }
  ];
  var MPHOTO = [
    { id: '1', name: 'Option 1: Woman on a cliff above blue water' },
    { id: '2', name: 'Option 2: Woman on a rock looking out to sea' },
    { id: '3', name: 'Option 3: Older woman at a window' },
    { id: '4', name: 'Option 4: White-haired woman outdoors' },
    { id: '5', name: 'Option 5: Woman with glasses at a window' }
  ];
  var IPHOTO = [
    { id: '1', name: 'Option 1: Hands resting on a linen pillow' },
    { id: '2', name: 'Option 2: Two hands resting together' },
    { id: '3', name: 'Option 3: Two people holding hands' },
    { id: '4', name: 'Option 4: One hand holding another' },
    { id: '5', name: 'Option 5: Flat-lay of joined hands' }
  ];
  var OPHOTO = [
    { id: '1', name: 'Option 1: Path to a beach through morning fog' },
    { id: '2', name: 'Option 2: Open door with daylight spilling in' },
    { id: '3', name: 'Option 3: Open gate to a garden' },
    { id: '4', name: 'Option 4: Wooden gate casting a shadow on a path' }
  ];
  var PHSETS = [
    { attr: 'wphoto', key: 'mh-wphoto', title: 'Weight photo (photo style):', list: WPHOTO },
    { attr: 'mphoto', key: 'mh-mphoto', title: 'Menopause photo (photo style):', list: MPHOTO },
    { attr: 'iphoto', key: 'mh-iphoto', title: 'Sexual health photo (photo style):', list: IPHOTO },
    { attr: 'ophoto', key: 'mh-ophoto', title: 'Open tile photo (photo style):', list: OPHOTO }
  ];
  var WKEY = 'mh-weight';
  var IKEY = 'mh-intimacy';
  var KEY = 'mh-theme';
  var TKEY = 'mh-text';
  var curTheme = null, curText = TEXTS[0];
  var root = document.documentElement;

  function apply(t) {
    root.style.setProperty('--bg', t.bg);
    root.style.setProperty('--surface', t.surface);
    curTheme = t;
    root.style.setProperty('--text', curText.color || t.text);
    if (curText.color) root.style.setProperty('--muted', 'color-mix(in srgb, var(--text) 95%, var(--bg))');
    else root.style.removeProperty('--muted');
    root.style.setProperty('--accent', t.accent);
    root.style.setProperty('--cta', t.cta);
    root.style.setProperty('--cta-ink', t.ink);
    root.style.setProperty('--cta-ring', t.ring);
    root.style.setProperty('--support', t.support);
    var btns = document.querySelectorAll('#mh-theme-switcher [data-theme]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-theme') === t.id ? 'true' : 'false');
    }
    var label = document.getElementById('mh-theme-current');
    if (label) label.textContent = t.name + (curText.color ? ' + ' + curText.name + ' text' : '');
  }

  function find(id) {
    for (var i = 0; i < THEMES.length; i++) if (THEMES[i].id === id) return THEMES[i];
    return null;
  }

  function saved() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('theme'); } catch (e) {}
    if (q && find(q)) return find(q);
    try { var s = localStorage.getItem(KEY); if (s && find(s)) return find(s); } catch (e) {}
    return THEMES[0];
  }

  function findText(id) {
    for (var i = 0; i < TEXTS.length; i++) if (TEXTS[i].id === id) return TEXTS[i];
    return null;
  }

  function savedText() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('text'); } catch (e) {}
    if (q && findText(q)) return findText(q);
    try { var s = localStorage.getItem(TKEY); if (s && findText(s)) return findText(s); } catch (e) {}
    return TEXTS[0];
  }

  function paintText() {
    var btns = document.querySelectorAll('#mh-theme-switcher [data-text]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-text') === curText.id ? 'true' : 'false');
    }
  }

  function savedIntimacy() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('intimacy'); } catch (e) {}
    var ok = function (id) { for (var i = 0; i < INTIMACY.length; i++) if (INTIMACY[i].id === id) return id; return null; };
    if (q && ok(q)) return q;
    try { var s = localStorage.getItem(IKEY); if (s && ok(s)) return s; } catch (e) {}
    return INTIMACY[0].id;
  }

  function paintIntimacy(id) {
    root.setAttribute('data-intimacy', id);
    var btns = document.querySelectorAll('#mh-theme-switcher [data-intimacy]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-intimacy') === id ? 'true' : 'false');
    }
  }

  function savedWeight() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('weight'); } catch (e) {}
    var ok = function (id) { for (var i = 0; i < WEIGHT.length; i++) if (WEIGHT[i].id === id) return id; return null; };
    if (q && ok(q)) return q;
    try { var s = localStorage.getItem(WKEY); if (s && ok(s)) return s; } catch (e) {}
    return WEIGHT[0].id;
  }

  function paintWeight(id) {
    root.setAttribute('data-weight', id);
    var btns = document.querySelectorAll('#mh-theme-switcher [data-weight]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-weight') === id ? 'true' : 'false');
    }
  }

  function savedMeno() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('menopause'); } catch (e) {}
    var ok = function (id) { for (var i = 0; i < MENO.length; i++) if (MENO[i].id === id) return id; return null; };
    if (q && ok(q)) return q;
    try { var s = localStorage.getItem(MKEY); if (s && ok(s)) return s; } catch (e) {}
    return MENO[0].id;
  }

  function paintMeno(id) {
    root.setAttribute('data-menopause', id);
    var btns = document.querySelectorAll('#mh-theme-switcher [data-menopause]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-menopause') === id ? 'true' : 'false');
    }
  }

  function photoSaved(attr, key, list) {
    var q = null;
    try { q = new URLSearchParams(location.search).get(attr); } catch (e) {}
    var ok = function (id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return id; return null; };
    if (q && ok(q)) return q;
    try { var s = localStorage.getItem(key); if (s && ok(s)) return s; } catch (e) {}
    return list[0].id;
  }

  function photoPaint(attr, id) {
    root.setAttribute('data-' + attr, id);
    var btns = document.querySelectorAll('#mh-theme-switcher [data-' + attr + ']');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-' + attr) === id ? 'true' : 'false');
    }
  }

  function photoList(panel, title, attr, key, list) {
    var note = document.createElement('p');
    note.style.marginTop = '12px';
    note.textContent = title;
    panel.appendChild(note);
    var ul = document.createElement('ul');
    list.forEach(function (x) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-' + attr, x.id);
      b.setAttribute('aria-pressed', 'false');
      b.textContent = x.name;
      b.addEventListener('click', function () {
        photoPaint(attr, x.id);
        try { localStorage.setItem(key, x.id); } catch (e) {}
      });
      li.appendChild(b);
      ul.appendChild(li);
    });
    panel.appendChild(ul);
  }

  function heroTab(box, name, heroId, key) {
    var heroIn = document.querySelectorAll('input[name="' + name + '"]');
    if (!heroIn.length || !document.getElementById(heroId)) return;
    var attr = 'data-hero-' + name;
    var ul = document.createElement('ul');
    var setHero = function (id) {
      var found = null;
      heroIn.forEach(function (inp) { if (inp.id === id) { inp.checked = true; found = id; } });
      document.querySelectorAll('#mh-theme-switcher [' + attr + ']').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute(attr) === found ? 'true' : 'false');
      });
      return found;
    };
    heroIn.forEach(function (inp) {
      var lab = document.querySelector('label[for="' + inp.id + '"]');
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute(attr, inp.id);
      b.setAttribute('aria-pressed', 'false');
      b.textContent = lab ? lab.textContent.replace(/^\d+\s*·\s*/, '') : inp.id;
      b.addEventListener('click', function () {
        setHero(inp.id);
        try { localStorage.setItem(key, inp.id); } catch (e) {}
      });
      li.appendChild(b);
      ul.appendChild(li);
    });
    box.appendChild(ul);
    var hs = null;
    try { hs = localStorage.getItem(key); } catch (e) {}
    if (!setHero(hs)) setHero(heroIn[0].id);
  }

  function build() {
    var css = document.createElement('style');
    css.textContent =
      '#mh-theme-switcher{position:fixed;top:8px;right:10px;z-index:2147483000;font:600 13px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff}' +
      '#mh-theme-switcher *{box-sizing:border-box}' +
      '#mh-theme-toggle{display:flex;align-items:center;gap:8px;padding:7px 14px;border:0;border-radius:999px;background:rgba(20,16,14,.92);color:#fff;font:inherit;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.35)}' +
      '#mh-theme-toggle:focus-visible,#mh-theme-switcher button:focus-visible{outline:2px solid #fff;outline-offset:2px}' +
      '#mh-theme-panel{display:none;margin-top:8px;max-height:70vh;overflow-y:auto;width:min(460px,calc(100vw - 24px));padding:12px;border-radius:16px;background:rgba(20,16,14,.96);box-shadow:0 8px 28px rgba(0,0,0,.45)}' +
      '#mh-theme-switcher.open #mh-theme-panel{display:block}' +
      '#mh-theme-panel p{margin:0 0 10px;font-weight:400;font-size:12px;color:#d6cfc8}' +
      '#mh-theme-panel ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}' +
      '#mh-theme-panel button{display:flex;align-items:center;gap:10px;width:100%;padding:8px 10px;border:0;border-radius:10px;background:rgba(255,255,255,.08);color:#fff;font:inherit;text-align:left;cursor:pointer}' +
      '#mh-theme-panel button[aria-pressed="true"]{background:rgba(255,255,255,.22);box-shadow:inset 0 0 0 2px #fff}' +
      '#mh-theme-panel .sw{display:flex;flex:none;border-radius:6px;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.3)}' +
      '#mh-theme-panel .sw i{display:block;width:14px;height:22px}' +
      '.mh-body{display:flex;gap:12px;align-items:flex-start}.mh-tabs{display:flex;flex-direction:column;gap:4px;flex:none;width:104px;position:sticky;top:0}.mh-pane-wrap{flex:1;min-width:0}.mh-pane[hidden]{display:none}' +
      '#mh-theme-panel .mh-tabs button{background:transparent;padding:9px 10px;border-radius:10px}#mh-theme-panel .mh-tabs button[aria-selected="true"]{background:rgba(255,255,255,.22);box-shadow:inset 0 0 0 2px #fff}' +
      '.mh-pane details{margin:0 0 8px;border-radius:10px;background:rgba(255,255,255,.04);padding:6px 8px}.mh-pane summary{cursor:pointer;font-weight:600;font-size:12px;color:#d6cfc8;padding:4px 0}.mh-pane details[open]>summary{margin-bottom:2px}' +
      '#mh-theme-panel{margin-left:auto}@media (max-width:640px){#mh-theme-switcher{top:auto;bottom:10px;right:10px}#mh-theme-panel{position:absolute;bottom:100%;right:0;margin:0 0 8px;max-height:60vh}}';
    document.head.appendChild(css);

    var wrap = document.createElement('div');
    wrap.id = 'mh-theme-switcher';
    wrap.setAttribute('role', 'region');
    wrap.setAttribute('aria-label', 'Preview theme switcher');

    var toggle = document.createElement('button');
    toggle.id = 'mh-theme-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'mh-theme-panel');
    toggle.innerHTML = 'Preview theme: <span id="mh-theme-current"></span>';
    wrap.appendChild(toggle);

    var shell = document.createElement('div');
    shell.id = 'mh-theme-panel';
    var panel = shell;
    var mk = function () { return document.createElement('div'); };
    var tabPal = mk(), tabTxt = mk(), tabLine = mk(), tabLand = mk(), tabImg = mk();
    var note = document.createElement('p');
    note.textContent = 'Preview tool only, not part of the site design. Changes colour only.';
    panel.appendChild(note);
    var bodyEl = mk();
    panel = tabPal;
    var ul = document.createElement('ul');
    THEMES.forEach(function (t) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-theme', t.id);
      b.setAttribute('aria-pressed', 'false');
      var sw = document.createElement('span');
      sw.className = 'sw';
      sw.setAttribute('aria-hidden', 'true');
      [t.bg, t.surface, t.text, t.accent, t.cta].forEach(function (c) {
        var i = document.createElement('i');
        i.style.background = c;
        sw.appendChild(i);
      });
      var name = document.createElement('span');
      name.textContent = t.name;
      b.appendChild(sw);
      b.appendChild(name);
      b.addEventListener('click', function () {
        apply(t);
        try { localStorage.setItem(KEY, t.id); } catch (e) {}
      });
      li.appendChild(b);
      ul.appendChild(li);
    });
    panel.appendChild(ul);
    panel = tabTxt;
    var tnote = document.createElement('p');
    tnote.style.marginTop = '12px';
    tnote.textContent = 'Text colour (works with any palette):';
    panel.appendChild(tnote);
    var tl = document.createElement('ul');
    TEXTS.forEach(function (x) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-text', x.id);
      b.setAttribute('aria-pressed', 'false');
      var sw = document.createElement('span');
      sw.className = 'sw';
      sw.setAttribute('aria-hidden', 'true');
      var i1 = document.createElement('i');
      i1.style.background = x.color || '#F8E9D6';
      i1.style.width = '30px';
      sw.appendChild(i1);
      var nm = document.createElement('span');
      nm.textContent = x.name;
      b.appendChild(sw);
      b.appendChild(nm);
      b.addEventListener('click', function () {
        curText = x;
        apply(curTheme);
        paintText();
        try { localStorage.setItem(TKEY, x.id); } catch (e) {}
      });
      li.appendChild(b);
      tl.appendChild(li);
    });
    panel.appendChild(tl);
    panel = tabLine;
    heroTab(tabLine, 'o', 'hero', 'mh-hero');
    heroTab(tabLand, 'l', 'lhero', 'mh-lhero');
    panel = tabImg;
    if (document.querySelector('.pic.w1')) {
      PHSETS.forEach(function (p) { photoList(panel, p.title, p.attr, p.key, p.list); });
    }
    // viewport tab: desktop vs a real 390px mobile frame (iframe, so media queries reflow)
    var tabView = mk();
    var embedded = false;
    try { embedded = window.self !== window.top || /[?&]embed=1/.test(location.search); } catch (e) { embedded = true; }
    var curView = 'desktop';
    var vq = null;
    try { vq = new URLSearchParams(location.search).get('view'); } catch (e) {}
    if (vq === 'mobile' || vq === 'desktop') curView = vq;
    else { try { if (localStorage.getItem('mh-view') === 'mobile') curView = 'mobile'; } catch (e) {} }
    var frameBox = null, frameEl = null;
    var paintView = function () {
      document.querySelectorAll('#mh-theme-switcher [data-view]').forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-view') === curView ? 'true' : 'false');
      });
      if (curView === 'mobile') {
        if (!frameBox) {
          frameBox = document.createElement('div');
          frameBox.id = 'mh-frame-box';
          frameBox.style.cssText = 'position:fixed;inset:0;z-index:2147482000;background:#17110f;display:flex;align-items:flex-end;justify-content:center;padding:52px 0 14px';
          frameEl = document.createElement('iframe');
          frameEl.title = 'Mobile preview (390px wide)';
          var u = new URL(location.href);
          u.searchParams.set('embed', '1');
          u.searchParams.delete('view');
          frameEl.src = u.toString();
          frameEl.style.cssText = 'width:390px;max-width:100%;height:min(844px,100%);border:0;border-radius:28px;background:#000;box-shadow:0 0 0 8px #2b2321,0 12px 40px rgba(0,0,0,.6)';
          frameBox.appendChild(frameEl);
          document.body.appendChild(frameBox);
        }
        root.style.overflow = 'hidden';
      } else {
        if (frameBox) { frameBox.remove(); frameBox = null; frameEl = null; }
        root.style.overflow = '';
      }
    };
    var vp = document.createElement('p');
    vp.textContent = 'Viewport (mobile shows the page in a 390px frame):';
    tabView.appendChild(vp);
    var vl = document.createElement('ul');
    [['desktop', 'Desktop'], ['mobile', 'Mobile (390px)']].forEach(function (v) {
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-view', v[0]);
      b.setAttribute('aria-pressed', 'false');
      b.textContent = v[1];
      b.addEventListener('click', function () {
        curView = v[0];
        try { localStorage.setItem('mh-view', curView); } catch (e) {}
        paintView();
      });
      li.appendChild(b);
      vl.appendChild(li);
    });
    tabView.appendChild(vl);
    shell.addEventListener('click', function (e) {
      if (curView === 'mobile' && frameEl && !e.target.closest('[data-view],[role=tab],summary')) {
        setTimeout(function () { try { frameEl.contentWindow.location.reload(); } catch (x) {} }, 30);
      }
    });
    // group the Images tab lists into collapsible sections
    var kids = Array.prototype.slice.call(tabImg.children);
    tabImg.innerHTML = '';
    for (var k = 0; k + 1 < kids.length; k += 2) {
      var det = document.createElement('details');
      if (k === 0) det.open = true;
      var sum = document.createElement('summary');
      sum.textContent = kids[k].textContent.replace(/:$/, '');
      det.appendChild(sum);
      kids[k + 1].style.marginTop = '8px';
      det.appendChild(kids[k + 1]);
      tabImg.appendChild(det);
    }
    var defs = [
      { id: 'palette', label: 'Palette', el: tabPal },
      { id: 'text', label: 'Text colour', el: tabTxt },
      { id: 'images', label: 'Images', el: tabImg },
      { id: 'line', label: 'Opening line', el: tabLine },
      { id: 'land', label: 'Landing page title', el: tabLand },
      { id: 'view', label: 'Viewport', el: tabView }
    ].filter(function (d) { return d.el.children.length > 0; });
    var layout = mk();
    layout.className = 'mh-body';
    var tablist = mk();
    tablist.className = 'mh-tabs';
    tablist.setAttribute('role', 'tablist');
    tablist.setAttribute('aria-orientation', 'vertical');
    tablist.setAttribute('aria-label', 'Preview options');
    var panes = mk();
    panes.className = 'mh-pane-wrap';
    var tabBtns = [];
    var show = function (idx, focus) {
      defs.forEach(function (d, n) {
        var on = n === idx;
        d.btn.setAttribute('aria-selected', on ? 'true' : 'false');
        d.btn.tabIndex = on ? 0 : -1;
        d.el.hidden = !on;
      });
      if (focus) defs[idx].btn.focus();
      try { localStorage.setItem('mh-tab', defs[idx].id); } catch (e) {}
    };
    defs.forEach(function (d, n) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.id = 'mh-tab-' + d.id;
      b.setAttribute('aria-controls', 'mh-pane-' + d.id);
      b.textContent = d.label;
      d.btn = b;
      d.el.id = 'mh-pane-' + d.id;
      d.el.className = 'mh-pane';
      d.el.setAttribute('role', 'tabpanel');
      d.el.setAttribute('aria-labelledby', b.id);
      b.addEventListener('click', function () { show(n, false); });
      b.addEventListener('keydown', function (e) {
        var m = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') m = (n + 1) % defs.length;
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') m = (n + defs.length - 1) % defs.length;
        else if (e.key === 'Home') m = 0;
        else if (e.key === 'End') m = defs.length - 1;
        if (m !== null) { e.preventDefault(); show(m, true); }
      });
      tablist.appendChild(b);
      panes.appendChild(d.el);
    });
    layout.appendChild(tablist);
    layout.appendChild(panes);
    shell.appendChild(layout);
    var startTab = 0;
    try {
      var st = localStorage.getItem('mh-tab');
      defs.forEach(function (d, n) { if (d.id === st) startTab = n; });
    } catch (e) {}
    show(startTab, false);
    wrap.appendChild(shell);
    document.body.appendChild(wrap);
    if (embedded) wrap.style.display = 'none';

    toggle.addEventListener('click', function () {
      var open = wrap.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && wrap.classList.contains('open')) {
        wrap.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
    curText = savedText();
    PHSETS.forEach(function (p) { photoPaint(p.attr, photoSaved(p.attr, p.key, p.list)); });
    apply(saved());
    paintText();
    if (!embedded) paintView();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
