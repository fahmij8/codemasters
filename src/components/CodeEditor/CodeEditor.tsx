import { useEffect, useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { PrimaryButton } from '@workday/canvas-kit-react/button';
import { Tooltip } from '@workday/canvas-kit-react/tooltip';
import { Text } from '@workday/canvas-kit-react/text';
import { HStack } from '@workday/canvas-kit-react/layout';
import { Tabs } from '@workday/canvas-kit-react/tabs';
import { GiBroom } from 'react-icons/gi';
import { files, theme, options } from 'config/editor';
import { useCodemastersContext } from 'context';
import useToaster from 'hooks/useToaster';
import useModal from 'hooks/useModal';
import validateAnswer from 'helpers/validateAnswer';
import type { Monaco } from '@monaco-editor/react';
import type { editor } from 'monaco-editor/esm/vs/editor/editor.api';

export default function CodeEditor() {
  const { code, taskFinished, dispatch } = useCodemastersContext();
  const toast = useToaster();
  const modal = useModal();
  const [activeEditor, setActiveEditor] = useState<'html' | 'css' | 'js'>(
    'html'
  );
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEditorDidMount = (
    editor: editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
    // Mount editor and monaco instance to refs
    editorRef.current = editor;

    // Define custom theme
    monaco.editor.defineTheme('andromeda', theme);

    // Set theme
    editorRef.current?.updateOptions({ theme: 'andromeda' });
  };

  useEffect(() => {
    editorRef.current?.focus();
  }, [activeEditor]);

  const handleEditorChange = (value: string | undefined) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      dispatch({
        type: files[activeEditor].dispatch,
        payload: value,
      });
    }, 2000);
  };

  return (
    <>
      <HStack padding='zero' spacing='zero'>
        <Tabs>
          <Tabs.List borderBottom='none' width='100%' overflowX='scroll'>
            {Object.entries(files).map(([key, value]) => (
              <Tabs.Item
                as='button'
                onClick={() => setActiveEditor(key as 'html' | 'css' | 'js')}
                name={key}
                key={key}
                data-id={key === 'html' ? 'initial-tab' : `${key}-tab`}
              >
                <value.icon />
                <Tabs.Item.Text>{value.name}</Tabs.Item.Text>
              </Tabs.Item>
            ))}
          </Tabs.List>
        </Tabs>
      </HStack>
      <Editor
        height='calc(100% - 53px - 56px)'
        path={files[activeEditor].name}
        defaultLanguage={files[activeEditor].language}
        defaultValue={code[activeEditor]}
        onMount={handleEditorDidMount}
        options={options}
        onChange={handleEditorChange}
        loading={<Text color='berrySmoothie600'>Loading...</Text>}
      />
      <HStack padding='xs' spacing='xs'>
        <Tooltip title='Submit Answer'>
          <PrimaryButton
            size='small'
            as='button'
            onClick={() =>
              validateAnswer(
                code.full,
                toast.open,
                modal.open,
                taskFinished,
                dispatch
              )
            }
            disabled={taskFinished === 6}
          >
            Submit
          </PrimaryButton>
        </Tooltip>
        <Tooltip title='Format Code'>
          <PrimaryButton
            size='small'
            borderRadius='circle'
            padding='zero'
            width='l'
            minWidth='zero'
            as='button'
            onClick={() => {
              editorRef.current?.trigger(
                'editor',
                'editor.action.formatDocument',
                {}
              );
            }}
          >
            <GiBroom />
          </PrimaryButton>
        </Tooltip>
      </HStack>
    </>
  );
}
