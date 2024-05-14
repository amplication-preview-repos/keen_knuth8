import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InventoryItemList } from "./inventoryItem/InventoryItemList";
import { InventoryItemCreate } from "./inventoryItem/InventoryItemCreate";
import { InventoryItemEdit } from "./inventoryItem/InventoryItemEdit";
import { InventoryItemShow } from "./inventoryItem/InventoryItemShow";
import { DamageReportList } from "./damageReport/DamageReportList";
import { DamageReportCreate } from "./damageReport/DamageReportCreate";
import { DamageReportEdit } from "./damageReport/DamageReportEdit";
import { DamageReportShow } from "./damageReport/DamageReportShow";
import { ExpiryReportList } from "./expiryReport/ExpiryReportList";
import { ExpiryReportCreate } from "./expiryReport/ExpiryReportCreate";
import { ExpiryReportEdit } from "./expiryReport/ExpiryReportEdit";
import { ExpiryReportShow } from "./expiryReport/ExpiryReportShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InventoryManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="InventoryItem"
          list={InventoryItemList}
          edit={InventoryItemEdit}
          create={InventoryItemCreate}
          show={InventoryItemShow}
        />
        <Resource
          name="DamageReport"
          list={DamageReportList}
          edit={DamageReportEdit}
          create={DamageReportCreate}
          show={DamageReportShow}
        />
        <Resource
          name="ExpiryReport"
          list={ExpiryReportList}
          edit={ExpiryReportEdit}
          create={ExpiryReportCreate}
          show={ExpiryReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
