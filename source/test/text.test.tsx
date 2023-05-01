import test from 'ava';
import chalk from 'chalk';
import React from 'react';
import {Text, Box} from 'ink';
import {render} from 'ink-testing-library';

test('on Text', t => {
	const can = ['display text', 'change styles'];
	t.is(can.length, 2);
});

test('example', t => {
	const {lastFrame} = render(<Text>example</Text>);
	t.is(lastFrame(), 'example');
	t.log(lastFrame());
});

test('on nesting', t => {
	const only = 'text nodes are allowed';
	t.regex(only, /text nodes/);
});

test('ab', t => {
	const {lastFrame} = render(
		<Text>
			a<Text>b</Text>
		</Text>,
	);
	t.is(lastFrame(), 'ab');
});

test('on color', t => {
	const uses = 'chalk under the hood';
	t.regex(uses, /chalk/);
});

test('green (string)', t => {
	const {lastFrame} = render(<Text color="green">green</Text>);
	t.is(lastFrame(), chalk.green('green'));
	t.log(lastFrame());
});

test('white (hex)', t => {
	const {lastFrame} = render(<Text color="#ffffff">white</Text>);
	t.is(lastFrame(), chalk.hex('#ffffff')('white'));
	t.log(lastFrame());
});

test('yellow (rgb)', t => {
	const {lastFrame} = render(<Text color="rgb(255, 255, 0)">yellow</Text>);
	t.is(lastFrame(), chalk.rgb(255, 255, 0)('yellow'));
	t.log(lastFrame());
});

test('on backgroundColor', t => {
	const same = 'as color';
	t.regex(same, /as color/);
});

test('black on white', t => {
	const {lastFrame} = render(
		(
			<Text color="black" backgroundColor="white">
				black on white
			</Text>
		) as any,
	);
	t.is(lastFrame(), chalk.bgWhite.black('black on white'));
	t.log(lastFrame());
});

test('on dimColor', t => {
	const emit = 'small amount of light';
	t.regex(emit, /small.*?light/);
});

test('dimmed red', t => {
	const {lastFrame} = render(
		<Text dimColor color="red">
			dimmed red
		</Text>,
	);
	t.is(lastFrame(), chalk.red.dim('dimmed red'));
	t.log(lastFrame());
});

test('bold', t => {
	const {lastFrame} = render(<Text bold>bold</Text>);
	t.is(lastFrame(), chalk.bold('bold'));
	t.log(lastFrame());
});

test('italic', t => {
	const {lastFrame} = render(<Text italic>italic</Text>);
	t.is(lastFrame(), chalk.italic('italic'));
	t.log(lastFrame());
});

test('underline', t => {
	const {lastFrame} = render(<Text underline>underline</Text>);
	t.is(lastFrame(), chalk.underline('underline'));
	t.log(lastFrame());
});

test('strikethrough', t => {
	const {lastFrame} = render(<Text strikethrough>strikethrough</Text>);
	t.is(lastFrame(), chalk.strikethrough('strikethrough'));
	t.log(lastFrame());
});

test('on inverse', t => {
	const inverse = 'background and foreground colors';
	t.regex(inverse, /background.*?foreground/);
});

test('inverse', t => {
	const {lastFrame} = render(
		<Text inverse color="yellow">
			inverted yellow
		</Text>,
	);
	t.is(lastFrame(), chalk.inverse.yellow('inverted yellow'));
	t.log(lastFrame());
});

test('on wrap', t => {
	const passed = 'by default';
	const values = [
		'wrap', // Default
		'truncate', // Alias to truncate-end
		'truncate-start',
		'truncate-middle',
		'truncate-end',
	];
	t.regex(passed, /by default/);
	t.is(values.length, 5);
});

test('wrap', t => {
	const {lastFrame} = render(
		<Box width={7}>
			<Text wrap="wrap">hello world</Text>
		</Box>,
	);
	t.is(lastFrame(), 'hello\nworld');
	t.log(lastFrame());
});

test('truncate', t => {
	const {lastFrame} = render(
		<Box width={7}>
			<Text wrap="truncate">hello world</Text>
		</Box>,
	);
	t.is(lastFrame(), 'hello …');
	t.log(lastFrame());
});

test('truncate-start', t => {
	const {lastFrame} = render(
		<Box width={7}>
			<Text wrap="truncate-start">hello world</Text>
		</Box>,
	);
	t.is(lastFrame(), '… world');
	t.log(lastFrame());
});

test('truncate-middle', t => {
	const {lastFrame} = render(
		<Box width={7}>
			<Text wrap="truncate-middle">hello world</Text>
		</Box>,
	);
	t.is(lastFrame(), 'hel…rld');
	t.log(lastFrame());
});

test('truncate-end', t => {
	const {lastFrame} = render(
		<Box width={7}>
			<Text wrap="truncate-end">hello world</Text>
		</Box>,
	);
	t.is(lastFrame(), 'hello …');
	t.log(lastFrame());
});
