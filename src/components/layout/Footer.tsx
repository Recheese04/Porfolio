export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-card border-t border-border py-8">
            <div className="px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm font-medium text-foreground tracking-tight">
                    &copy; {currentYear} Rechie James Postanes. All rights reserved.
                </p>
                <div className="flex gap-4 text-sm font-medium text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="#" className="hover:text-foreground transition-colors">Facebook</a>
                </div>
            </div>
        </footer>
    );
}
