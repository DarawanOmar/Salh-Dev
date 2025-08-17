"use client";
import React from "react";
import { AlertTriangle, LogOutIcon, LucideLoaderCircle } from "lucide-react";
import { logout } from "@/lib/utils/cookies";
import Image from "next/image";

function ModalLogoutPage() {
  const [pendding, setPending] = React.useTransition();
  const handleLogout = () => {
    setPending(() => {
      logout();
    });
  };
  return (
    <div className="fixed inset-0 bg-background bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white-background/10 rounded-2xl shadow-2xl max-w-md w-full max-sm:mx-0 mx-4 overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 text-center">
          {" "}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white-background bg-opacity-20 rounded-full mb-4">
            <Image
              src={"/avana.jpg"}
              alt="Avana Soft Logo"
              width={64}
              height={64}
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          <div dir="ltr" className="flex justify-center items-center relative">
            <div className="absolute top-0 left-12   flex items-center justify-center">
              <StrokeTextAnimation />
            </div>{" "}
          </div>
          <h2 className="max-sm:text-base text-2xl mt-14 font-bold text-white  mb-2">
            Session Expired
          </h2>
        </div>

        {/* Content */}
        <div className="max-sm:p-3 p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
          </div>

          <h3 className="max-sm:text-base text-xl font-semibold text-foreground mb-4">
            Your Session is Being Expired
          </h3>

          <p className="max-sm:text-sm text-muted-foreground mb-8 leading-relaxed">
            For your security, your session has timed out. You must log in again
            to continue using the application.
          </p>

          {/* Logout Button */}
          <button
            type="button"
            onClick={handleLogout}
            className="relative w-full bg-gradient-to-r from-blue-700 to-blue-900  text-white tracking-normal hover:tracking-widest transition-all duration-300 py-4 px-6 rounded-xl cursor-pointer"
          >
            <div className="flex items-center justify-center space-x-3">
              {pendding ? (
                <LucideLoaderCircle className="animate-spin transition-all duration-500" />
              ) : (
                <LogOutIcon height={18} />
              )}
              <span className="max-sm:text-sm">Logout</span>
            </div>
          </button>

          {/* Additional info */}
          <p className="max-sm:text-xs text-sm text-muted-foreground mt-4">
            This helps keep your account secure
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-red-200 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-200 to-pink-200 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>
      </div>
    </div>
  );
}

export default ModalLogoutPage;

const StrokeTextAnimation = () => {
  return (
    <svg
      height="50"
      width="%100"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .stroke-text {
          fill: none;
          stroke: #fff;
          stroke-width: 1;
          font-size: 48px;
          font-family: Arial, sans-serif;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 16s ease forwards;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      <text x="50" y="70" className="stroke-text font-bold text-primary">
        Powered By Avana Soft
      </text>
    </svg>
  );
};
