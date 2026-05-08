"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    alt: "Consultorio dental moderno",
    category: "Instalaciones",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    alt: "Tratamiento dental profesional",
    category: "Tratamientos",
  },
  {
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop",
    alt: "Equipos de última tecnología",
    category: "Tecnología",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
    alt: "Sala de espera confortable",
    category: "Instalaciones",
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
    alt: "Equipo de dentistas profesionales",
    category: "Equipo",
  },
  {
    src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&h=400&fit=crop",
    alt: "Sonrisa perfecta resultado",
    category: "Resultados",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nuestra Galería
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Conoce nuestras instalaciones
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Instalaciones modernas y equipadas con la última tecnología
            para brindarte la mejor atención dental.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <span className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs rounded mb-1">
                    {image.category}
                  </span>
                  <p className="text-card text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-card hover:text-card/80 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.replace("w=600&h=400", "w=1200&h=800")}
            alt="Imagen ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
