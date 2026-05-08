import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María García",
    role: "Paciente desde 2020",
    content: "Excelente atención desde la primera visita. El Dr. López me explicó todo el proceso de mi tratamiento y los resultados fueron increíbles. ¡Muy recomendado!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Carlos Mendoza",
    role: "Paciente desde 2019",
    content: "Llevé a mis hijos por primera vez y quedaron encantados. El ambiente es muy amigable y el personal tiene mucha paciencia con los niños. Sin duda volveremos.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Ana Rodríguez",
    role: "Paciente desde 2021",
    content: "Mi experiencia con los implantes fue mejor de lo que esperaba. Tecnología de punta y un equipo muy profesional. El resultado es natural y me siento muy feliz.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Roberto Sánchez",
    role: "Paciente desde 2022",
    content: "El blanqueamiento que me hicieron superó mis expectativas. El proceso fue rápido, sin dolor y los resultados son impresionantes. Muy agradecido con todo el equipo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa.
            Conoce las experiencias de quienes ya confían en nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Quote className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed mb-4">
                      {`"${testimonial.content}"`}
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "98%", label: "Satisfacción" },
            { value: "+5000", label: "Pacientes" },
            { value: "15+", label: "Años de experiencia" },
            { value: "4.9", label: "Calificación Google" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
