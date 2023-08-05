const nodeMailer = require("../config/nodemailer");
exports.newComment = async (comment: any) => {
  console.log("inside new comment mailer");
  let info = await nodeMailer.transporter
    .sendMail({
      from: "shubhambhandari12345hb@gmail.com",
      to: comment.user.email,
      subject: "New comment publish",
      text: "Hello world?",
      html: "<b>Test World?</b>",
    })
    .catch((err: Error) => console.log(err, "Error in sending mail"));
};
