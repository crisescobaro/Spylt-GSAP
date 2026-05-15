import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <footer className="footer-section">
      <Image src="/images/footer-dip.webp" alt="" width={3000} height={3000} className="w-full object-cover -translate-y-1" />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">#BEBERESPONSABLEMENTE</h1>
        </div>

        {isMobile ? (
          <Image src="/images/footer-drink.webp" alt="" width={3000} height={3000} className="absolute top-0 object-contain" />
        ) : (
          <video src="/videos/splash1.mp4" autoPlay playsInline muted preload="auto" className="absolute top-0 object-contain mix-blend-lighten" />
        )}

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>Sabores SPYLT</p>
            </div>
            <div>
              <p>Club del Trago</p>
              <p>Marketing Estudiantil</p>
              <p>Distribuidores Lácteos</p>
            </div>
            <div>
              <p>Empresa</p>
              <p>Contactos</p>
              <p>Charla Sabrosa</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>¡Obtén acceso anticipado exclusivo y mantente informado sobre actualizaciones de productos, eventos y más!</p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input type="email" placeholder="Introduce tu correo electrónico" className="w-full placeholder:font-sans placeholder:text-[#999999]" />
              <Image src="/images/arrow.svg" alt="arrow" width={70} height={70} />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>
            Clonado por <a href="https://ahmedragab.netlify.app" target="_blank">Ahmed Ragab</a> - Copyright © 2025 Spylt - Todos los derechos reservados
          </p>
          <div className="flex items-center gap-7">
            <p>Política de Privacidad</p>
            <p>Términos de Servicio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
