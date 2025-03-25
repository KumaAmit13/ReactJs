# MegaBlog

MegaBlog is a **React.js** web application powered by **Appwrite** for backend services. This blog platform allows users to upload posts, view posts, and like posts. It is built using the **BaaS** (excluding MongoDB/Express for now) with Redux for state management.

## Features

✅ **User Authentication** – Users can sign up, log in, and manage their accounts.  
✅ **Create & Edit Posts** – Users can create, edit, and delete their own blog posts.  
✅ **Like Posts** – Users can like posts, and likes are stored using Redux.  
✅ **Appwrite Backend** – Manages user authentication, post storage, and media files.  
✅ **Responsive UI** – Built using **Tailwind CSS** for a modern, mobile-friendly design.  

## Tech Stack

- **Frontend**: React.js, Redux, Tailwind CSS
- **Backend**: Appwrite (Database, Storage, Authentication)
- **State Management**: Redux Toolkit
- **Routing**: React Router

## Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/KumaAmit13/ReactJs.git
cd ReactJs/12MegaBlog
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and configure it with your **Appwrite credentials**:
```env
REACT_APP_APPWRITE_PROJECT_ID=your_project_id
REACT_APP_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
REACT_APP_APPWRITE_DATABASE_ID=your_database_id
```

### 4️⃣ Run the Development Server
```bash
npm start
```
The app will be available at `http://localhost:3000/`.

## Folder Structure
```bash
12MegaBlog/
│── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components (Home, Post Details, etc.)
│   ├── redux/            # Redux store, slices
│   ├── appwrite/         # Appwrite configurations
│   ├── assets/           # Images, icons, and styles
│── public/
│── .env                  # Environment variables
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation
```

## Contributing
If you'd like to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to your branch (`git push origin feature-name`).
5. Open a Pull Request!
