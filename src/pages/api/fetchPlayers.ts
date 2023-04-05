// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectMongo, CloseConnection } from "../../utils/connectMongo";
import User from "../../models/User";

type Data = {
  message: string;
  status: string;
  data?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    if (req.method === "GET") {
      await ConnectMongo();

      const players = await User.find().exec();
      console.log("exisiting user", players.length, players);

      await CloseConnection();
      res.status(200).json({ status: "Success", data: players, message: `Players fetched for ${players.length} players ` });
    } else {
      throw new Error("wrong Method");
    }
  } catch (error: any) {
    await CloseConnection();
    return res.status(400).json({ status: "Failed", message: error?.message ?? `Something went wrong` });
  }
}
