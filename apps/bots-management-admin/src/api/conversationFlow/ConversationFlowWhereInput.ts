import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FlowStepListRelationFilter } from "../flowStep/FlowStepListRelationFilter";

export type ConversationFlowWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  flowSteps?: FlowStepListRelationFilter;
};
