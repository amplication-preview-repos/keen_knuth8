import { InventoryItemWhereUniqueInput } from "../inventoryItem/InventoryItemWhereUniqueInput";

export type ExpiryReportUpdateInput = {
  inventoryItem?: InventoryItemWhereUniqueInput | null;
  quantity?: number | null;
  reportedAt?: Date | null;
};
