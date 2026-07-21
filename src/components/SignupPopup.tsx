import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import supabase from "@/utils/supabase";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  first_name: z.string().trim().min(1, "Prénom requis").max(50),
  last_name: z.string().trim().min(1, "Nom requis").max(50),
  email: z.string().trim().email("Email invalide").max(255),
});

const STORAGE_KEY = "bt3:signupPopup:v1";

export const SignupPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "" });

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {}
    const t = setTimeout(() => setOpen(true), 30000);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setOpen(false);
    try { localStorage.setItem(STORAGE_KEY, "dismissed"); } catch {}
  };

  const handleSubmit = async () => {
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("initiation_signups").insert({
      first_name: parsed.data.first_name,
      last_name: parsed.data.last_name,
      email: parsed.data.email,
    });
    setLoading(false);
    if (error) {
      toast.error("Erreur lors de l'inscription");
      return;
    }
    try { localStorage.setItem(STORAGE_KEY, "submitted"); } catch {}
    toast.success("Merci pour votre inscription !");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? setOpen(true) : handleClose())}>
      <DialogContent className="sm:max-w-md bg-card border-primary/30">
        <DialogHeader>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Gift className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold">Rejoignez la communauté BT3.0</DialogTitle>
          <DialogDescription>
            Inscrivez-vous pour recevoir nos ressources exclusives, la formation d'initiation gratuite et nos alertes trading.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2">
          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder="Prénom"
              value={form.first_name}
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
              maxLength={50}
            />
            <Input
              placeholder="Nom"
              value={form.last_name}
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              maxLength={50}
            />
          </div>
          <Input
            type="email"
            placeholder="Adresse email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            maxLength={255}
          />
        </div>

        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={handleClose}>Plus tard</Button>
          <Button onClick={handleSubmit} disabled={loading} className="bg-primary hover:bg-primary/90">
            {loading ? "Envoi..." : "Je m'inscris"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
