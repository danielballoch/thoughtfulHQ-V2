// Require:
var postmark = require("postmark");
import fetch from "node-fetch"

// Send an email:
var client = new postmark.ServerClient(process.env.POSTMARK_AUTH);

//validate token through google
async function validateHuman(token){
  // console.log("validate human running")
const secret = process.env.GATSBY_RECAPTCHA_SECRET;
const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
  {
      method: "POST",
  } 
)
//this is where It's failing??
const data = await response.json();
return data.success;
}

//main function
export default async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log(req.body);
  const human = await validateHuman(req.body.token);
  if (!human){
      // console.log("this message shows we're getting to the !human part")
      res.status(400);
      res.json({errors: ["Please, you're not fooling us, bot."]})
      return;
  }
  try {
    let message = {
      "From": "daniel@thoughtfulhq.com",
      "To": req.body.email,
      "ReplyTo": "daniel@thoughtfulhq.com",
      "TemplateId" : 34813832,
      "TemplateModel": {
        "name": req.body.name,
        "email": req.body.email,
        "phone": req.body.phone,
        "message": req.body.message
      },
      "MessageStream": "outbound"
    }
    return client.sendEmailWithTemplate(message).then(
      () => {
        console.log("customer-support-sent")
        message.To = "daniel@thoughtfulhq.com"
        message.ReplyTo = req.body.email
        client.sendEmailWithTemplate(message)
      }
    ).then(
      () => {
        console.log("both-emails-sent")
        res.status(200).json({
          message: "This is updated",
        })
      }
    )
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "There was an error", error: err })
  }
}
