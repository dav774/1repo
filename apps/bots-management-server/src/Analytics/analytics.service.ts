import { Injectable } from "@nestjs/common";
import { ReportCreateInput } from "../report/base/ReportCreateInput";
import { Report } from "../report/base/Report";
import { ReportWhereUniqueInput } from "../report/base/ReportWhereUniqueInput";

@Injectable()
export class AnalyticsService {
  constructor() {}
  async CreateReport(args: ReportCreateInput): Promise<Report> {
    throw new Error("Not implemented");
  }
  async GetReport(args: ReportWhereUniqueInput): Promise<Report> {
    throw new Error("Not implemented");
  }
}
