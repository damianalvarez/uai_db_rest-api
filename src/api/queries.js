import * as db from '../db'
import resource from 'resource-router-middleware';
import users from '../models/users';

export default ({ config, db }) => resource({

  /** POST **/ 
	create({ body }, res) {
    const { query } = body[0]
    db.get().query(query, (err, rows) => {
      if (err) console.error('error ', err)
      res.end(JSON.stringify(rows));
    })
	}
})