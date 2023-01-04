const GHOST_CMS_DOMAIN = import.meta.env.GHOST_CMS_DOMAIN;
const GHOST_CMS_CONTENT_API_KEY = import.meta.env.GHOST_CMS_CONTENT_API_KEY;

function baseUrl(resource: string, includes?: string[]): string {
  let url = `${GHOST_CMS_DOMAIN}/ghost/api/content/${resource}/?key=${GHOST_CMS_CONTENT_API_KEY}`;

  if (includes) {
    url += `&include=${includes?.join(",")}`;
  }

  return url;
}

export async function ghostPosts() {
  const { posts } = await fetch(baseUrl("posts"))
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return posts;
}

export async function ghostPostByID(id: string) {
  const {
    posts: [post],
  } = await fetch(baseUrl(`posts/${id}`, ["authors", "tags"]))
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return post;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const mm = date.toLocaleString("default", {
    month: "short",
  });

  let dd = date.getDate();

  return `${dd} ${mm} ${date.getFullYear()}`;
}
