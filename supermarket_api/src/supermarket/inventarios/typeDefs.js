export const inventarioTypeDef = `
  type Inventario {
      _id: String!
      cantidad: Int!
      producto: Product!
  }
  input InventarioInput {
      cantidad: Int!
      producto: Int!
  }`;

export const inventarioQueries = `
      allInventarios: [Inventario]!
      inventarioById(id: String!): Inventario!
  `;

export const inventarioMutations = `
    createInventario(inventario: InventarioInput!): Inventario!
    updateInventario(id: String!, inventario: InventarioInput!): Inventario!
    deleteInventario(id: String!): Int
`;
