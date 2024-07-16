/*require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");
//require("./db/conn")
require("./db/cooo")
const PORT = 6005;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema");

const clientid = "1041791137884-pofdb0dpfoi8e0baskj37d56m2h90erp.apps.googleusercontent.com"
const clientsecret = "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"



app.use(cors({
    origin:"http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials:true
}));

app.use(express.json());

//app.get("/", (req,res) => {
//    res.status(200).json("server start wellcome")
//});
app.use(session({
    secret:"15672983hakdhfjkjdsd",
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID:clientid,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        console.log("profile",profile)
        try{
            let user = await userdb.findOne({googleId:profile.id});

            if(!user){
                user = new userdb({
                    googleId:profile.id,
                    diplayname:profile.diplayname,
                    email:profile.email[0].value,
                    image:profile.photos[0].value
                });

                await user.save();
            }

            return done(null,user)

        }catch(error){
            return done(error,null)
        }
    }
    )
)


passport.serializeUser((user,done) => {
    done(null,user);
})

passport.deserializeUser((user,done) => {
    done(null,user);
});

app.get("./auth/google", passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback", passport.authenticate("google",{
    successRedirect:"http://localhost:3000/home",
    failureRedirect:"http://localhost:3000/login"
}))




app.listen(PORT, () => {
    console.log(`server start at ${PORT}`)
})*/


/*

require("dotenv").config();
//const connetionmongo =  require('./db/cooo');

const express = require("express");
require("./db/cooo")
//const mongoose = require("mongoose")

const User = require("./model/user");
const maths1 = require("./model/maths1");

const app = express();
const cors = require("cors");
const PORT = 6005;


app.use(express.json());
app.use(cors());

//const connection = async() => {
//    await mongoose.connect(`mongodb+srv://alazarmesfin:wHch5adIP3vxMH8V@cluster0.lfinulw.mongodb.net/LoginNmeev`)
//    console.log("conettttt")
//}


app.post("/register",async(req,resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    resp.send(result)
})





app.post("/maths1",async(req,resp) => {
    //const prrod = await Voidc.find();
    let videoo = new maths1(req.body);
    let result = await videoo.save();
    resp.send(result);
})

app.get("/maths1l", async(req,resp) => {
    const prrod = await maths1.find();
    resp.send(prrod)
})









app.post("/login", async(req, resp) => {
    if(req.body.password && req.body.name){
    let user = await User.findOne(req.body).select("-password");
    if(user){
        resp.send(user);
    }else{
        resp.send({result:"no"});
    }
    }else{
        resp.send({result:"no"})
    }


    //let result = await user.save();
   
})


app.listen(PORT, () => {
    console.log(`server start at ${PORT}`)
})


*/


const express = require("express");
require("dotenv").config();

const app = express();
const mongoose = require("mongoose");
const Cat = require('./db/conn')
const User = require("./model/user");
const Mathsone = require("./model/maths1");
const Chemistry = require("./model/chemistry");
const Civic = require("./model/civic");
const Cplus = require("./model/cplus");
const Emerg = require("./model/emerging");
const Engl1 = require("./model/eng1");
const Engl2 = require("./model/eng2");
const Logic = require("./model/logic");
const Maths2 = require("./model/maths2");
const Pytnon = require("./model/phython");
const Physics = require("./model/pyhsics");
const TD = require("./model/td");


const cors = require("cors");
const connectDB = require('./db/cooo');
const maths2 = require("./model/maths2");
const pyhsics = require("./model/pyhsics");

connectDB();


app.use(express.json());
app.use(cors());



app.get("/", async(req,resp) => {
    const cat = new Cat({
        name:"juli"
    })
    const data = await cat.save()
    resp.send(data)
});

app.post("/register",async(req,resp) => {
    let user = new User(req.body);
    let result = await user.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})


app.post("/login", async(req, resp) => {
    if(req.body.password && req.body.name){
    let user = await User.findOne(req.body).select("-password");
    if(user){
        resp.send(user);
    }else{
        resp.send({result:"no"});
    }
    }else{
        resp.send({result:"no"})
    }


    //let result = await user.save();
   
})





