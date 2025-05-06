"use client";
import useLenis from "@/hooks/useLenis";
import { useEffect } from "react";

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
    useLenis(); // Call the hook directly in the component body

    return <>{children}</>;
}