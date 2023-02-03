import Airtable from "airtable";

export const airtable = new Airtable({
  apiKey: import.meta.env.AIRTABLE_API_KEY,
});
