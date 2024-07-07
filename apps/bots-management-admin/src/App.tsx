import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BotList } from "./bot/BotList";
import { BotCreate } from "./bot/BotCreate";
import { BotEdit } from "./bot/BotEdit";
import { BotShow } from "./bot/BotShow";
import { SubscriptionPlanList } from "./subscriptionPlan/SubscriptionPlanList";
import { SubscriptionPlanCreate } from "./subscriptionPlan/SubscriptionPlanCreate";
import { SubscriptionPlanEdit } from "./subscriptionPlan/SubscriptionPlanEdit";
import { SubscriptionPlanShow } from "./subscriptionPlan/SubscriptionPlanShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { MediaList } from "./media/MediaList";
import { MediaCreate } from "./media/MediaCreate";
import { MediaEdit } from "./media/MediaEdit";
import { MediaShow } from "./media/MediaShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { PaymentIntentList } from "./paymentIntent/PaymentIntentList";
import { PaymentIntentCreate } from "./paymentIntent/PaymentIntentCreate";
import { PaymentIntentEdit } from "./paymentIntent/PaymentIntentEdit";
import { PaymentIntentShow } from "./paymentIntent/PaymentIntentShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { FlowStepList } from "./flowStep/FlowStepList";
import { FlowStepCreate } from "./flowStep/FlowStepCreate";
import { FlowStepEdit } from "./flowStep/FlowStepEdit";
import { FlowStepShow } from "./flowStep/FlowStepShow";
import { ConversationFlowList } from "./conversationFlow/ConversationFlowList";
import { ConversationFlowCreate } from "./conversationFlow/ConversationFlowCreate";
import { ConversationFlowEdit } from "./conversationFlow/ConversationFlowEdit";
import { ConversationFlowShow } from "./conversationFlow/ConversationFlowShow";
import { IntegrationServiceList } from "./integrationService/IntegrationServiceList";
import { IntegrationServiceCreate } from "./integrationService/IntegrationServiceCreate";
import { IntegrationServiceEdit } from "./integrationService/IntegrationServiceEdit";
import { IntegrationServiceShow } from "./integrationService/IntegrationServiceShow";
import { SuscripcionList } from "./suscripcion/SuscripcionList";
import { SuscripcionCreate } from "./suscripcion/SuscripcionCreate";
import { SuscripcionEdit } from "./suscripcion/SuscripcionEdit";
import { SuscripcionShow } from "./suscripcion/SuscripcionShow";
import { UsuarioList } from "./usuario/UsuarioList";
import { UsuarioCreate } from "./usuario/UsuarioCreate";
import { UsuarioEdit } from "./usuario/UsuarioEdit";
import { UsuarioShow } from "./usuario/UsuarioShow";
import { InventarioList } from "./inventario/InventarioList";
import { InventarioCreate } from "./inventario/InventarioCreate";
import { InventarioEdit } from "./inventario/InventarioEdit";
import { InventarioShow } from "./inventario/InventarioShow";
import { VentaList } from "./venta/VentaList";
import { VentaCreate } from "./venta/VentaCreate";
import { VentaEdit } from "./venta/VentaEdit";
import { VentaShow } from "./venta/VentaShow";
import { ClienteList } from "./cliente/ClienteList";
import { ClienteCreate } from "./cliente/ClienteCreate";
import { ClienteEdit } from "./cliente/ClienteEdit";
import { ClienteShow } from "./cliente/ClienteShow";
import { ChatBotList } from "./chatBot/ChatBotList";
import { ChatBotCreate } from "./chatBot/ChatBotCreate";
import { ChatBotEdit } from "./chatBot/ChatBotEdit";
import { ChatBotShow } from "./chatBot/ChatBotShow";
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
        title={"BotsManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Bot"
          list={BotList}
          edit={BotEdit}
          create={BotCreate}
          show={BotShow}
        />
        <Resource
          name="SubscriptionPlan"
          list={SubscriptionPlanList}
          edit={SubscriptionPlanEdit}
          create={SubscriptionPlanCreate}
          show={SubscriptionPlanShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Media"
          list={MediaList}
          edit={MediaEdit}
          create={MediaCreate}
          show={MediaShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="PaymentIntent"
          list={PaymentIntentList}
          edit={PaymentIntentEdit}
          create={PaymentIntentCreate}
          show={PaymentIntentShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="FlowStep"
          list={FlowStepList}
          edit={FlowStepEdit}
          create={FlowStepCreate}
          show={FlowStepShow}
        />
        <Resource
          name="ConversationFlow"
          list={ConversationFlowList}
          edit={ConversationFlowEdit}
          create={ConversationFlowCreate}
          show={ConversationFlowShow}
        />
        <Resource
          name="IntegrationService"
          list={IntegrationServiceList}
          edit={IntegrationServiceEdit}
          create={IntegrationServiceCreate}
          show={IntegrationServiceShow}
        />
        <Resource
          name="Suscripcion"
          list={SuscripcionList}
          edit={SuscripcionEdit}
          create={SuscripcionCreate}
          show={SuscripcionShow}
        />
        <Resource
          name="Usuario"
          list={UsuarioList}
          edit={UsuarioEdit}
          create={UsuarioCreate}
          show={UsuarioShow}
        />
        <Resource
          name="Inventario"
          list={InventarioList}
          edit={InventarioEdit}
          create={InventarioCreate}
          show={InventarioShow}
        />
        <Resource
          name="Venta"
          list={VentaList}
          edit={VentaEdit}
          create={VentaCreate}
          show={VentaShow}
        />
        <Resource
          name="Cliente"
          list={ClienteList}
          edit={ClienteEdit}
          create={ClienteCreate}
          show={ClienteShow}
        />
        <Resource
          name="ChatBot"
          list={ChatBotList}
          edit={ChatBotEdit}
          create={ChatBotCreate}
          show={ChatBotShow}
        />
      </Admin>
    </div>
  );
};

export default App;
