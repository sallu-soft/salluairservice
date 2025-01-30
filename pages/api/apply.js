import multer from "multer";
import nodemailer from "nodemailer";



const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
export default async function apply(req, res) {
   
    // const data = {
    //     fname,lname,email,phone,text
    // }
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        sucure:true,
        auth:{
            user:process.env.GMAIL,
            pass:process.env.GMAIL_PASSWORD,

        }
    });
    try{
       
        const {fullname,email,phone,country,company ,text} = req.body;
        const mail= await transporter.sendMail({
            from: email,
            to:process.env.GMAIL,
            subject:`Job Application Form submission from ${fullname}`,
            html:`
                <h2>Name: ${fullname}</h2>
                <h3>Email: ${email}</h3>
                <p>Phone: ${phone}</p>
                <h2>Applied Country For: ${country}</h2>
                <h2>Applied Country For: ${company}</h2>
                <p> ${text}</p>
                 
            `,
            // attachments: [
            //     {
            //       filename: filename,
            //       content: buffer,
            //     },
            //   ],

        });
        console.log("Message was sent:", mail.messageId, email   );
        return res.status(200).json({message:"success"})
   
    }catch(e){
        console.log(e);
        res.status(500).json({
            message:"Could Not Send The Email"
        })
    }
}