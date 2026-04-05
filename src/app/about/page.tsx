import AboutContainer from "@/components/container/about";
import { metaObject } from "@/config/site.config";

export const metadata = metaObject(
  "About",
  {
    title: "About David Kalu — Frontend Engineer",
    description:
      "Work experience, education, and technologies used by David Kalu, a Frontend Engineer based in Nigeria.",
    url: "https://kaludavid.vercel.app//about",
    siteName: "David Kalu",
    images: [{ url: "/david.jpg", width: 1200, height: 630 }],
    locale: "en_NG",
    type: "profile",
  },
  "Work experience, education, and more about David Kalu — Frontend Engineer.",
);

const About = () => {
  return <AboutContainer />;
};

export default About;
