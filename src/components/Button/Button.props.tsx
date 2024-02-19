import { DetailedHTMLProps, ReactNode } from "react";
export interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  appearance: "white" | "pink";
  href?: string;
}
