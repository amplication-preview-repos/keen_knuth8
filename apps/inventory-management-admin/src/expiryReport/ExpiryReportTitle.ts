import { ExpiryReport as TExpiryReport } from "../api/expiryReport/ExpiryReport";

export const EXPIRYREPORT_TITLE_FIELD = "id";

export const ExpiryReportTitle = (record: TExpiryReport): string => {
  return record.id?.toString() || String(record.id);
};
