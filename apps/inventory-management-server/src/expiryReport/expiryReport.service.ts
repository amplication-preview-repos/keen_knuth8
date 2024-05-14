import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpiryReportServiceBase } from "./base/expiryReport.service.base";

@Injectable()
export class ExpiryReportService extends ExpiryReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
