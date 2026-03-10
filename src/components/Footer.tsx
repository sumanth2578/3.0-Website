import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-32 relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        <div className="flex items-center">
        <Image
        src="/3.0labs-logo.png"
        alt="3.0 Labs"
        width={110}
        height={40}
        className="object-contain"
        />
        </div>

        <div className="flex gap-8 text-sm text-gray-300">
          <a href="#">About us</a>
          <a href="#">Contact us</a>
          <a href="#">Services</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 mt-6 text-xs text-gray-400">
        ©2025 3.0 Labs. All Rights Reserved
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-40 pointer-events-none">

        <img
          src="/3.0 Labs.png"
          alt="3.0 Labs"
          className="w-[900px] max-w-none"
        />

      </div>

    </footer>
  );
}