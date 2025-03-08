export type IAuthenticator = {
  Secp256K1?: { pubkey: string };
  Ed25519?: { pubkey: string };
  EthWallet?: { address: string };
  Jwt?: { aud: string; sub: string };
  Passkey? : { credential: string };
};

export type IAddAuthenticator = {
  Secp256K1?: { id: number; pubkey: string; signature: string };
  Ed25519?: { id: number; pubkey: string; signature: string };
  EthWallet?: { id: number; address: string; signature: string };
  Jwt?: { id: number; aud: string; sub: string; token: string };
  Passkey? : { id: number, url: string, credential: string };
};
