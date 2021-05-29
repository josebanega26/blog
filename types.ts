interface New {
  title: string;
  description: string;
  content: string;
  image?: string;
  publishedAt: string;
}

export interface RemoteNew extends New {
  url: string;
  source: {
    name: string;
    url: string;
  };
}
export interface LocalNew extends New {
  id: string;
  author: string;
}
