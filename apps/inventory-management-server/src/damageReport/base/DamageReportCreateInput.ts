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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsInt,
  IsDate,
} from "class-validator";
import { InventoryItemWhereUniqueInput } from "../../inventoryItem/base/InventoryItemWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class DamageReportCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => InventoryItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InventoryItemWhereUniqueInput)
  @IsOptional()
  @Field(() => InventoryItemWhereUniqueInput, {
    nullable: true,
  })
  inventoryItem?: InventoryItemWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reportedAt?: Date | null;
}

export { DamageReportCreateInput as DamageReportCreateInput };
