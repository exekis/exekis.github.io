export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Kiarash Sotoudeh</p>
      <p className="footer-status">
        <span className="status-dot" aria-hidden="true" /> static / no cookies / no tracking
      </p>
    </footer>
  );
}
