# modal-calculator

For local use, to avoid CORS policy problem: run on local server (with http-server for example `npm install -g http-server`)

## Angular use

Go to your Angular project directory

Type `npm i modal-calculator` to install modal-calculator package

In your component.html add:

```
<div id="container">
  <button id="calcBtn">Open</button>
  <p>Click "open" button to open the modal calculator.</p>

  <div id="calculator"></div>
</div>
```

In your component.ts add:

```
import {ViewEncapsulation} from '@angular/core';

@Component({
  ...
  styleUrls: [
    ...
    '../../node_modules/modal-calculator/style.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
```

The path `'../../node_modules/modal-calculator/style.css'` may be different, just point to node_modules directory.

Then load script after init:
`import { AfterViewInit } from '@angular/core';`
`export class YourComponent implements AfterViewInit {...`

```
ngAfterViewInit() {
  import('modal-calculator/index.js');
}
```
