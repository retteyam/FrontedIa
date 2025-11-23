import React from 'react';
import { Activity, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xl font-heading font-bold">WakeGuard AI</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Salvando vidas a través de tecnología inteligente de monitoreo de conductores. 
              Código abierto, centrado en la privacidad y gratuito para uso personal.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Características</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Descargar</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Registro de Cambios</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentación</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Licencia</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 WakeGuard AI. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
