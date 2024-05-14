import { ExpiryReportWhereInput } from "./ExpiryReportWhereInput";
import { ExpiryReportOrderByInput } from "./ExpiryReportOrderByInput";

export type ExpiryReportFindManyArgs = {
  where?: ExpiryReportWhereInput;
  orderBy?: Array<ExpiryReportOrderByInput>;
  skip?: number;
  take?: number;
};
