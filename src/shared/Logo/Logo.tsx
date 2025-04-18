import React from "react";
// import logoImg from "@/images/logo.svg";
// import logoLightImg from "@/images/logo-light.svg";
import logoImg from "@/images/HednorLogo.png";
import logoLightImg from "@/images/HednorLogo.png";

import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "flex-shrink-0",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}>
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <Image
          className={`block h-12 sm:h-16 w-auto ${
            imgLight ? "dark:hidden" : ""
          }`}
          src={img}
          alt="Logo"
          sizes="100px"
          priority
        />
      ) : (
        "Logo Here"
      )}
      {imgLight && (
        <Image
          className="hidden h-12 sm:h-16 w-auto dark:block"
          src={imgLight}
          alt="Logo-Light"
          sizes="100px"
          priority
        />
      )}
    </Link>
  );
};

export default Logo;
