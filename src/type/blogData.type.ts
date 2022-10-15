import { BlogTagsTypeProps } from "./blogTags.type";

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

type blogDataType = {
  title: blogDataSingular;
  list: Array<blogDataSingular>;
};
export default blogDataType;
