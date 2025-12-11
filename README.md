# 🔍 Random GitHub Repo Finder
contact info :  
     ###   instagram : ank.0119.yadav 
      ###  telegram : computernotes_1 || @ank09yadav 
      ###  LinkedIn : https://www.linkedin.com/in/ankuryadavank09012004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app  
        
A simple and efficient React Native mobile application built with **Expo**. This app allows users to enter a GitHub username and instantly discover a **random repository** from that user's public portfolio.

## 📱 Features

* **User Input:** Clean interface to input any valid GitHub username.
* **Randomizer:** One-tap button to fetch a random repository.
* **Repository Details:** Displays key information like repo name, description, stars, and language.
* **Error Handling:** Alerts users if the username is invalid or has no public repositories.

## 🛠️ Tech Stack

* **Framework:** React Native (Expo)
* **Package Manager:** Bun
* **API:** GitHub REST API

---

## 🚀 Getting Started Locally

Follow these steps to run the project on your machine.

### 1. Prerequisites
Make sure you have the following installed:
* [Node.js](https://nodejs.org/) (LTS)
* [Bun](https://bun.sh/)
* [Expo Go app](https://expo.dev/client) on your physical device.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone [https://github.com/your-username/github-repo-finder.git](https://github.com/your-username/github-repo-finder.git)
cd github-repo-finder
bun install
```
### Run the app 
```bash
bun start
```
How to Build an APK (Android)
Follow this step-by-step guide to export this project as an installable APK file for Android devices.

Step 1: Install EAS CLI
You need the Expo Application Services tool globally.

Bash
```bash
npm install -g eas-cli
```
Step 2: Login to Expo
Log in with your Expo credentials.

```bash
eas login
```
Step 3: Configure the Build
Initialize the build configuration. Select Android when prompted.

```bash
eas build:configure
```
Step 4: Update eas.json
Open the generated eas.json file and modify the preview profile to ensure it generates an APK (not an AAB). It should look like this:

JSON
```bash
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {}
  }
}
```
Step 5: Run the Build
Execute the build command for the preview profile:

```bash
eas build -p android --profile preview
```
Step 6: Download & Install
Wait for the build to finish (approx. 10–15 mins).

Expo will provide a download link in the terminal.

Open the link on your Android phone, download the .apk, and install it.
