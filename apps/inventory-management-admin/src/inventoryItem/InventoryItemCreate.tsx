import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { DamageReportTitle } from "../damageReport/DamageReportTitle";
import { ExpiryReportTitle } from "../expiryReport/ExpiryReportTitle";

export const InventoryItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="damageReports"
          reference="DamageReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DamageReportTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <ReferenceArrayInput
          source="expiryReports"
          reference="ExpiryReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExpiryReportTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
