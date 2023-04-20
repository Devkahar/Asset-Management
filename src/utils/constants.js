export const ROUTE = {
  LOGIN: {
    path: "/login",
    name: "login",
  },
  SIGNUP: {
    path: "/signup",
    name: "signup",
  },
  HOME: {
    path: "/",
    name: "home",
  },
  ASSET: {
    path: "/:id",
    name: "assetPage",
  },
  ASSET_DISCOVERY: {
    path: "/assetDiscovery",
    name: "assetDiscoveryPage",
  },
};

export const clientAction = {
  getClient: "getClient",
  postClient: "postClient",
  patchClient: "patchClient",
  deleteClient: "deleteClient",
  putClient: "putClient",
  schedulerClient: "schedulerClient",
};
