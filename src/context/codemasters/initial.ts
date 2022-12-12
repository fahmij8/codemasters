import type { StructInitialContext } from 'types';

const initialContext: StructInitialContext = {
  code: {
    html: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>

<body>
  <!-- Your HTML here -->
  <h1>Heading 1</h1>
  <h2 id="heading-2">Heading 2</h2>
  <h3>Heading 3</h3>
</body>

</html>`,
    css: ` /* CSS Reset, Don't delete this */
* {
  margin: 0;
  padding: 0;
}

h1 {
  color: rgb(255, 0, 0);
}

/* Your CSS here */
`,
    js: `console.log("Hello World!");
// Feel free to remove the line above
// Your JS here
document.querySelector("#heading-2").innerText = "Bye World!";`,
    full: '',
  },
  taskFinished: 0,
};

export default initialContext;
