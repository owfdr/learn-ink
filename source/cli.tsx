#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ learn-ink

	Options
		--name  Your name
		--age 	Your age

	Examples
	  $ learn-ink --name=Jane
	  Hello, Jane
	  
	  $ learn-ink --age=20
	  You are 20 years old. 
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
			},
			age: {
				type: 'number',
			},
		},
	},
);

render(<App {...cli.flags} />);
