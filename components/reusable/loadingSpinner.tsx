import React from "react";
import { LuLoaderCircle } from "react-icons/lu";
import { ImSpinner9 } from "react-icons/im";
import { PiSpinner } from "react-icons/pi";
import { ImSpinner } from "react-icons/im";
import { FaSpinner } from "react-icons/fa6";
import { PiSpinnerGap } from "react-icons/pi";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  variant?:
    | "default"
    | "loader"
    | "spinner9"
    | "spinner"
    | "imspinner"
    | "faspinner"
    | "spinnergap";
  className?: string;
  size?: number;
}

function LoadingSpinner({
  variant = "spinner9",
  className,
  size = 20,
}: LoadingSpinnerProps) {
  const iconClassName = cn(
    "animate-spin transition-all duration-500",
    className
  );
  const iconStyle = { fontSize: size };

  const iconComponents = {
    loader: <LuLoaderCircle className={iconClassName} style={iconStyle} />,
    spinner9: <ImSpinner9 className={iconClassName} style={iconStyle} />,
    spinner: <PiSpinner className={iconClassName} style={iconStyle} />,
    imspinner: <ImSpinner className={iconClassName} style={iconStyle} />,
    faspinner: <FaSpinner className={iconClassName} style={iconStyle} />,
    spinnergap: <PiSpinnerGap className={iconClassName} style={iconStyle} />,
  };

  // Default variant - div spinner
  if (variant === "default") {
    return (
      <div
        className={cn(
          "border-b-2 border-gray-200 animate-spin rounded-full",
          className
        )}
        style={{ width: size, height: size }}
      />
    );
  }

  // Return the selected icon variant
  return iconComponents[variant] || iconComponents.loader;
}

export default LoadingSpinner;
