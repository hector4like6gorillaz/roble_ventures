import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuideModule from "src/modules/guideModule/GuideModule";
import LandingModule from "src/modules/landing/LandingModule";
import PanelModule from "src/modules/panel/PanelModule";
import UploadModule from "src/modules/upload/UploadModule";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingModule />} />
        <Route path="/guide" element={<GuideModule />} />
        <Route path="/upload" element={<UploadModule />} />
        <Route path="/panel" element={<PanelModule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
