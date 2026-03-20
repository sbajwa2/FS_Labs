document.addEventListener("DOMContentLoaded", () => {

const departments = [

{
name: "Administration",
employees: [
{ firstName: "Zoë", lastName: "Robins" },
{ firstName: "Madeleine", lastName: "Madden" }
]
},

{
name: "Audit",
employees: [
{ firstName: "Josha", lastName: "Sadowski" },
{ firstName: "Kate", lastName: "Fleetwood" }
]
},

{
name: "Banking Operations",
employees: [
{ firstName: "Priyanka", lastName: "Bose" },
{ firstName: "Hammed", lastName: "Animashaun" },
{ firstName: "Álvaro", lastName: "Morte" },
{ firstName: "Taylor", lastName: "Napier" },
{ firstName: "Alan", lastName: "Simmonds" }
]
},

{
name: "Communications",
employees: [
{ firstName: "Gil", lastName: "Cardinal" },
{ firstName: "Richard", lastName: "Lewis" }
]
},

{
name: "Corporate Services",
employees: [
{ firstName: "Randy", lastName: "Bradshaw" },
{ firstName: "Tracey", lastName: "Cook" },
{ firstName: "Lubomir", lastName: "Mykytiuk" }
]
},

{
name: "Facilities",
employees: [
{ firstName: "Dakota", lastName: "House" },
{ firstName: "Lori", lastName: "Okemah" },
{ firstName: "Renae", lastName: "Morrisseau" },
{ firstName: "Rick", lastName: "Belcourt" }
]
},

{
name: "Financial Services",
employees: [
{ firstName: "Selina", lastName: "Hanusa" },
{ firstName: "Buffy", lastName: "Gaudry" },
{ firstName: "Shaneen", lastName: "Fox" },
{ firstName: "Allan", lastName: "Little" },
{ firstName: "Danny", lastName: "Rabbit" }
]
},

{
name: "Human Resources",
employees: [
{ firstName: "Jesse", lastName: "Azure" },
{ firstName: "Stacy", lastName: "Da Silva" },
{ firstName: "Vladimír", lastName: "Valenta" },
{ firstName: "Samone", lastName: "Sayeses-Whitney" },
{ firstName: "Paul", lastName: "Coeur" }
]
},

{
name: "Information Technology",
employees: [
{ firstName: "Graham", lastName: "Greene" },
{ firstName: "Sandika", lastName: "Evergreen" },
{ firstName: "Jennifer", lastName: "Rodriguez" }
]
},

{
name: "IT Technician",
employees: [
{ firstName: "Aiyana", lastName: "Littlebear" },
{ firstName: "Inara", lastName: "Thunderbird" },
{ firstName: "Kaya", lastName: "Runningbrook" },
{ firstName: "Elara", lastName: "Firehawk" },
{ firstName: "Siona", lastName: "Moonflower" },
{ firstName: "Kaiyu", lastName: "Greywolf" },
{ firstName: "Ayawamat", lastName: "Nightwind" },
{ firstName: "Tala", lastName: "Braveheart" },
{ firstName: "Iniko", lastName: "Stonebear" },
{ firstName: "Onatah", lastName: "Redhawk" }
]
}

];

const main = document.getElementById("employee-container");

departments.forEach(dept => {

const section = document.createElement("section");

const title = document.createElement("h2");
title.textContent = dept.name;

const list = document.createElement("ul");

dept.employees.forEach(emp => {

const li = document.createElement("li");

li.textContent = `${emp.firstName} ${emp.lastName}`;

list.appendChild(li);

});

section.appendChild(title);
section.appendChild(list);

main.appendChild(section);

});

document.getElementById("year").textContent = new Date().getFullYear();

});