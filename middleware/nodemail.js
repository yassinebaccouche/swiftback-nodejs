import nodemailer from"nodemailer";



const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      pool: true,
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "mouhamedakrem.mouaddeb@esprit.tn", // generated ethereal user
        pass: "191JMT1863", // generated ethereal password
      },
    });

    await transporter.sendMail({
      from:  process.env.USER,
      to: email,
      subject: subject,
      html: text,
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};
export default sendEmail;