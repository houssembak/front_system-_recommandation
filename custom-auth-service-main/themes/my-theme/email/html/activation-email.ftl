<#-- activation-email.ftl -->

<html>
<head>
    <meta charset="UTF-8">
    <title>Activate your Account</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #333;">Welcome, ${user.firstName}!</h2>

        <p>Thank you for registeriang. Please activate your account by clicking the button below:</p>

        <div style="text-align: center; margin: 30px 0;">
            <a href="${activationLink}" 
               style="background-color: #4CAF50; color: white; padding: 14px 25px; text-decoration: none; display: inline-block; border-radius: 5px; font-size: 16px;">
               Activate Account
            </a>
        </div>

        <p>If you didn't request this email, you can safely ignore it.</p>

        <hr style="margin-top: 40px;">
        <p style="font-size: 12px; color: #888;">&copy; ${realmName} - All rights reserved.</p>
    </div>
</body>
</html>
