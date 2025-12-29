export function Footer() {
  return (
    <footer className="py-8 border-t border-border" role="contentinfo" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p data-testid="text-footer-name">Lia Carroll - Portfolio</p>
          <p data-testid="text-footer-tagline">Built with passion and precision</p>
        </div>
      </div>
    </footer>
  );
}
