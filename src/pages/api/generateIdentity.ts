// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectMongo, CloseConnection } from "../../utils/connectMongo";
import User from "../../models/User";

type Data = {
  message: string;
  status: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    if (req.method === "GET") {
      await ConnectMongo();

      const registered = await User.find().exec();
      console.log("exisiting user", registered.length, registered);

      const villagers = [];

      for (let index = 0; index < registered.length; index++) {
        const element = registered[index];
        const wolf = index % 7;
        if (index === 3) {
          element.role = "Chief Priest";
          element.caption = "Doom on the Land";
          element.description = "The Chief Priest is Dead";
        } else if (index === 8) {
          element.role = "Doctor";
          element.caption = "Who will save us?";
          element.description = "The Doctor is Dead";
        } else if (index === 1) {
          element.role = "Romeo";
          element.caption = "Romeo is Dead";
          element.description = "Love is to suffer, to suffer is to suffer";
        } else if (index === 10) {
          element.role = "Juliet";
          element.caption = "Juliet is Dead";
          element.description = "I shall transcede realms to be with my love";
        } else if (wolf === 0) {
          element.role = "Wolf";
          element.caption = "Aluta Continua, Victoria Ascerta";
          element.description = "Succeded in killing a wolf this time";
        } else {
          element.role = "Innocent";
          element.caption = "Bleeding Land";
          element.description = "Another innocent villager is dead";
        }

        villagers.push(element);
      }

      console.log("villagers", villagers);
      await User.bulkSave(villagers);

      await CloseConnection();
      res.status(200).json({ status: "Success", message: `Identities generated for ${villagers.length} players ` });
    } else {
      throw new Error("wrong Method");
    }
  } catch (error: any) {
    await CloseConnection();
    return res.status(400).json({ status: "Failed", message: error?.message ?? `Something went wrong` });
  }
}
