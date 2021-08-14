const components = {}; //// dùng để lưu màn hình giao diện của mình ( màn 1)
components.welcomeScreen = ` 
<h1>Welcome to Chat app</h1>
`; // welcomescreen : thêm thuộc tính vào object (components).
components.registerScreen = `
<div class="register-container">
        <div class="aside-right">
         
            <p class = "login-text">Register<p>

            <form id="register-form">
                <div class="input-name-wrapper">
                    <div class="input-wrapper">
                        <input class="input-style" type="text" name="firstName" placeholder="First-name..">
                        <div class="error" id="first-name-error"></div>
                    </div>
                    <div class="input-wrapper">
                        <input class="input-style" type="text" name="lastName" placeholder="Last-name..">
                        <div class="error" id="last-name-error"></div>
                    </div>
                </div>
                <div class="input-wrapper">
                    <input class="input-style" type="text" name="email" placeholder="Email..">
                    <div class="error" id="email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input class="input-style" type="password" name="password" placeholder="Password..">
                    <div class="error" id="password-error"></div>
                </div>
                <div class="input-wrapper">
                    <input  class="input-style" type="password" name="confirmPassword" placeholder="Confirm password...">
                    <div class="error" id="confirm-password-error"></div>
                </div>
                <div class="form-action">
                    <span class = "cursor" id="redirect-to-login">
                        Already have an account? Login
                    </span>
                    <button class="btn" type="submit">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>`;
///// loginScreen
components.loginScreen = `
<div class="login-container">
<div class="aside-right">
    <p class = "login-text">Login<p>
    
    <form id="login-form" >
        <div style="margin-bottom:40px"class="input-wrapper">
            <input class= "delete-borders"  type="text" name="email" placeholder="Email..">
            <div class="error" id="email-error"></div>
        </div>
        <div class="input-wrapper">
            <input class= "delete-borders"  type="password" name="password" placeholder="Password..">
            <div class="error" id="password-error"></div>
        </div>

        <div class="form-action">
            <span style ="margin-right: 5px" class = "cursor" id="redirect-to-register">
                Don't have an account? Register  
            </span>
            <button id = "redirect-to-chatScreen" class="btn" type="submit">
                Login
            </button>
        </div>
    </form>
</div>
</div>

`;

components.chatScreen = `
<div class="chat-container">
        <div class="header">    
            MINI CHAT
            <div class = "side-bar">
                <i class="fas fa-bars" aria-hidden="true"></i>
            </div> 
             <div id="sign-out" class="cursor" style=" display:flex;align-items: center; justify-content: center;border: none; background-color: rgb(207, 23, 23); position:absolute;width:80px; top: 15px; right: 15px; font-size: 10px;height: 40px; line-height: 30px; border-radius: 5px; font-size:15px;font-family: 'Roboto', sans-serif;">Sign out</div>
        </div>

            <div class="main">
        <div class="aside-left">
            <div class="create-conversation">
                <button class="btn" style="background-color:#34495e">
                    + New conversation
                </button>
            </div>
            <div class="list-conversation">

            </div>
        </div>
       
        <div class="conversation-detail">
            <div class="conversation-header">
                First conversation
            </div>
            <div class="list-messages">
              
                
            </div>
            <form id="send-messages-form">
                <div class="input-wrapper">
                    <input type="text" name="message" placeholder="Type a message">
                </div>
                <button type="submit">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </form>
        </div>
           <div class="aside-right">
            <div class="list-users">
            </div>
            <form id = "add-user-form">
                <div class="input-wrapper">
                    <input class="style-input" type="text" placeholder="Input friend email" name="email">
                    <div class="error" id="add-user-email-error"></div>
                </div>
                <button class="btn" type="submit">Save</button>
            </form>
        </div>
    </div>
</div>
`;
components.createConversation = `
 <div class="create-conversation-container">
        <div class="header">
            MindX chat
        </div>
        <div class="main" style="padding: 50px 30%">
            <form id="create-conversation-form">
                <div>
                    Create a new conversation
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Conversation name" name="conversationTitle">
                    <div class="error" id="conversation-name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Friend name" name="conversationEmail">
                    <div class="error" id="conversation-email-error"></div>
                </div>
                <button class="btn" type="submit">Save</button>
                <button class="btn btn-light" type="button" id="back-to-chat">Cancel</button>
            </form>
        </div>
    </div>
`;