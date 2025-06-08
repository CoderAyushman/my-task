# ✅ My Task – Task Management App  
**by Ayushman Mishra**

---
> ❗**Note:** Expo notifications **require a development build on a real device** (not Expo Go) starting from **Expo SDK 53**.

> 📲 So I built the APK file using `eas build --profile preview --platform android` to help you properly test the app, including notification features.

> 📥 **Install the fully functional My Task App directly from the official Expo preview link**-**<a href="https://expo.dev/accounts/ayushmanmishra/projects/task-mate/builds/d7a518a2-ef07-4488-a1c7-cd422c7ac655" target="_blank" rel="noopener noreferrer">Download APK for My Task App</a>**



---
## 📱 Overview

**My Task** is a lightweight, clean, and user-friendly task management mobile application designed especially for gig workers and busy individuals. It enables users to stay organized by managing their tasks with ease—allowing the creation, editing, deletion, and filtering of tasks based on completion status and priority levels. Built with **React Native using Expo**, the app uses **Firebase Authentication and Firestore** for a reliable backend, and follows **clean architecture** for scalable development.

---

## ⚙️ Setup & Running the App (Expo Go)

Follow these steps to get started with development or testing on your device:

### 🧱 Prerequisites

- Node.js (v18 or above recommended)
- Yarn or npm
- Expo CLI (`npm install -g expo-cli`)
- A Firebase Project
- A real Android/iOS device (for local push notifications using Expo SDK 53+)



---

### 🚀 Installation Steps

1. **Clone this repo**
   ```bash
   git clone https://github.com/your-username/my-task.git
   cd my-task
---
## 🛠️ Installation & Running

### 📦 Install dependencies

```bash
yarn install
# or
npm install
```
### Run the project
```bash
expo start
```
---
## Test on a real device (mandatory for push notifications)

    Use expo-dev-client or run a development build via:

        eas build --profile development --platform android
---
## ✨ Features

### 🔐 Authentication

- Email/password registration and login via Firebase  
- Appropriate error handling and validation feedback for user inputs  

---

### ✅ Task Management

- Add tasks with title, description, due date, and priority (Low / Medium / High)  
- Edit tasks anytime  
- Delete tasks with confirmation  
- Mark tasks as complete/incomplete with a visual indicator (e.g., color or style change)  

---

### ☁️ Cloud Sync with Firebase Firestore

- All task data is stored securely in **Firebase Firestore**  
- Ensures data persistence even if the app is deleted or reinstalled  
- Avoids the limitations of local-only storage like `AsyncStorage`, which loses data on uninstall  
- Real-time updates and syncing across devices (if multi-device support is added in the future)

---

### 📊 Task Filtering

- Filter task list by priority (Low, Medium, High)  
- Toggle view between completed and incomplete tasks  
- All tasks are sorted by due date automatically for better planning  

---

### 🔔 Local Notifications

- When a new task is created, the app schedules a local notification as a reminder  
- Notifications include task title and a helpful message (e.g., "Reminder: Finish [Task Name]!")  
- **Note:** Notifications only work in development builds due to Expo SDK 53+  

---

## 🧠 Bonus Points & Thoughtful Design Additions

- ✨ **Dynamic Notification Scheduling**: Each task automatically schedules a local notification to remind the user after a set time (e.g., 5 minutes).  
- 🧹 **Notification Cleanup (Bonus)**: If a task is marked complete before the reminder triggers, the app attempts to cancel the scheduled notification.  
- 📱 **UI Responsiveness**: Designed using `Dimensions` and `%` based layout to ensure it looks good on both small and large screen devices.  
- 🧩 **Separation of Concerns**: Logic is split across `features`, `core`, and `app` folders, keeping UI and data responsibilities distinct and maintainable.  
- 🔍 **Expo Router** is used for file-based navigation, while logic-heavy components are decoupled and stored in external `features/` directory.  

## 🧠 Challenges & Design Decisions

- 🔐 **Expo SDK 53 Notification Limitation:** One of the major challenges was implementing local push notifications using Expo's `expo-notifications` module. With SDK 53, notifications are not supported in the default Expo Go app. To overcome this, I created a development build using `expo-dev-client`, which allowed me to test the notification functionality on a real device.
---



Thank you!  
**— Ayushman Mishra**
