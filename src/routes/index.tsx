import { Box } from '@workday/canvas-kit-react/layout';
import { Allotment } from 'allotment';
import Header from '../components/Header';
import Instruction from '../components/Instruction';
import CodeEditor from '../components/CodeEditor/CodeEditor';

export const Homepage = () => {
  return (
    <>
      <Header />
      <Box height='calc(100vh - 60px)'>
        <Allotment>
          <Allotment.Pane minSize={100}>
            <Instruction />
          </Allotment.Pane>
          <Allotment.Pane>
            <CodeEditor />
          </Allotment.Pane>
          <Allotment.Pane>
            <Box>Here is iframe of preview or perhaps just from state</Box>
          </Allotment.Pane>
        </Allotment>
      </Box>
    </>
  );
};

export default Homepage;
