import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { BotTitle } from "../bot/BotTitle";

export const MediaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="url" source="url" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="bot.id" reference="Bot" label="Bot">
          <SelectInput optionText={BotTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
