import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Av. Principal 123, Centro Comercial Plaza, Local 45",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+1 234 567 89",
    href: "tel:+123456789",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contacto@dentalsmile.com",
    href: "mailto:contacto@dentalsmile.com",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 9:00 - 19:00 | Sáb: 9:00 - 14:00",
  },
]

export function Location() {
  return (
    <section id="ubicacion" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Ubicación
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Encuéntranos fácilmente
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estamos ubicados en una zona céntrica y de fácil acceso.
            Te esperamos para brindarte la mejor atención.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661576009858!2d-99.16869032394932!3d19.42702384085493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1ses!2smx!4v1699900000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Dental Smile"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="p-6 rounded-xl bg-primary text-primary-foreground">
              <h3 className="font-semibold text-xl mb-2">¿Primera vez en nuestra clínica?</h3>
              <p className="opacity-90 mb-4">
                Te invitamos a conocer nuestras instalaciones. Agenda tu primera 
                consulta de valoración sin costo por WhatsApp.
              </p>
              <a
                href="https://wa.me/123456789?text=Hola,%20me%20gustaría%20agendar%20una%20consulta%20de%20valoración"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-card text-card-foreground px-4 py-2 rounded-lg font-medium hover:bg-card/90 transition-colors"
              >
                Agendar Consulta Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
