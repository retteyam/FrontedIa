import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Monitor, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1719645580984-7bdec515c7ca" 
          alt="Driver at night" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10 px-3 py-1">
              v2.0 Ya Disponible
            </Badge>
            <Badge variant="outline" className="border-secondary/50 text-secondary bg-secondary/10 px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              Detección en Vivo
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            Mantente <span className="text-primary">Despierto</span>.<br />
            Mantente <span className="text-secondary">Vivo</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Algoritmos avanzados de aprendizaje automático que monitorean la fatiga del conductor en tiempo real. 
            Alertas instantáneas, procesamiento fuera de línea y arquitectura centrada en la privacidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:scale-105">
              <Monitor className="mr-2 w-5 h-5" />
              Download for Windows
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg border-white/20 hover:bg-white/10 hover:text-white transition-all hover:scale-105"
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1svVhX8kUiV0e1KV9qGoFwwgMCKg0opk3', '_blank')}
            >
              <Terminal className="mr-2 w-5 h-5" />
              Download for Linux
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-2">
            * Requiere cámara web. Compatible con Windows 10/11 y Ubuntu 20.04+
          </p>
        </div>

        {/* Visual/Demo Mockup */}
        <div className="relative hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-black/50 backdrop-blur-sm aspect-video group">
            {/* Mock Face Scanning UI */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-64 h-64 border-2 border-primary/30 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-secondary/50 rounded-full animate-ping opacity-20"></div>
                  <div className="w-56 h-56 border border-primary/20 rounded-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="w-16 h-10 border border-primary rounded-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary animate-scan"></div>
                        </div>
                        <div className="w-16 h-10 border border-primary rounded-full relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-secondary animate-scan" style={{animationDelay: "0.1s"}}></div>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* UI Overlay Elements */}
            <div className="absolute top-4 left-4 flex gap-2">
                <div className="px-2 py-1 bg-black/60 rounded text-xs font-mono text-green-400">FPS: 60</div>
                <div className="px-2 py-1 bg-black/60 rounded text-xs font-mono text-primary">CONFIANZA: 98%</div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-end">
                    <div className="space-y-1">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Estado</div>
                        <div className="text-xl font-bold text-green-400 flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            ALERTA
                        </div>
                    </div>
                    <div className="space-y-1 text-right">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">Relación de Aspecto Ocular</div>
                        <div className="text-xl font-mono text-primary">0.32</div>
                    </div>
                </div>
                {/* Graph Line */}
                <div className="mt-2 h-8 flex items-end gap-1 opacity-50">
                    {[40, 60, 45, 70, 65, 50, 55, 80, 75, 60, 50, 45, 60, 70, 65, 55, 50, 45, 40, 35].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary" style={{height: `${h}%`}}></div>
                    ))}
                </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
