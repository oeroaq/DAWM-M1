import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';
import * as Product from '../products/resolvers';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allInventarios: (_) =>
			getRequest(URL, ''),
		inventarioById: async (_, { id }) => {
			const inventario = await generalRequest(`${URL}/${id}`, 'GET');
			console.log(inventario.producto)
			inventario.producto = await Product.default.Query.productById(_, { id: inventario.producto });
			return inventario;
		},
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
