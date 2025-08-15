import { useState } from "react";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envoi vers Formspree
      const response = await fetch("https://formspree.io/f/mzzgrwrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Je vous répondrai dans les plus brefs délais.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Réessayez plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "#", color: "from-blue-600 to-blue-800" },
    { name: "Telegram", icon: "💬", url: "#", color: "from-blue-400 to-blue-600" },
    { name: "WhatsApp", icon: "📱", url: "#", color: "from-green-400 to-green-600" },
    { name: "YouTube", icon: "📺", url: "#", color: "from-red-400 to-red-600" }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactez-moi
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une question ? Un projet d'automatisation ? N'hésitez pas à me contacter
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600/30">
            <div className="flex items-center space-x-2 mb-6">
              <MessageSquare className="h-6 w-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Envoyez-moi un message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200 resize-none"
                  placeholder="Décrivez votre projet ou votre question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? "Envoi en cours..." : "Envoyer le message"}</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600/30">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">contact@tradingpro.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Téléphone</h4>
                    <p className="text-gray-300">+33 6 12 34 56 78</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Localisation</h4>
                    <p className="text-gray-300">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-600/30">
              <h3 className="text-2xl font-bold text-white mb-6">Suivez-moi</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`bg-gradient-to-r ${social.color} p-4 rounded-lg text-white font-semibold hover:transform hover:scale-105 transition-all duration-300 text-center group`}
                  >
                    <div className="text-2xl mb-2 group-hover:animate-bounce">{social.icon}</div>
                    <div className="text-sm">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
