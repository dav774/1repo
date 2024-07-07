/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UsuarioWhereUniqueInput } from "./UsuarioWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UsuarioUpdateInput } from "./UsuarioUpdateInput";

@ArgsType()
class UpdateUsuarioArgs {
  @ApiProperty({
    required: true,
    type: () => UsuarioWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UsuarioWhereUniqueInput)
  @Field(() => UsuarioWhereUniqueInput, { nullable: false })
  where!: UsuarioWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UsuarioUpdateInput,
  })
  @ValidateNested()
  @Type(() => UsuarioUpdateInput)
  @Field(() => UsuarioUpdateInput, { nullable: false })
  data!: UsuarioUpdateInput;
}

export { UpdateUsuarioArgs as UpdateUsuarioArgs };
