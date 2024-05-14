import { DamageReportListRelationFilter } from "../damageReport/DamageReportListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ExpiryReportListRelationFilter } from "../expiryReport/ExpiryReportListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryItemWhereInput = {
  damageReports?: DamageReportListRelationFilter;
  expiryDate?: DateTimeNullableFilter;
  expiryReports?: ExpiryReportListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
