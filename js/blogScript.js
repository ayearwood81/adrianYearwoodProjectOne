// wait for a user to hit the submit content button

// check if they've put information into the required fields

// if name, email, and comment are there, add the full comment to the page

    // get the name and store it

    // get the subject and store it

    // get the comment and store it

    // add a placeholder image

    // create a new comment element with the information and append it to the old comments section


    
// setting a counter for the number of comments on the page
let counter = document.querySelectorAll(`.commentImage`).length;
console.log(counter);
// displaying the number of comments on the page on refresh
document.querySelector("#commentNumber").textContent = `${counter} comments`;

// target the form
const formElement = document.querySelector("form");

// add eventlistener to the form which listens for submit
formElement.addEventListener("submit", function(event){

    // prevent default behaviour (page refresh)
    event.preventDefault();

    // get the value of the inputs and store them in variables
    const name = document.querySelector("input[name=name]").value;
    // not doing anything with the email, but will not accept a comment submission without a valid email
    const email = document.querySelector("input[name=email]").value;
    const subject = document.querySelector("input[name=subject]").value;
    const comment = document.querySelector("textarea[name=comment]").value;

    // only add the comment if they've added a comment with a name
    if ((comment) && (name) && (email)) {

        // create a new comment section
        const newComment = document.createElement("div");
        // give it the class of commentImage
        newComment.classList.add("commentImage");
        // create the image (placeholder for now - no image submission option)
        const image = document.createElement("img");
        image.alt = "new user";
        // add the image to the new comment section
        newComment.appendChild(image);

        // add a new section for the comment info
        const newCommentInfo = document.createElement("div");
        // give it the class of commentInfo
        newCommentInfo.classList.add("commentInfo");

        // make a new name section with the name and subject from the input section
        const newCommentName = document.createElement("p");
        // give it the class of commentName
        newCommentName.classList.add("commentName");

        // checking if they've added a subject
        if (subject) {
            // add content (innerHTML because it needs a span inside)
            newCommentName.innerHTML = `${name} <span>- ${subject}</span>`
            // add it to the commentinfo section
            newCommentInfo.appendChild(newCommentName);
        } else {
            // if no subject is input then put a generic "reply" beside the name
            newCommentName.innerHTML = `${name} <span>- Reply</span>`
            newCommentInfo.appendChild(newCommentName);
        }

        // make new section for the actual comment
        const newCommentText = document.createElement("p");
        newCommentText.textContent = `${comment}`;
        // add it to the commentinfo section
        newCommentInfo.appendChild(newCommentText);

        // make a new section for the time and date
        const timeDate = document.createElement("p");
        timeDate.classList.add("commentTimeDate");
        timeDate.textContent = "December 18, 2022 at 12 hours ago"
        // add it to the commentinfo section
        newCommentInfo.appendChild(timeDate);

        // add the commentinfo section to the new comment
        newComment.appendChild(newCommentInfo);
        
        // select the parent element and add the new comment to the page
        document.querySelector("#commentWrapper").appendChild(newComment);

        // increase the counter after a comment is added
        counter++;

        // update the number at the top of the comment section
        document.querySelector("#commentNumber").textContent = `${counter} comments`;

        // resetting the fields if a submission was successful
        document.querySelector("input[name=name]").value = "";
        document.querySelector("input[name=email]").value = "";
        document.querySelector("input[name=subject]").value = "";
        document.querySelector("textarea[name=comment]").value = "";
    // if the name, email, or comment is missing do not create a new comment and prompt the user to fix the problem
    } else if (comment == false) {
        alert("Missing Comment!");
    } else if (name == false) {
        alert("Missing Name!");
    } else if (email == false) {
        alert("Missing Email!");
    }
})