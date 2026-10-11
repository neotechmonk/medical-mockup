/* Preview-only theme switcher. Not part of the site design.
   Swaps colour custom properties only; layout, spacing and copy never change. */
(function () {
  var THEMES = [
    { id: 'wine-saffron', name: 'Wine & Saffron', bg: '#6E1F2B', surface: '#8A2F3B', text: '#F8E9D6', accent: '#F0B54A', cta: '#F08A3C', ink: '#2A0A10', ring: '#8A2F3B', support: '#6FA28F' },
    { id: 'wine-clay', name: 'Wine & Clay', bg: '#6E1F2B', surface: '#8A2F3B', text: '#F8E9D6', accent: '#EDB5A9', cta: '#B5472B', ink: '#F8E9D6', ring: '#F8E9D6', support: '#6FA28F' },
    { id: 'oxblood-bone', name: 'Oxblood & Bone', bg: '#4A0F17', surface: '#66202B', text: '#F3E9DC', accent: '#D8A08F', cta: '#F1DCC8', ink: '#2A0A10', ring: '#66202B', support: '#8FB3A0' },
    { id: 'cranberry-pistachio', name: 'Cranberry & Pistachio', bg: '#7A1530', surface: '#962645', text: '#FBEDE6', accent: '#F2B8C0', cta: '#B9D6A0', ink: '#2A0A12', ring: '#962645', support: '#9CC5B5' },
    { id: 'garnet-coral', name: 'Garnet & Coral', bg: '#5C1424', surface: '#7B2336', text: '#FAEBE0', accent: '#F4B9A0', cta: '#FF9E85', ink: '#2B0A10', ring: '#7B2336', support: '#8DB8A8' },
    { id: 'rust-cream', name: 'Rust & Cream', bg: '#8B3A22', surface: '#A64B2E', text: '#FBEFE2', accent: '#F0C9A8', cta: '#FBEFE2', ink: '#3A1308', ring: '#A64B2E', support: '#8DB5A0' },
    { id: 'lacquer-jade', name: 'Lacquer & Jade', bg: '#7D1B22', surface: '#9A2B33', text: '#FBEDE3', accent: '#F3B7AD', cta: '#9ED3BF', ink: '#1D0A0C', ring: '#9A2B33', support: '#C9B6E0' },
    { id: 'rosewood-sage', name: 'Rosewood & Sage', bg: '#5A2430', surface: '#743846', text: '#F6EAE4', accent: '#E8B4B8', cta: '#C9D8B6', ink: '#25100F', ring: '#743846', support: '#9DBFAF' },
    { id: 'claret-brass', name: 'Claret & Brass', bg: '#55101F', surface: '#721C2E', text: '#F7ECDD', accent: '#D9B26F', cta: '#E3C27A', ink: '#2A0A10', ring: '#721C2E', support: '#86B3A1' },
    { id: 'cherry-cola-caramel', name: 'Cherry Cola & Caramel', bg: '#3F1A1A', surface: '#5A2825', text: '#F5E8DA', accent: '#E0A86E', cta: '#F0C08A', ink: '#2A1208', ring: '#5A2825', support: '#8DB09A' },
    { id: 'madder-linen', name: 'Madder & Linen', bg: '#9A2A2A', surface: '#B33C3A', text: '#FFF6EC', accent: '#FFD3C2', cta: '#FFF6EC', ink: '#4A1010', ring: '#B33C3A', support: '#B5DCCB' },
    { id: 'mulberry-mint', name: 'Mulberry & Mint', bg: '#5B1232', surface: '#7A2146', text: '#FAEAEE', accent: '#F2A7BE', cta: '#BFE3D0', ink: '#1F0A14', ring: '#7A2146', support: '#E8C0A0' }
  ];
  var KEY = 'mh-theme';
  var root = document.documentElement;

  function apply(t) {
    root.style.setProperty('--bg', t.bg);
    root.style.setProperty('--surface', t.surface);
    root.style.setProperty('--text', t.text);
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
    if (label) label.textContent = t.name;
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

  function build() {
    var css = document.createElement('style');
    css.textContent =
      '#mh-theme-switcher{position:fixed;top:6px;left:50%;transform:translateX(-50%);z-index:2147483000;font:600 13px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff}' +
      '#mh-theme-switcher *{box-sizing:border-box}' +
      '#mh-theme-toggle{display:flex;align-items:center;gap:8px;padding:7px 14px;border:0;border-radius:999px;background:rgba(20,16,14,.92);color:#fff;font:inherit;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.35)}' +
      '#mh-theme-toggle:focus-visible,#mh-theme-switcher button:focus-visible{outline:2px solid #fff;outline-offset:2px}' +
      '#mh-theme-panel{display:none;margin-top:8px;max-height:70vh;overflow-y:auto;width:min(320px,calc(100vw - 24px));padding:12px;border-radius:16px;background:rgba(20,16,14,.96);box-shadow:0 8px 28px rgba(0,0,0,.45)}' +
      '#mh-theme-switcher.open #mh-theme-panel{display:block}' +
      '#mh-theme-panel p{margin:0 0 10px;font-weight:400;font-size:12px;color:#d6cfc8}' +
      '#mh-theme-panel ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}' +
      '#mh-theme-panel button{display:flex;align-items:center;gap:10px;width:100%;padding:8px 10px;border:0;border-radius:10px;background:rgba(255,255,255,.08);color:#fff;font:inherit;text-align:left;cursor:pointer}' +
      '#mh-theme-panel button[aria-pressed="true"]{background:rgba(255,255,255,.22);box-shadow:inset 0 0 0 2px #fff}' +
      '#mh-theme-panel .sw{display:flex;flex:none;border-radius:6px;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.3)}' +
      '#mh-theme-panel .sw i{display:block;width:14px;height:22px}' +
      '@media (max-width:640px){#mh-theme-switcher{top:auto;bottom:10px}#mh-theme-panel{position:absolute;bottom:100%;left:50%;transform:translateX(-50%);margin:0 0 8px}}';
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

    var panel = document.createElement('div');
    panel.id = 'mh-theme-panel';
    var note = document.createElement('p');
    note.textContent = 'Preview tool only, not part of the site design. Changes colour only.';
    panel.appendChild(note);
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
    wrap.appendChild(panel);
    document.body.appendChild(wrap);

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
    apply(saved());
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
