import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/dentalia.mx", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/dentalia_mx/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/dentalia_mx", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com/@dentaliamx3421", label: "YouTube" },
]

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Ubicación", href: "#ubicacion" },
]

const services = [
  "Ortodoncia",
  "Blanqueamiento",
  "Limpieza Dental",
  "Endodoncia",
  "Implantes",
  "Odontopediatría",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">DS</span>
              </div>
              <span className="font-semibold text-xl">Dental Smile</span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              Tu sonrisa, nuestra prioridad. Más de 15 años brindando
              atención dental de calidad.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3 text-background/70">
              <p>Av. Principal 123, Centro Comercial Plaza, Local 45</p>
              <p>
                <a href="tel:+524421234567" className="hover:text-primary transition-colors">
                  +52 442 123 4567
                </a>
              </p>
              <p>
                <a href="mailto:contacto@dentalsmile.com" className="hover:text-primary transition-colors">
                  contacto@dentalsmile.com
                </a>
              </p>
              <p>Lun - Vie: 9:00 - 19:00</p>
              <p>Sáb: 9:00 - 14:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Dental Smile. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-background/60 hover:text-primary transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-background/40 text-xs">
              Hecho por D&apos;cReaM 🐢
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
