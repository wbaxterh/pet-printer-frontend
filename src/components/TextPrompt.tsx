import React from "react";
import { TextField } from "@mui/material";

interface TextPromptProps {
	textPrompt: string;
	onTextChange: (text: string) => void;
}

const TextPrompt: React.FC<TextPromptProps> = ({
	textPrompt,
	onTextChange,
}) => {
	return (
		<TextField
			label='Enter a Text Prompt'
			variant='outlined'
			fullWidth
			value={textPrompt}
			onChange={(e) => onTextChange(e.target.value)}
		/>
	);
};

export default TextPrompt;
