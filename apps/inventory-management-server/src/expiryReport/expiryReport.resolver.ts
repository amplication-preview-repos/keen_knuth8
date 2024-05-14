import * as graphql from "@nestjs/graphql";
import { ExpiryReportResolverBase } from "./base/expiryReport.resolver.base";
import { ExpiryReport } from "./base/ExpiryReport";
import { ExpiryReportService } from "./expiryReport.service";

@graphql.Resolver(() => ExpiryReport)
export class ExpiryReportResolver extends ExpiryReportResolverBase {
  constructor(protected readonly service: ExpiryReportService) {
    super(service);
  }
}
