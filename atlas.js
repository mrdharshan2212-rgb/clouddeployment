db.students.insertMany([
  {name: "Keerthi", department: "BCA", year: 2},
  {name: "Priya", department: "Bsc", year: 2},
  {name: "Arun", department: "BCA", year: 1},
  {name: "Divya", department: "BCA", year: 2},
  {name: "Karthik", department: "BCA", year: 3}
])

db.student.find()

db.student.find({department: "BCA"})

db.students.updateOne(
  {name: "Priya"},
  {$set: {year: 3}}
)

db.students.find().sort({name: 1})

db.students.countDocuments()