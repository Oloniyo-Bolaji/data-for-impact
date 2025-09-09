import dynamic from "next/dynamic";
import "./globals.css";
import localFont from "next/font/local";
const Navbar = dynamic(() => import("@/components/Navbar"));
//const Footer = dynamic(() => import("@/components/Footer"));


const montserrat = localFont({
  src: [
    {
      path: "../fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Data for Impact -...touching lives we may never meet",
  icons: {
    icon: "/favicon.png",
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Data for Impact -...touching lives we may never meet</title>
        <meta
          name="description"
          content="Learn more about our mission, vision, and team."
        />
      </head>
      <body className={`${montserrat.className}`}>
        <Navbar />
        <div className="mt-[70px]">{children}</div>
      </body>
    </html>
  );
}
