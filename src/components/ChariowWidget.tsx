import { useEffect } from "react";

interface ChariowWidgetProps {
  productId: string;
}

export default function ChariowWidget({
  productId,
}: ChariowWidgetProps) {
  useEffect(() => {
    // Charger le CSS une seule fois
    if (!document.querySelector('link[href="https://js.chariowcdn.com/v1/widget.min.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://js.chariowcdn.com/v1/widget.min.css";
      document.head.appendChild(link);
    }

    // Charger le JS une seule fois
    if (!document.querySelector('script[src="https://js.chariowcdn.com/v1/widget.min.js"]')) {
      const script = document.createElement("script");
      script.src = "https://js.chariowcdn.com/v1/widget.min.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Si le script existe déjà, on relance le widget si nécessaire
      if ((window as any).ChariowWidget) {
        (window as any).ChariowWidget.init();
      }
    }
  }, []);

  return (
    <div
      className="chariow-widget"
      data-product-id={productId}
      data-store-domain="vhconuvm.mychariow.shop"
      data-style="tap"
      data-border-style="rounded"
      data-cta-width="xs"
      data-background-color="#FFFFFF"
      data-cta-animation="none"
      data-locale="fr"
      data-primary-color="#ffcc00"
    />
  );
}