// MATHS
app.post("/mathsoneinput",async(req,resp) => {
    let mathsone = new Mathsone(req.body);
    let result = await mathsone.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/mathsonelist", async (req,resp) => {
    const mathsonelist = await Mathsone.find();
    if(mathsonelist.length > 0){
        resp.send(mathsonelist)

    }else{
        resp.send({result: "no data"});
    }
})


//CHEMISTRY

app.post("/chemistryinput",async(req,resp) => {
    let chemistryone = new Chemistry(req.body);
    let result = await chemistryone.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/chemistrylist", async (req,resp) => {
    const chemistryonen = await Chemistry.find();
    if(chemistryonen.length > 0){
        resp.send(chemistryonen)

    }else{
        resp.send({result: "no data"});
    }
})



//CIVIC

app.post("/civicinput",async(req,resp) => {
    let civicone = new Civic(req.body);
    let result = await civicone.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/civiclist", async (req,resp) => {
    const civicli = await Civic.find();
    if(civicli.length > 0){
        resp.send(civicli)

    }else{
        resp.send({result: "no data"});
    }
})



//CPLUS

app.post("/cplusinput",async(req,resp) => {
    let cpluss = new Cplus(req.body);
    let result = await cpluss.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/cpluslist", async (req,resp) => {
    const cplusd = await Cplus.find();
    if(cplusd.length > 0){
        resp.send(cplusd)

    }else{
        resp.send({result: "no data"});
    }
})

//EMERGING

app.post("/emerginginput",async(req,resp) => {
    let emergg = new Emerg(req.body);
    let result = await emergg.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/emerginglist", async (req,resp) => {
    const emmm = await Emerg.find();
    if(emmm.length > 0){
        resp.send(emmm)

    }else{
        resp.send({result: "no data"});
    }
})

//eng1

app.post("/engl1input",async(req,resp) => {
    let engone = new Engl1(req.body);
    let result = await engone.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/engl1list", async (req,resp) => {
    const engg = await Engl1.find();
    if(engg.length > 0){
        resp.send(engg)

    }else{
        resp.send({result: "no data"});
    }
})

//ENGLISH2

app.post("/engl2input",async(req,resp) => {
    let engtwo = new Engl2(req.body);
    let result = await engtwo.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/engl2list", async (req,resp) => {
    const enggg = await Engl2.find();
    if(enggg.length > 0){
        resp.send(enggg)

    }else{
        resp.send({result: "no data"});
    }
})

//LOGIC

app.post("/logicinput",async(req,resp) => {
    let logicc = new Logic(req.body);
    let result = await logicc.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/logiclist", async (req,resp) => {
    const logicx = await Logic.find();
    if(logicx.length > 0){
        resp.send(logicx)

    }else{
        resp.send({result: "no data"});
    }
})

//Maths2

app.post("/maths2input",async(req,resp) => {
    let mathstwoo = new Maths2(req.body);
    let result = await mathstwoo.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/maths2list", async (req,resp) => {
    const mathsd = await Maths2.find();
    if(mathsd.length > 0){
        resp.send(mathsd)

    }else{
        resp.send({result: "no data"});
    }
})

//PHYTHON

app.post("/pythoninput",async(req,resp) => {
    let pythh = new Pytnon(req.body);
    let result = await pythh.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/phython2list", async (req,resp) => {
    const pythnn = await Pytnon.find();
    if(pythnn.length > 0){
        resp.send(pythnn)

    }else{
        resp.send({result: "no data"});
    }
})


//physics

app.post("/physisinput",async(req,resp) => {
    let physs = new Physics(req.body);
    let result = await physs.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/physicslist", async (req,resp) => {
    const phyts = await pyhsics.find();
    if(phyts.length > 0){
        resp.send(phyts)

    }else{
        resp.send({result: "no data"});
    }
})

//TD

app.post("/tdinput",async(req,resp) => {
    let tdd = new TD(req.body);
    let result = await tdd.save();
    //result = result.toObject();
    //delete result.password
    resp.send(result)
})

app.get("/tdlist", async (req,resp) => {
    const tdi = await TD.find();
    if(tdi.length > 0){
        resp.send(tdi)

    }else{
        resp.send({result: "no data"});
    }
})







app.listen(5000)
