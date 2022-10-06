type navLink = {
  name: string;
  href: string;
  src?: string;
};

type socialLink = {
  name: string;
  href: string;
  icon: ComponentType;
};

type Post = {
  postPath: string;
  meta: {
    title: string;
    date: string;
    updated: string;
    categories: string[];
    coverImage: string;
    coverWidth: number;
    coverHeight: number;
    excerpt: string;
    preview: string;
  };
};
