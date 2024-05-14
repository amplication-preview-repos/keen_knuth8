import { DamageReportWhereInput } from "./DamageReportWhereInput";
import { DamageReportOrderByInput } from "./DamageReportOrderByInput";

export type DamageReportFindManyArgs = {
  where?: DamageReportWhereInput;
  orderBy?: Array<DamageReportOrderByInput>;
  skip?: number;
  take?: number;
};
