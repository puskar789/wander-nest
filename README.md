# Wander Nest 🏡 #
Wander far, nest easy.

# Overview 🚀 #
Wander Nest is a full-stack web application designed to provide users with a seamless experience for browsing and managing rental rooms or accommodations. The application offers a dynamic, interactive interface for both regular users and administrators, featuring dashboards, user management, and room listings with images and map integrations. "WanderNest" symbolizes a comfortable and welcoming place for wanderers or travelers to temporarily settle in during their journeys. "Wander" signifies the act of exploring or traveling, while "Nest" suggests a cozy and secure resting place. Together, "WanderNest" conveys the idea of finding a comforting refuge amidst the adventure of wandering.

# Features 🌟 #
* **User Authentication & Authorization**: Secure sign-up and login using JWT and bcrypt. Users can also log in with their Google account via OAuth for a faster experience.
* **OTP Verification**: Enhance account security with OTP-based email verification during sign-up implemented using Nodemailer, ensuring only valid users access the platform.
* **Profile Management**: Users can update their profile details and manage sessions efficiently through a user-friendly interface.
* **Room Listings & CRUD Operations**: Users and admins can create, view, and delete rental room listings with detailed descriptions, pricing, and amenities, allows easy image uploads by providing drag and drop feature implemented using react dropzone.
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
Here are some screenshots showcasing the Ping Pal web app:

## Login and Sign Up Screen ##
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(269).png?alt=media&token=289e29da-0993-4a65-be26-bea202673b81)
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(270).png?alt=media&token=674d4185-cd4e-4317-8d8d-fde33ae908de)
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(271).png?alt=media&token=b877510a-761c-4a16-ad8b-8e55eec60fca)
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(273).png?alt=media&token=e0ef0084-bf8b-488e-931a-bd13c95c25ee)

## Chat Interface ##
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(275).png?alt=media&token=df5a716d-e8f3-451f-a05f-f0aa81bcbacf)
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(282).png?alt=media&token=7746dc18-85f2-4f3b-bcd4-8016c24985d8)
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(283).png?alt=media&token=5be1fa44-fbe4-4e50-a314-f840186bca4f)
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(284).png?alt=media&token=d32b042c-9452-43cd-82fb-d560cd02db16)

## User Profile ##
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(276).png?alt=media&token=d8aacec5-a6e2-4711-b1ad-451fd025a7ef)
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(278).png?alt=media&token=0dca0ff3-54eb-4afc-aad2-3950b79258d1)
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(279).png?alt=media&token=e2439a66-be95-4b19-aae3-fe4b1658693f)
![picture alt](https://firebasestorage.googleapis.com/v0/b/ping-pal.appspot.com/o/Screenshot%20(280).png?alt=media&token=eb549507-7c79-47ae-a6b3-82f10171c62b)

