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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../../payment/base/PaymentListRelationFilter";
import { SubscriptionPlanListRelationFilter } from "../../subscriptionPlan/base/SubscriptionPlanListRelationFilter";
import { CustomerListRelationFilter } from "../../customer/base/CustomerListRelationFilter";
import { BotListRelationFilter } from "../../bot/base/BotListRelationFilter";
import { SubscriptionListRelationFilter } from "../../subscription/base/SubscriptionListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PaymentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PaymentListRelationFilter)
  @IsOptional()
  @Field(() => PaymentListRelationFilter, {
    nullable: true,
  })
  payments?: PaymentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SubscriptionPlanListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SubscriptionPlanListRelationFilter)
  @IsOptional()
  @Field(() => SubscriptionPlanListRelationFilter, {
    nullable: true,
  })
  subscriptionPlans?: SubscriptionPlanListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CustomerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CustomerListRelationFilter)
  @IsOptional()
  @Field(() => CustomerListRelationFilter, {
    nullable: true,
  })
  customers?: CustomerListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => BotListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BotListRelationFilter)
  @IsOptional()
  @Field(() => BotListRelationFilter, {
    nullable: true,
  })
  bots?: BotListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SubscriptionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SubscriptionListRelationFilter)
  @IsOptional()
  @Field(() => SubscriptionListRelationFilter, {
    nullable: true,
  })
  subscriptions?: SubscriptionListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
