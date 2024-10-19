# Pet Art Generator

This project is a **Pet Art Generator** that allows users to upload an image of their pet or provide a text prompt to generate AI art. The frontend is built using **React 18** and **Material-UI (MUI)** for the UI, and it's written in **TypeScript**. The app integrates with an API for sending image and text data to generate the art, which will be hosted on **AWS Lambda** and invoked via **API Gateway**.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [API Integration](#api-integration)
- [Deployment](#deployment)

## Project Overview

This application allows users to:

- Upload a pet image.
- Optionally provide a text prompt.
- Generate AI-generated artwork based on the uploaded image and/or text prompt.
- View a preview of the uploaded image before submission.

The project is designed to be embedded into a **WordPress site** as a plugin, but can also run as a standalone React app.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Git](https://git-scm.com/)
- [GitHub CLI (gh)](https://cli.github.com/) for repository management

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wbaxterh/pet-printer-frontend.git
   ```
2. Navigate into the project directory:

`cd pet-printer-frontend`
Install the dependencies:
`npm install`

Start the development server:

```bash
npm start
```

Open http://localhost:3000 to view it in your browser.

## Features

### Image Upload:

Users can upload an image of their pet, which is previewed before submission.

### Text Prompt:

Users can provide a text prompt to guide the art generation.

### Material-UI (MUI):

Clean and responsive UI built using Material-UI components.

### TypeScript:

Fully type-safe code for better development experience and reliability.

### Folder Structure

The folder structure is organized as follows:

```bash
src/
├── api/
│    └── api.ts          # Handles API calls (POST request to the AI service)
├── components/
│    ├── ImagePicker.tsx  # Image upload and preview component
│    ├── TextPrompt.tsx   # Text input field for the prompt
│    └── SubmitButton.tsx # Button to submit the form
├── App.tsx               # Main app structure
├── index.tsx             # Entry point for React app
├── tsconfig.json         # TypeScript configuration
└── global.d.ts           # Module declaration (if needed)
```

### Scripts

In the project directory, you can run the following commands:

`npm start`
Runs the app in development mode.
Open http://localhost:3000 to view it.

The page will automatically reload if you make changes.
You may also see any lint errors in the console.

`npm run build`
Builds the app for production into the build/ folder.
It bundles React in production mode and optimizes the build for the best performance.

`npm run lint`
Runs the linter to ensure code quality.

`npm test`
Launches the test runner in interactive watch mode.

## API Integration

The form data (image and text prompt) is sent as a POST request to an API, which is intended to be handled by an AWS Lambda function behind an API Gateway.

```bash
export const generateArt = async (formData: FormData): Promise<any> => {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error generating art:', error);
    throw error;
  }
};

```

Deployment
To deploy the project:

1. Run the build command to prepare the production build:
   `npm run build`
2. The contents of the build/ folder can be deployed to any static site hosting platform (e.g., AWS S3, Netlify, Vercel) or packaged as a WordPress plugin.
