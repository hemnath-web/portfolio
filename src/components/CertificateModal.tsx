import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Download, ExternalLink, ZoomIn, ZoomOut, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    name: string;
    issuer: string;
    image?: string;
    pdf?: string;
    description?: string;
  } | null;
}

export function CertificateModal({ isOpen, onClose, certificate }: CertificateModalProps) {
  const [zoomLevel, setZoomLevel] = React.useState(1);

  if (!certificate) return null;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoomLevel(1);

  const isPDF = certificate.pdf?.endsWith(".pdf");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="bg-black/60 backdrop-blur-md z-[100]" />
        <DialogContent className="fixed left-[50%] top-[50%] z-[101] w-[95vw] max-w-4xl translate-x-[-50%] translate-y-[-50%] p-0 overflow-hidden border-none bg-transparent shadow-none focus:outline-none sm:rounded-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative flex flex-col w-full max-h-[90vh] glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-card/90"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <DialogTitle className="text-xl font-bold text-foreground">
                    {certificate.name}
                  </DialogTitle>
                  <CheckCircle2 className="h-5 w-5 text-blue-400 fill-blue-400/10" />
                </div>
                <DialogDescription className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  Issued by {certificate.issuer}
                </DialogDescription>
              </div>
            </div>

            {/* Content */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-8 bg-black/40 flex items-center justify-center min-h-[450px]">
              {certificate.image ? (
                <div className="relative flex flex-col items-center">
                  {/* Floating Toolbar */}
                  <div className="absolute top-4 z-30 flex items-center gap-2 p-2 rounded-full bg-slate-900/95 border border-white/20 shadow-2xl shadow-black/80 transition-all opacity-100 hover:scale-105">
                    <button 
                      onClick={handleZoomOut}
                      className="p-2.5 rounded-full hover:bg-white/15 text-slate-100 hover:text-white transition-all active:scale-95"
                      title="Zoom Out"
                    >
                      <ZoomOut size={20} strokeWidth={2.25} />
                    </button>
                    <div className="w-[1px] h-5 bg-white/20 mx-0.5" />
                    <button 
                      onClick={handleZoomIn}
                      className="p-2.5 rounded-full hover:bg-white/15 text-slate-100 hover:text-white transition-all active:scale-95"
                      title="Zoom In"
                    >
                      <ZoomIn size={20} strokeWidth={2.25} />
                    </button>
                    <div className="w-[1px] h-5 bg-white/20 mx-0.5" />
                    <button 
                      onClick={handleResetZoom}
                      className="p-2.5 rounded-full hover:bg-white/15 text-slate-100 hover:text-white transition-all active:scale-95"
                      title="Reset Zoom"
                    >
                      <Target size={20} strokeWidth={2.25} />
                    </button>
                    <div className="w-[1px] h-5 bg-white/20 mx-0.5" />
                    <a 
                      href={certificate.image} 
                      download={`${certificate.name.replace(/\s+/g, '-').toLowerCase()}-cert`}
                      className="p-2.5 rounded-full hover:bg-white/15 text-slate-100 hover:text-white transition-all active:scale-95"
                      title="Download"
                    >
                      <Download size={20} strokeWidth={2.25} />
                    </a>
                  </div>

                  {/* Image with Dynamic Zoom */}
                  <div 
                    className="relative transition-transform duration-300 ease-out mt-12"
                    style={{ transform: `scale(${zoomLevel})` }}
                  >
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="max-w-full h-auto rounded-lg shadow-2xl border border-white/10"
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : isPDF ? (
                <iframe
                  src={certificate.pdf}
                  className="w-full h-[60vh] rounded-lg border border-white/10"
                  title="Certificate PDF"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-12 text-center space-y-4">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <CheckCircle2 className="h-10 w-10 text-primary animate-pulse" />
                  </div>
                  <p className="text-muted-foreground italic">Certificate preview loading or unavailable...</p>
                </div>
              )}
            </div>

            {/* Footer / Additional Info */}
            <div className="p-6 border-t border-white/5 bg-white/5 space-y-4">
              {certificate.description && (
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  Note: {certificate.description}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href={certificate.image || certificate.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} />
                  View Original
                </a>
                <a 
                  href={certificate.image || certificate.pdf} 
                  download={`${certificate.name.replace(/\s+/g, '-').toLowerCase()}-cert`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-foreground text-xs font-bold hover:bg-white/20 transition-all"
                >
                  <Download size={14} />
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
