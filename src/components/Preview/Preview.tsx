import { Box } from '@workday/canvas-kit-react/layout';
import { colors } from '@workday/canvas-kit-react/tokens';
import { useCodemastersContext } from 'context';

export default function Preview() {
  const { code } = useCodemastersContext();

  return (
    <Box backgroundColor={colors.frenchVanilla100} height='100%'>
      <iframe
        title='Preview'
        srcDoc={code.html}
        sandbox='allow-scripts'
        style={{ height: 'inherit' }}
      />
    </Box>
  );
}
