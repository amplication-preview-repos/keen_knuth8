import { InventoryItemWhereUniqueInput } from "../inventoryItem/InventoryItemWhereUniqueInput";

export type DamageReportCreateInput = {
  description?: string | null;
  inventoryItem?: InventoryItemWhereUniqueInput | null;
  quantity?: number | null;
  reportedAt?: Date | null;
};
