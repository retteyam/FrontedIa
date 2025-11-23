import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Descargar e Instalar",
    description: "Obtenga el ejecutable ligero para Windows o la AppImage para Linux. No se requieren dependencias complejas."
  },
  {
    number: "02",
    title: "Calibración Rápida",
    description: "Inicie la aplicación y mire a la cámara durante 5 segundos. La IA aprende su apertura ocular base y estructura facial."
  },
  {
    number: "03",
    title: "Conduzca Protegido",
    description: "Mantenga la aplicación ejecutándose en segundo plano. Si se detectan signos de fatiga, una alarma fuerte le alertará inmediatamente."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Configuración Simple.<br />
              <span className="text-secondary">Protección Instantánea.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Creemos que la tecnología de seguridad debe ser accesible para todos. Por eso hemos hecho que WakeGuard AI sea increíblemente fácil de usar.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary font-bold font-mono text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-10 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              Leer Documentación <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="relative">
            {/* Abstract Visual Representation of the Process */}
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative z-10 bg-card border border-white/10 rounded-2xl p-8 shadow-2xl h-full flex flex-col justify-between">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">wakeguard_cli.exe</div>
                </div>
                
                <div className="font-mono text-sm space-y-2 text-green-400/80">
                    <p>$ initializing_camera...</p>
                    <p>$ loading_model: <span className="text-primary">drowsiness_v2.h5</span></p>
                    <p>$ calibration_start...</p>
                    <p className="text-white">$ [OK] Baseline EAR: 0.35</p>
                    <p className="text-white">$ [OK] Face Landmarks Detected</p>
                    <p>$ monitoring_active...</p>
                    <div className="pl-4 border-l-2 border-secondary/50 mt-4">
                        <p className="text-secondary">ADVERTENCIA: Fatiga Detectada!</p>
                        <p className="text-secondary">Acción: Activar Alarma</p>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">Estado del Sistema</div>
                    <div className="flex items-center gap-2 text-xs font-bold text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        EJECUTANDO
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
