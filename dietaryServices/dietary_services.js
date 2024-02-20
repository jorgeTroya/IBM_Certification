let dietaryUser = "";
let authMessage;

if (dietaryUser === "Employee") {
authMessage = "You are authorized to access Dietary Services";
} else if (dietaryUser === "Enrolled Member") {
    authMessage = "You are authorized to access Dietary Services and one-one Interaction with dietician";
} else if (dietaryUser === "Subscriber") {
    authMessage = "You are entitle to partial access to the Dietary Service";
} else {
    authMessage = "You need to enroll or at least subscribe to get access";
}

console.log(authMessage);