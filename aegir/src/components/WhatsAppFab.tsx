import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppFab() {
  const phone = "5493435032200";
  const text = encodeURIComponent("Hola 👋, vengo del sitio y quiero más info");
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Chatear por WhatsApp"
      className="
        fixed right-4 bottom-4 z-50
        inline-flex h-14 w-14 items-center justify-center
        rounded-full bg-green-500 text-white shadow-xl
        transition active:scale-95 hover:brightness-125
      "
      style={{
        right: "max(1rem, env(safe-area-inset-right, 0px))",
        bottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
    <SiWhatsapp size={60}/>
    </a>
  );
}
