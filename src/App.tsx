import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import AppLayout from "./components/app-layout";
import HomePage from "./pages/home";
import MeetingNotesPage from "./pages/meeting-notes";
import MeetingDetailPage from "./pages/meeting-detail";
import DeepResearchPage from "./pages/deep-research";
import CommitmentsPage from "./pages/commitments";
import ArtifactsPage from "./pages/artifacts";
import ReportDetailPage from "./pages/report-detail";
import ArtifactsReportsSettingsPage from "./pages/artifacts-reports-settings";
import ArtifactsRadarSettingsPage from "./pages/artifacts-radar-settings";
import IntegrationsPage from "./pages/integrations";
import ConnectionsPage from "./pages/connections";
import ConnectionDetailPage from "./pages/connection-detail";
import SettingsPage from "./pages/settings";
import MeetingSettingsPage from "./pages/meeting-settings";
import PreMeetingBriefPage from "./pages/pre-meeting-brief";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route element={<AppLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/meeting-notes" element={<MeetingNotesPage />} />
            <Route path="/meeting-detail" element={<MeetingDetailPage />} />
            <Route path="/deep-research" element={<DeepResearchPage />} />
            <Route path="/commitments" element={<CommitmentsPage />} />
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
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
