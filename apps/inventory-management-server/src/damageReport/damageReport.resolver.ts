import * as graphql from "@nestjs/graphql";
import { DamageReportResolverBase } from "./base/damageReport.resolver.base";
import { DamageReport } from "./base/DamageReport";
import { DamageReportService } from "./damageReport.service";

@graphql.Resolver(() => DamageReport)
export class DamageReportResolver extends DamageReportResolverBase {
  constructor(protected readonly service: DamageReportService) {
    super(service);
  }
}
