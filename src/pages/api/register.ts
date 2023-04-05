// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectMongo, CloseConnection } from "../../utils/connectMongo";
import User from "../../models/User";

type Data = {
  status: string;
  message: string;
};

const staffList = [
  { name: "Abolade", value: "abolade@fluna.co" },
  { name: "Amani", value: "amani@fluna.co" },
  { name: "Ayomide", value: "ayomide@fluna.co" },
  { name: "Emmanuel", value: "emmanuel@fluna.co" },
  { name: "Bukola", value: "bukola@fluna.co" },
  { name: "Chidinma", value: "chidinma@fluna.co" },
  { name: "David", value: "david@fluna.co" },
  { name: "Davido", value: "david_ofosu-dorte@fluna.co" },
  { name: "Chika", value: "chika@fluna.co" },
  { name: "Glory", value: "glory@fluna.co" },
  { name: "Hermann", value: "hermann@fluna.co" },
  { name: "Ima", value: "ima@fluna.co" },
  { name: "Koye", value: "koye@fluna.co" },
  { name: "Kuorkor", value: "kuorkor@fluna.co" },
  { name: "Lauren", value: "lauren@fluna.co" },
  { name: "Martins", value: "martins@fluna.co" },
  { name: "Meg", value: "meg@fluna.co" },
  { name: "Michelle", value: "michelle@fluna.co" },
  { name: "Miguel", value: "miguel@fluna.co" },
  { name: "Morenike", value: "morenike@fluna.co" },
  { name: "Mide", value: "mide@fluna.co" },
  { name: "Miracle", value: "miracle@fluna.co" },
  { name: "Austine", value: "austine@fluna.co" },
  { name: "Olu", value: "olu@fluna.co" },
  { name: "Oludunsin", value: "oludunsin@fluna.co" },
  { name: "Femi", value: "femi@fluna.co" },
  { name: "Kemi", value: "kemi@fluna.co" },
  { name: "Ojo", value: "oluwasetemi@fluna.co" },
  { name: "Pelumi", value: "pelumi@fluna.co" },
  { name: "Sade", value: "sade@fluna.co" },
  { name: "Shedrack", value: "Shedrack@fluna.co" },
  { name: "Tomiwa", value: "tomiwa@fluna.co" },
  { name: "Uchenna", value: "uchenna@fluna.co" },
  { name: "Yadel", value: "yadel@fluna.co" },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    if (req.method === "POST") {
      const email = req?.body?.email;

      if (email) {
        console.log({ email });

        await ConnectMongo();

        const existingUser = await User.findOne({ email: email }).exec();
        console.log("exisiting user", existingUser);

        if (existingUser) {
          throw new Error("Player already registered");
        }

        const name = staffList.find((element) => element.value === email)?.name;

        let user = new User({
          name: name,
          email: email,
        });

        await user.save();

        await CloseConnection();
        return res.status(201).json({ status: "Success", message: `${name} Registered Successfully` });
      } else {
        throw new Error("No email found");
      }
    } else {
      throw new Error("wrong Method");
    }
  } catch (error: any) {
    await CloseConnection();
    return res.status(400).json({ status: "Failed", message: error?.message ?? `Something went wrong` });
  }
}
