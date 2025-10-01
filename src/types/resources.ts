export type Newsletter = {
  id: number;
  name: string;
  url: string;
  description: string;
  image: string;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  url: string;
  description: string;
  image: string;
  category: string;
};

export type CodingResource = {
  id: number;
  title: string;
  url: string;
  description: string;
  type: 'podcast' | 'video' | 'article';
  source: string;
  date?: string;
  duration?: string;
  tags?: string[];
};
