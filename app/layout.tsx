import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://kbdev.run";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "kbdev – Kamil B. (Klubuntu) | Portfolio Web Developera",
    template: "%s | kbdev",
  },
  description: "Portfolio Kamila B. (Klubuntu) – frontend developer specjalizujący się w React, Next.js, Tailwind CSS. Tworzę szybkie, nowoczesne strony internetowe i aplikacje webowe.",
  keywords: ["portfolio", "frontend developer", "React", "Next.js", "Tailwind CSS", "web developer", "Klubuntu", "Kamil B", "JavaScript", "TypeScript"],
  authors: [{ name: "Kamil B. (Klubuntu)", url: baseUrl }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "kbdev",
    locale: "pl_PL",
    alternateLocale: "en_US",
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#0a0a0a",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  other: {
    "application-name": "kbdev",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kamil B. (Klubuntu)",
              url: baseUrl,
              description: "Frontend developer tworzący szybkie, nowoczesne strony internetowe i aplikacje webowe z naciskiem na wydajność, SEO oraz długoterminową łatwość utrzymania.",
              knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Rust", "Python", "PHP"],
              sameAs: [
                "https://github.com/Klubuntu",
                "https://github.com/Puri-Devs",
                "https://github.com/open-itvt",
              ],
            }),
          }}
        />
        <script dangerouslySetInnerHTML={{__html: `
          if (typeof Object.assign !== 'function') {
            Object.defineProperty(Object, "assign", {
              value: function assign(target, varArgs) {
                if (target == null) throw new TypeError('Cannot convert undefined or null to object');
                var to = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                  var nextSource = arguments[index];
                  if (nextSource != null) {
                    for (var nextKey in nextSource) {
                      if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                      }
                    }
                  }
                }
                return to;
              },
              writable: true, configurable: true
            });
          }
          if (!Array.from) {
            Array.from = (function() {
              var toStr = Object.prototype.toString;
              var isCallable = function(fn) { return typeof fn === 'function' || toStr.call(fn) === '[object Function]'; };
              var toInteger = function(value) { var number = Number(value); if (isNaN(number)) return 0; if (number === 0 || !isFinite(number)) return number; return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number)); };
              var maxSafeInteger = Math.pow(2, 53) - 1;
              var toLength = function(value) { var len = toInteger(value); return Math.min(Math.max(len, 0), maxSafeInteger); };
              return function from(arrayLike) {
                var C = this; var items = Object(arrayLike); if (arrayLike == null) throw new TypeError('Array.from requires an array-like object');
                var mapFn = arguments.length > 1 ? arguments[1] : void undefined; var T;
                if (typeof mapFn !== 'undefined') { if (!isCallable(mapFn)) throw new TypeError('Array.from: when provided, the second argument must be a function'); if (arguments.length > 2) T = arguments[2]; }
                var len = toLength(items.length); var A = isCallable(C) ? Object(new C(len)) : new Array(len); var k = 0; var kValue;
                while (k < len) { kValue = items[k]; if (mapFn) { A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k); } else { A[k] = kValue; } k += 1; }
                A.length = len; return A;
              };
            }());
          }
          (function() {
            var lastTime = 0; var vendors = ['ms', 'moz', 'webkit', 'o'];
            for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
              window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
              window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
            }
            if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback) { var currTime = new Date().getTime(); var timeToCall = Math.max(0, 16 - (currTime - lastTime)); var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall); lastTime = currTime + timeToCall; return id; };
            if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) { clearTimeout(id); };
          }());
        `}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ transition: 'opacity 0.3s ease-in-out' }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
