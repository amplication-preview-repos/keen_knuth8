import { InventoryItem } from "../inventoryItem/InventoryItem";

export type DamageReport = {
  createdAt: Date;
  description: string | null;
  id: string;
  inventoryItem?: InventoryItem | null;
  quantity: number | null;
  reportedAt: Date | null;
  updatedAt: Date;
};
