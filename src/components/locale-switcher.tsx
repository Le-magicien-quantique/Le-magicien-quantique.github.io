"use client";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import ReactCountryFlag from "react-country-flag";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
const locales = ["fr", "en"] as const;
const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales });

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      setCurrentLocale(savedLocale);
    }
  });

  const onLocaleChange = (newLocale: string) => {
    setCurrentLocale(newLocale);
    localStorage.setItem("locale", newLocale);
    router.replace(pathname, { locale: newLocale });
  };

  const otherLocale = currentLocale === "fr" ? "en" : "fr";
  const otherLocaleFlag = otherLocale === "fr" ? "GB" : "FR";

  return (
    // <div>
    //   {['fr', 'en'].map((lang) => (
    //     <button
    //       key={lang}
    //       onClick={() => onLocaleChange(lang)}
    //       style={{ margin: '0 5px' }}
    //     >
    //       <ReactCountryFlag
    //         className='emojiFlag'
    //         style={{
    //             fontSize: '2em',
    //             lineHeight: '2em',
    //         }}
    //         countryCode={lang === 'en' ? 'GB' : 'FR'}
    //         svg
    //       />
    //     </button>
    //     ))}
    //   </div>
    <div>
      <button
        onClick={() => onLocaleChange(otherLocale)}
        style={{ margin: "0 5px" }}
      >
        <ReactCountryFlag
          className="emojiFlag"
          countryCode={otherLocaleFlag}
          style={{
            fontSize: "2em",
            lineHeight: "2em",
          }}
        />
      </button>
    </div>
  );
}
