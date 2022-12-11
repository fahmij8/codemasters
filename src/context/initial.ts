import type { StructInitialContext } from 'types';

const initialContext: StructInitialContext = {
  code: {
    html: '<p>Hello World!</p>',
    css: `html {
      margin: 0;
      padding: 0;
    }`,
    js: 'console.log("Hello World!");',
  },
};

export default initialContext;
