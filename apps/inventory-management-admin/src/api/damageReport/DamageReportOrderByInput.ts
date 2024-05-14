import { SortOrder } from "../../util/SortOrder";

export type DamageReportOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  inventoryItemId?: SortOrder;
  quantity?: SortOrder;
  reportedAt?: SortOrder;
  updatedAt?: SortOrder;
};
