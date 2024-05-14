import { Module } from "@nestjs/common";
import { ExpiryReportModuleBase } from "./base/expiryReport.module.base";
import { ExpiryReportService } from "./expiryReport.service";
import { ExpiryReportController } from "./expiryReport.controller";
import { ExpiryReportResolver } from "./expiryReport.resolver";

@Module({
  imports: [ExpiryReportModuleBase],
  controllers: [ExpiryReportController],
  providers: [ExpiryReportService, ExpiryReportResolver],
  exports: [ExpiryReportService],
})
export class ExpiryReportModule {}
