# Wander Nest 🏡 #
Wander far, nest easy.

# Overview 🚀 #
Wander Nest is a full-stack web application designed to provide users with a seamless experience for browsing and managing rental rooms or accommodations. The application offers a dynamic, interactive interface for both regular users and administrators, featuring dashboards, user management, and room listings with images and map integrations. "WanderNest" symbolizes a comfortable and welcoming place for wanderers or travelers to temporarily settle in during their journeys.

# Features 🌟 #
* **User Authentication & Authorization**: Secure sign-up and login using JWT and bcrypt. Users can also log in with their Google account via OAuth for a faster experience.
* **OTP Verification**: Enhance account security with OTP-based email verification during sign-up implemented using Nodemailer, ensuring only valid users access the platform.
* **Profile Management**: Users can update their profile details and manage sessions efficiently through a user-friendly interface.
* **Room Listings & CRUD Operations**: Users and admins can create, view, and delete rental room listings with detailed descriptions, pricing, and amenities, allows easy image uploads by providing drag and drop feature implemented using react dropzone, users can efficiently filter the rooms by location and also by price.
* **Image Uploads & Carousels**: Upload multiple images for each roomm, facilitated by Firebase and view them in a beautiful, responsive Swiper.js-powered image carousel.
* **Map Integration**: Pinpoint room locations using Mapbox geocoding, allowing users to visually locate listings on an interactive map.
* **Admin Dashboard**: A dedicated analytics dashboard where admins can view user activity, room stats, and manage everything from one place using Recharts for visual insights, admin can also ban malicious users.
* **Responsive UI Design**: Built with Tailwind CSS, Flowbite, and daisyUI, ensuring a modern, accessible experience.
  
# Tech Stack 🛠 #
* **MongoDB**: NoSQL database used to store user, room, and OTP related data.
* **Express.js**: A fast, unopinionated, minimalist web framework for Node.js that handles the server-side logic and API routing.
* **React.js**: A powerful JavaScript library for building user interfaces, providing a responsive and dynamic front-end experience.
* **Tailwind CSS**: Utility-first CSS framework for designing custom UIs quickly and responsively.
* **Flowbite & daisyUI**: Tailwind CSS-based component libraries that offer prebuilt UI elements to accelerate design.
* **Mapbox**: Mapping platform used for geocoding and displaying interactive room locations on maps.
* **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling the server-side implementation.
* **Firebase**: A platform developed by Google for creating mobile and web applications, used here for profile picture updates and room images uploading.
* **Zustand**: A small, fast, and scalable state-management solution for React applications.

# Screenshots 📸 #
Here are some screenshots showcasing the Wander Nest web app:

[Login and Sign Up Screen](#login-and-sign-up-screen)  
[OTP Verification](#otp-verification)  
[User Interface](#user-interface)  
[Search and Filter](#search-and-filter)  
[Adding a Room](#adding-a-room)  
[User Profile](#user-profile)  
[User Dashboard](#user-dashboard)  
[Admin Dashboard](#admin-dashboard)


## Login and Sign Up Screen ##
[🔝 Back to Screenshots](#screenshots-📸)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(64).png?alt=media&token=8d2912ee-e9d2-416f-a69d-94cbb6c89c12)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(66).png?alt=media&token=459dae94-2ea0-4003-9fb0-8c9413d7e8b8)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(68).png?alt=media&token=e47c8a58-6d66-4a0c-8b95-bea401cfade2)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(72).png?alt=media&token=812884fe-0e1b-4a9e-8807-381705313951)

## OTP Verification ##
[🔝 Back to Screenshots](#screenshots-📸)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(69).png?alt=media&token=02eba28a-2a4a-4c7e-833c-5e149f4c5ee6)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FWhatsApp%20Image%202025-06-16%20at%2015.00.04.jpeg?alt=media&token=eb43fbac-16fb-442c-9dfc-487a2f7d6155)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(70).png?alt=media&token=0fdb3a25-dd2a-42d5-b863-3386966a98f7)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(71).png?alt=media&token=23a639e4-6aef-4632-ad3b-3470626f481d)

## User Interface ##
[🔝 Back to Screenshots](#screenshots-📸)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(62).png?alt=media&token=86d556c6-31cf-4f4c-a8ed-aac8505b7020)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(63).png?alt=media&token=a294e696-e251-4d43-abba-1bfbab8962a0)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(74).png?alt=media&token=2fa48977-a8d1-4e95-89a9-81660bed6c2c)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(75).png?alt=media&token=df19a356-edde-4d1e-aec5-1cb20eb89fad)

## Search and Filter ##
[🔝 Back to Screenshots](#screenshots-📸)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(312).png?alt=media&token=10f488ae-9b11-4906-a040-21e3cb8ce3f6)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(313).png?alt=media&token=2d8e22d3-ba1f-4d32-9018-a9eb159a20da)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(315).png?alt=media&token=ef7aa8b3-6596-40c4-9d40-3ed95157b815)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(316).png?alt=media&token=a94e6dd9-479f-4668-b5f5-82494117e2c2)

## Adding a Room ##
[🔝 Back to Screenshots](#screenshots-📸)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(77).png?alt=media&token=36caf61d-57df-4f37-82e1-725f1caf07da)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(78).png?alt=media&token=c31d6886-16f1-4801-9876-b83eb85e2c9c)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(79).png?alt=media&token=7fc0136e-370d-419b-8852-a2366f3adaee)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(80).png?alt=media&token=9898559f-32e2-4c57-832a-14c7ce36cf9a)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(201).png?alt=media&token=46760ce4-9947-4481-a547-1e07e84275f6)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(202).png?alt=media&token=5928d408-0d8c-4499-bcc2-094e34539bd3)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(203).png?alt=media&token=558d8c3d-30f8-4cbb-b725-ee4d14a06df5)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(204).png?alt=media&token=6ba7fa95-0292-49cd-aeb8-9140d8a9e115)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(205).png?alt=media&token=a790810d-bcb5-4b7d-aad6-d1fc0f0aa0e7)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(277).png?alt=media&token=17bcb728-5f73-46c1-986e-a0bfb5a79281)

## User Profile ##
[🔝 Back to Screenshots](#screenshots-📸)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(236).png?alt=media&token=9deb3fe1-01fe-4f68-832f-3395bda97d66)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(240).png?alt=media&token=b4f62c7c-6f09-4a73-b079-58945c90abbd)

## User Dashboard ##
[🔝 Back to Screenshots](#screenshots-📸)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(274).png?alt=media&token=abd8f7a5-0e13-4131-bfc8-173a35234034)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(281).png?alt=media&token=95b7bd22-8ac1-4b1f-a266-684f7caf9801)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(301).png?alt=media&token=7950eee8-c3a7-4c1d-9993-60582ac47d43)

## Admin Dashboard ##
[🔝 Back to Screenshots](#screenshots-📸)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(310).png?alt=media&token=4b9290be-acbd-4cfd-af2b-4a84a1e1fa9d)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(309).png?alt=media&token=5b694e9f-727c-4082-89cd-bfd05817dea8)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(307).png?alt=media&token=5e960301-2f29-44d1-9660-2960cc34a3e1)
![picture alt](https://firebasestorage.googleapis.com/v0/b/wander-nest-3a4ef.appspot.com/o/UI%2FScreenshot%20(308).png?alt=media&token=322c1fc1-7631-4493-aa28-77b86ca3dc33)
