import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UsuarioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="nombre" source="nombre" />
        <TextInput
          label="correo electronico"
          source="correoElectronico"
          type="email"
        />
        <TextInput label="contraseña" source="contraseA" />
      </SimpleForm>
    </Create>
  );
};
