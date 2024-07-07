import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const IntegrationServiceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"IntegrationServices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="apiEndpoint" source="apiEndpoint" />
        <TextField label="apiKey" source="apiKey" />
        <TextField label="description" source="description" />
        <TextField label="name" source="name" />
      </Datagrid>
    </List>
  );
};
