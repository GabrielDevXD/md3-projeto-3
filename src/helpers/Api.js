const hamburguerContext = {
    hamburguerEndpoint: () => `${Api.baseUrl}/hamburguer`,
    hamburguerLista: () => `${hamburguerContext.hamburguerEndpoint()}/all-hamburguer`,
    hamburguerById: (id) => `${hamburguerContext.hamburguerEndpoint()}/one-hamburguer/${id}`,
    createhamburguer: () => `${hamburguerContext.hamburguerEndpoint()}/create-hamburguer`,
    updatehamburguerById: (id) => `${hamburguerContext.hamburguerEndpoint()}/update-hamburguer/${id}`,
    deletehamburguerById: (id) => `${hamburguerContext.hamburguerEndpoint()}/delete-hamburguer/${id}`,
  };
  
  export const Api = {
    baseUrl: "http://localhost:3005",
    ...hamburguerContext,
  };