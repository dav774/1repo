import * as graphql from "@nestjs/graphql";
import { IntegrationServiceModuleService } from "./integrationservicemodule.service";

export class IntegrationServiceModuleResolver {
  constructor(protected readonly service: IntegrationServiceModuleService) {}
}
