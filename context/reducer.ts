import { appTypes, AppActions } from "./type";
import { LocalNew } from "../types";

export const initialState = {
  localPosts: [
    {
      title:
        "Australia Post Cartier watch scandal report into Christine Holgate’s controversial dismissal",
      description:
        "A Senate committee has been looking at what led to Christine Holgate being stood down over the gifting of luxury watches worth $20,000.",
      content:
        "A report set to be released is expected to shed light on the circumstances surrounding the decision to stand down former Australia Post boss Christine Holgate.\nA Senate committee has been looking at what led to the ministerial direction to the chair ... [1270 chars]",
      image:
        "https://images.7news.com.au/publication/C-2924040/faa9f58e2cf78ff2ef771eedf35bf684f76d9e24-16x9-x0y0w1920h1080.jpg?imwidth=1200",
      publishedAt: "2021-05-24T17:34:41Z",
      id:'11'
    },
    {
    title:
      "As Nepal PM Oli mangles constitution & woos Modi, India changes track again, watches silently",
    description:
      "It’s no longer clear whether New Delhi is trying to influence Kathmandu or whether Oli is manipulating the Indian leadership.",
    content:
      "Text Size: A- A+\nThis week as the Narendra Modi government celebrates seven years in power, the biggest change in its foreign policy has not been with the US or Pakistan or Bangladesh or China – but Nepal.\nWhat was once a close neighbour to which Pri... [7137 chars]",
    url: "https://theprint.in/opinion/global-print/as-nepal-pm-oli-mangles-constitution-woos-modi-india-changes-track-again-watches-silently/664904/",
    image:
      "https://static.theprint.in/wp-content/uploads/2020/09/Untitled-design-2020-09-03T223022.573.jpg",
    publishedAt: "2021-05-25T07:32:03Z",
    id: '12',
  },
  ] as LocalNew[],
};

type PostState = typeof initialState;

export const postReducer = (state: PostState, action: AppActions) => {
  switch (action.type) {
    case appTypes.CREATE:
      return {
        ...state,
        localPosts: [...state.localPosts, action.payload],
      };
    case appTypes.DELETE:
      return {
        ...state,
        localPosts: [
          ...state.localPosts.filter((post) => post.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};
