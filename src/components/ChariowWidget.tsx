import { useEffect, useId } from "react";

interface Props {
  productId: string;
}

export default function ChariowWidget({ productId }: Props) {
  const id = useId();

  useEffect(() => {
    if (!document.getElementById("chariow-script")) {
      const script = document.createElement("script");
      script.id = "chariow-script";
      script.src = "https://js.chariowcdn.com/v1/widget.min.js";
      script.async = true;
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://js.chariowcdn.com/v1/widget.min.css";
      document.head.appendChild(link);
    } else {
      (window as any).ChariowWidget?.init?.();
    }
  }, []);

  return (
    <div
      id={`chariow-widget-${id}`}
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