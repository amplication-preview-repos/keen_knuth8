import { Module } from "@nestjs/common";
import { DamageReportModuleBase } from "./base/damageReport.module.base";
import { DamageReportService } from "./damageReport.service";
import { DamageReportController } from "./damageReport.controller";
import { DamageReportResolver } from "./damageReport.resolver";

@Module({
  imports: [DamageReportModuleBase],
  controllers: [DamageReportController],
  providers: [DamageReportService, DamageReportResolver],
  exports: [DamageReportService],
})
export class DamageReportModule {}
