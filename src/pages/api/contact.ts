// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import {google} from 'googleapis'

// create OAuth2 client credentials
const CLIENT_ID = process.env.CLIENT_ID 
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
})
// replace with your refresh token
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

type Data = {
  success: boolean;
  message: string;
}

type Email = {
  email: string; 
  name: string; 
  message: string;
}

const sendMail = async ({ email, name, message }: Email) => {

  const accessToken = await oAuth2Client.getAccessToken()

  let transporter = nodemailer.createTransport({
    // @ts-ignore
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "infotorch2014@gmail.com", // replace with your Gmail email address
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      accessToken: accessToken,
      refreshToken: REFRESH_TOKEN
    },
  });
  console.log(`Email: ${email}`)
  const mailOptions = {
    from: `${name} <${email}>`,
    to: "infotorch2014@gmail.com",
    subject: "Message From Your Portfolio Website",
    text: `From: ${name} (${email}) ${message}`,
    html: `From: <i>${name} (${email})  <br>-------------------<br> <b>${message}</b>`,
  }

  // send mail with defined transport object
  return transporter.sendMail(mailOptions,(error,info) => {
    if(error){
      console.log(error);
    }else{
      console.log("Message sent: %s ", info.messageId)
    }

  });
}

 const contactFormHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
 ) => {

  if(req.method === "POST"){
    const { name, message, email } = req.body
  
    if(name && message && email ){
      try {
       await sendMail({ name, message, email})
       res.status(200).json({ success: true, message: "Message sent successfully!" })
      }catch(e){
        res.status(500).json({ success: false, message: "Something unexpected happened while sending your message."})
      }
    }
  }



}

export default contactFormHandler

