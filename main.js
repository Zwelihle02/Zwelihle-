var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');

var currentStep = "chooseMethod";
var selectedModule = "";

// Example data for faculties, departments, etc.
var faculties = [
    { number: 1, name: "Science and Agriculture", departments: [
        { number: 1, name: "Computer Science", years: [
            { number: 1, year: "1st Year", modules: [
                { number: 1, code: "4CPS111", name: "Introductory Computing", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

                { number: 2, code: "4CPS112", name: "Introductory Systems Programming", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" }
            ]},

            { number: 2, year: "2nd Year", modules: [
                { number: 1, code: "4CPS211", name: "Data Structures and Algorithms", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

                { number: 2, code: "4CPS232", name: "Databse and Management Systems", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" }
            ]}

        ]},

        { number: 2, name: "Physics and Engineering", years: [
            { number: 1, year: "1st Year", modules: [
                { number: 1, code: "4PHY111", name: "physics 1", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

                { number: 2, code: "4PHY112", name: "Nuclear Physics, Electromegnetism", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" }
            ]},

            { number: 2, year: "2nd Year", modules: [
                { number: 1, code: "4PHY212", name: "Physics enzima", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

                { number: 2, code: "4PHY222", name: "Physics enzima kakhulu", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" }
            ]}

        ]},

        { number: 3, name: "Mathematical Sciences", years: [
            { number: 1, year: "1st Year", modules: [
                { number: 1, code: "4MTH111", name: "calculus", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

                { number: 2, code: "4MTH112", name: "Advanced Calculus", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" }
            ]},

            { number: 2, year: "2nd Year", modules: [
                { number: 1, code: "4MTH212", name: "Applied Math",contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },
                
                { number: 2, code: "4MTH222", name: "linear algebra and Differential Equations", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" }
            ]}


        ]}
    ]},
    // New Faculty: Commerce
    { number: 2, name: "Commerce", departments: [
        { number: 1, name: "Accounting", years: [
            { number: 1, year: "2nd Year", modules: [
                { number: 1, code: "4ACC212", name: "Financial Accounting", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" }
                
            ]}
        ]},
        { number: 2, name: "Business Management", years: [
            { number: 1, year: "2nd Year", modules: [
                { number: 1, code: "4BUS212", name: "Principles of Management", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" }
            ]}
        ]}
    ]}
];


var modules = [
    { number: 1, code: "4CPS212", name: "software Engineering", contact: "Lecture: Professor Mudali<br>Office: 23 D block<br>Consultations: tuesday @ 10h", roles: "student learns and lecture teaches", purpose: "TO teach you about stuff",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx"  },

    { number: 2, code: "4AMT212", name: "Applied Math", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 3, code: "4CPS232", name: "Database and Management System", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 4, code: "4CPS111", name: "Introductory Computing", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 5, code: "4CPS112", name: "Introductory Systems Programming", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 6, code: "4PHY111", name: "physics 1", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 7, code: "4PHY112", name: "Nuclear Physics, Electromegnetism", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 8, code: "4PHY212", name: "Physics enzima", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 9, code: "4PHY222", name: "Physics enzima kakhulu", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 10, code: "4MTH111", name: "calculus", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 11, code: "4MTH112", name: "Advanced Calculus", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 12, code: "4MTH212", name: "Applied Math", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 13, code: "4MTH222", name: "linear algebra and Differential Equations", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 14, code: "4ACC212", name: "Financial Accounting", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" },

    { number: 15, code: "4BUS212", name: "Principles of Management", contact: "Lecture: xxxxx", roles: "xxxx", purpose: "xxxx",assesmentplan: "xxxxxx", rulesAndRequirements: "xxxxxx", credits: "xxxxx" }

];

// Initial message from the chatbot
ChatbotSendMessage("Sawubona! igamalami ubheki ngiyi shathi bhothi yase UNIZULU. Umsebenziwami ukukusiza ukuthi uthole izinsiza kufunda ezikuma mojuli gadi. Bengicela ufake imojuli khodi noma ubhale inombolo 1 ukuze siqale.");

// Function to show the "Chatbot is typing..." effect
function showTypingIndicator() {
    var typingElement = document.createElement('div');
    typingElement.classList.add('message', 'bot-message');
    typingElement.id = "typingIndicator";
    typingElement.innerHTML = "<span>Chatbot is typing</span><span class='dots'>...</span>";
    chatContainer.appendChild(typingElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Add animation for dots
    const dots = typingElement.querySelector('.dots');
    dots.classList.add('dots-animation');
}

function showLoading() {
    var spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = 'block';
    }
}

function hideLoading() {
    var spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
}


// Function to remove the "Chatbot is typing..." effect
function removeTypingIndicator() {
    var typingElement = document.getElementById('typingIndicator');
    if (typingElement) {
        typingElement.remove();
    }
}


// Function to send chatbot messages with "thinking" effect
function ChatbotSendMessage(messageText) {
    showTypingIndicator();
    showLoading(); // Show loading animation
    
    setTimeout(function () {
       removeTypingIndicator();
        var messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot-message');
        messageElement.innerHTML = "<span>Chatbot:</span><span style='display:block; margin-top:10px;'>" + messageText + "</span>";
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Add animation to the message element
        messageElement.animate([
            { transform: 'translateY(-20px)', opacity: 0 },
            { transform: 'translateY(10px)', opacity: 1 },
            { transform: 'translateY(-5px)' },
            { transform: 'translateY(0)' }
        ], { 
            duration: 1000, 
            easing: 'ease-out'
        });

        hideLoading(); // Hide loading animation after message is sent
    }, 3000); // Adjust this duration for how long you want the "typing" effect to last
}



function sendMessage(messageText) {
    showLoading(); // Show the loading animation
    setTimeout(function () {
        var messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        messageElement.innerHTML = "<span>You:</span><span style='display:block; margin-top:10px;'>" + messageText + "</span>";
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Add animation to the user message element
        messageElement.animate([
            { transform: 'scale(0.5)', opacity: 0 }, 
            { transform: 'scale(1)', opacity: 1 }
       ], { 
           duration: 1500, 
           easing: 'ease-in-out'
       });

        hideLoading(); // Hide the loading animation after the message is sent
    }, 500); // Adjust the delay as needed
}



// Function to handle the selection method (type module code or search manually)
function handleMethodSelection(choice) {
    if (choice === '1') {
        ChatbotSendMessage("Ngicela ukhethe i-Fakhathi kulawa angezansi:");
        initializeOptions(faculties);
        currentStep = "chooseFaculty";    
    } else {
        handleModuleCodeInput(choice)
        
    }
}

// Function to handle module code input directly
function handleModuleCodeInput(code) {
    let module = modules.find(m => m.code.toLowerCase() === code.toLowerCase());
    if (module) {
        selectedModule = module;
        ChatbotSendMessage("Yini ofisa ukuyazi nge " + module.code + " " + module.name + " ?");
        ChatbotSendMessage("1: Lecturers contact Details<br>2: roles and responsibilities<br>3: Perpose of the module<br>4: Assessment plan<br>5: Rules and requirment during assement activities<br>6: Credits");
        currentStep = "moduleDetails";
    } else {
        ChatbotSendMessage("Angikuzwa cela ubhale imodule code kahle moma ufake igama.");
    }
}


// Function to handle module name input directly
function handleModuleNameInput(name) {
    let module = modules.find(m => m.name.toLowerCase() === name.toLowerCase());
    if (module) {
        selectedModule = module;
        ChatbotSendMessage("Yini ofisa ukuyazi nge " + module.code + " " + module.name + " ?");
        ChatbotSendMessage("1: Lecturers contact Details<br>2: roles and responsibilities<br>3: Perpose of the module<br>4: Assessment plan<br>5: Rules and requirment during assement activities<br>6: Credits");
        currentStep = "moduleDetails";
    } else {
        ChatbotSendMessage("igama yemojuli oyifakile ayikho. Zama futhi.");
    }
}

// Function to handle faculty selection
function handleFacultySelection(choice) {
    let faculty = faculties.find(f => f.number == choice);
    if (faculty) {
        ChatbotSendMessage("Ngicela Ukhethe idiphathimente kulawa angezansi");
        initializeOptions(faculty.departments);
        currentStep = "chooseDepartment";
        selectedFaculty = faculty;
    } else {
        ChatbotSendMessage("Ukhethe i-Faculty engekho. Zama futhi.");
    }
}

// Function to handle department selection
function handleDepartmentSelection(choice) {
    let department = selectedFaculty.departments.find(d => d.number == choice);
    if (department) {
        ChatbotSendMessage("Wenza unyaka wesingaki, cela ukhethe unyaka ngezansi");
        initializeOptions(department.years); // Ensure that this initializes the 'years'
        currentStep = "chooseYear";
        selectedDepartment = department;
    } else {
        ChatbotSendMessage("Ukhethe i-Department engalungile. Zama futhi.");
    }
}

// Function to handle year of study selection
function handleYearSelection(choice) {
    let year = selectedDepartment.years.find(y => y.number == choice);
    if (year) {
        ChatbotSendMessage("Ngicela ukhethe imojuli ofisa ukwazi ngayo kancono");
        initializeOptions(year.modules); // Ensure that this initializes the 'modules'
        currentStep = "chooseModule";
        selectedYear = year;
    } else {
        ChatbotSendMessage("Ukhethe unyaka ongavumelekile. Zama futhi.");
    }
}

// Function to handle module selection manually
function handleModuleSelection(choice) {
    // Convert choice to number in case the user inputs a number for selection
    let moduleNumber = parseInt(choice);

    // Find the module based on either number or module code
    let module = selectedYear.modules.find(m => m.number == moduleNumber || m.code.toLowerCase() === choice.toLowerCase());

    if (module) {
        selectedModule = module;
        ChatbotSendMessage("yini ofisa ukuyazi nge- " + module.code + " " + module.name + "? ");
        ChatbotSendMessage("1: Lecturers contact Details<br>2: roles and responsibilities<br>3: Purpose of the module<br>4: Assessment plan<br>5: Rules and requirment during assement activities<br>6: Credits");
        currentStep = "moduleDetails";
    } else {
        ChatbotSendMessage("Ukhethe ikhodi engavumelekile. Zama futhi.");
    }
}


// Function to handle module details display
function handleModuleDetails(choice) {
    let response = "";
    switch (choice) {
        case '1':
            response = "Imininingwane kathisha<br> " + selectedModule.contact;
            break;
        case '2':
            response = "roles and responsibilities:<br> " + selectedModule.roles;
            break;
        case '3':
            response = "purpose: " + selectedModule.purpose;
            break;
        case '4':
            response = "assesment Plan:<br> " + selectedModule.assesmentplan;
            break;
        case '5':
            response = "rulesAndRequirements:<br> " + selectedModule.rulesAndRequirements;
            break; 
        case '6':
            response = "credits: " + selectedModule.credits;
            break;
        default:
            response = "wenze ukhetho olungavumelekile.";
            break;
    }
    ChatbotSendMessage(response);
}

// Helper function to initialize options dynamically
function initializeOptions(options) {
    let messageText = "";
    options.forEach(option => {
        messageText += "<br>" + option.number + ": " + (option.name || option.year || option.code);
    });
    ChatbotSendMessage(messageText);
}

sendBtn.addEventListener('click', function () {
    let messageText = textbox.value.trim();
    if (messageText === "") {
        alert('Please type in a message');
    } else {
        showLoading(); // Show loading animation before sending the message
        sendMessage(messageText);
        textbox.value = "";

        if (currentStep === "chooseMethod") {
            handleMethodSelection(messageText);
        } else if (currentStep === "chooseFaculty") {
            handleFacultySelection(messageText);
        } else if (currentStep === "chooseDepartment") {
            handleDepartmentSelection(messageText);
        } else if (currentStep === "chooseYear") {
            handleYearSelection(messageText);
        } else if (currentStep === "chooseModule") {
            handleModuleSelection(messageText);
        } else if (currentStep === "moduleDetails") {
            handleModuleDetails(messageText);
        }
    }
});


textbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendBtn.click();  // Simulates the click on the Send button
    }
});

document.getElementById('resetBtn').addEventListener('click', function() {
    location.reload(); // Refreshes the current page
});
