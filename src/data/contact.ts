export const contactContent = {
  name: "Sunyeong Jeon",
  intro:
    "I'm open to entry-level web developer opportunities and collaborations. Feel free to reach out through any of the channels below.",
  email: "sun.jeon.dev@gmail.com",
  github: "https://github.com/SunyeongJ-dev",
  linkedin: "https://linkedin.com/in/sunyeong-jeon-74b8b5326",
  phone: "123-456-7826",
  location: "Vancouver, BC",
};

export const contactDetails = [
  {
    label: "Email",
    value: contactContent.email,
    href: `mailto:${contactContent.email}`,
  },
  {
    label: "Phone",
    value: contactContent.phone,
    href: `tel:${contactContent.phone.replace(/-/g, "")}`,
  },
  {
    label: "Location",
    value: contactContent.location,
    href: undefined,
  },
] as const;
