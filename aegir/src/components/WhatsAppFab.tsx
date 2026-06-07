import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppFab() {
  const phone = "5493435032200";
  const text = encodeURIComponent("¡Hola!, vengo del sitio y quiero más info");
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Chatear por WhatsApp"
      className="
        fixed right-10 bottom-10 z-50
        inline-flex h-20 w-20 items-center justify-center
        rounded-full bg-green-500 text-white shadow-xl
        transition active:scale-95 hover:brightness-125
      "
      style={{
        right: "max(4rem, env(safe-area-inset-right, 0px))",
        bottom: "max(4rem, env(safe-area-inset-bottom, 0px))",
      }}
    >
    <SiWhatsapp size={80}/>
    </a>
  );
}
