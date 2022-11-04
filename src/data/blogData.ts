import { blogDataSingular } from "../type/blogData.type";
import ImageConfig from "../utils/ImageConfig";
const blogData: Array<blogDataSingular> = [
  {
    slug: "corezoid-integration",
    date: "23 Sept 2022",
    title: "Corezoid Architecture Interface",
    subTitle:
      "How do you initiate Corezoid and expose its endpoints to outside environment?",
    blogHref: "/corezoid-integration",
    blogTags: [
      { text: "Design", blogTagKey: "PrimaryPurple" },
      { text: "Research", blogTagKey: "Indigo" },
      { text: "Architecture", blogTagKey: "BlueLight" },
    ],
    blogType: "title",
    imageData: {
      url: ImageConfig.COREZOID_WALLPAPER,
      altData: "Corezoid Wallpaper",
      type: "LIGHT",
    },
  },
  {
    slug: "github-source",
    date: "3 Nov 2022",
    title: "Github Source",
    subTitle: "Where to find this project on GitHub.",
    blogHref: "/github-source",
    blogTags: [
      { text: "Design", blogTagKey: "PrimaryPurple" },
      { text: "Presentation", blogTagKey: "Pink" },
      { text: "Development", blogTagKey: "Rose" },
    ],
    blogType: "list",
    imageData: {
      url: ImageConfig.GITHUB_SOURCE_COVER_IMAGE,
      altData: "Github Source Cover Image",
      type: "DARK",
    },
    imageCourtesy: {
      name: "Yancy Min",
      url: "https://unsplash.com/@yancymin",
    },
  },
  {
    slug: "ux-review-presentations",
    date: "20 Jan 2022",
    title: "UX review presentations",
    subTitle:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    blogHref: "/",
    blogTags: [
      { text: "Design", blogTagKey: "PrimaryPurple" },
      { text: "Research", blogTagKey: "Indigo" },
      { text: "Presentation", blogTagKey: "Pink" },
    ],
    blogType: "list",
    imageData: {
      url: ImageConfig.MAIN_BLOG_WALLPAPER,
      altData: "Main Blog Wallpaper",
      type: "LIGHT",
    },
  },
];
export default blogData;
