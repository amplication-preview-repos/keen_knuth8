import { SortOrder } from "../../util/SortOrder";

export type ExpiryReportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  inventoryItemId?: SortOrder;
  quantity?: SortOrder;
  reportedAt?: SortOrder;
  updatedAt?: SortOrder;
};
