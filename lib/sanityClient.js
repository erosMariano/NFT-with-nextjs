import sanityClient from "@sanity/client";

export const client = sanityClient({
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID_SANITY,
	dataset: "production",
	apiVersion: "2021-03-25",
	token:  process.env.NEXT_PUBLIC_TOKEN_SANITY,
	userCdn: true,
}); 
