import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { InventoryItemTitle } from "../inventoryItem/InventoryItemTitle";

export const ExpiryReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="inventoryItem.id"
          reference="InventoryItem"
          label="InventoryItem"
        >
          <SelectInput optionText={InventoryItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <DateTimeInput label="reportedAt" source="reportedAt" />
      </SimpleForm>
    </Create>
  );
};
