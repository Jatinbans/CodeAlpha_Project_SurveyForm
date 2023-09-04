$(document).ready(function () {
    $("#tabs").tabs();
    $(document).tooltip();
    $("#btnSave").click(createListItem);
    $("#GEN_4").datepicker({ dateFormat: "yy-mm-dd" }).val();
  });
  
  
  function createListItem() {
   listCreationInformation = new SP.ListItemCreationInformation(); 
   listItem = list.addItem(listCreationInformation);
  
   var input_list = $('input');
  
   var id, name, text;
  
   for (var i = 0; i < input_list.length; i++) {
       name = $(input_list[i]).attr('name');
  
       if ($(input_list[i]).attr('type') === 'radio') {
          
       }
       else {
           text = $(input_list[i]).val();
       }
       listItem.set_item(name, text);
    }
    listItem.update(); //Update the List Item
    clientContext.executeQueryAsync(
      Function.createDelegate(this, success),
      Function.createDelegate(this, fail)
     );
   }

const form = document.querySelector('form');
const nextButton = document.getElementById('nextButton');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const captchaResponse = grecaptcha.getResponse();
    
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    
    if (!captchaResponse.length > 0) {
        console.error("Captcha not complete");
    } else if (!nameInput.value.trim() || !emailInput.value.trim()) {
        console.error("Please enter your name and email");
    } else {
        const fd = new FormData(e.target);
        const params = new URLSearchParams(fd);
        
        // Store form data in session storage
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            // Add other form fields as needed
        };
        sessionStorage.setItem('formData', JSON.stringify(formData));
        
        // Enable the Next button since all required details are filled
        nextButton.removeAttribute('disabled');
        window.location.href = 'index2.html';
    }
});




const storedFormData = sessionStorage.getItem('formData');

if (storedFormData) {
    const formData = JSON.parse(storedFormData);
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    

    nameInput.value = formData.name;
    emailInput.value = formData.email;
   
}
