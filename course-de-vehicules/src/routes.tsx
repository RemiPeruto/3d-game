import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Display from "./display";

const URLS = {
  COURSE: "course",
};

const routes = (): JSX.Element => (
  <Suspense fallback={<div> petit loader des familles </div>}>
    <Routes>
      <Route path={URLS.COURSE} element={<Display />} />
      <Route path={""} element={<Display />} />
    </Routes>
  </Suspense>
);

export default routes;
