import React from 'react';
import {Text} from 'ink';

type Props = {
	name?: string;
	age?: number;
};

export default function App({name, age}: Props) {
	return (
		<>
			{name && (
				<Text>
					Hello, <Text color="green">{name}!</Text>
				</Text>
			)}
			{age && (
				<Text>
					You are <Text color="green">{age}</Text> years old.
				</Text>
			)}
		</>
	);
}
