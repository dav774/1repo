import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="entityName" source="entityName" />
        <DateTimeInput label="periodStart" source="periodStart" />
        <DateTimeInput label="periodEnd" source="periodEnd" />
        <div />
      </SimpleForm>
    </Create>
  );
};
