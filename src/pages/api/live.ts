import { NextApiRequest, NextApiResponse } from 'next';
import http from '../../services/http';

const handler = async (_req: NextApiRequest, _res: NextApiResponse) => {
  await http.get('https://api.holotools.app/v1/live', { 'channel_id': '4' })
    .then((res: any) => {
      if(res.live.length > 0) {
        _res.status(200).json(res.live[0]);
      }
      else {
        _res.status(404).json({});
      }
    })
    .catch((err) => {
      _res.status(500).json(err);
    })
}

export default handler;
