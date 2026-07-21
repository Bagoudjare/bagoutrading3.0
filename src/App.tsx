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
import { RefTracker } from "./components/RefTracker";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      // Detect if Chariow checkout is currently active (iframe is in DOM)
      const iframe = document.querySelector(
        'iframe[src*="chariow"], iframe[id*="chariow"], .chariow-iframe'
      );

      if (iframe) {
        const target = e.target as HTMLElement;

        // Locate the close button for the Chariow checkout overlay
        const closeButton = document.querySelector(
          'div[id^="chariow-widget"] div div button, #chariow-widget div div button, button[class*="chariow-close"]'
        ) as HTMLButtonElement | null;

        if (closeButton) {
          // If the click is not on the close button itself, trigger the close action
          if (!closeButton.contains(target)) {
            closeButton.click();
          }
        }
      }
    };

    // Use capturing phase (true) to intercept the click before propagation is stopped
    document.addEventListener("mousedown", handleOutsideClick, true);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick, true);
    };
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <RefTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/partenaire" element={<Partenaire />} />
            <Route path="/partenaire-inscription" element={<PartenaireInscription />} /> 
            <Route path="/initiation-trading" element={<InitiationTrading />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
};

export default App;
