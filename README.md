# Angular Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

Built on: Angular: 10.1.3 & Angular CLI: 10.1.3 Node: 12.18.4

## Usage & how-to

For usage and read-me run ng s in project root dir.

## Install

To use the library do the following

```bash
$ npm i @radolfsson/ng-common-library
```

Install all dependencies

import modules (pipes and components)

```bash
import { NgCommonComponentModule, NgCommonPipeModule } from '@radolfsson/ng-common-library';
```

Add the default library theme in 'angular.json'

```bash
"styles": [
  "src/styles.scss",
  "node_modules/@radolfsson/ng-common-library/_theme.scss"
]
```

Installation done!