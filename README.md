# url-shortener-system
Scalable URL Shortener built with Node.js, Express, MongoDB, and Angular with unique ID generation, redirection, and click analytics.
# 🔗 Distributed URL Shortener System

## 🚀 Overview
This project is a scalable URL Shortener system that converts long URLs into short, shareable links and efficiently redirects users to the original destination. The system is designed with performance, scalability, and simplicity in mind.

---

## 🛠️ Tech Stack
- **Frontend:** Angular
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other Tools:** REST APIs, Git

---

## ⚙️ Features
- 🔹 Generate short URLs from long URLs
- 🔹 Fast redirection to original URLs
- 🔹 Unique short code generation
- 🔹 Click tracking and analytics
- 🔹 RESTful API design
- 🔹 Modular and scalable backend architecture

---

## 🧠 System Design

### Flow:
User → Frontend → Backend API → Database → Short URL  

When accessing short URL:  
Short URL → Backend → Database Lookup → Redirect to Original URL  

---

## 📂 Project Structure
