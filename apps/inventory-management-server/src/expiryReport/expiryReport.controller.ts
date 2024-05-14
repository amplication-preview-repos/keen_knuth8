import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExpiryReportService } from "./expiryReport.service";
import { ExpiryReportControllerBase } from "./base/expiryReport.controller.base";

@swagger.ApiTags("expiryReports")
@common.Controller("expiryReports")
export class ExpiryReportController extends ExpiryReportControllerBase {
  constructor(protected readonly service: ExpiryReportService) {
    super(service);
  }
}
