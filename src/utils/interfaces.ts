export interface NavLinks {
  id: string;
  title: string;
}

export interface Features {
  id: string;
  icon: string;
  title: string;
  content: string;
}

export interface Feedback {
  id: string;
  content: string;
  name: string;
  title: string;
  img: string;
}

export interface Stats {
  id: string;
  title: string;
  value: string;
}

interface FooterLinksAdd {
  name: string;
  link: string;
}

export interface FooterLinks {
  title: string;
  links: FooterLinksAdd[];
}

export interface SocialMedia {
  id: string;
  icon: string;
  link: string;
}

export interface Clients {
  id: string;
  logo: string;
}

export interface Styles {
  boxWidth: string;
  heading2: string;
  paragraph: string;
  flexCenter: string;
  flexStart: string;
  paddingX: string;
  paddingY: string;
  padding: string;
  marginX: string;
  marginY: string;
}

export interface Layout {
  section: string;
  sectionReverse: string;
  sectionImgReverse: string;
  sectionImg: string;
  sectionInfo: string;
}
