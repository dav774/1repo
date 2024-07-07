import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { ConversationFlowTitle } from "../conversationFlow/ConversationFlowTitle";

export const FlowStepEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="order" source="order" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="conversationFlow.id"
          reference="ConversationFlow"
          label="conversationFlow"
        >
          <SelectInput optionText={ConversationFlowTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
