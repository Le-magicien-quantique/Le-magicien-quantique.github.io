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

  return (
    <>
    <p>La redirection automatique n&apos;a pas fonctionnée car Thomas est un mauvais programmeur... Mais pas d&apos;inquiétude ! Vous pouvez toujours cliquer <a href="/en">ici pour la version en anglais</a> et <a href="/fr">ici pour celle en français !</a></p>
    <p>The automatic redirection didn&apos;t work because Thomas is a bad programmer... But don&apos;t worry! You can always <a href="/en">click here for the English version</a> and <a href="/fr">here for the French one!</a></p>
    </>
  );
}
