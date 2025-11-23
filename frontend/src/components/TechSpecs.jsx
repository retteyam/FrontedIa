import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

const TechSpecs = () => {
  return (
    <section id="specs" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Requisitos del Sistema</h2>
          <p className="text-muted-foreground">Optimizado para ejecutarse en hardware mínimo.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="windows" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1 rounded-lg">
              <TabsTrigger 
                value="windows" 
                className="rounded-md transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
              >
                Windows
              </TabsTrigger>
              <TabsTrigger 
                value="linux" 
                className="rounded-md transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg"
              >
                Linux
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="windows" className="mt-6 animate-accordion-down">
              <div className="bg-card border border-white/10 rounded-xl p-8 shadow-xl">
                <div className="grid gap-4">
                    {[
                        "Windows 10 o Windows 11 (64-bit)",
                        "Intel Core i3 o AMD Ryzen 3 (o más reciente)",
                        "4GB RAM mínimo (8GB recomendado)",
                        "Cámara web USB integrada o externa (720p+)",
                        "500MB de espacio libre en disco",
                        "Gráficos compatibles con DirectX 11"
                    ].map((req, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground/90">{req}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-sm text-muted-foreground">
                        Nota: Para un rendimiento óptimo con poca luz, recomendamos usar una cámara web externa con capacidad IR.
                    </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="linux" className="mt-6 animate-accordion-down">
              <div className="bg-card border border-white/10 rounded-xl p-8 shadow-xl">
                <div className="grid gap-4">
                    {[
                        "Ubuntu 20.04 LTS, Fedora 36+ o Arch Linux",
                        "Python 3.8+ (si se ejecuta desde el código fuente)",
                        "4GB RAM mínimo",
                        "Cámara web compatible con V4L2",
                        "GTK 3.0+ para GUI",
                        "Dependencias de OpenCV (libopencv-dev)"
                    ].map((req, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                            <span className="text-foreground/90">{req}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-sm text-muted-foreground">
                        Disponible como paquete AppImage, Snap o .deb. Probado en GNOME y KDE Plasma.
                    </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
