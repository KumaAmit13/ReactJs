const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: false }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

const coursesSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name must not be null"] },
  enrooledUsers: [
    {
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    }
  ]
});

const Course = mongoose.model("Course", coursesSchema);

async function saveData() {
  try {
    // Create a new user
    const user = new User({
      name: 'Amit Kumar',
      email: 'amiat@example.com'
    });
    const savedUser = await user.save();
    console.log('User saved:', savedUser);

    // Create a new course and enroll that user
    const course = new Course({
      name: 'Node.js Basics',
      enrooledUsers: [{ createdBy: savedUser._id }]
    });
    const savedCourse = await course.save();
    console.log('Course saved:', savedCourse);

    // Retrieve with populate
    const populatedCourse = await Course.findById(savedCourse._id).populate('enrooledUsers.createdBy');
    console.log('Populated Course:', JSON.stringify(populatedCourse, null, 2));

  } catch (err) {
    console.error(err);
  }
}

saveData();


// collections: { users: [Circular *2], courses: [Collection] },
//     models: { User: Model { User }, Course: Model { Course } },
//     config: {},
//     replica: false,
//     options: null,
//     otherDbs: [],
//     relatedDbs: {},
//     states: [Object: null prototype] {  
//       '0': 'disconnected',
//       '1': 'connected',
//       '2': 'connecting',
//       '3': 'disconnecting',
//       '99': 'uninitialized',
//       disconnected: 0,
//       connected: 1,
//       connecting: 2,
//       disconnecting: 3,
//       uninitialized: 99
//     },
//     _readyState: 0,
//     _closeCalled: false,
//     _hasOpened: false,
//     plugins: [],
//     id: 0,
//     _queue: [ [Object], [Object] ],     












app.get("/",(req,res)=>{
  res.send(JSON.parse(model.collection))
});

app.get("/greet/:name",(req,res)=>{
  res.send({
    name:req.params.name,
    id:1223
  });
})

app.listen(port,(err)=>{
console.log("hii"+port)
})

