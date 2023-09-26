

fetch("https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3")
    .then((response) => response.json())
    .then((data) => {
        // Access the elements by their IDs
        const courseTitleElement = document.getElementById('course-title');
        const courseDescriptionElement = document.getElementById('course-description');
        const coursesubtitle =document.getElementById('subtitle')
        // Insert data into the elements
        courseTitleElement.textContent = data.details.title;
        courseDescriptionElement.textContent = data.details.description;
        coursesubtitle.textContent = data.details.subtitle

       

    const coursesContainer = document.getElementById('courses-container');

    data.courses.forEach((course) => {
        // Create a parent div for each course and apply Tailwind classes
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('border-b-2', 'p-4', 'mb-4');  
    
        // Create and populate elements for the course title with Tailwind classes
        const titleElement = document.createElement('p');
        titleElement.textContent = `${course.title}`;
        titleElement.classList.add('font-semibold', 'text-lg', 'text-gray-800');  
    
        // Create and populate elements for the course subtitle with Tailwind classes
        const subtitleElement = document.createElement('p');
        subtitleElement.textContent = `${course.subtitle}`;
        subtitleElement.classList.add('text-sm', 'text-gray-600');
        
        const timeElement = document.createElement('p');
        timeElement.textContent =`${course.courseHours} Hrs.`;
    
        // Create and populate elements for the course amount with Tailwind classes
        const amountElement = document.createElement('span');
        amountElement.textContent = `Contribution: ${course.amount}`;
        amountElement.classList.add('text-extralight','pr-5','h-10','font-normal');  
    
        // Create and populate elements for the course originalAmount with Tailwind classes
        const originalAmountElement = document.createElement('span');
        originalAmountElement.textContent = `${course.originalAmount}`;
        originalAmountElement.classList.add('text-lg','line-through');  
    
        // Create and populate elements for the course language with Tailwind classes
        const languageElement = document.createElement('p');
        languageElement.textContent = `${course.language}`;
        languageElement.classList.add('text-gray-700','border-blue-500','bg-blue-300','w-12','rounded-md','text-center');  

        const addtocartElement = document.createElement('span');
        addtocartElement.textContent = `ADD TO CART`;
        addtocartElement.classList.add('mr-5','border-r-2','pr-2','text-red-400','text-xm','font-semibold')
        
        const enrollElement = document.createElement('span');
        enrollElement.textContent = `ENROLL`;
        enrollElement.classList.add('text-red-400','font-xm','font-semibold')

        const imgElement = document.createElement('img');
        imgElement.src = `icons/icons8-bookmark-48.png`;
        imgElement.classList.add('h-5')
    
        // Append the elements to the courseDiv
        courseDiv.appendChild(imgElement);
        courseDiv.appendChild(titleElement);
        courseDiv.appendChild(subtitleElement);
        courseDiv.appendChild(timeElement);
        courseDiv.appendChild(amountElement);
        courseDiv.appendChild(originalAmountElement);
        courseDiv.appendChild(languageElement);
        courseDiv.appendChild(addtocartElement);
        courseDiv.appendChild(enrollElement);
    
        // Append the courseDiv to the coursesContainer
        coursesContainer.appendChild(courseDiv);
    });

    const imageFilenames = [
        'image(1).jpg',
        'image(2).jpg',
        'image(3).jpg',
        'image(4).jpg',
        'image(5).jpg',
        'image(6).jpg',
        'image(7).jpg',
        'image(8).jpg',
        'image(9).jpg',
        'image(10).jpg',
        'image(11).jpg',
        'image(12).jpg',
        'image(13).jpg',
        'image(14).jpg',
        'image(15).jpg',
    ];

    const relatedcontainer = document.getElementById('other_related_content');

    data.relatedContent.forEach((content,index)=>{
        const relatedother=document.createElement('div');
        relatedother.classList.add('border-b-2', 'p-4', 'mb-4','flex','items-center');

        const rel_text = document.createElement('div');
        rel_text.classList.add('ml-5');


        const rel_title = document.createElement('p');
        rel_title.textContent = `${content.title}`;
        rel_title.classList.add('font-semibold','mb-2')

        const rel_sub = document.createElement('p');
        rel_sub.textContent = `${content.subtitle}`;
        rel_sub.classList.add('font-extralight','text-gray-700');

        const couse_count = document.createElement('p');
        couse_count.textContent =`${content.coursesCount} Video Series`;
        couse_count.classList.add('font-extralight','text-gray-700')

        const rel_image = document.createElement('img');
        const imageURL = `working_site_files/${imageFilenames[index]}`;
        rel_image.src = imageURL;
        rel_image.classList.add('mr-1','h-20','rounded-md');
        
        rel_text.appendChild(rel_title);
        rel_text.appendChild(rel_sub);
        rel_text.appendChild(couse_count);

        relatedother.appendChild(rel_image);
        relatedother.appendChild(rel_text);

        relatedcontainer.appendChild(relatedother);
    })
    

    }
)
.catch((error) => {
console.error("Error fetching data:", error);


});


