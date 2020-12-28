import { NextApiRequest, NextApiResponse } from 'next';
import http from '../../services/http';

const handler = async (_req: NextApiRequest, _res: NextApiResponse) => {
  await http.get('https://yt5sbot.herokuapp.com')
    .then((res) => {
      _res.status(200).json(res);
    })
    .catch((err) => {
      _res.status(500).json(err);
    })
}

export default handler;
