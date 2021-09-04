import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allInventarios: (_) =>
			getRequest(URL, ''),
		inventarioById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createInventario: (_, { inventario }) =>
			generalRequest(`${URL}/`, 'POST', inventario),
		updateInventario: (_, { id, inventario }) =>
			generalRequest(`${URL}/${id}`, 'PUT', inventario),
		deleteInventario: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
