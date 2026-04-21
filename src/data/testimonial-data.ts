export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  linkedinUrl: string;
  thumbnailColor: string;
  image: string;
  transcript: string[];
  video: string;
  poster: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Gideon. L ODUKOGBE",
    role: "Founder",
    company: "Spot'D",
    poster: "/lanre.jfif",
    linkedinUrl: "https://www.linkedin.com/in/gideon-l-odukogbe-a8955a1ab/",
    image: "bg-[url('/lanre.jfif')] bg-cover bg-center",
    thumbnailColor: "from-green-500 to-teal-600",
    video: "lanre_testimonial.mp4",
    transcript: [
      "Hi. My name is Gideon oduko lanrewaju, and I'm the founder of Spot'D, and I have a huge privilege of working with Dave.",
      "And how do I explain him? To be honest, I think he's very trustworthy.",
      "You know, worked on the project from the beginning to the end or where we are currently. He has been deliberate. He has been consistent. He's very, you know, very exciting person.",
      "And generally, I would, you know, if I have the every privilege, I would definitely love to work with him even more.",
      "That's the very most important thing for many founders — having people that, irregardless of the situation, still show up consistently.",
      "So it's encouraging to see young men doing amazingly well at that age and also growing day in and day out.",
      "Finally, I believe it's someone that also knows what his role is and stays in that lane. I really like that.",
      "So, yeah, I think very much. So I can say Dave is a wonderful person. I love working with him, and I want to see much more we can accomplish together. Thank you so much.",
    ],
  },
  {
    id: 2,
    name: "Favour Aghandu",
    role: "Product Manager",
    company: "Spot'D",
    poster: "/favour.jfif",
    linkedinUrl: "https://www.linkedin.com/in/favour-aghandu/",
    image: "bg-[url('/favour2.jfif')] bg-cover bg-top",
    thumbnailColor: "from-orange-500 to-red-600",
    video: "/favour_testimonial.mp4",
    transcript: [
      "Hello. My name is Favour Aghandu. I am a project and Products Manager. I work with Dave at Spot'D as the project manager, and during the period of working together, Dave showed exceptional abilities.",
      "Dave is someone that works with time to a large extent, if he won't be able to deliver it at the agreed time, he lets you know, so you know how to adjust it and make proper plans. And as a project manager, that is a good one for me, because it helps with my planning and project schedule.",
      "Then, David is also someone that is open to learning. Yes, when it comes to things he's master of, he doesn't hold back to show his mastery and expertise in such things, but when it comes to things he needs to learn or upgrade. Yeah, he's open to learning. He accepts feedback and tries to implement those feedback as well.",
    ],
  },
  {
    id: 3,
    name: "Edidiong Joseph",
    role: "UI/UX Designer | UX Researcher",
    company: "KoboSmart",
    poster: "/eddy1.jpg",
    linkedinUrl: "https://www.linkedin.com/in/edidiongkalu/",
    image: "bg-[url('/eddy2.jpg')] bg-cover bg-top",
    thumbnailColor: "from-orange-500 to-red-600",
    video: "/edidiong.mp4",
    transcript: [
      "My name is Edidiong kalu, and I'm a UI UX designer.",
      "So, I've worked with David on a couple of projects. And as a designer, there are key details I look out for, especially ensuring that my designs come out really well across all screens. And David was able to do that.",
      "I think one thing that stands out for me with him is his attention to details. He's a very detailed person, and he's very easy to work with, so communication was very smooth between both of us.",
      "You know, he's very open to corrections or to criticism, whatever would just make work easier.",
      "He goes all out for whatever projects he's working on, and I think that's what made the entire process very smooth for us.",
      "So, I enjoyed working with him, and I always love to use him for my projects. If you need a front end developer who is very detailed and keeps to time and communicates properly, then David is your guy.",
    ],
  },
];
