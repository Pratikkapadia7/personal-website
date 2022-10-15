import { blogDataSingular } from "../type/blogData.type";
import ImageConfig from "../utils/ImageConfig";

interface blogDataType {
  title: blogDataSingular;
  list: Array<blogDataSingular>;
}
const blogData: blogDataType = {
  title: {
    date: "23 Sept 2022",
    title: "Corezoid Architecture Interface",
    subTitle:
      "How do you initiate Corezoid and expose its endpoints to outside environment?",
    blogHref: "/",
    blogTags: [
      { text: "Design", blogTagKey: "PrimaryPurple" },
      { text: "Research", blogTagKey: "Indigo" },
      { text: "Architecture", blogTagKey: "BlueLight" },
    ],
    blogType: "title",
    imageData: {
      url: ImageConfig.COREZOID_WALLPAPER,
      altData: "Corezoid Wallpaper",
    },
  },
  list: [
    {
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
      },
    },
    {
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
      },
    },
    {
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
      },
    },
    {
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
      },
    },
    {
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
      },
    },
  ],
};
export default blogData;
