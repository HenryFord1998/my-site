const cardData = [
    {
        id: 1,
        category: "back-end",
        title: "Blog Website & Database",
        description: "This blog website was created with NodeJs, Ejs, Bootstrap and mongoDB. It automatically generates pages on every post.",
        imgUrl: "https://i.ibb.co/1qYqY87/blog-Site-with-DB.png",
        infoImage1 : "/images/Blog Website With Database Images/1.png",
        infoImage1Alt : "Blog Website Home Page",
        modalDescription1: "This project was developed to practice and demonstrate my skills using Ejs to create dynamic pages, MongoDB for building databases together with NodeJs and the front-end was designed with Bootstrap, HTML and CSS.",
        modalDescription2: "The application works by composing new posts, which will then show up on the Home page, only showing a limited amount of characters. When you click on the 'read more link, it will redirect you to the automatically generated page, where you will be able to see your post in full. The about and contact pages are just more examples of ejs and how it's used by developers in cases where they want to reuse elements, where in this case, the header and footer are being re-used on those pages.",
        modalDescription3: "To add a new post, you can add '/Compose' to the route end. You will be displayed with a basic page, where you would be able to type in the title and text for the new post.",
        infoImage2 : "/images/Blog Website With Database Images/2.png",
        infoImage2Alt : "Blog Website Compose Page",
        projectDescription1: "Just add your title and content that you would like to be shown in your next big blog post and hit publish.",
        infoImage3 : "/images/Blog Website With Database Images/5.png",
        infoImage3Alt : "Blog Website Create Post Example",
        projectDescription2: "You will be redirected to the Home page, where your newly created post will appear with a limited amount of characters. If you want to view your post in full, click on the 'read more link. This will redirect you to an automatically generated page where your post can be viewed in full.",
        infoImage4 : "/images/Blog Website With Database Images/4.png",
        infoImage4Alt : "Blog Website Home Page With New Post",
        projectDescription3: "The database will keep your data safe and sound!",
        infoImage5 : "/images/Blog Website With Database Images/3.png",
        infoImage5Alt : "Blog Website Displaying New Post On Own Page",
        projectDescription4: "The database will keep your data safe and sound! Feel free to view this project on my GitHub! When installing locally, remember to install the dependencies first by entering 'npm i' or 'npm install' on your terminal.",        
        linkToProject: "https://github.com/HenryFord1998/Blog-with-Database.git",
        videoSource1: "",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 2,
        category: "back-end",
        title: "User Login and Register",
        description: "This is an example of a login and register interface, developed with NodeJs and MongoDB. It uses level 6 security technologies and Api's.",
        imgUrl: "https://i.ibb.co/wcghyFQ/Social-Media-App.png",
        infoImage1 : "/images/Secrets/1.png",
        infoImage1Alt : "Secrets App Login or Register Page",
        modalDescription1: "This project was presented during my coding boot camp. We had to use Bootstrap, CSS, HTML, NodeJs, MongoDB and Mongoose to create a Social Media concept application.",
        modalDescription2: "You can register a new account, which will store the username and password on the database. The password will be processed and enter salt rounds, which will further add to its complexity. This will allow a user to safely store his/her password. This website also uses cookies to remember the user after logging in. It also takes advantage of Google and Facebook's register APIs to create new accounts. The users can then use those accounts to log in.",
        modalDescription3: "After registering a new account, the user can simply click on Login, to which they will be redirected to the login page.",
        infoImage2 : "/images/Secrets/2.png",
        infoImage2Alt : "Secrets App Login Page",
        projectDescription1: "Here, the user can choose a method to Login into their existing account. They'll have the option of using their username and password, or use the Google and Facebook links.",
        infoImage3 : "/images/Secrets/3.png",
        infoImage3Alt : "Secrets App Log In",
        projectDescription2: "When the user's successfully logged in, they will be redirected to the main page, where they should see the main content of the app.",
        infoImage4 : "/images/Secrets/4.png",
        infoImage4Alt : "Secrets App Main Page",
        projectDescription3: "Since this concept app uses level 6 security technologies, the developers would not be able to view the user's password.",
        infoImage5 : "/images/Secrets/5.png",
        infoImage5Alt : "Secrets App Database",
        projectDescription4: "Feel free to view the project in full on my GitHub!",   
        linkToProject: "https://github.com/HenryFord1998/Secrets.git"  ,
        videoSource1: "",
        videoSource2: "" ,
        videoSource3: ""

    },
    {
        id: 3,
        category: "back-end",
        title: "The Notes App",
        description: "This application was inspired by Google Keep. It was developed with ReactJs and is capable of storing notes and delete them.",
        imgUrl: "https://i.ibb.co/5kpCvG7/Note-App.png",
        infoImage1 : "/images/Notes/1.png",
        infoImage1Alt : "Notes App Clear Home Page",
        modalDescription1: "Developed using ReactJS and NodeJs, this app can add and store notes on the interface.",
        modalDescription2: "This app was developed to practice and demonstrate my react and NodeJs skills. The animations when hovering on the buttons were also done with react and not CSS.",
        modalDescription3: "The user can simply add a note title and the content, hit the '+' button and watch their note generate on the main page.",
        infoImage2 : "/images/Notes/2.png",
        infoImage2Alt : "Notes App Adding Notes",
        projectDescription1: "The notes added will automatically fit when generated and be displayed next to one another.",
        infoImage3 : "/images/Notes/3.png",
        infoImage3Alt : "Notes App Deleting Notes",
        projectDescription2: "If a user wants to delete the note, they can simply hit the 'delete' icon at the bottom right corner of the note.",
        infoImage4 : "/images/Notes/4.png",
        infoImage4Alt : "Notes App Notes",
        projectDescription3: "Once the user is happy with their notes, they can safely leave the app and come back another time to view their notes!",
        infoImage5 : "/images/Notes/5.png",
        infoImage5Alt : "Google Keep Interface",
        projectDescription4: "This application was inspired by Google Keep. The interface and functionality are very simular. The full project can be viewed on my GitHub!",        
        linkToProject: "https://github.com/HenryFord1998/Notes-App.git",
        videoSource1: "",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 4,
        category: "front-end",
        title: "The Drum-Kit Game",
        description: "This game was developed with Bootstrap, CSS and Javascript. It uses DOM manipulation to make sounds when the buttons are clicked.",
        imgUrl: "https://i.ibb.co/yfs50d5/Drum-Kit-Site.png",
        infoImage1 : "/images/Drum/1.png",
        infoImage1Alt : "Drum-Kit App",
        modalDescription1: "This drum-kit app uses vanilla JavaScript to render and add sound to the buttons displayed on the home page.",
        modalDescription2: "The user can simply click on any one of the buttons for the desired sound, or press the key displayed on that button.",
        modalDescription3: "This project was one of my first applications that use DOM manipulation.",
        infoImage2 : "/images/Drum/5.png",
        infoImage2Alt : "Drum-Kit Code Explanation 1",
        projectDescription1: "The Buttons are simple HTML button elements.",
        infoImage3 : "/images/Drum/2.png",
        infoImage3Alt : "Drum-Kit Code Explanation 2",
        projectDescription2: "I added an event listener to listen for a click and keyDown event.",
        infoImage4 : "/images/Drum/3.png",
        infoImage4Alt : "Drum-Kit Code Explanation 3",
        projectDescription3: "Each Key is assigned a value and sound. When the for-loops event listener matches that key, it will play.",
        infoImage5 : "/images/Drum/4.png",
        infoImage5Alt : "Drum-Kit Code Explanation 4",
        projectDescription4: "The button animations are also animated with JavaScript. View and test out the project by visiting the link to my GitHub!",        
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 5,
        category: "front-end",
        title: "A Simple Dice Game",
        description: "This App was developed with CSS and Javascript. It's a 2-player game that shows which player has won based on the higher dice number.",
        imgUrl: "https://i.ibb.co/J70Q5sH/DiceGame.png",
        infoImage1 : "/images/Dice Images/1.png",
        infoImage1Alt : "Dice Game",
        modalDescription1: "This is a vanilla Javascript Game that uses basic JavaScript functionality and DOM manipulation to render different dice images based on the number rolled.",
        modalDescription3: "All the user needs to do is refresh the page and the player 1 and 2 dice will be rolled with new numbers.",
        infoImage2 : "/images/Dice Images/2.png",
        infoImage2Alt : "Dice Game Draw",
        projectDescription1: "When the dice roll an equal value, the heading text will display that it's a draw.",
        infoImage3 : "/images/Dice Images/3.png",
        infoImage3Alt : "Dice Game Value",
        projectDescription2: "This works by using a simple if statement that will trigger the change of the innerHTML based on the values.",
        infoImage4 : "/images/Dice Images/4.png",
        infoImage4Alt : "Dice Game DOM",
        projectDescription3: "To set the correct image based on the value rolled, a querySelector is used, which targets all 'img' attributes. Those image sources are set based on the value.",
        infoImage5 : "/images/Dice Images/5.png",
        infoImage5Alt : "Dice Game Value Set",
        projectDescription4: "Each dice gets a random number when the page is refreshed by randomising a number between 6. That number is then rounded. To view the full project, go to my GitHub and simply copy the HTML path!",        
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 6,
        category: "back-end",
        title: "A todo-list App",
        description: "This app was developed with Nodejs and MongoDB. It's a dynamic todo-list app that adds items to a database and displays them.",
        videoSource1: "",
        imgUrl: "https://i.ibb.co/3yZwkKM/Screenshot-2022-09-13-072653.png",
        infoImage1 : "/images/Todo List/1.png",
        infoImage1Alt : "f1fk",
        modalDescription1: "",
        modalDescription2: "This app's front-end was developed with Html, CSS, JavaScript and Bootstrap. For the back end, I used NodeJs and MongoDB. The application is used to store notes.",
        modalDescription3: "A person can create new note items and delete them when finished. To add an item, simply type the item name in the 'new item' field and hit the '+' icon.",
        infoImage2 : "/images/Todo List/2.png",
        infoImage2Alt : "f2fk",
        projectDescription1: "To delete the item, just click the checkbox next to the item. Items are stored on a database and will be saved if the user decides to come back and view their items again. New lists can also be made by adding a '/' followed by the list name to the route.",
        infoImage3 : "/images/Todo List/3.png",
        infoImage3Alt : "f3fk",
        projectDescription2: "The user will be redirected to the newly created list, which will also be saved to the database. To view the full project, follow the link to my GitHub!",
        infoImage4 : "",
        infoImage5 : "",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 7,
        category: "front-end",
        title: "Student Portfolio Website",
        description: "A student portfolio website that I made for the Eduvos graduates of 2021, built with Elementor, a WordPress page builder.",
        videoSource1: "/images/Student Portfolio/Student Portfolio Process Video - Elementor.mp4",
        imgUrl: "https://i.ibb.co/ZgWBxyJ/1.png",
        infoImage1 : "",
        infoImage1Alt : "f1fk",
        modalDescription1: "",
        modalDescription2: "This website was built with WordPress and Elementor. It was designed for the graduates of Eduvos.",
        modalDescription3: "I first had to make a small concept website to compete against other students. The student that will win had to build the final student portfolio website at the end of the year based on their winning theme and website.",
        infoImage2 : "/images/Student Portfolio/Mockup Exhibition Site.jpg",
        infoImage2Alt : "f2fk",
        projectDescription1: "",
        infoImage3 : "/images/Student Portfolio/1.png",
        infoImage3Alt : "f3fk",
        projectDescription2: "My entry was a basic one-pager website with an about page, gallery and contact section.",
        projectDescription4: "After winning the competition, I started developing the final website. This was a massive project and I would personally recommend going through the site by following the link below.",
        infoImage4 : "/images/Student Portfolio/2.png",
        infoImage5 : "/images/Student Portfolio/5.png",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://portfolioshowcase.co.za/2021/",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 8,
        category: "design",
        title: "3D Models",
        description: "During my degree in Graphic Design, I've also learned how to make 3D models. This skill will come in handy when developing websites!",
        imgUrl: "https://i.ibb.co/KjPPrcf/3-Dpackaging.png",
        infoImage1 : "1",
        infoImage1Alt : "f1fk",
        modalDescription1: "",
        modalDescription2: "This project was created with Autodesk Maya, an extremely powerful 3D design tool and Adobe After Effects. I've had my fair share of designing 3D models for different purposes.",
        modalDescription3: "My 3D models were all based on briefs we were handed during studies. The project above is my personal shorter version of a Star Wars title sequence.",
        infoImage2 : "/images/3D Models/4.png",
        infoImage2Alt : "f2fk",
        projectDescription1: "Other projects were based on the real world and more practical scenarios, for example, package design concepts like the project below.",
        infoImage3 : "/images/3D Models/5.png",
        infoImage3Alt : "f3fk",
        projectDescription2: "",
        infoImage4 : "/images/3D Models/Display Unit 2.png",
        infoImage5 : "/images/3D Models/Display Unit 3.png",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "/images/3D Models/Final 3D comp.mp4",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 9,
        category: "design",
        title: "Video Editing",
        description: "I've had my fair share of video editing during my degree. Special effects, general editing, anything... A great skill for front-end!",
        imgUrl: "https://i.ibb.co/qnDpzb2/Africa-Reel.png",
        infoImage1 : "",
        infoImage1Alt : "f1fk",
        modalDescription1: "These projects are created with Adobe Premiere Pro and After Effects. The combination of the two is extremely powerful.",
        modalDescription2: "The project above was based on my concept of what it means to be African, a question we were asked and had to answer by producing a short explainer video.",
        modalDescription3: "The next project is based on a real estate brand I developed.",
        infoImage2 : "",
        infoImage2Alt : "f2fk",
        projectDescription1: "It's meant to be an easy to read video that will most likely be displayed in guest rooms on the tv's.",
        infoImage3 : "",
        infoImage3Alt : "f3fk",
        projectDescription2: "The very last project was created with Adobe After Effects and I designed the 3D show model in Blender. This was a short advert that I made for the sneaker company known as Shelflife.",
        infoImage4 : "",
        infoImage5 : "",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "/images/Video Editing/ACMG brief 2 African Identity.mp4",
        videoSource2: "/images/Video Editing/MG video Final.mp4",
        videoSource3: "/images/Video Editing/Shelflife Channel Branding Showreel ACMG Brief 3.mp4"
    },
    {
        id: 10,
        category: "front-end",
        title: "Plumbing Website",
        description: "As a freelancer, I've done a few WordPress websites for clients. This is a plumbing website, built with the Elementor page builder.",
        imgUrl: "https://i.ibb.co/qdnwv2N/Exercise-1.jpg",
        infoImage1 : "https://i.ibb.co/qdnwv2N/Exercise-1.jpg",
        infoImage1Alt : "f1fk",
        modalDescription1: "I do not share the projects that I've done for my clients, but here is a simple WordPress website that I did for a plumbing business.",
        modalDescription2: "I used the Elementor page builder to design this website. You can view the website by following the link below.",
        modalDescription3: "",
        infoImage2 : "",
        infoImage2Alt : "f2fk",
        projectDescription1: "",
        infoImage3 : "",
        infoImage3Alt : "f3fk",
        projectDescription2: "",
        infoImage4 : "",
        infoImage5 : "",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://promasterplumbing.co.za/",
        videoSource1: "",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 11,
        category: "design",
        title: "Inverter Website",
        description: "This website was developed with HTML, CSS and Bootstrap. This website was based on a product I had to design during my studies.",
        imgUrl: "https://i.ibb.co/pK4HqHZ/SET-web.png",
        infoImage1 : "",
        infoImage1Alt : "f1fk",
        modalDescription1: "",
        modalDescription2: "",
        modalDescription3: "This one-pager is simple and modern, which adds to the user experience. The front page has a subtle look and feels that's comforting. Since it's the first thing the user sees, it's supposed to set the tone for the rest of the website.",
        infoImage2 : "/images/Inverter Site/1.png",
        infoImage2Alt : "f2fk",
        projectDescription1: "The about section briefly explains what the product is and what it does, not being overly complicated so that the user's attention is kept.",
        infoImage3 : "/images/Inverter Site/2.png",
        infoImage3Alt : "f3fk",
        projectDescription2: "Once the user knows what they're looking at, it briefly goes into more detail on the line-up of products.",
        projectDescription4: "The final design choice was to add a simple and fast 'get a quote' section, where the user can type in their email and send it. If a user showed interest in your product and shortly after sees this section, they'll have little to no time to think about other options and would most likely ask for a quote.",
        infoImage4 : "/images/Inverter Site/3.png",
        infoImage5 : "/images/Inverter Site/4.png",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "/images/Inverter Site/Inverter website.mp4",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 12,
        category: "design",
        title: "Brand Development",
        description: "Front-end developers need great brand development knowledge, thus, I'll share a few of my projects I've worked on over the years.",
        imgUrl: "https://i.ibb.co/qDCQxch/Logo-Development.png",
        infoImage1 : "",
        infoImage1Alt : "f1fk",
        modalDescription1: "",
        modalDescription2: "Brand Development forms a special part of any company. Their brand becomes their identity, which means its development is critical to its success. I use Adobe Illustrator, Photoshop, After Effects, Dreamweaver and other applications to develop brands.",
        modalDescription3: "For me, branding is supposed to be easy for a user to remember. When I develop a brand, I'll design things like the logo with a specific brief in mind, if not given one. It needs to work in modern times, whether that is on a website or apparel.",
        infoImage2 : "/images/Brand Development/Light.jpg",
        infoImage2Alt : "f2fk",
        projectDescription1: "I'll always have a few concepts to work with, which get presented to the client before I start with the final branding process. I will typically create mockups with the final brand and present them, to give a well-understood perspective on how this brand can be a good fit in all fields.",
        infoImage3 : "",
        infoImage3Alt : "f3fk",
        projectDescription2: "Here is a personal brand I developed. I created an entire CI manual for it, as well as a quick logo intro video.",
        infoImage4 : "/images/Brand Development/APICA logo Final 2.jpg",
        infoImage5 : "",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "/images/Brand Development/Property.mp4",
        videoSource2: "",
        videoSource3: "/images/Brand Development/ACMG Final Logo Build.mp4",
        projectDescription4: "You can view the full branding CI manual by downloading the PDF below."
    },
    {
        id: 13,
        category: "back-end",
        title: "Newsletter Signup Page",
        description: "This newsletter signup page was developed with HTML, CSS, Bootstrap, NodeJs and MongoDB. It will store and manage the user's info.",
        imgUrl: "https://i.ibb.co/D1kmvnX/Newsletter.png",
        infoImage1 : "/images/Signup/1.png",
        infoImage1Alt : "f1fk",
        modalDescription1: "",
        modalDescription2: "I chose to do a simple newsletter signup site to demonstrate my knowledge in handling forms and their contents. The data on the form will be stored in a local database.",
        modalDescription3: "To use the form, simply fill it in and hit the 'Sign Me Up!' button. After signing up, if successful, you will be redirected to a page that will let you know you've successfully been signed up.",
        infoImage2 : "/images/Signup/2.png",
        infoImage2Alt : "f2fk",
        projectDescription1: "If for whatever reason your signup was unsuccessful, for reasons being connection-related issues or an invalid email, you will be redirected to a page that will let you know that your subscription was unsuccessful. It will prompt you to try again.",
        infoImage3 : "/images/Signup/3.png",
        infoImage3Alt : "f3fk",
        projectDescription2: "You can view the full project on my GitHub page by following the link below!",
        infoImage4 : "",
        infoImage5 : "",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 14,
        category: "front-end",
        title: "Old Portfolio Site",
        description: "It's an old WordPress site, but still worth sharing. This old portfolio website was built with WordPress and the Elementor page builder.",
        imgUrl: "https://i.ibb.co/dtWLGyk/portWeb.png",
        infoImage1 : "images/Old Portfolio/Mockup Website.jpg",
        infoImage1Alt : "f1fk",
        modalDescription1: "",
        modalDescription2: "I created this website with WordPress and the Elementor page builder. It served as an early portfolio website while I was still a student and a freelancer. After I graduated, I decided to do a boot camp and create a brand new site with more complex technologies.",
        modalDescription3: "This website consisted of 3 different pages. The first page was a home page with an about section that also described my goals.",
        infoImage2 : "images/Old Portfolio/w1.png",
        infoImage2Alt : "f2fk",
        projectDescription1: "",
        infoImage3 : "images/Old Portfolio/w3.png",
        infoImage3Alt : "f3fk",
        projectDescription2: "The second page was my gallery page, where I displayed a bunch of my old and new work.",
        projectDescription3: "The third and last page was a basic contact page, where people were given different methods to be able and reach me.",
        projectDescription4: "This website might still be active. To view it, follow the link below!",
        infoImage4 : "images/Old Portfolio/w9.png",
        infoImage5 : "images/Old Portfolio/w8.png",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 15,
        category: "design",
        title: "Banner Designs",
        description: "Some companies need a few digital banners for their websites. Here's some I've done over a few years using Illustrator and Photoshop.",
        imgUrl: "https://i.ibb.co/sJ6gSsN/Posters.png",
        infoImage1 : "/images/Banners/1.png",
        infoImage1Alt : "f1fk",
        modalDescription1: "",
        modalDescription2: "",
        modalDescription3: "",
        infoImage2 : "",
        infoImage2Alt : "f2fk",
        projectDescription1: "Some websites or companies will ask a designer or developer to create digital banners. They use these banners to advertise their brands and products on different websites or platforms.",
        infoImage3 : "",
        infoImage3Alt : "f3fk",
        projectDescription2: "To make these, I usually focus on what message I want to get across to the user as fast as possible. After I explain the brand or product in the design, I'll add a call to action.",
        infoImage4 : "",
        infoImage5 : "",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "",
        videoSource2: "",
        videoSource3: ""
    },
    {
        id: 16,
        category: "front-end",
        title: "Prototyping",
        description: "With great prototyping comes great responsibility! Here are a few prototypes that I've designed with Adobe XD and Figma.",
        imgUrl: "https://i.ibb.co/R6jh2jv/Psd-1.jpg",
        infoImage1 : "",
        infoImage1Alt : "f1fk",
        modalDescription1: "As students, we were sometimes asked to follow briefs, where we had to use critical thinking and our UI/UX design skills to come up with a solution to a  specific problem.",
        modalDescription2: "The prototype above was designed with Adobe XD. The brief asked us to come up with a solution to a common problem students face during their studies. The problem I chose to solve was how students manage their time. I created a google form that students could fill in and choose their problems. The most common issue was time management.",
        modalDescription3: "The most common problems they faced had to do with them staying up to date on their briefs from different modules, cleaning up their work, handling feedback and updating their work etc. This application prototype combined all of these time management issues and collected them into one single app.",
        infoImage2 : "/images/Prototyping/Asset 1-100.jpg",
        infoImage2Alt : "f2fk",
        projectDescription1: "When developing websites, designing prototypes, brands and videos, I'll always include wireframes. Low-fidelity ones and high-fidelity ones before I start with the final. This prevents naming projects final-final and final-final-final.jpeg.",
        infoImage3 : "",
        infoImage3Alt : "f3fk",
        projectDescription4: "The prototype above shows a music website and application. We had one week to come up with a brand and design for this project. I very much enjoyed the rush and even though I can easily spot a lot of design flaws, I'm happy with how it came out.",
        infoImage4 : "",
        infoImage5 : "",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "/images/Prototyping/Final Prototype Video.mp4",
        videoSource2: "",
        videoSource3: "/images/Prototyping/EPK.mp4"
    },
    {
        id: 17,
        category: "front-end",
        title: "Mockups",
        description: "An important skill to have is the ability to create great-looking mockups. It's what sells a product or what brings your ideas to life.",
        imgUrl: "https://i.ibb.co/dQcSbsQ/Inverter-box.png",
        infoImage1 : "/images/Mockups/Business_Card_90x50_Mockup.jpg",
        infoImage1Alt : "f1fk",
        modalDescription1: "",
        modalDescription2: "My mockups are designed in Photoshop, Illustrator and Blender. I create mockups to get an idea of my final products and also to sell my ideas and perspective to clients.",
        modalDescription3: "",
        infoImage2 : "/images/Mockups/Mockup 2.jpg",
        infoImage2Alt : "f2fk",
        projectDescription1: "Clients want to see what you are talking about. They don't want to hear promises based on words. It's a good practice to make multiple mockups of one concept, product or idea.",
        infoImage3 : "/images/Mockups/Mockup 4.jpg",
        infoImage3Alt : "f3fk",
        projectDescription2: "When I create 3D mockups in Blender, I'll make sure to model the item in different layers for later refinements. This 3D shoe model is a perfect example of that.",
        infoImage4 : "/images/Mockups/Model side.jpg",
        infoImage5 : "",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Drum-Kit-Game.git",
        videoSource1: "",
        videoSource2: "",
        videoSource3: "",
    },
    {
        id: 20,
        category: "front-end",
        title: "ManCave Website",
        description: "This website was developed with HTML, CSS and Bootstrap. It's used as a product website for a shaving-cream brand.",
        imgUrl: "https://i.ibb.co/tHwMMNq/Showcase-Devices-Presentation.jpg",
        infoImage1 : "",
        infoImage1Alt : "f1fk",
        modalDescription1: "",
        modalDescription2: "I had to create a 3D model and mockups of a product, design its packaging and then create a website for it.",
        modalDescription3: "",
        infoImage2 : "/images/Mockups/Untitled.png",
        infoImage2Alt : "f2fk",
        projectDescription1: "The website features about sections, pricing sections and contact sections. It's simple, yet effective.",
        infoImage3 : "",
        infoImage3Alt : "f3fk",
        projectDescription2: "I'll always design and develop a website based on practicality. You can view the site on my GitHub by following the link below!",
        infoImage4 : "",
        infoImage5 : "",
        infoImage4Alt : "f3s3fk",
        infoImage5Alt : "f3fsdfk",
        linkToProject: "https://github.com/HenryFord1998/Product-Site.git",
        videoSource1: "/images/ManCave website/Website Preview.mp4",
        videoSource2: "",
        videoSource3: ""
    }
    
]

export default cardData;