import React from 'react';
import { 
  Eye, 
  WifiOff, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Moon 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: Eye,
    title: "Seguimiento Ocular en Tiempo Real",
    description: "Utiliza visión por computadora avanzada para monitorear la relación de aspecto del ojo (EAR) y la frecuencia de parpadeo con precisión de milisegundos.",
    color: "text-primary"
  },
  {
    icon: Activity,
    title: "Detección de Bostezos",
    description: "Analiza puntos de referencia faciales para detectar patrones de bostezo y la duración de la apertura de la boca como signos tempranos de fatiga.",
    color: "text-secondary"
  },
  {
    icon: WifiOff,
    title: "100% Sin Conexión",
    description: "No requiere internet. Todo el procesamiento ocurre localmente en su dispositivo, asegurando latencia cero y confiabilidad en áreas remotas.",
    color: "text-accent"
  },
  {
    icon: ShieldCheck,
    title: "Privacidad Primero",
    description: "Su transmisión de video se procesa en la RAM y nunca se guarda ni se sube a ningún servidor en la nube. Sus datos siguen siendo suyos.",
    color: "text-green-400"
  },
  {
    icon: Zap,
    title: "Bajo Uso de Recursos",
    description: "Optimizado para el rendimiento. Funciona sin problemas en computadoras portátiles estándar y dispositivos Linux integrados sin agotar la batería.",
    color: "text-yellow-400"
  },
  {
    icon: Moon,
    title: "Soporte de Visión Nocturna",
    description: "Compatible con cámaras IR para una detección precisa incluso en completa oscuridad o condiciones de conducción con poca luz.",
    color: "text-purple-400"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Diseñado para tu <span className="text-primary">Seguridad</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nuestro modelo de aprendizaje automático está entrenado con miles de horas de datos de conducción para proporcionar una detección confiable en cualquier condición.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-background border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
