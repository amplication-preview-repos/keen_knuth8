import { InventoryItem } from "../inventoryItem/InventoryItem";

export type ExpiryReport = {
  createdAt: Date;
  id: string;
  inventoryItem?: InventoryItem | null;
  quantity: number | null;
  reportedAt: Date | null;
  updatedAt: Date;
};
