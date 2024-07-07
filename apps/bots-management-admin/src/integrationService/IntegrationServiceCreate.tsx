import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const IntegrationServiceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apiEndpoint" source="apiEndpoint" />
        <TextInput label="apiKey" source="apiKey" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
