
export interface Review {
   client: string,
      serviceType: string,
      date: string,
      address: string,
      shortDescription: string,
      evaluation: number,
      button: string,
      link: string,
}
 const reviews: Review[] = [
    {
      client: "Mathew",
      serviceType: "Home cleaning",
      date: "2024, 2025",
      address: "Surfers Paradise",
      shortDescription: "Excellent cleaning service.",
      evaluation: 5,
      button: "Get more...",
      link: "",
    },
    {
      client: "Orbit Travell Agency",
      serviceType: "Office cleaning",
      date: "2024, 2025",
      address: "Southport",
      shortDescription: "We are satified very much.",
      evaluation: 4,
      button: "Get more...",
      link: "",
    },
    {
      client: "Fiona & Greg",
      serviceType: "Home cleaning",
      date: "2025",
      address: "Paradise Point",
      shortDescription: "Great cleaning service.",
      evaluation: 5,
      button: "Get more...",
      link: "",
    },
    {
      client: "Anna / rental agent",
      serviceType: "Bond cleaning",
      date: "2025",
      address: "Helensvale",
      shortDescription: "Great cleaning service. Thank you.",
      evaluation: 5,
      button: "Get more...",
      link: "",
    },
    {
      client: "Mike",
      serviceType: "Office cleaning",
      date: "2024, 2025",
      address: "Bundall",
      shortDescription: "Just perfect. Thank you.",
      evaluation: 5,
      button: "Get more...",
      link: "",
    },
  ];

export async function GET() {

  return Response.json(reviews);
}
