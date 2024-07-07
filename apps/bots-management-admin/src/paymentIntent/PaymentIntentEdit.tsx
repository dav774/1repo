import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { InvoiceTitle } from "../invoice/InvoiceTitle";

export const PaymentIntentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="amount" source="amount" />
        <TextInput
          label="stripePaymentIntentId"
          source="stripePaymentIntentId"
        />
        <ReferenceInput source="invoice.id" reference="Invoice" label="Invoice">
          <SelectInput optionText={InvoiceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
