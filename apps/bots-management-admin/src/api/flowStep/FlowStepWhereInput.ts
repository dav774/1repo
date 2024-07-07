import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConversationFlowWhereUniqueInput } from "../conversationFlow/ConversationFlowWhereUniqueInput";

export type FlowStepWhereInput = {
  id?: StringFilter;
  order?: IntNullableFilter;
  typeField?: "Option1";
  content?: StringNullableFilter;
  conversationFlow?: ConversationFlowWhereUniqueInput;
};
