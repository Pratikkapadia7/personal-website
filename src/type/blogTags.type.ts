export interface ColorType {
  color: string;
  backgroundColor: string;
}
export interface BlogTagsTypeProps {
  PrimaryPurple: ColorType;
  Indigo: ColorType;
  Pink: ColorType;
  BlueLight: ColorType;
  GrayBlue: ColorType;
  Orange: ColorType;
  Rose: ColorType;
  SuccessGreen: ColorType;
}

const BlogTagsType: BlogTagsTypeProps = {
  PrimaryPurple: {
    color: "#6941C6",
    backgroundColor: "#F9F5FF",
  },
  Indigo: {
    color: "#3538CD",
    backgroundColor: "#EEF4FF",
  },
  Pink: {
    color: "#C11574",
    backgroundColor: "#FDF2FA",
  },
  BlueLight: {
    color: "#026AA2",
    backgroundColor: "#F0F9FF",
  },
  Rose: {
    color: "#C01048",
    backgroundColor: "#FFF1F3",
  },
  SuccessGreen: {
    color: "#027A48",
    backgroundColor: "#ECFDF3",
  },
  Orange: {
    color: "#B93815",
    backgroundColor: "#FFF4ED",
  },
  GrayBlue: {
    color: "#363F72",
    backgroundColor: "#F8F9FC",
  },
};
export default BlogTagsType;
