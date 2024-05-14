import { DamageReport as TDamageReport } from "../api/damageReport/DamageReport";

export const DAMAGEREPORT_TITLE_FIELD = "id";

export const DamageReportTitle = (record: TDamageReport): string => {
  return record.id?.toString() || String(record.id);
};
