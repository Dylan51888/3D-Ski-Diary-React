3D Ski Diary

3D Ski Diary is an immersive 3D web experience where users can explore a beautifully rendered, low-poly winter landscape. The project uses React Three Fiber to create an interactive 3D environment, with various elements including mountains, trees, snowmen, and a cabin. Users can navigate between different scenes, with elements such as text and images dynamically appearing based on user interactions.

Open your browser and go to https://dylan51888.github.io/3D-Ski-Diary-React/ to view the project.

Key Features

    •	Interactive 3D Scene: The entire project is built with React Three Fiber, utilizing the power of WebGL and Three.js to deliver smooth, real-time 3D graphics.
    •	Responsive Camera Controls: The project includes intuitive camera controls using @react-three/drei’s CameraControls component, allowing users to move around the 3D scene seamlessly.
    •	Scene Transitions: Users can switch between different views and interact with various objects in the 3D environment, which reacts to the camera’s position and page transitions.
    •	Dynamic Content: Upon entering the “store” scene, a dynamically generated HTML overlay with an image and text is displayed, giving users additional context and interaction.
    •	Tailwind CSS Integration: The UI design leverages Tailwind CSS for efficient, responsive styling.

Technologies Used

3D and Visualization

    •	React Three Fiber: A React renderer for Three.js, allowing you to create 3D graphics using a declarative approach.
    •	@react-three/drei: A helper library that simplifies working with React Three Fiber by providing a collection of ready-to-use components such as CameraControls, Float, Text, Html, etc.
    •	Three.js: A JavaScript library that makes creating WebGL-powered 3D graphics easier.
    •	React: The core framework for building the user interface of the project.

UI & Styling

    •	Tailwind CSS: A utility-first CSS framework for designing modern, responsive UIs.
    •	Jotai: A state management library that manages state across components, used here to handle scene transitions between “home” and “store” pages.

Highlights of 3D Implementation

    •	3D Environment: The entire landscape is rendered using Three.js and React Three Fiber. The Camping component represents the snow-covered mountain, cabin, and trees, giving a cozy winter atmosphere.
    •	Responsive Camera: Using @react-three/drei’s CameraControls, users can navigate the 3D scene with ease. The camera smoothly transitions between different views depending on the current page, providing an intuitive user experience.
    •	Interactive Overlay: On the “store” page, a 3-second delay reveals an overlay that includes a picture and description of a ski trip. This overlay is positioned in the 3D space using Html from @react-three/drei, providing a seamless blend of 2D content in a 3D world.
    •	Scene-Based Transitions: The user can click buttons to navigate between different views in the 3D world (e.g., “home” and “store” scenes), with dynamic camera movements and smooth transitions implemented via Jotai state management and CameraControls.
