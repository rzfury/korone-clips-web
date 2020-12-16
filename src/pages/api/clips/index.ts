import { NextApiRequest, NextApiResponse } from 'next';
import Firebase from '../../../services/firebase';

const handler = async (_req: NextApiRequest, _res: NextApiResponse) => {
  const { query }: any = _req;
  const firebase = new Firebase();

  const limit = query.page ? query.page * 4 : 10000;
  let total = 0;
  
  await firebase.get('videos')
    .then((res: any) => {
      if(res.length > 0) total = res.length;
    })
    .catch((err) => {
      _res.status(500).json(err);
    });

  await firebase.getSortLimit('videos', 'uploadDate', limit, query.sort ? query.sort : 'desc')
    .then((res) => {
      _res.status(200).json({ total, data: res });
    })
    .catch((err) => {
      _res.status(500).json(err);
    });
}

export default handler;
