import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="entityName" source="entityName" />
        <DateTimeInput label="periodStart" source="periodStart" />
        <DateTimeInput label="periodEnd" source="periodEnd" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
