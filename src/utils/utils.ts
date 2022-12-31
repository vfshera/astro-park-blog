import { SITE } from "@data/config";

// set page title
export function setTitle(title: string) {
  return title === "" ? SITE.name : title + " - " + SITE.name;
}

//set page sescription
export function setDescription(desc: string) {
  return desc === "" ? SITE.description : desc;
}

//Slugify from : https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
export function slugify(text: string): string {
  const a =
    "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
  const b =
    "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(p, (c) => b.charAt(a.indexOf(c)))
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
