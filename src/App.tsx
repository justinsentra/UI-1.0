import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { MorningBriefProvider } from "./contexts/morning-brief-context";
import AppLayout from "./components/app-layout";
import HomePage from "./pages/home";
import MorningBriefPage from "./pages/morning-brief";
import MeetingNotesPage from "./pages/meeting-notes";
import MeetingDetailPage from "./pages/meeting-detail";
import DeepResearchPage from "./pages/deep-research";
import ArtifactsPage from "./pages/artifacts";
import ReportDetailPage from "./pages/report-detail";
import ArtifactsReportsSettingsPage from "./pages/artifacts-reports-settings";
import ArtifactsRadarSettingsPage from "./pages/artifacts-radar-settings";
import IntegrationsPage from "./pages/integrations";
import IntegrationDetailPage from "./pages/integration-detail";
import ConnectionsPage from "./pages/connections";
import ConnectionDetailPage from "./pages/connection-detail";
import SettingsPage from "./pages/settings";
import MeetingSettingsPage from "./pages/meeting-settings";
import PreMeetingBriefPage from "./pages/pre-meeting-brief";
import ActionsPage from "./pages/actions";
import ActionDetailPage from "./pages/action-detail";
import ArtifactDetailPage from "./pages/artifact-detail";

const App = () => {
  return (
    <ThemeProvider>
      <MorningBriefProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route element={<AppLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/morning-brief" element={<MorningBriefPage />} />
            <Route path="/meeting-notes" element={<MeetingNotesPage />} />
            <Route path="/meeting-detail" element={<MeetingDetailPage />} />
            <Route path="/deep-research" element={<DeepResearchPage />} />
            <Route path="/artifacts" element={<ArtifactsPage />} />
            <Route
              path="/artifacts/reports-settings"
              element={<ArtifactsReportsSettingsPage />}
            />
            <Route
              path="/artifacts/radar-settings"
              element={<ArtifactsRadarSettingsPage />}
            />
            <Route path="/report-detail" element={<ReportDetailPage />} />
            <Route
              path="/weekly-reports"
              element={<Navigate to="/artifacts" replace />}
            />
            <Route
              path="/radar"
              element={<Navigate to="/artifacts" replace />}
            />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route
              path="/integrations/:integrationId"
              element={<IntegrationDetailPage />}
            />
            <Route path="/connections" element={<ConnectionsPage />} />
            <Route
              path="/connection-detail"
              element={<ConnectionDetailPage />}
            />
            <Route path="/meeting-settings" element={<MeetingSettingsPage />} />
            <Route
              path="/pre-meeting-brief"
              element={<PreMeetingBriefPage />}
            />
            <Route path="/actions" element={<ActionsPage />} />
            <Route path="/actions/:actionId" element={<ActionDetailPage />} />
            <Route
              path="/artifact-detail/:artifactId"
              element={<ArtifactDetailPage />}
            />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </MorningBriefProvider>
    </ThemeProvider>
  );
};

export default App;
