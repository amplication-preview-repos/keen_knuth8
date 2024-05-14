import { DamageReport } from "../damageReport/DamageReport";
import { ExpiryReport } from "../expiryReport/ExpiryReport";

export type InventoryItem = {
  createdAt: Date;
  damageReports?: Array<DamageReport>;
  expiryDate: Date | null;
  expiryReports?: Array<ExpiryReport>;
  id: string;
  name: string | null;
  quantity: number | null;
  updatedAt: Date;
};
