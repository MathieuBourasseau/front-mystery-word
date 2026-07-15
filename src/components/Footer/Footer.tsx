import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className="flex flex-col items-center gap-6 text-sm text-white font-bold cursor-pointer md:text-base">
           <p className="text-center">2026 - Tous droits réservés Mathieu Bourasseau</p>
           <div className="flex gap-4">
            <a href="https://github.com/MathieuBourasseau" className="cursor-pointer" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mathieu-bourasseau/" className="cursor-pointer" target="_blank"><FaLinkedin /></a>
           </div>
        </footer>
    )

}