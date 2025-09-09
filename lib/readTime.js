import { toPlainText } from "@portabletext/react";

export default function getReadingTime(content) {
  const text = toPlainText(content);
  const words = text.trim().split(/\s+/).length;
  
  if (Math.ceil(words / 200) > 1) {
    return `${Math.ceil(words / 200)} mins read`;
  } else {
    return `${Math.ceil(words / 200)} min read`;
  }
}
