import { Experience } from "@/components/features/experience";
import { Hero } from "@/components/features/hero";
import Head from "next/head"
export default function Home() {
  return (
    <>
    <Head>
    <meta name="google-site-verification" content="9J8OuOYDw4OBnvBMCDnTYXnn2pECJ_oytIMKxtdpNFI" />
    </Head>
      <Hero />
      <Experience />
    </>
  );
}


