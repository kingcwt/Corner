import avatarImg from "@assets/avatar.jpg";
import type { PostModel } from "@interfaces/post-model";

// index

export const title = "didmax";

export const description =
  "这是一个托管在 Cloudflare 上的个人博客，用于记录生活和技术笔记。";

export const avatar = avatarImg;

export const quote = "到底是什么样的结局 才能配的上一生的颠沛流离 ～";

export const links = [
  { url: "/", title: "🌐首页" },
  { url: "/tags", title: "🔖标签" },
  { url: "/archive", title: "🗂️归档" },
  { url: "/search", title: "🔍搜索" },
];

export const getPostLink = (post: PostModel) => `/posts/${post.data.abbrlink}`;
