
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }




    var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right = "-200px";
    }

    const form = document.forms['submit-to-email'];
    const msg = document.getElementById('msg');
  
    function sendEmail() {
        Email.send({
          Host: "smtp.gmail.com",
          Username: "josemaquinarodriguez@gmail.com",
          Password: "", // Replace with your Gmail App Password or actual password
          To: "josemaquinarodriguez@gmail.com",
          From: document.getElementById("email").value,
          Subject: 'New Contact Form Enquiry',
          Body: "And this is the body",
        }).then(
          (message) => {
            msg.innerHTML = 'Email sent successfully';
            setTimeout(function () {
              msg.innerHTML = '';
            }, 5000);
            form.reset();
          }
        ).catch((error) => {
          console.error('Error sending email:', error);
          msg.innerHTML = 'Error sending email';
        });
      }
      form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission
        sendEmail(); // Call the sendEmail function when the form is submitted
      });