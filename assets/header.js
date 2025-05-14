// Helper: Get current page name (e.g., "actions.html")
function getCurrentPage() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1);
  }
  
  // Build the header HTML
  function buildHeader() {
    const currentPage = getCurrentPage();
  
    const navItems = [
      { href: "actions.html", label: "Actions" },
      { href: "locations.html", label: "Locations" },
      { href: "services.html", label: "Services" },
      { href: "research.html", label: "Research" },
      { href: "table-index.html", label: "Index" },
      { href: "about.html", label: "About" }
    ];
  
    const navLinksHTML = navItems.map(item => {
      const isActive = currentPage === item.href;
      const className = isActive ? "menu-item button active" : "menu-item button";
      return `<a class="${className}" href="${item.href}"><h6>${item.label}</h6></a>`;
    }).join('\n');
  
    return `
  <header>
    <a id="site-title" href="index.html">
      <h1>TMIS</h1>
      TMIS
    </a>
    <nav id="menu" class="title">
      ${navLinksHTML}
    </nav>
  </header>
  `;
  }
  
  // Inject the header on DOM ready
  window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.hjax');
    if (container) {
      container.insertAdjacentHTML('afterbegin', buildHeader());
    }
  });
  