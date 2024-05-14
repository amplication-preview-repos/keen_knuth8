import { DamageReportUpdateManyWithoutInventoryItemsInput } from "./DamageReportUpdateManyWithoutInventoryItemsInput";
import { ExpiryReportUpdateManyWithoutInventoryItemsInput } from "./ExpiryReportUpdateManyWithoutInventoryItemsInput";

export type InventoryItemUpdateInput = {
  damageReports?: DamageReportUpdateManyWithoutInventoryItemsInput;
  expiryDate?: Date | null;
  expiryReports?: ExpiryReportUpdateManyWithoutInventoryItemsInput;
  name?: string | null;
  quantity?: number | null;
};
