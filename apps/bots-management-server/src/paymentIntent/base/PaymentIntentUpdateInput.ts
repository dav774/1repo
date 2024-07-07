/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumPaymentIntentStatus } from "./EnumPaymentIntentStatus";

import {
  IsEnum,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";

import { InvoiceWhereUniqueInput } from "../../invoice/base/InvoiceWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class PaymentIntentUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumPaymentIntentStatus,
  })
  @IsEnum(EnumPaymentIntentStatus)
  @IsOptional()
  @Field(() => EnumPaymentIntentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  stripePaymentIntentId?: string | null;

  @ApiProperty({
    required: false,
    type: () => InvoiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvoiceWhereUniqueInput)
  @IsOptional()
  @Field(() => InvoiceWhereUniqueInput, {
    nullable: true,
  })
  invoice?: InvoiceWhereUniqueInput | null;
}

export { PaymentIntentUpdateInput as PaymentIntentUpdateInput };
