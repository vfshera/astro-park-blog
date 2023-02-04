import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanity = sanityClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-02-01", // use current UTC date - see "specifying API version"!
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

//Quickly generate image urls from Sanity image records.
export function urlFor(source) {
  return builder.image(source);
}

export async function getPosts() {
  const posts = await sanity.fetch('*[_type == "post"]');
  return posts;
}
export async function getPost(postId) {
  // GROQ QUERY
  const [post] = await sanity.fetch(
    '*[_type == "post" && _id == $postId]{ ...,author->,categories[]->}',
    { postId }
  );

  return post;
}
