export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-sm">
            <span className="text-primary">Purple</span>
            <span className="text-accent">Bee</span>
            <span className="text-muted-foreground">Sec</span>
            <span className="text-muted-foreground ml-2">© {new Date().getFullYear()}</span>
          </div>
          <p className="text-xs text-muted-foreground">Built with passion for security.</p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-xs text-muted-foreground">
            📍 Based in Chennai, Tamil Nadu • Available to relocate across India • Open to remote international opportunities
          </p>
        </div>
      </div>
    </footer>
  );
}
