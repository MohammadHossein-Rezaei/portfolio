import { Mail, Github, Linkedin, PhoneCall } from "lucide-react";
import { useState } from "react";

const contacts = [
  {
    title: "Email",
    text: "Mohammadhossein.r423@gmail.com",
    icon: Mail,
    href: "mailto:Mohammadhossein.r423@gmail.com",
  },
  {
    title: "GitHub",
    text: "MohammadHossein-Rezaei",
    icon: Github,
    href: "https://github.com/MohammadHossein-Rezaei",
  },
  {
    title: "LinkedIn",
    text: "mohammad-rezaei423",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mohammad-rezaei423/",
  },
  {
    title: "Contact number",
    text: "0992 895 7247",
    icon: PhoneCall,
    copy: true,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section
      id="contact"
      className="grid justify-center items-center h-10/10   grid-rows-2[1fr ,2fr] items-center pt-14 pb-14 dark:bg-gray-900 "
    >
      <div>
        <h2 className="text-[#161616] dark:text-white  text-3xl md:text-4xl font-bold mb-8 text-center">
          Get in Touch
        </h2>
        <p className=" text-center text-[#636363] dark:text-white  text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map(({ title, text, icon: Icon, href, copy }) => {
          const content = (
            <>
              <div className="flex flex-col">
                <span className="text-black font-medium dark:text-white">
                  {title}
                </span>
                <span className="text-neutral-400 text-sm">{text}</span>
              </div>
              <Icon className="w-5 h-5 text-neutral-400" />
            </>
          );

          return copy ? (
            <button
              key={title}
              onClick={() => handleCopy(text)}
              className="
                flex items-center justify-between
                w-full h-16 px-4
                rounded-lg 
                border border-neutral-400
                
                shadow-sm
                transition
                hover:border-neutral-600 hover:bg-gray-100
                hover:shadow-md
                text-left
               
              "
            >
              {content}
            </button>
          ) : (
            <a
              key={title}
              href={href ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-between
                w-full h-16 px-4
                rounded-lg 
                border border-neutral-400
               
                shadow-sm
                transition
                hover:border-neutral-600 hover:bg-gray-100
                hover:shadow-md
                
              "
            >
              {content}
            </a>
          );
        })}
      </div>

      {copied && (
        <div className="fixed bottom-6 right-6 bg-neutral-800 text-white px-4 py-2 rounded-lg shadow-md text-sm transition">
          شماره تماس کپی شد
        </div>
      )}
    </section>
  );
}
