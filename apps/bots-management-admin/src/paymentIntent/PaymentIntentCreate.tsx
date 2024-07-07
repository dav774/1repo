import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { InvoiceTitle } from "../invoice/InvoiceTitle";

export const PaymentIntentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
