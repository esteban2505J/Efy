import React from "react";
import { ImWhatsapp, ImFacebook2 } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <>
      <section className="grid grid-cols-3 gap-x-5  justify-items-center bg-black sm:text-2xl text-[#E3A03F] ">
        <div className=" mt-3 mb-10 ">
          <h2 className="mb-3 mt-3 text-white">Contáctanos</h2>
          <div className="gap-y-4 grid ">
            <div className="hover:text-white">
              <Link
                to={"https://web.whatsapp.com/"}
                target="_blank"
                className="flex space-x-2 items-center"
              >
                <ImWhatsapp />
                <span className="text-sm">WhatsApp</span>
              </Link>
            </div>
            <div className="hover:text-white">
              <Link
                to={"https://www.facebook.com/"}
                target="_blank"
                className="flex space-x-2 items-center"
              >
                <ImFacebook2 />
                <span className="text-sm">Facebook</span>
              </Link>
            </div>
            <div className="hover:text-white">
              <Link
                to={"https://www.instagram.com/"}
                target="_blank"
                className="flex space-x-2 items-center"
              >
                <AiOutlineInstagram />
                <span className="text-sm">Instagram</span>
              </Link>
            </div>
            <div className="hover:text-white">
              <Link
                to={"https://mail.google.com/mail/u/0/#inbox"}
                target="_blank"
                className="flex space-x-2 items-center"
              >
                <CgMail />
                <span className="text-sm">Gmail</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-3 mb-10">
          <h2 className="mb-3 mt-3 text-white">Sobre nosotros</h2>
          <ul
            className="gap-y-4 grid text-sm
          "
          >
            <li className="hover:text-white">
              <Link to={"/"}>¿Quienes somos?</Link>
            </li>
            <li className="hover:text-white">
              <Link>¿En donde estamos ubicados?</Link>
            </li>
            <li className="hover:text-white">
              <Link>¿Cuales son nuestros productos?</Link>
            </li>
          </ul>
        </div>

        <div className=" mt-3 mb-10 ">
          <h2 className="mb-3 mt-3 text-white ">Legal y Privacidad</h2>
          <ul
            className="gap-y-4 grid text-sm 
          "
          >
            <li className="hover:text-white">
              <Link to={"/"}>Terminos y Condiciones</Link>
            </li>
            <li className="hover:text-white ">
              <Link>Politicas de Privacidad</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
