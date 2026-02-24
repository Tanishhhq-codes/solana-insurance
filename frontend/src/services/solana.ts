import { Connection, clusterApiUrl } from "@solana/web3.js";

export const network = "devnet";

export const connection = new Connection(
  clusterApiUrl(network),
  "confirmed"
);