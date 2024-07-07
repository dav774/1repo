import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { PaymentIntentTitle } from "../paymentIntent/PaymentIntentTitle";

export const InvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amountDue" source="amountDue" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="stripeInvoiceId" source="stripeInvoiceId" />
        <ReferenceInput
          source="subscription.id"
          reference="Subscription"
          label="Subscription"
        >
          <SelectInput optionText={SubscriptionTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="paymentIntents"
          reference="PaymentIntent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentIntentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
