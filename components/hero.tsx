import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Profesionales Certificados",
  },
  {
    icon: Clock,
    title: "Atención Personalizada",
  },
  {
    icon: Award,
    title: "+15 Años de Experiencia",
  },
]

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Clínica Dental de Confianza
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Tu sonrisa,{" "}
                <span className="text-primary">nuestra prioridad</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Brindamos atención dental de calidad con tecnología de última generación 
                y un equipo de profesionales comprometidos con tu bienestar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a 
                  href="https://wa.me/123456789?text=Hola,%20me%20gustaría%20agendar%20una%20cita" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos por WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <a href="#servicios">
                  Ver Servicios
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=1000&fit=crop"
                alt="Dentista profesional atendiendo a un paciente"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+5000</p>
                  <p className="text-sm text-muted-foreground">Pacientes Satisfechos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
