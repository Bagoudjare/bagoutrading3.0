import { useEffect } from "react";

export default function ChariowWidget() {
  useEffect(() => {
    // Charger le CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://js.chariowcdn.com/v1/widget.min.css";
    document.head.appendChild(link);

    // Charger le JS
    const script = document.createElement("script");
    script.src = "https://js.chariowcdn.com/v1/widget.min.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      id="chariow-widget"
      data-product-id="prd_sbe22p9f"
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