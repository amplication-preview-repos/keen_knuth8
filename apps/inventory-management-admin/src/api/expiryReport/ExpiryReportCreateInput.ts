import { InventoryItemWhereUniqueInput } from "../inventoryItem/InventoryItemWhereUniqueInput";

export type ExpiryReportCreateInput = {
  inventoryItem?: InventoryItemWhereUniqueInput | null;
  quantity?: number | null;
  reportedAt?: Date | null;
};
