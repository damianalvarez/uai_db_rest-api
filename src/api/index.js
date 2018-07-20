import { version } from '../../package.json';
import { Router } from 'express';
import users from './users';
import queries from './queries';

export default ({ config, db }) => {
	let api = Router();

	api.use('/users', users({ config, db }));
	api.use('/query', queries({ config, db }));

	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}