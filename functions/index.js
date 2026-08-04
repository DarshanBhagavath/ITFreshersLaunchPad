const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, you should use an App Password.
// It's recommended to store these in Firebase config:
// firebase functions:config:set gmail.email="your-email@gmail.com" gmail.password="your-app-password"
const gmailEmail = functions.config().gmail ? functions.config().gmail.email : process.env.GMAIL_EMAIL;
const gmailPassword = functions.config().gmail ? functions.config().gmail.password : process.env.GMAIL_PASSWORD;

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Sends a welcome email to the given user.
exports.sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {
  const email = user.email; // The email of the user.
  const displayName = user.displayName || "New User"; // The display name of the user.

  if (!email) {
    return console.log("User does not have an email address.");
  }

  const mailOptions = {
    from: `"IT Fresher Launchpad" <${gmailEmail}>`,
    to: email,
  };

  // Building Email message.
  mailOptions.subject = "Welcome to IT Fresher Launchpad! Confirm your registration";
  mailOptions.text = `Hi ${displayName},\n\nWelcome to IT Fresher Launchpad! We are excited to have you on board. Your account has been successfully created.\n\nBest regards,\nThe Team`;
  mailOptions.html = `<p>Hi ${displayName},</p><p>Welcome to <b>IT Fresher Launchpad</b>! We are excited to have you on board.</p><p>Your account has been successfully created.</p><p>Best regards,<br>The Team</p>`;

  try {
    await mailTransport.sendMail(mailOptions);
    functions.logger.log("New welcome email sent to:", email);
  } catch (error) {
    functions.logger.error("There was an error while sending the email:", error);
  }
  return null;
});
