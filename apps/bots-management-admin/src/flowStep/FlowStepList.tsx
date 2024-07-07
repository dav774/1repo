import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONVERSATIONFLOW_TITLE_FIELD } from "../conversationFlow/ConversationFlowTitle";

export const FlowStepList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FlowSteps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
