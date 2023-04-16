import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function ping(_: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${process.env.API_BASE_URL}/api/ping`);
    return res.status(200).end(response.data.message);
  } catch (error) {
    console.log("Ping API Error", error);
    return res.status(500).end("An error occurred:");
  }
}
