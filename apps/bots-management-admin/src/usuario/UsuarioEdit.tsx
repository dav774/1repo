import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UsuarioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="nombre" source="nombre" />
        <TextInput
          label="correo electronico"
          source="correoElectronico"
          type="email"
        />
        <TextInput label="contraseña" source="contraseA" />
      </SimpleForm>
    </Edit>
  );
};
