import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { BiometricVerificationPage } from "./pages/BiometricVerificationPage";
import { VoteCastingPage } from "./pages/VoteCastingPage";
import { BlockchainProcessingPage } from "./pages/BlockchainProcessingPage";
import { ResultsDashboardPage } from "./pages/ResultsDashboardPage";
import { FinalResultsPage } from "./pages/FinalResultsPage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage
  },
  {
    path: "/login",
    Component: LoginPage
  },
  {
    path: "/biometric-verification",
    Component: BiometricVerificationPage
  },
  {
    path: "/vote",
    Component: VoteCastingPage
  },
  {
    path: "/processing",
    Component: BlockchainProcessingPage
  },
  {
    path: "/dashboard",
    Component: ResultsDashboardPage
  },
  {
    path: "/results",
    Component: FinalResultsPage
  }
]);
export {
  router
};
