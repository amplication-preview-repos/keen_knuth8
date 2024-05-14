import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DamageReportServiceBase } from "./base/damageReport.service.base";

@Injectable()
export class DamageReportService extends DamageReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
