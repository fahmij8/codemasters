import Editor from '@monaco-editor/react';

export default function CodeEditor() {
  return (
    <Editor
      height='100%'
      defaultLanguage='javascript'
      defaultValue='// some comment'
      theme='vs-dark'
    />
  );
}