const faqContainer = document.getElementById("faq-container");

// Fetch FAQ data from the API
fetch("https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english")
  .then((response) => response.json())
  .then((faqData) => {
    faqData.forEach((faqItem) => {
      const faqItemDiv = document.createElement('div');
      faqItemDiv.classList.add('border-b-2', 'p-4', 'mb-4');

      const questionElement = document.createElement('p');
      questionElement.textContent = faqItem.question;
      questionElement.classList.add('font-semibold', 'text-lg', 'text-gray-800', 'cursor-pointer');

      const answerElement = document.createElement('div');
      answerElement.innerHTML = faqItem.answer;
      answerElement.classList.add('hidden', 'text-gray-600', 'mt-2', 'max-h-0', 'overflow-hidden', 'transition-max-h', 'duration-700');

      questionElement.addEventListener('click', () => {
        answerElement.classList.toggle('hidden');
        answerElement.classList.toggle('max-h-screen');
      });

      faqItemDiv.appendChild(questionElement);
      faqItemDiv.appendChild(answerElement);

      faqContainer.appendChild(faqItemDiv);
    });
  })
  .catch((error) => {
    console.error('Error fetching FAQ data:', error);
  });

const menuContainer = document.getElementById("menu");

fetch("https://api.acharyaprashant.org/v2/legacy/courses/tags")
.then((tags_data) => tags_data.json())
.then((tags_data_pulled) => {
const categoriesContainer = document.getElementById("categories");

// Display only the first 10 categories and their subcategories
for (let i = 0; i < 6 && i < tags_data_pulled.length; i++) {
    const subcategoryArray = tags_data_pulled[i];

    const subcategoryList = document.createElement("ul");

    subcategoryArray.forEach((subcategory) => {
    const subcategoryItem = document.createElement("li");
    const subcategoryName = document.createElement("span");
    subcategoryName.textContent = subcategory.name.english;
    subcategoryName.classList.add("text-black")

    // Append the subcategory name to the list item
    subcategoryItem.appendChild(subcategoryName);

    // Append the list item to the subcategory list
    subcategoryList.appendChild(subcategoryItem);
    });

    // Append the subcategory list to the categories container
    categoriesContainer.appendChild(subcategoryList);
    menuContainer.appendChild(categoriesContainer);
}
})
.catch((error) => {
console.error("Error fetching data: ", error);
});

// your-script.js

document.addEventListener('DOMContentLoaded', () => {
  const dropdownContainer = document.getElementById('dropdown-container');
  const dropdownToggle = document.getElementById('dropdown-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const livesessioncontainer = document.getElementById("livesessioncontainer");
  const livesessiontoggle = document.getElementById("livessiontoggle");
  const livesessionmenu = document.getElementById("livesesssionmenu");

  dropdownToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden');
      
  });

  
  document.addEventListener('click', (event) => {
      if (!dropdownContainer.contains(event.target)) {
          dropdownMenu.classList.add('hidden');
      }
      
  });
  livesessiontoggle.addEventListener('click', ()=>{
    livesessionmenu.classList.toggle("hidden");
  });
  
  document.addEventListener("click",(moves)=>{
    if(!livesessioncontainer.contains(moves.target)){
      livesessionmenu.classList.add("hidden");
    }

  })
});

