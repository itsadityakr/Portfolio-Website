# How to use EmailJS and create a working Contact Form.
---

### **Creating an Account and Setting Up EmailJS**

1. **Create an EmailJS Account:**
   - Visit [EmailJS](https://www.emailjs.com/) and create an account.

2. **Adding Email Services:**
   - Go to the "Email Services" section.
   - Add a new service and select "Gmail" under "Personal Services."
   - Copy the **Service ID** (e.g., `service_123abc123`).
   - Connect your Gmail account to EmailJS and finalize the service creation.

3. **Creating Email Templates:**
   - Navigate to the "Email Templates" section.
   - Create a new template and fill in the required details (e.g., sender name, email body).
   - Save the template and copy the **Template ID** (e.g., `template_123abc`).

4. **Getting Your Public Key:**
   - Go to the "Account" section on the left pane.
   - Copy the **Public Key** (e.g., `abc123abc123abc`).

### **Integrating EmailJS with Your Website**

#### 1. **Loading the EmailJS Library**

To use EmailJS in your project, load the EmailJS SDK by adding the following script tag to your HTML file:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
```

- **Purpose:** This script tag loads the EmailJS library, which enables you to send emails directly from the client-side without needing a backend server.

#### 2. **Initializing EmailJS**

After loading the SDK, initialize EmailJS with your Public Key:

```javascript
<script type="text/javascript">
    (function() {
        // Initialize EmailJS with your public key
        emailjs.init({
            publicKey: "abc123abc123abc",
        });
    })();
</script>
```

- **Purpose:** This initializes the EmailJS SDK with your account's Public Key, allowing you to use the service for sending emails.

#### 3. **Handling Form Submission**

Implement form submission handling with JavaScript:

```javascript
<script type="text/javascript">
    window.onload = function() {
        const contactForm = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const inputs = document.querySelectorAll('[data-form-input]');

        // Enable submit button when all inputs are filled
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                submitBtn.disabled = ![...inputs].every(input => input.value.trim() !== '');
            });
        });

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = {
                from_name: contactForm.fullname.value,
                from_email: contactForm.email.value,
                message: contactForm.message.value,
                to_name: "EMAIL ENTERED IN EMAILJS"
            };

            emailjs.send('service_123abc123', 'template_123abc', formData)
                .then(() => {
                    console.log('SUCCESS!');
                    alert('Email sent successfully!');
                    contactForm.reset();
                    submitBtn.disabled = true;
                }, (error) => {
                    console.log('FAILED...', error);
                    alert('Failed to send email. Please try again later.');
                });
        });
    }
</script>
```

- **Purpose:** This script handles form submission, validates input fields, and sends the form data to EmailJS using the `emailjs.send` method. Upon successful submission, a confirmation message is shown; otherwise, an error alert is displayed.

#### 4. **HTML Structure for the Contact Form**

The HTML structure for your contact form should look like this:

```html
<section class="contact-form">
    <h3 class="h3 form-title">Contact Form</h3>
    <form id="contactForm" class="form" data-form>
        <div class="input-wrapper">
            <input type="text" name="fullname" id="fullname" class="form-input" placeholder="Full name" required data-form-input />
            <input type="email" name="email" id="email" class="form-input" placeholder="Email address" required data-form-input />
        </div>
        <textarea name="message" id="message" class="form-input" placeholder="Your Message" required data-form-input></textarea>
        <button id="submitBtn" class="form-btn" type="submit" disabled data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
        </button>
    </form>
</section>
```

#### **5. Places to Make Changes**

When implementing the EmailJS integration, there are a few key areas where you may need to make changes to adapt the code to your specific use case:

#### 1. **Public Key**
   - **Code Location:**
     ```javascript
     emailjs.init({
         publicKey: "abc123abc123abc",
     });
     ```
   - **What to Change:** 
     - Replace `"abc123abc123abc"` with your actual **Public Key** from the EmailJS account section.
   - **Why:** 
     - The Public Key is necessary for EmailJS to identify your account and allow you to send emails.

#### 2. **Service ID**
   - **Code Location:**
     ```javascript
     emailjs.send('service_123abc123', 'template_123abc', formData)
     ```
   - **What to Change:** 
     - Replace `'service_123abc123'` with your actual **Service ID** copied from the "Email Services" section in EmailJS.
   - **Why:** 
     - The Service ID identifies the specific email service (e.g., Gmail) you connected to EmailJS.

#### 3. **Template ID**
   - **Code Location:**
     ```javascript
     emailjs.send('service_123abc123', 'template_123abc', formData)
     ```
   - **What to Change:** 
     - Replace `'template_123abc'` with your actual **Template ID** copied from the "Email Templates" section in EmailJS.
   - **Why:** 
     - The Template ID specifies the template you created that defines the structure and content of the email being sent.

#### 4. **Recipient Email (to_name)**
   - **Code Location:**
     ```javascript
     const formData = {
         from_name: contactForm.fullname.value,
         from_email: contactForm.email.value,
         message: contactForm.message.value,
         to_name: "EMAIL ENTERED IN EMAILJS"
     };
     ```
   - **What to Change:** 
     - Replace `"EMAIL ENTERED IN EMAILJS"` with the actual email address that you want to receive the contact form submissions.
   - **Why:** 
     - This is where the form submissions will be sent. It should be an email that you actively monitor.

### **Summary of Changes:**

1. **Public Key:** Change to your actual Public Key from EmailJS.
2. **Service ID:** Update with your specific Service ID from EmailJS.
3. **Template ID:** Replace with your Template ID from the template you created.
4. **Recipient Email:** Set to the email address where you want to receive the form submissions.

By making these changes, you'll ensure that the form submissions are correctly processed and delivered to the intended recipient using the right service and template configured in your EmailJS account.

- **Purpose:** This section defines the structure of your contact form, including input fields for the user’s full name, email, and message, along with a submit button. The button is initially disabled and only enabled when all fields are filled out.

### **Summary**

- **Linking & Working:**
  - **EmailJS SDK:** Load using a `<script>` tag to access its functions.
  - **Initialization:** Use `emailjs.init(publicKey)` to link your EmailJS account.
  - **Form Interaction:** Use JavaScript to handle form submission, validate inputs, and send data using `emailjs.send`.
  - **HTML Structure:** Define a form with fields for user input and a submit button, which is dynamically enabled when all fields are completed.

### **Requirements:**
1. **EmailJS Account:** To obtain the `Public Key`, `Service ID`, and `Template ID`.
2. **JavaScript Knowledge:** To initialize EmailJS and handle form interactions.
3. **HTML Form Setup:** To structure the form elements and provide a user interface for data collection.

This guide provides a detailed overview of how to implement a contact form using EmailJS, ensuring you have all the necessary steps and explanations for a successful integration.

- by Aditya Kumar