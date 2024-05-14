import { DamageReportCreateNestedManyWithoutInventoryItemsInput } from "./DamageReportCreateNestedManyWithoutInventoryItemsInput";
import { ExpiryReportCreateNestedManyWithoutInventoryItemsInput } from "./ExpiryReportCreateNestedManyWithoutInventoryItemsInput";

export type InventoryItemCreateInput = {
  damageReports?: DamageReportCreateNestedManyWithoutInventoryItemsInput;
  expiryDate?: Date | null;
  expiryReports?: ExpiryReportCreateNestedManyWithoutInventoryItemsInput;
  name?: string | null;
  quantity?: number | null;
};
