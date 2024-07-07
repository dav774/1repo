import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnalyticsService } from "./analytics.service";
import { ReportWhereUniqueInput } from "../report/base/ReportWhereUniqueInput";
import { Report } from "../report/base/Report";

@swagger.ApiTags("analytics")
@common.Controller("analytics")
export class AnalyticsController {
  constructor(protected readonly service: AnalyticsService) {}

  @common.Post("/reports")
  @swagger.ApiOkResponse({
    type: Report
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateReport(
    @common.Body()
    body: ReportWhereUniqueInput
  ): Promise<Report> {
        return this.service.CreateReport(body);
      }

  @common.Get("/reports/:id")
  @swagger.ApiOkResponse({
    type: Report
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetReport(
    @common.Body()
    body: ReportWhereUniqueInput
  ): Promise<Report> {
        return this.service.GetReport(body);
      }
}
