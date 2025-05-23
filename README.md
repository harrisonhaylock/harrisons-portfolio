# Harrison Haylock's Portfolio Website 

Welcome to my professional portfolio website! This site showcases my background, education, skills, projects, and includes a live contact form backed by MongoDB Atlas. 

## Project Structure 
HarrisonsWebsite/ ├── client/ # Frontend files (HTML, CSS, JS, assets) │ ├── HarrisonPortfolio.html │ ├── Contact.html │ ├── styles.css │ ├── index.js │ └── assets/ │ ├── headshot.jpeg │ └── Harrison_Haylock_Resume.pdf ├── server/ # Backend Node.js API │ ├── server.js │ ├── package.json │ ├── .env # MongoDB URI (NOT uploaded) │ └── models/ │ └── Inquiry.js ├── .gitignore └── README.md  


---

## 💡 Features

- ✅ Clean, responsive single-page portfolio
- ✅ Light/dark theme toggle
- ✅ Scroll-based UI animations
- ✅ Functional contact form using:
  - Node.js + Express
  - MongoDB Atlas
  - Mongoose ORM

---

## 📬 Contact Form Backend

When a user submits the form on `Contact.html`, it sends a `POST` request to:


Your Express backend (in `server.js`) receives the data and stores it in your MongoDB Atlas collection.

---

## 🛠 Technologies Used

**Frontend**:
- HTML5
- CSS3 (custom styles)
- JavaScript

**Backend**:
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv
- CORS / body-parser

---

## 🔒 Environment Variables

Create a `.env` file inside the `server/` folder:


This file is ignored via `.gitignore` to keep credentials private.

---

## 🚀 Deployment Instructions (Optional)

**To deploy the backend on Render**:

1. Push project to GitHub
2. Create a new Web Service on [https://render.com](https://render.com)
3. Set:
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Root directory: `server`
4. Add your `MONGO_URI` as an environment variable in Render

---

## 👤 Author

**Harrison Haylock**  
Management Information Systems Major  
San Jose State University  
📧 [Email Me](mailto:harrison.haylock03@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/harrisonhaylock)

---

## 📌 License

This project is for educational and professional portfolio purposes only.

