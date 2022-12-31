import { SITE } from "@data/config";

// set page title
export function setTitle(title: string) {
  return title === "" ? SITE.name : SITE.name + " - " + title;
}

//set page sescription
export function setDescription(desc: string) {
  return desc === "" ? SITE.description : desc;
}
