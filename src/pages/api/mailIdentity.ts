// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const staffList = [
  { name: "Stanbic Bank", value: "Stanbic" },
  { name: "Consolidated Bank Ghana (CBG)", value: "CBG" },
  { name: "Ghana Commercial Bank (GCB)", value: "GCB" },
  { name: "Societe Generale Ghana (SGG)", value: "SGG" },
  { name: "Stanbic Bank", value: "Stanbic" },
  { name: "Consolidated Bank Ghana (CBG)", value: "CBG" },
  { name: "Ghana Commercial Bank (GCB)", value: "GCB" },
  { name: "Societe Generale Ghana (SGG)", value: "SGG" },
  { name: "Stanbic Bank", value: "Stanbic" },
  { name: "Consolidated Bank Ghana (CBG)", value: "CBG" },
  { name: "Ghana Commercial Bank (GCB)", value: "GCB" },
  { name: "Societe Generale Ghana (SGG)", value: "SGG" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    const email = req?.body?.email;

    if (email) {
      //fetchData from db
      //loop through data
      ////select template for identity
      ////mail Identity to villagers
    }

    res.status(200).json({ message: "Identities revealed" });
  }
}
