export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className=" text-sm text-muted-foreground">© {new Date().getFullYear()}. Todos os direitos reservados.</p>

          <p className="text-sm text-muted-foreground">Created with ❤️ by <a href="https://www.linkedin.com/in/pedro-vitor-souza/?locale=en_US" target="_blank" className="text-foreground underline  hover:text-secondary transition-colors">Pedro Vitor</a></p>
        </div>
      </div>
    </footer>
  )
}
