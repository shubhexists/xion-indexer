import { CosmosEvent } from "@subql/types-cosmos";
import {
  handleSmartAccountContractAddAuthenticatorHelper,
  handleSmartAccountContractInstantiateMetadataHelper,
  handleSmartAccountContractRemoveAuthenticatorHelper,
} from "../smartContract";

export async function handleSmartAccountContractInstantiateMetadata(
  event: CosmosEvent,
): Promise<void> {
  await handleSmartAccountContractInstantiateMetadataHelper(event);
}

export async function handleSmartAccountContractAddAuthenticator(
  event: CosmosEvent,
): Promise<void> {
  await handleSmartAccountContractAddAuthenticatorHelper(event);
}

export async function handleSmartAccountContractRemoveAuthenticator(
  event: CosmosEvent,
): Promise<void> {
  await handleSmartAccountContractRemoveAuthenticatorHelper(event);
}
