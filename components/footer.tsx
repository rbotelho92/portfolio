export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">Feito com ❤️ em São Paulo</div>
        </div>
      </div>
    </footer>
  )
}
