import { Box } from '@workday/canvas-kit-react/layout';
import { colors } from '@workday/canvas-kit-react/tokens';
import { useCodemastersContext } from 'context';
import { useEffect } from 'react';

export default function Preview() {
  const { code, dispatch } = useCodemastersContext();

  useEffect(() => {
    const parser = new DOMParser();
    const html = parser.parseFromString(code.html, 'text/html');
    const head = html.head;
    const body = html.body;
    head.appendChild(
      Object.assign(document.createElement('style'), {
        innerHTML: code.css,
      })
    );
    body.appendChild(
      Object.assign(document.createElement('script'), {
        innerHTML: code.js,
      })
    );
    dispatch({ type: 'SET_FULL', payload: html.documentElement.outerHTML });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code.html, code.css, code.js]);

  return (
    <>
      <Box
        backgroundColor={colors.frenchVanilla100}
        height='100%'
        width='100%'
        maxHeight='100%'
      >
        <iframe
          title='Preview'
          srcDoc={code.full}
          sandbox='allow-scripts allow-same-origin'
          style={{ height: 'inherit', width: 'inherit', border: 'none' }}
        />
      </Box>
    </>
  );
}
