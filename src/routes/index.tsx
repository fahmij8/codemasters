import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Grid } from "@workday/canvas-kit-react/layout";
import { LoadingDots } from "@workday/canvas-kit-react/loading-dots";

const SampleLesson = lazy(async () => await import("./SampleLesson"));

export default function AppRoutes() {
  const Loading = () => {
    return (
      <Grid
        as="div"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <LoadingDots />
      </Grid>
    );
  };

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<SampleLesson />} />
      </Routes>
    </Suspense>
  );
}
