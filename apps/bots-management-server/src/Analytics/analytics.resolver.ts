import * as graphql from "@nestjs/graphql";
import { ReportCreateInput } from "../report/base/ReportCreateInput";
import { Report } from "../report/base/Report";
import { ReportWhereUniqueInput } from "../report/base/ReportWhereUniqueInput";
import { AnalyticsService } from "./analytics.service";

export class AnalyticsResolver {
  constructor(protected readonly service: AnalyticsService) {}

  @graphql.Mutation(() => Report)
  async CreateReport(
    @graphql.Args()
    args: ReportCreateInput
  ): Promise<Report> {
    return this.service.CreateReport(args);
  }

  @graphql.Query(() => Report)
  async GetReport(
    @graphql.Args()
    args: ReportWhereUniqueInput
  ): Promise<Report> {
    return this.service.GetReport(args);
  }
}
