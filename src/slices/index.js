import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// Authentication
import LoginReducer from "./auth/login/reducer";
import AccountReducer from "./auth/register/reducer";
import ForgetPasswordReducer from "./auth/forgetpwd/reducer";
import ProfileReducer from "./auth/profile/reducer";

//Calendar
import CalendarReducer from "./calendar/reducer";
//Chat
import chatReducer from "./chat/reducer";
//Ecommerce
import EcommerceReducer from "./ecommerce/reducer";

//Project
import ProjectsReducer from "./projects/reducer";

// Tasks
import TasksReducer from "./tasks/reducer";

//Invoice
import InvoiceReducer from "./invoice/reducer";

//Mailbox
import MailboxReducer from "./mailbox/reducer";

// Dashboard Analytics
// import DashboardAnalyticsReducer from "./dashboardAnalytics/reducer";

// Dashboard CRM
// import DashboardCRMReducer from "./dashboardCRM/reducer";

// Dashboard Ecommerce
import DashboardEcommerceReducer from "./dashboardEcommerce/reducer";

// Dashboard Cryto
import DashboardProjectReducer from "./dashboardProject/reducer";

// Dashboard NFT
import DashboardNFTReducer from "./dashboardNFT/reducer";

// Pages > Team
import TeamDataReducer from "./team/reducer";

// File Manager
import FileManagerReducer from "./fileManager/reducer";

// Job
import JobReducer from "./jobs/reducer";

// API Key
import APIKeyReducer from "./apiKey/reducer";

import allSubscriptionsReducer from "../slices/subscriptions/allSubscriptions/reducer";
import allSubscriptionCategory from "../slices/subscriptions/subscriptionCategory/reducer";
import allUsers from "../slices/usermanagementSlice/alluserSlice/reducer";
const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Login: LoginReducer,
  Account: AccountReducer,
  ForgetPassword: ForgetPasswordReducer,
  Profile: ProfileReducer,
  Calendar: CalendarReducer,
  Chat: chatReducer,
  Projects: ProjectsReducer,
  Ecommerce: EcommerceReducer,
  Tasks: TasksReducer,
  Invoice: InvoiceReducer,
  Mailbox: MailboxReducer,
  DashboardEcommerce: DashboardEcommerceReducer,
  DashboardProject: DashboardProjectReducer,
  DashboardNFT: DashboardNFTReducer,
  Team: TeamDataReducer,
  FileManager: FileManagerReducer,
  Jobs: JobReducer,
  APIKey: APIKeyReducer,
  AllSubscription: allSubscriptionsReducer,
  SubscriptionCategory: allSubscriptionCategory,
  allUser: allUsers,
});

export default rootReducer;
