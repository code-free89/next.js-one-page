import Head from "next/head";
import HeroSection from "../components/landing/hero";
import LastseenSection from "../components/landing/lastseen";
import NavBar from "../components/NavBar";
import AboutSection from "../components/landing/about";
import WorkSection from "../components/landing/work";
import IngredientSection from "../components/landing/ingredient";
import RevolutionSection from "../components/landing/revolution";
import ReviewSection from "../components/landing/reviewsection";
import FAQSection from "../components/landing/faq";
import InformationSection from "../components/landing/information";
import PurchaseSection from "../components/landing/purchase";
import Footer from "../components/Footer";
import { Transition } from "@headlessui/react";
import { useEffect, useState, useRef } from "react";
import { ArrowNarrowUpIcon } from "@heroicons/react/outline";

export default function Home() {
  const [curPos, setcurPos] = useState(0);
  const aboutref = useRef(null);
  const howworksref = useRef(null);
  const ingredientsref = useRef(null);
  const reviewsref = useRef(null);
  const faqref = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    setcurPos(window.pageYOffset);
  };

  const scrollToSection = (e) => {
    let target = e.target.getAttribute("href");
    console.log(aboutref);
    switch (target) {
      case "about":
        window.scrollTo(0, aboutref.current.offsetTop);
        setcurPos(aboutref.current.offsetTop);
        break;
      case "howworks":
        window.scrollTo(0, howworksref.current.offsetTop);
        setcurPos(howworksref.current.offsetTop);
        break;
      case "ingredients":
        window.scrollTo(0, ingredientsref.current.offsetTop);
        setcurPos(ingredientsref.current.offsetTop);
        break;
      case "reviews":
        window.scrollTo(0, reviewsref.current.offsetTop);
        setcurPos(reviewsref.current.offsetTop);
        break;
      case "faq":
        window.scrollTo(0, faqref.current.offsetTop);
        setcurPos(faqref.current.offsetTop);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Head>
        <title>Sales Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="assets/images/about/lpg-neverJunkImg.jpg" as="image" />
        <link rel="preload" href="assets/images/about/lpg-perfectCombo.jpg" as="image" />
      </Head>

      <NavBar onClick={scrollToSection} />

      <HeroSection />
 
      <section id="lastseen" className="bg-gray-50 w-full mt-5">
        <LastseenSection className="bg-gray-50" />
      </section>

      <section id="about" ref={aboutref}>
        <AboutSection />
      </section>

      <section id="howworks" ref={howworksref}>
        <WorkSection />
      </section>

      <section id="ingredients" className="bg-yellow-light" ref={ingredientsref}>
        <IngredientSection />
      </section>

      <section className="">
        <RevolutionSection />
      </section>

      <section id="reviews" ref={reviewsref} className="max-w-1920 mx-auto px-8">
        <ReviewSection />
      </section>

      <section id="faq" className="bg-yellow-light sm:mt-0 mt-5" ref={faqref}>
        <FAQSection />
      </section>

      <InformationSection />
{/*
      <section id="purchase" className="bg-yellow-light">
        <PurchaseSection />
      </section>

      <Footer />

      <Transition
        show={curPos > 100}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed bottom-8 right-8 w-12 h-12 rounded-md bg-gray-600 text-white cursor-pointer hover:shadow-md flex items-center justify-center transition duration-500 ease-in-out hover:bg-black"
          onClick={() => {
            window.scrollTo(0, 0);
            setcurPos(0);
          }}
        >
          <ArrowNarrowUpIcon className="w-6 h-6" />
        </div>
      </Transition> */}
    </div>
  );
}
