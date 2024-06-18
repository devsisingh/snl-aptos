// Copyright © Aptos
// SPDX-License-Identifier: Apache-2.0

import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export const LocalStorageKeys = {
  keylessAccounts: "@aptos-connect/keyless-accounts",
};

export const mainnetClient = new Aptos(
  new AptosConfig({ network: Network.MAINNET })
);

/// FIXME: Put your client id here
export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_KEYLESS_CLIENT_ID;
