import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CONVERSATIONFLOW_TITLE_FIELD } from "../conversationFlow/ConversationFlowTitle";

export const FlowStepShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="order" source="order" />
        <TextField label="type" source="typeField" />
        <TextField label="content" source="content" />
        <ReferenceField
          label="conversationFlow"
          source="conversationflow.id"
          reference="ConversationFlow"
        >
          <TextField source={CONVERSATIONFLOW_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
