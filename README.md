# 🛒 DRF React E-Commerce

A full-stack e-commerce application built with **Django REST Framework** and **React**.

The project combines a REST API backend with a React frontend to create a complete web application and serves as a practical project for learning how modern frontend and backend applications communicate through APIs.

## ✨ Features

* Product-focused e-commerce interface
* REST API powered by Django REST Framework
* React frontend
* Frontend-to-backend API communication
* Separate backend and frontend applications
* Structured full-stack architecture

## 🛠️ Tech Stack

### Backend

* **Python**
* **Django**
* **Django REST Framework**

### Frontend

* **React**
* **JavaScript**

## 🏗️ Architecture

The application is divided into two main parts:

```text
drf-react-ecom/
├── backend/
│   └── Django + Django REST Framework
│
└── frontend/
    └── React application
```

The React frontend communicates with the Django REST API to retrieve and manipulate application data.

## 🚀 Getting Started

### Backend

```bash
cd backend

python -m venv venv
source venv/bin/activate

pip install -r requirements.txt

python manage.py migrate
python manage.py runserver
```

### Frontend

In a separate terminal:

```bash
cd frontend

npm install
npm run dev
```

The frontend and backend can then be run simultaneously during development.

## 🧠 What I Learned

This project helped me gain practical experience with full-stack application development, particularly:

* Building REST APIs with Django REST Framework
* Connecting a React frontend to a backend API
* Separating frontend and backend responsibilities
* Working with HTTP requests and API responses
* Structuring a full-stack application
* Managing development environments for separate frontend and backend projects

## 📁 Project Structure

```text
drf-react-ecom/
│
├── backend/       # Django REST Framework backend
│
└── frontend/      # React frontend
```

## 🔮 Future Improvements

* [ ] Improve UI/UX and responsive design
* [ ] Add comprehensive automated tests
* [ ] Improve API documentation
* [ ] Add more advanced product filtering and search
* [ ] Add additional e-commerce functionality
* [ ] Deploy the application

## 📌 Project Status

**Completed learning project**

Built to gain hands-on experience developing a full-stack application using Django REST Framework and React.
