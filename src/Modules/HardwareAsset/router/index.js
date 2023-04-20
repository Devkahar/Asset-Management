import { ROUTE } from "@/utils/constants";
import HomeLayout from "@/layout/MainLayout.vue";
export const hardwareAssetRoutes = [
  {
    path: ROUTE.ASSET_DISCOVERY.path,
    name: ROUTE.ASSET_DISCOVERY.name,
    meta: { layout: HomeLayout },
    component: () =>
      import(
        /* webpackChunkName: "AssetdiscoveryView" */ "@/Modules/HardwareAsset/views/AssetdiscoveryView.vue"
      ),
  },
  {
    path: ROUTE.ASSET.path,
    name: ROUTE.ASSET.name,
    meta: { layout: HomeLayout },
    component: () =>
      import(
        /* webpackChunkName: "AssetView" */ "@/Modules/HardwareAsset/views/AssetView.vue"
      ),
  },
];
