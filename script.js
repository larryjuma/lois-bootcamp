
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');  // Add a class that toggles visibility
}


function updateTime() {
  const timeElement = document.querySelector('#currTime h1');
  const greetingsElement = document.querySelector('#greetings');

  // Get current time
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  // Display time
  timeElement.textContent = `${hours}:${minutes}`;

  // Set greetings 
  if (hours < 12) {
    greetingsElement.textContent = "Good Morning!";
  } else if (hours >= 12 && hours < 16) {
    greetingsElement.textContent = "Good Afternoon!";
  } else if (hours >= 16 && hours <= 19) {
    greetingsElement.textContent = "Good Evening!";
  } else {
    greetingsElement.textContent = "Good Night!"
  }
}
// Update the time every minute
setInterval(updateTime, 1000);

// button click
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.my-button');
  button.addEventListener('click', () => {
    alert('Button clicked!');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("input[type='submit']").addEventListener("click", (e) =>{
    e.preventDefault();
    alert("Thank you for your message!")
  })
})


// Array of board members
const boardMembers = [
  {
    name: "Maris Angela",
    role: "Deputy Director",
    desc: "Maris is the deputy director of Lois Academy.",
    img: "Images/images.jfif"
  },
  {
    name: "Mason Andrews",
    role: "Lead Engineer",
    desc: "Leads in both tech sectors ensuring instructors are designated to their various fields.",
    img: "Images/lead.jfif"
  },
  {
    name: "Mitchell Kimberly",
    role: "Dean",
    desc: "She is Dean of students and ensures all learners have smooth learning.",
    img: "Images/dean.jfif"
  },
  {
    name: "Jhon Doe",
    role: "Chief",
    desc: "All the instructors report to him.",
    img: "Images/chief.jfif"
  }
];

// Wait for DOM to load before injecting content
document.addEventListener("DOMContentLoaded", () => {
  const boardContainer = document.querySelector(".board-members");

  // Clear previous content
  boardContainer.innerHTML = "";

  // Loop through array and insert each member
  boardMembers.forEach(member => {
    boardContainer.innerHTML += `
      <div class="board-card">
        <div class="board-details">
          <img src="${member.img}" alt="${member.name}">
          <h2>${member.name}</h2>
          <h3>${member.role}</h3>
          <p>${member.desc}</p>
        </div>
      </div>
    `;
  });
});


const frontEndCourses = [
  {
    title: "HTML5",
    image: "Images/html.png",
    description: "This is the skeleton of a web page",
    price: "Free"
  },
  {
    title: "CSS3",
    image: "Images/css.png",
    description: "The styling of a web page, colors, font-size and everything cool you see on a website.",
    price: "Free"
  },
  {
    title: "JavaScript",
    image: "Images/js.png",
    description: "Responsible for the functionality of a web page, like button clicks.",
    price: "$45"
  },
  {
    title: "React",
    image: "Images/react.jfif",
    description: "Modern Front-End library using JSX to write HTML in JS.",
    price: "$40"
  }
]

const container = document.getElementById("front-end-container");

frontEndCourses.forEach(course => {
  const box = document.createElement('div');
  box.classList.add('box')
  box.innerHTML = `
     <div class = "box-details">
      <img src="${course.image}" alt="${course.title}">
      <h4>${course.title}</h4>
      <p>${course.description}</p>
      <h4>${course.price}</h4>
     </div>
  `;

  container.appendChild(box);
})

const mobileDevCourses = [
  {
    title: "Java",
    image: "Images/java.png",
    decsription: "Java is widely used in application development across multiple domains, from web applications and mobile apps (especially Android) to enterprise systems and embedded devices.",
    price: "$45"
  },
  {
    title: "Kotlin",
    image: "Images/kotlin.png",
    description: "Kotlin is a modern, statically-typed programming language used for Android development, as well as backend and web development",
    price: "$46"
  },
  {
    title: "Flutter",
    image: "Images/flutter.png",
    description: "Flutter is an open-source framework developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    price: "$45"
  },
  {
    title: "React Native",
    image: "Images/reactNative.png" ,
    description: "Used for building mobile applications using JavaScript and React",
    price: "$48"
  }
]

const container2 = document.getElementById("mobile-container");

mobileDevCourses.forEach(course =>{
  const box = document.createElement("div")
  box.classList.add('box')
  box.innerHTML = `
       <div class = "box-details">
      <img src="${course.image}" alt="${course.title}">
      <h4>${course.title}</h4>
      <p>${course.description}</p>
      <h4>${course.price}</h4>
     </div>
  `;

  container2.appendChild(box)
})

const backEndCourses = [
  {
    title: "python",
    image: "Images/python.jfif",
    description: "Python is a high-level, interpreted programming language widely used for backend development",
    price: "$47"
  },
  {
    title:"Node.js",
    image: "Images/node.png",
    description: "Node.js is an open-source, JavaScript runtime environment that allows developers to run JavaScript on the server-side, outside of a web browser",
    price: "$41"
  },
  {
    title: "Express.js",
    image: "Images/express.png" ,
    description: "Express.js is a minimal and flexible web application framework for Node.js.",
    price: "$42"
  },
  {
    title: "mongoDB",
    image: "Images/mongoDB.png" ,
    description: "MongoDB is a NoSQL database that stores data in a flexible, document-oriented format using JSON-like documents (BSON)",
    price: "$35"
  }
]

const container3 = document.getElementById("back-end-container");

backEndCourses.forEach(course =>{
  const box =  document.createElement("div");
  box.classList.add('box');
  box.innerHTML = `
      <div class = "box-details">
      <img src="${course.image}" alt="${course.title}">
      <h4>${course.title}</h4>
      <p>${course.description}</p>
      <h4>${course.price}</h4>
     </div>
  `;

  container3.appendChild(box)
})