"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    // Initialize the Tawk.to script
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/660231fca0c6737bd12499c1/1iflp9cf8";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null; // This component doesn't render any visible elements
}
