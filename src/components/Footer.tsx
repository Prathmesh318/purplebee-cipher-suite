export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-sm">
          <span className="text-primary">Purple</span>
          <span className="text-accent">Bee</span>
          <span className="text-muted-foreground">Sec</span>
          <span className="text-muted-foreground ml-2">© {new Date().getFullYear()}</span>
        </div>
        <p className="text-xs text-muted-foreground">Built with passion for security.</p>
      </div>
    </footer>
  );
}
