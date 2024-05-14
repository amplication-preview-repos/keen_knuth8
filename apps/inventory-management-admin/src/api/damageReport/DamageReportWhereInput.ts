import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryItemWhereUniqueInput } from "../inventoryItem/InventoryItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DamageReportWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  inventoryItem?: InventoryItemWhereUniqueInput;
  quantity?: IntNullableFilter;
  reportedAt?: DateTimeNullableFilter;
};
