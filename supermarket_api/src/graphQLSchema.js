import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	categoryMutations,
	categoryQueries,
	categoryTypeDef
} from './supermarket/categories/typeDefs';

import categoryResolvers from './supermarket/categories/resolvers';
import productResolvers from './supermarket/products/resolvers';
import inventarioResolvers from './supermarket/inventarios/resolvers';
import { productMutations, productQueries, productTypeDef } from './supermarket/products/typeDefs';
import { inventarioMutations, inventarioQueries, inventarioTypeDef } from './supermarket/inventarios/typeDefs';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		categoryTypeDef,
		productTypeDef,
		inventarioTypeDef
	],
	[
		productQueries,
		categoryQueries,
		inventarioQueries
	],
	[
		productMutations,
		categoryMutations,
		inventarioMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		productResolvers,
		categoryResolvers,
		inventarioResolvers
	)
});
