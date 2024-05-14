import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DamageReportService } from "./damageReport.service";
import { DamageReportControllerBase } from "./base/damageReport.controller.base";

@swagger.ApiTags("damageReports")
@common.Controller("damageReports")
export class DamageReportController extends DamageReportControllerBase {
  constructor(protected readonly service: DamageReportService) {
    super(service);
  }
}
