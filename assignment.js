let userData = [
    {
        id: 1,
        name: "Dinesh",
        active: true,
        subjects: ["Html", "CSS", "JavaScript"],
        marks: {
            "html": 30,
            "css": 20,
            "js": 10
        }
    },
    {
        id: 2,
        name: "Dinesh",
        active: true,
        subjects: ["Html", "CSS", "JavaScript"],
        marks: {
            "html": 37,
            "css": 90,
            "js": 77
        }
    },
    {
        id: 3,
        name: "Dinesh",
        active: true,
        subjects: ["Html", "CSS", "JavaScript"],
        marks: {
            "html": 34,
            "css": 20,
            "js": 50
        }
    },
    {
        id: 4,
        name: "Dinesh",
        active: true,
        subjects: ["Html", "CSS", "JavaScript"],
        marks: {
            "html": 45,
            "css": 50,
            "js": 80
        }
    },
    {
        id: 5,
        name: "Dinesh",
        active: true,
        subjects: ["Html", "CSS", "JavaScript"],
        marks: {
            "html": 55,
            "css": 64,
            "js": 92
        }
    }
];

let count = userData.length;
// console.log(count);
for(let i=0; i<count; i++) {
    console.log(" !!USER!!---- ",(i+1))
console.log("id = ",userData[i]["id"])
console.log("name = ",userData[i]["name"])
console.log("active = ",userData[i]["active"])
let sub_html = userData[i]["subjects"][0];
let sub_css = userData[i]["subjects"][1];
let sub_js = userData[i]["subjects"][2];
console.log("Subjects =",sub_html,"/",sub_css,"/",sub_js);
let marks = userData[i]["marks"];
console.log("Marks html =",marks.html,"/ Marks css =",marks.css,"/ Marks js =",marks.js);

}
