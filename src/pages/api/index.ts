import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, _res: NextApiResponse) => {
  res.status(200).json({ "ping": "pong" });
}

export default handler;
