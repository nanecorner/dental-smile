import { Sparkles, Smile, Shield, Stethoscope, Baby, Syringe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Smile,
    title: "Ortodoncia",
    description: "Brackets metálicos, cerámicos e invisibles para una sonrisa perfectamente alineada.",
  },
  {
    icon: Sparkles,
    title: "Blanqueamiento Dental",
    description: "Tratamientos profesionales para recuperar el brillo natural de tus dientes.",
  },
  {
    icon: Shield,
    title: "Limpieza Dental",
    description: "Profilaxis y eliminación de sarro para mantener una salud bucal óptima.",
  },
  {
    icon: Stethoscope,
    title: "Endodoncia",
    description: "Tratamientos de conducto con tecnología avanzada y mínima molestia.",
  },
  {
    icon: Baby,
    title: "Odontopediatría",
    description: "Cuidado dental especializado para los más pequeños en un ambiente amigable.",
  },
  {
    icon: Syringe,
    title: "Implantes Dentales",
    description: "Soluciones permanentes para reemplazar dientes perdidos con resultados naturales.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Tratamientos dentales de alta calidad
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ofrecemos una amplia gama de servicios odontológicos para toda la familia,
            utilizando las técnicas más modernas y materiales de primera calidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 border-border bg-card"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
