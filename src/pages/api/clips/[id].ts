import { NextApiRequest, NextApiResponse } from 'next';
import Firebase from '../../../services/firebase';

const handler = async (_req: NextApiRequest, _res: NextApiResponse) => {
  const { query } = _req;
  const firebase = new Firebase();

  await firebase.get('videos', <string>query.id)
    .then((res) => {
      if(res[0].data) {
        _res.status(200).json({ status: 200, ...res[0] });
      }
      else {
        _res.status(404).json({ status: 404, message: 'Document not found.' });
      }
    })
    .catch((err) => {
      _res.status(500).json(err);
    });
}

export default handler;
