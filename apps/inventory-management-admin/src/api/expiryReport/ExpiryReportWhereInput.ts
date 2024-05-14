import { StringFilter } from "../../util/StringFilter";
import { InventoryItemWhereUniqueInput } from "../inventoryItem/InventoryItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ExpiryReportWhereInput = {
  id?: StringFilter;
  inventoryItem?: InventoryItemWhereUniqueInput;
  quantity?: IntNullableFilter;
  reportedAt?: DateTimeNullableFilter;
};
