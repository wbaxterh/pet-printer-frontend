export const generateArt = async (formData: FormData): Promise<any> => {
	try {
		const response = await fetch("/api/generate", {
			method: "POST",
			body: formData,
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Error generating art:", error);
		throw error;
	}
};
