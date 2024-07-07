import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="quantity" source="quantity" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="category" source="category" />
        <TextField label="imageUrl" source="imageUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
