import React, { useState } from "react";
import ImagePicker from "./components/ImagePicker";
import TextPrompt from "./components/TextPrompt";
import SubmitButton from "./components/SubmitButton";
import { generateArt } from "./api/api";
import { Container, Typography, Box } from "@mui/material";

const App: React.FC = () => {
	const [image, setImage] = useState<File | null>(null);
	const [textPrompt, setTextPrompt] = useState<string>("");

	const handleSubmit = async () => {
		if (!image && !textPrompt) {
			alert("Please provide an image or a text prompt.");
			return;
		}

		const formData = new FormData();
		if (image) formData.append("image", image);
		if (textPrompt) formData.append("textPrompt", textPrompt);

		try {
			const result = await generateArt(formData);
			console.log("Art generated:", result);
			// Handle the generated art (display it, etc.)
		} catch (error) {
			console.error("Failed to generate art:", error);
		}
	};

	return (
		<Container>
			<Typography variant='h3' gutterBottom>
				Pet Art Generator
			</Typography>
			<Box mb={2}>
				<ImagePicker onImageChange={setImage} />
			</Box>
			<Box mb={2}>
				<TextPrompt textPrompt={textPrompt} onTextChange={setTextPrompt} />
			</Box>
			<Box mb={2}>
				<SubmitButton onSubmit={handleSubmit} />
			</Box>
		</Container>
	);
};

export default App;
