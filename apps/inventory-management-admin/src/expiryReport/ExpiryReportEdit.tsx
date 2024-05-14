import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { InventoryItemTitle } from "../inventoryItem/InventoryItemTitle";

export const ExpiryReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
