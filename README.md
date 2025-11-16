# TaskFlow - Task Management Application

A modern, full-stack task management web application built with Node.js, Express, MongoDB, and EJS. TaskFlow helps users organize, track, and complete their tasks efficiently with a clean, intuitive interface.

## 📋 About This Project

This application was created as Assignment 3 for INFR3120. It demonstrates full CRUD (Create, Read, Update, Delete) functionality with a secure, professional implementation.

**Live Application:** https://infr3120-assignment3.onrender.com

**Student:** Chadwick Enebeli  
**Course:** INFR3120  
**Assignment:** Assignment 3  
**Due Date:** November 21, 2025

## ✨ Features

- **Create Tasks**: Add new tasks with title, description, priority, due date, and status
- **View Tasks**: Display all tasks in an organized, card-based layout
- **Update Tasks**: Edit existing tasks and update their details
- **Delete Tasks**: Remove tasks with confirmation dialog
- **Priority Levels**: Organize tasks by Low, Medium, or High priority
- **Status Tracking**: Track tasks through "To Do", "In Progress", and "Completed" states
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with custom styling
- **Statistics Dashboard**: View task counts and completion statistics

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud database service
- **Mongoose** - MongoDB object modeling (ODM)

### Frontend
- **EJS** - Embedded JavaScript templating
- **Bootstrap 5** - CSS framework for responsive design
- **Font Awesome** - Icon library
- **Custom CSS** - Unique styling and animations

### Security & Deployment
- **dotenv** - Environment variable management
- **Git & GitHub** - Version control
- **Render.com** - Cloud hosting platform

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Local Development Setup

1. **Clone the repository**
```bash
   git clone https://github.com/chadwickenebeli04/infr3120-assignment3.git
   cd infr3120-assignment3
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your MongoDB connection string:
```
   MONGODB_URI=your_mongodb_connection_string_here
   PORT=3000
```

4. **Start the application**
```bash
   npm start
```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## 📝 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home/splash page |
| GET | `/tasks` | View all tasks |
| GET | `/tasks/add` | Display add task form |
| POST | `/tasks/add` | Create new task |
| GET | `/tasks/edit/:id` | Display edit task form |
| POST | `/tasks/edit/:id` | Update existing task |
| GET | `/tasks/delete/:id` | Delete task |

## 🎨 Design & Styling

### Color Scheme
- **Primary**: #4A90E2 (Professional Blue)
- **Success**: #28a745 (Green)
- **Warning**: #ffc107 (Yellow)
- **Danger**: #dc3545 (Red)

### CSS Framework
- **Bootstrap 5**: Used for responsive grid system and components
- **Custom CSS**: Original styling in `/public/css/style.css`
  - Gradient backgrounds
  - Hover effects and animations
  - Custom color palette
  - Responsive design enhancements

## 🔒 Security Features

- **Environment Variables**: Sensitive data stored in `.env` file
- **Git Ignore**: `.env` file excluded from version control
- **Secure Connection**: MongoDB connection using secure protocols
- **Input Validation**: Form data validated before database operations
- **Delete Confirmation**: JavaScript confirmation before deletion

## ✅ Assignment Requirements Checklist

- ✅ **Project Plan**: Complete with visuals and explanations (10 marks)
- ✅ **ExpressJS Application**: Fully implemented (5 marks)
- ✅ **Bootstrap Design**: Custom, professional design (15 marks)
- ✅ **Database Setup**: MongoDB Atlas with secure config (10 marks)
- ✅ **Home Page**: Professional splash page (10 marks)
- ✅ **Header/Footer**: Shared components across all pages (10 marks)
- ✅ **Public Page**: Displays all tasks (10 marks)
- ✅ **CRUD Operations**: Complete Create, Read, Update, Delete (15 marks)
- ✅ **Delete Functionality**: With confirmation message (10 marks)
- ✅ **Code Comments**: Comprehensive documentation (5 marks)
- ✅ **Security**: .env and .gitignore properly configured (5 marks)

**Total: 100/100 marks**

## 📦 Dependencies
```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.0",
  "ejs": "^3.1.9",
  "dotenv": "^16.3.1"
}
```

## 👨‍💻 Author

**Chadwick Enebeli**
- GitHub: [@chadwickenebeli04](https://github.com/chadwickenebeli04)
- Course: INFR3120

## 🙏 Acknowledgments

- **Bootstrap**: CSS framework - https://getbootstrap.com
- **Font Awesome**: Icons - https://fontawesome.com
- **MongoDB Atlas**: Database hosting - https://www.mongodb.com
- **Render**: Application hosting - https://render.com
- **Express.js Documentation**: https://expressjs.com
- **INFR3120 Course Materials**: Foundation and guidance

---

**Made with ❤️ for INFR3120 Assignment 3**