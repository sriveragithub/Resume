var titleBtn, aboutBtn, resumeBtn, contactBtn, aboutHTML, resumeHTML, contactHTML;

aboutBtn = document.getElementById('aboutBtn');
resumeBtn = document.getElementById('resumeBtn');
contactBtn = document.getElementById('contactBtn');

aboutHTML = '<h2 id="h2" style="text-align: center;">about</h2><p>Focused on advancing my career to the highest level while developing my experience in web/software development, client success, and management.<br><br>Currently enrolled in Digital Crafts code bootcamp to improve skills in Javascript, HTML/CSS, and C#.<br><br>Specialties: Being a self-starter to come up with my own projects and learn new skills, working as a team to complete projects and meet deadlines, utilizing a creative approach to problem solving, and actively seeking opportunities to learn and develop my professional and personal skills.<br><br>Technical skills: Javascript, C#, HTML/CSS, SQL, CRM Softwares, Various Ticketing Softwares</p>';
resumeHTML = '<h2 id="h2" style="text-align: center;">resume</h2><h3 id="h3_1">Work Experience</h3><h4 id="h4_1">Ticket Alternative/Freshtix - Atlanta, GA - Client Success Manager - October 2017 to Present</h4><p><ul><li>Provided industry-best service to 60+ Freshtix clients through weekly phone calls, face-to-face meetings, and working on-site at events</li><li>Organized staffing, support, and logistics for multiple events throughout the year exceeding 15,000 attendees</li><li>Utilized Zendesk to track client/customer correspondence, update help articles and solve issues with efficiency</li><li>Built out events, seasons and accounting parameters for clients ranging from small 300 capacity venues to amphitheaters and stadiums in Paciolan Ticketing Software</li><li>Proactively looked for solutions to simplify and improve efficiency for major clients</li><li>Trained clients to be self-sufficient within ticketing system and CRM</li></ul></p><h4 id="h4_2">Miami Marlins - Miami, FL - CRM & Data Analytics, Intern - July 2017 to October 2017</h4><p><ul><li>Created queries in Oracle SQL to analyze ticket sales, marketing campaigns, and clean data</li><li>Filled gaps in marketing reporting by conducting relational database analysis on marketing email campaigns detailing fan engagement, direct sales, and unsubscribe rates</li></ul></p><h4 id="h4_3">Minnesota United FC - Golden Valley, MN - Ticket Operations & Analytics Coordinator - June 2015 to July 2017</h4><p><ul><li>Utilized custom reporting templates via report platform and Microsoft Excel for tracking of daily single game sales, weekly/overall season ticket sales, and execution and analysis reports for all ongoing lead campaigns</li><li>Managed box office team of 14-16 window tellers at TCF Bank stadium maximizing walk-up revenue and acting as first line of support for all issues</li><li>Generated new data mining systems using Microsoft Excel and Virtual Basic Coding to increase leads generated per hour by ~1000% and grow patron database to 100,000+ (responsible for 20% of patron records)</li></ul></p><h3 id="h3_2">Education</h3><h4 id="h4_4">University of Florida - Gainesville, FL - May 2015</h4><p><ul><li>Bachelor of Science in Sports Management</li><li>Minor in Business Administration</li></ul></p><h3 id="h3_3">Relevant Skills and Proficiences</h3><p><ul><li>Zendesk - SQL - JavaScript - C# - HTML/CSS - Cheetah Digital Marketing Software - Microsoft Excel, Word, PowerPoint - Ticketmaster Archtics and Host - Spectra Paciolan Ticketing/CRM Software - AXS Veritix - Adobe Photoshop and Premiere Pro CC 2017 - Freshtix Ticketing Software</li></ul></p>'
contactHTML = '<div class="iframe"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLScoS9fkC-UAH6wbyM1i1B9SpO3XvqiRsbqYAYgUx0_TpeB3OQ/viewform?embedded=true" width="640" height="839" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></div>'

var setupEventListeners = function(el) {
    var about, contact, resume;
    about = aboutBtn;
    contact = contactBtn;
    resume = resumeBtn;
    
    return el.addEventListener('click', () => {
        var box, div;
        // 1. Remove existing html from div with class selector using firstChild and removeChild methods
    
        box = document.querySelector('.box')
        div = el;

        while (box.firstChild) {
            box.removeChild(box.firstChild);
        }

        // 2. Pull in replacement HTML based on element selected; i.e. resumeHTML if resumeBtn is selected or aboutHTML if aboutBtn is selected

        if (el === resumeBtn) {
            replacementHTML = resumeHTML;
        } else if (el === aboutBtn) {
            replacementHTML = aboutHTML;
        } else if (el === contactBtn) {
            replacementHTML = contactHTML;
        }

        // 3. Append HTML content into div with class selector using insertAdjacentHTML method with 'beforeend' as first argument

        document.querySelector('.box').insertAdjacentHTML('beforeend', replacementHTML);

        // 4. Reset active classes and highlight selected top nav item
        
        about.classList.remove('active');
        contact.classList.remove('active');
        resume.classList.remove('active');
        
        div.classList.add('active');
    
    });
    
}


setupEventListeners(resumeBtn);
setupEventListeners(aboutBtn);
setupEventListeners(contactBtn);

