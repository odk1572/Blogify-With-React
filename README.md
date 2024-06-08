 # Blogify

Blogify is a user-friendly blogging platform built with modern web technologies to provide an exceptional blogging experience. This project includes features like user authentication, post management, and a real-time rich text editor.

## Features

- **User Authentication**: Seamlessly login and logout functionality.
- **Post Management**: Create, edit, and delete posts with ease.
- **Rich Text Editor**: Real-time editor powered by TinyMCE for a smooth writing experience.
- **Comprehensive Post Details**: Add titles, slugs, images, and statuses to your posts.
- **Responsive Design**: Ensuring a consistent experience across all devices.

## Technologies Used

### Frontend
- **React.js**: For building a fast and interactive user interface.
- **React Router**: To manage navigation and routing.
- **React Hook Form**: For efficient and scalable form handling.
- **TinyMCE**: As the rich text editor for post creation and editing.

### Backend
- **Appwrite Services**: Backend services for handling authentication and database operations.

## Getting Started

### Prerequisites
- Node.js
- NPM or Yarn
- Appwrite Server

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/blogify.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd blogify
    ```
3. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1. **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
2. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

### Backend Setup

1. **Install Appwrite:**
    Follow the [Appwrite installation guide](https://appwrite.io/docs/installation).

2. **Configure Appwrite:**
    - Create a new project.
    - Set up authentication and database collections.

3. **Configure environment variables:**
    Create a `.env` file in the root of your project and add your Appwrite credentials:
    ```env
    VITE_APPWRITE_ENDPOINT=http://localhost/v1
    VITE_APPWRITE_PROJECT_ID=your_project_id
    VITE_APPWRITE_API_KEY=your_api_key
    ```

### Deployment

To deploy the application, follow the deployment guide of your preferred platform (e.g., Vercel, Netlify).

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact

For any questions or feedback, feel free to reach out to me at [odk1572@email.com]

---

**Blogify** © 2024 by [odk1572](https://github.com/odk1572). All rights reserved.
