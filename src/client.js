import sanityClient from "@sanity/client";

export default sanityClient({
    "projectId": "1ii05rm7",
    "dataset": "production",
  useCdn: true,
});