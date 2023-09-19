/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

 const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }
  
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
  
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  
  window.addEventListener('keydown', handleFirstTab)
  
  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;
  
  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });
  
  const MY_PROJECTS = [
    
    {
      title : 'React Blog',
      project_desc : 'Designed and developed a dynamic and interactive blog website using React.js and React Router, providing users with real-time access to articles and posts.Implemented a modern and engaging user interface using React.js, allowing seamless navigation and interaction for blog visitors.Integrated React Router to enable smooth page transitions, facilitating easy access to various blog sections and individual articles.Developed a structured and user-friendly layout, optimizing the reading experience for visitors and enhancing content accessibility.Integrated state management techniques to handle blog data and user interactions efficiently, ensuring a responsive and reactive UI.',
      tech_stack : 'REACT | JAVASCRIPT | HTML | CSS',
      git_hub_link : 'https://github.com/vimal8533/react_blog_project',
      live_link : 'https://reactblogprojects.netlify.app/',
      thumbnail :'./images/react_blog.png'
  },
    {
      title : 'Live Weather',
      project_desc : 'Developed a live weather application using React and Axios, integrating with the OpenWeatherMap API to provide real-time weather information to users.Utilized React to build a responsive and interactive user interface, allowing users to input a city and view the live weather summary.Implemented Axios to facilitate API requests to OpenWeatherMap, fetching weather data based on user input and updating the UI accordingly.Displayed temperature and weather descriptions dynamically, enhancing user experience and usability.Utilized modern web development practices for optimal performance, ensuring a seamless and informative user experience.',
      tech_stack : 'REACT | JAVASCRIPT | HTML | CSS',
      git_hub_link : 'https://github.com/vimal8533/weather',
      live_link : 'https://live-weather-project.netlify.app',
      thumbnail :'./images/weather_pic.png'
  },
  {
    title : 'Student Database',
    project_desc : 'Developed a student database management application using React.js and React Router, implementing dynamic routing to enable efficient data retrieval and manipulation.Utilized React.js to create an intuitive and responsive user interface for viewing, adding, and updating student records. Integrated React Router to enable dynamic routing, allowing seamless navigation between student profiles and different application sections. Implemented dynamic routing to load specific student details based on unique identifiers, optimizing data retrieval and display. Employed efficient state management techniques to handle student data, ensuring real-time updates and a smooth user experience.',
    tech_stack : 'REACT | JAVASCRIPT | HTML | CSS',
    git_hub_link : 'https://github.com/vimal8533/react_handson_six',
    live_link : 'https://reacthandsonsixx.netlify.app/student',
    thumbnail :'./images/studentblog.png'
},
    {
        title : 'Todo list Website',
        project_desc : 'This project contains the capabilties of JS. During the development of this project you will understand that how do you connect the HTML pages with functionality written in JS files, you will be using multiple DOM functions which will make your static application as Dynamic application where you can do multiple operations on user input and change the look and view of page based on user input, also known as adding Dynamic HTML in the website based on users input.',
        tech_stack : 'JAVASCRIPT | HTML | CSS',
        git_hub_link : 'https://github.com/vimal8533/Project/tree/main/Project_5',
        live_link : 'https://vimal8533.github.io/Project/Project_5/index.html',
        thumbnail :'./images/1stproject.png'
    },
    {
        title : 'Reminder Clock Website',
        project_desc : "I got to work on multiple HTML tags and various CSS properties. I was also introduced to the functions required for DOM manipulation. Additionally, I learned how to add dynamic HTML using JS and the Date function of JS. •Leveraged DOM manipulation functions to enhanceinteractivity and create growth-focused we applications, optimizing user flow experience and delivering engaging experiences",
        tech_stack : 'JAVASCRIPT | HTML | CSS',
        git_hub_link : 'https://github.com/vimal8533/Project/tree/main/project4',
        live_link : 'https://vimal8533.github.io/Project/project4/index.html',
        thumbnail : './images/2ndproject.png'
    },
    {
        title : 'ID Card Generator',
        project_desc : "The ID card generator was a web-based application that demonstrated proactive problem-solving skills responsive generated identification cards. It allowed users to input their personal information, including name, photo, college, and other relevant details.",
        tech_stack : 'JAVASCRIPT | HTML | CSS',
        git_hub_link : 'https://github.com/vimal8533/myownsimpleproject/tree/main/project3',
        live_link : 'https://vimal8533.github.io/myownsimpleproject/project3/index.html',
        thumbnail : './images/3rdproject.png'
    },
    {
        title : 'Jio Mart Website',
        project_desc : "•I designed and implemented a visually appealing and intuitive UI layout, ensuring a seamless user experience.",
        tech_stack : 'HTML |  CSS',
        git_hub_link : 'https://github.com/vimal8533/miniproject/tree/main/Jiomart',
        live_link : 'https://vimal8533.github.io/miniproject/Jiomart/index.html',
        thumbnail : './images/4thproject.png'
    },
    // {
    //     title : 'Meal Finder',
    //     project_desc : "A meal plan generator app that helps the user to find meal and see the ingredients",
    //     tech_stack : 'JAVASCRIPT |  HTML |  CSS',
    //     git_hub_link : 'https://github.com/Lpavan6445/MealSearch-App',
    //     live_link : 'https://meal-search-app-eight.vercel.app/',
    //     thumbnail : './images/mealFinderImage.png'
    // },
  ];
  
  
  
  const myWorksDiv = window.document.getElementById("projec");
  let innerHtml = '';
  MY_PROJECTS.forEach(({
    title, 
    project_desc, 
    tech_stack,
    thumbnail,
    git_hub_link,
    live_link,
  }) => {
    innerHtml += `
    <div data-aos="fade-up"data-aos-anchor-placement="bottom-bottom" class="sc-iqHYmW hMGSRy aos-init aos-animate">
    <div class="project_thumbnail">
      <img border="4px solid white" src=${thumbnail} alt="">
    </div>
    <div class="sc-dQoVA bOpVhN projectBottomDetails">
      <div class="sc-crrszt efwbxD">
        <h3>${title}</h3>
        <div class="sc-bqyKOL jtIpxz">
          <a href=${git_hub_link} target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
              </path>
            </svg>
          </a>
          <a href=${live_link} target="_blank" rel="noopener noreferrer">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z" clip-rule="evenodd">
              </path>
              <path fill-rule="evenodd" d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clip-rule="evenodd">
              </path>
            </svg>
          </a>
        </div>
      </div>
      <p>
       ${project_desc}
      </p>
      <div id="techStack">
        ${tech_stack}
      </div>
    </div>
    </div>
    `
  });
  myWorksDiv.innerHTML += innerHtml;
