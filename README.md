# Study Buddy

**Study Buddy** is a web-based platform designed to help students organize, schedule, and manage their study sessions.  
Users can view their current classes, upcoming meetings, and easily connect with study partners.  

This project focuses on simplicity, accessibility, and collaborative learning.

---

## Features

- **Dashboard of current classes**
- **Schedule and view study meetings**
- **Manage attendees and collaborators**
- **Contact page for feedback and questions**
- **Clean, responsive design with custom CSS**

---

## Project Structure

Study-Buddy/

│

├── index.html                # Homepage

├── attendees.html            # Attendees list page

├── curr_classes.html         # Displays enrolled classes

├── curr_meetings.html        # Shows active study meetings

├── new_meeting.html          # Create a new meeting

├── sign_up.html              # Registration page

│

├── index.js                  # Homepage script

├── new_meeting.js            # Handles meeting form logic

│

├── index_stylesheet.css

├── attendees_stylesheet.css

├── curr_classes_stylesheet.css

├── curr_meetings_stylesheet.css

├── new_meeting_stylesheet.css

├── sign_up_stylesheet.css

├── contact_us_stylesheet.css

│

├── images/                   # (Optional) Social and UI icons

│   ├── buddies.png

│   ├── facebook.png

│   ├── instagram.jpeg

│   ├── x.png

│

└── contact_us.html           # Contact page

---

## How to Run Locally

You don’t need any special setup — just open the files in your browser!

1. **Clone the repository**
   bash:

   git clone https://github.com/trianglu/Study-Buddy.git
   
   cd Study-Buddy

2. **Open the project**

   * Double-click index.html, or
   
   * Use a local server (recommended for JS features):

bash:
     npx http-server

     Then visit [http://localhost:8080](http://localhost:8080)

---

## Technologies Used

| Technology             | Purpose                        |
| ---------------------- | ------------------------------ |
| **HTML5**              | Structure of the web pages     |
| **CSS3**               | Styling and layout             |
| **JavaScript (ES6)**   | Interactive behavior and logic |
| **Visual Studio Code** | Development environment        |

---

## Future Enhancements

* Add user authentication and login system
* Store meetings and attendees using a backend (Node.js + MongoDB)
* Implement dark mode and mobile optimizations
* Integrate Google Calendar for event syncing

---

## Contributing

If you’d like to improve Study Buddy:

1. Fork the repo
2. Create a new branch (`feature/your-feature-name`)
3. Commit your changes
4. Open a pull request

---

## 🧑‍💻 Author

**trianglu**
GitHub: [@trianglu](https://github.com/trianglu)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify it as you wish.
