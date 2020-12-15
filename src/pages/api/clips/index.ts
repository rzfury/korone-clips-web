import { NextApiRequest, NextApiResponse } from 'next';
import Firebase from '../../../services/firebase';

const handler = async (_req: NextApiRequest, _res: NextApiResponse) => {
  const firebase = new Firebase();

  firebase.getFiles('video')
    .then((res) => {
      _res.status(200).json(res);
    })
    .catch((err) => {
      _res.status(500).json(err);
    })
}

export default handler;
