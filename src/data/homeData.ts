import {
  BsTwitterX,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsEnvelopeFill,
} from "react-icons/bs";

export const greetingText = "Hey there! I'm";
export const nameText = "Baihaqi Sidrotul";
export const typedStrings = [
  'Information Systems Student',
  'Backend Developer',
  'Web Developer',
];

export interface SocialMediaLink {
  name: string;
  icon: React.ComponentType;
  url: string;
}

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "Github",
    icon: BsGithub,
    url: "https://github.com/baihaqism",
  },
  {
    name: "Twitter",
    icon: BsTwitterX,
    url: "https://twitter.com/baihaqism",
  },
  {
    name: "Instagram",
    icon: BsInstagram,
    url: "https://instagram.com/baihaqism_",
  },
  {
    name: "LinkedIn",
    icon: BsLinkedin,
    url: "https://linkedin.com/in/baihaqism",
  },
  {
    name: "Email",
    icon: BsEnvelopeFill,
    url: "mailto:baihaqi.bsm@gmail.com",
  },
];

export const homeCard = {
  welcomeCard: {
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  }
};