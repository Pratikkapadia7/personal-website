import React from "react";
import ImageConfig from "../../../utils/ImageConfig";
import { BlogTagsTypeProps } from "../../../type/blogTags.type";
import WidthControlledWrapper from "../../global/WidthControlledWrapper";
import TitleBlogComponent from "./Title Blog/TitleBlogComponent";
import BlogListingComponent from "./Blog List/BlogListingComponent";

interface MainBlogComponentProps {}

export interface blogDataSingular {
  date: string;
  title: string;
  subTitle: string;
  blogHref: string;
  blogType: "title" | "list";
  blogTags: Array<{ text: string; blogTagKey: keyof BlogTagsTypeProps }>;
  imageData: {
    url: string;
    altData: string;
  };
}

interface blogDataType {
  title: blogDataSingular;
  list: Array<blogDataSingular>;
}

const MainBlogComponent: React.FC<MainBlogComponentProps> = () => {
  const blogData: blogDataType = {
    title: {
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
      blogType: "title",
      imageData: {
        url: ImageConfig.MAIN_BLOG_WALLPAPER,
        altData: "Main Blog Wallpaper",
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
  return (
    <WidthControlledWrapper>
      <TitleBlogComponent blogData={blogData.title} />
      <BlogListingComponent blogData={blogData.list} />
    </WidthControlledWrapper>
  );
};
export default MainBlogComponent;
