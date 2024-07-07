import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SUBSCRIPTION_TITLE_FIELD } from "./SubscriptionTitle";
import { SUBSCRIPTIONPLAN_TITLE_FIELD } from "../subscriptionPlan/SubscriptionPlanTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SubscriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="status" source="status" />
        <TextField label="startDate" source="startDate" />
        <TextField label="endDate" source="endDate" />
        <TextField label="stripeSubscriptionId" source="stripeSubscriptionId" />
        <ReferenceField
          label="SubscriptionPlan"
          source="subscriptionplan.id"
          reference="SubscriptionPlan"
        >
          <TextField source={SUBSCRIPTIONPLAN_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Invoice"
          target="subscriptionId"
          label="Invoices"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amountDue" source="amountDue" />
            <TextField label="status" source="status" />
            <TextField label="stripeInvoiceId" source="stripeInvoiceId" />
            <ReferenceField
              label="Subscription"
              source="subscription.id"
              reference="Subscription"
            >
              <TextField source={SUBSCRIPTION_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
