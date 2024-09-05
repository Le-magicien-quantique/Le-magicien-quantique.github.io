"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Set the locale and redirect on the client side
    window.localStorage.setItem("locale", "en");
    router.push("/en");
  }, [router]);

  return null;
}
