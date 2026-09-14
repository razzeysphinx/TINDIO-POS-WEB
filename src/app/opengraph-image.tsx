import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt =
  "TINDIO — Sell simple. Grow smarter.";

export const size = socialImageSize;

export const contentType = socialImageContentType;

export default function OpenGraphImage() {
  return createSocialImage();
}
