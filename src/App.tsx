import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Partenaire from "./pages/Partenaire";
import PartenaireInscription from "./pages/PartenaireInscription";
import InitiationTrading from "./pages/InitiationTrading";
//import Analyses from "./pages/Analyses";
import { RefTracker } from "./components/RefTracker";
import { ScrollToTop } from "./components/ScrollToTop";
import { FloatingScrollToTop } from "./components/FloatingScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const triggerChariowClose = () => {
      const closeButton = document.querySelector(
        'button.cw-modal-close-button, div[class*="chariow"][style*="position: fixed"] button, div[id*="chariow"][style*="position: fixed"] button, div[id^="chariow-widget"] div div button, #chariow-widget div div button, [class*="chariow-close"], .chariow-close'
      ) as HTMLButtonElement | null;

      if (closeButton) {
        closeButton.click();
      } else {
        // Fallback: Remove modal elements directly if close button not found
        const modalWrappers = document.querySelectorAll('.cw-modal-wrapper, .cw-modal-overlay');
        modalWrappers.forEach((el) => el.remove());
      }
    };

    // MutationObserver to teleport any Chariow modal overlay & wrapper to document.body
    // This ensures position: fixed is always anchored to the visible screen viewport
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("cw-modal-wrapper") || node.classList.contains("cw-modal-overlay")) {
              if (node.parentElement && node.parentElement !== document.body) {
                document.body.appendChild(node);
              }
            } else {
              const nestedWrappers = node.querySelectorAll?.(".cw-modal-wrapper, .cw-modal-overlay");
              nestedWrappers?.forEach((wrapper) => {
                if (wrapper.parentElement && wrapper.parentElement !== document.body) {
                  document.body.appendChild(wrapper);
                }
              });
            }
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const handleOutsideClick = (e: MouseEvent) => {
      const modalContent = document.querySelector('.cw-modal-content, .cw-modal-wrapper');
      const overlay = document.querySelector('.cw-modal-overlay');
      const iframe = document.querySelector('iframe[src*="chariow"], iframe[id*="chariow"], .chariow-iframe');
      
      const target = e.target as HTMLElement;

      if (overlay && (target === overlay || overlay.contains(target))) {
        triggerChariowClose();
        return;
      }

      if (iframe && !iframe.contains(target) && (!modalContent || !modalContent.contains(target))) {
        // Check if click was on a button that opens the widget
        if (!target.closest?.('#chariow-widget, [id^="chariow-widget"], button.cw-button-base')) {
          triggerChariowClose();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        triggerChariowClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick, true);
    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("mousedown", handleOutsideClick, true);
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <FloatingScrollToTop />
            <RefTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/partenaire" element={<Partenaire />} />
              <Route path="/partenaire-inscription" element={<PartenaireInscription />} /> 
              <Route path="/initiation-trading" element={<InitiationTrading />} />
              {/* <Route path="/analyses" element={<Analyses />} /> */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
