import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

interface ImagePickerProps {
	onImageChange: (file: File) => void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ onImageChange }) => {
	const [previewSrc, setPreviewSrc] = useState<string | null>(null);
	const [imageName, setImageName] = useState<string | null>(null);

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setPreviewSrc(URL.createObjectURL(file));
			setImageName(file.name);
			onImageChange(file);
		}
	};

	return (
		<Box display='flex' alignItems='center'>
			<Box mr={2}>
				<Button variant='contained' component='label'>
					Upload Image
					<input
						type='file'
						hidden
						accept='image/*'
						onChange={handleImageUpload}
					/>
				</Button>
			</Box>
			{previewSrc && (
				<Box>
					<Box
						component='img'
						src={previewSrc}
						alt='Preview'
						sx={{
							width: 100,
							height: 100,
							objectFit: "cover",
							borderRadius: 1,
						}}
					/>
					{imageName && (
						<Typography variant='body2' mt={1}>
							{imageName}
						</Typography>
					)}
				</Box>
			)}
		</Box>
	);
};

export default ImagePicker;
