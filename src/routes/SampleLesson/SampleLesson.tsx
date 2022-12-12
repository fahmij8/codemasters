import { useCallback } from "react";
import { Box } from "@workday/canvas-kit-react/layout";
import { Allotment } from "allotment";
import Header from "components/Header";
import Instruction from "components/Instruction";
import CodeEditor from "components/CodeEditor";
import Preview from "components/Preview";
import { useCodemastersContext } from "context";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { particlesOptions } from "config/tsparticles";

export const SampleLesson = () => {
  const { taskFinished } = useCodemastersContext();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Header />
      <Box height="calc(100vh - 60px)">
        <Allotment>
          <Allotment.Pane preferredSize="30%">
            <Instruction />
          </Allotment.Pane>
          <Allotment.Pane>
            <CodeEditor />
          </Allotment.Pane>
          <Allotment.Pane preferredSize="33%">
            <Preview />
          </Allotment.Pane>
        </Allotment>
      </Box>
      {taskFinished === 6 && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      )}
    </>
  );
};

export default SampleLesson;
