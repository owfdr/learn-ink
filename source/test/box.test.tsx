import test from 'ava';
import React from 'react';
import {Text, Box} from 'ink';
import {render} from 'ink-testing-library';

test('on Box', t => {
	const like = '<div style="display: flex">';
	t.regex(like, /flex/);
});

test('example', t => {
	const {lastFrame} = render(
		<Box>
			<Text>a</Text>
			<Text>b</Text>
		</Box>,
	);
	t.is(lastFrame(), 'ab');
	t.log(lastFrame());
});

test('width (number)', t => {
	const {lastFrame} = render(
		<Box width={1}>
			<Text>width 1</Text>
		</Box>,
	);
	t.is(lastFrame(), 'w\ni\nd\nt\nh\n\n1');
	t.log(lastFrame());
});

test('width (%)', t => {
	const component = (
		<Box>
			<Box width="50%">
				<Text>left</Text>
			</Box>
			<Box width="50%">
				<Text>right</Text>
			</Box>
		</Box>
	);
	const {lastFrame} = render(component);

	t.regex(lastFrame() ?? '', /left.*?right/);
	t.log(lastFrame());
});

test('height (number)', t => {
	const {lastFrame} = render(
		<Box height={3}>
			<Text>height 3</Text>
		</Box>,
	);
	t.is(lastFrame(), 'height 3\n\n');
	t.log(lastFrame());
});

test('height (%)', t => {
	const component = (
		<Box height="50%">
			<Text>top</Text>
		</Box>
	);
	const {lastFrame} = render(component);

	t.is(lastFrame(), 'top');
	t.log(lastFrame());
});

test('minWidth', t => {
	t.pass('minWidth');
});

test('minHeight', t => {
	t.pass('minHeight');
});

test('padding', t => {
	const {lastFrame} = render(
		<Box padding={1}>
			<Text>padding 1</Text>
		</Box>,
	);
	t.is(lastFrame(), '\n padding 1\n');
	t.log(lastFrame());
});

test('other padding options', t => {
	const options = [
		'paddingTop',
		'paddingBottom',
		'paddingLeft',
		'paddingRight',
		'paddingX',
		'paddingY',
		'padding',
	];
	t.is(options.length, 7);
});

test('margin', t => {
	const {lastFrame} = render(
		<Box margin={1}>
			<Text>margin 1</Text>
		</Box>,
	);
	t.is(lastFrame(), '\n margin 1\n');
	t.log(lastFrame());
});

test('other margin options', t => {
	const options = [
		'marginTop',
		'marginBottom',
		'marginLeft',
		'marginRight',
		'marginX',
		'marginY',
		'margin',
	];
	t.is(options.length, 7);
});

test('on gap', t => {
	const between = "element's columns and rows";
	t.regex(between, /columns and rows/);
});

test('gap', t => {
	const {lastFrame} = render(
		<Box gap={1} width={3} flexWrap="wrap">
			<Text>1</Text>
			<Text>2</Text>
			<Text>3</Text>
		</Box>,
	);
	t.is(lastFrame(), '1 2\n\n3');
	t.log(lastFrame());
});
