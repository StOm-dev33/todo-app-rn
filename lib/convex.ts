import { ConvexReactClient } from "convex/react";

const client = new ConvexReactClient(process.env.CONVEX_URL!);
export default client;