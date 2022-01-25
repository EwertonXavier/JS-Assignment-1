console.log("JS script imported!"); //logs into the console if JS scripted is loaded.

/*<summary>
Welcome to our Group Login secret site!
This JS script is intended to block access to our Secret Website to everyone but group members.
</summary>*/

//Group team number. If you want to change the number of the group, alter the teamNumber variable.
const teamNumber = 1;

//List of members allowed to access website
const groupMembers = [
  {
    firstName: "Luiz",
    lastname: "Kerscher Pereira",
  },
  {
    firstName: "Santhini",
    lastname: "Sasidharan",
  },
  {
    firstName: "Yu",
    lastname: "Liu",
  },
  {
    firstName: "Beth",
    lastname: "Jarrett",
  },
];

//Variable to hold user input regarding Team Number
let inputTeamNumber;

//Variable to hold user input for Team Member first name
let inputMemberName;

//Asks for group number
inputTeamNumber = +prompt("Hello! Please inform your team number:");

//Check Group Number.
if (inputTeamNumber === teamNumber) {
  //Asks for user name
  inputMemberName = prompt("Please inform your first name:", "ex. John");

  //Check if user belongs to the team.
  // Each "case" block checks if user`s input is a valid team member.
  
  switch (inputMemberName) {
    case groupMembers[0].firstName: //check input against groupMembers list
      console.log("Valid Username"); //For troubleshooting purposes

      alert(
        "Welcome back " +
          groupMembers[0].firstName +
          " " +
          groupMembers[0].lastname +
          "!."
      ); //welcome back message: firstname+ lastname
      break;

    case groupMembers[1].firstName: //check input against groupMembers list
      console.log("Valid Username"); //For troubleshooting purposes
      alert(
        "Welcome back " +
          groupMembers[1].firstName +
          " " +
          groupMembers[1].lastname +
          "!"
      );
      break;

    case groupMembers[2].firstName: //check input against groupMembers list
      console.log("Valid Username"); //For troubleshooting purposes
      alert(
        "Welcome back " +
          groupMembers[2].firstName +
          " " +
          groupMembers[2].lastname +
          "!"
      );
      break;

    case groupMembers[3].firstName: //check input against groupMembers list
      console.log("Valid Username"); //For troubleshooting purposes
      alert(
        "Welcome back " +
          groupMembers[3].firstName +
          " " +
          groupMembers[3].lastname +
          "!"
      );
      break;

    case "": //check for empty input
      console.log("Invalid Input: Empty string"); //For troubleshooting purposes
      alert("Empty input");
      break;

    case null: //check for cancel button
      console.log("Invalid Input: Cancel Button"); //For troubleshooting purposes
      alert("Cancel button pressed");
      break;

    default:
      //if not in group member list -> access denied.
      console.log("Not a team member"); //For troubleshooting purposes
      alert("Access Denied");
  }
}
//Incorrect Team Number or invalid input
else {
  alert("Access Denied: Incorrect Team Number");
}
