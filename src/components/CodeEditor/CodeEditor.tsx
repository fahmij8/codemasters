import { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { colors } from '@workday/canvas-kit-react/tokens';
import { PrimaryButton } from '@workday/canvas-kit-react/button';
import { HStack } from '@workday/canvas-kit-react/layout';
import { theme, options } from 'config/theme';
import { useCodemastersContext } from 'context';
import type { Monaco } from '@monaco-editor/react';
import type { editor } from 'monaco-editor/esm/vs/editor/editor.api';

export default function CodeEditor() {
  const { code, dispatch } = useCodemastersContext();
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);

  const handleEditorDidMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
    // Mount editor and monaco instance to refs
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Define custom theme
    monaco.editor.defineTheme('andromeda', theme);

    // Set theme
    editorRef.current?.updateOptions({ theme: 'andromeda' });
  };

  return (
    <>
      <Editor
        height='calc(100% - 73px)'
        defaultLanguage='html'
        defaultValue={code.html}
        onMount={handleEditorDidMount}
        options={options}
        onChange={(value) => dispatch({ type: 'SET_HTML', payload: value })}
      />
      <HStack padding='s' spacing='s'>
        <PrimaryButton
          colors={{
            default: {
              background: colors.sourLemon400,
              border: colors.sourLemon400,
              label: colors.blackPepper400,
            },
            hover: {
              background: colors.sourLemon300,
              border: colors.sourLemon300,
              label: colors.blackPepper400,
            },
            active: {
              background: colors.sourLemon500,
              border: colors.sourLemon500,
              label: colors.blackPepper400,
            },
            disabled: {
              background: colors.sourLemon200,
              border: colors.sourLemon200,
              label: colors.blackPepper400,
            },
            focus: {
              background: colors.sourLemon500,
              border: colors.sourLemon500,
              label: colors.blackPepper400,
              focusRing: {
                color: colors.cantaloupe400,
              },
            },
          }}
        >
          Run
        </PrimaryButton>
      </HStack>
    </>
  );
}
