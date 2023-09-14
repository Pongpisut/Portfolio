const isProd = process.env.NODE_ENV === "production";
export const conditionPath = isProd ? "/Portfolio" : process.env.NEXT_PUBLIC_ASSET_PREFIX;
