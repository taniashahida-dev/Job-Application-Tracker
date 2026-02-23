
let Interviews = []
let Rejecteds = []

let totalJobs = document.getElementById("total-jobs")
let totalInterview = document.getElementById("total-interview")
let totalRejected = document.getElementById("total-rejected")

const allJobList = document.getElementById('All-job-list')
const interviewList = document.getElementById("Interview-list")
const rejectedList = document.getElementById('Rejected-list')
const cardContainer = document.getElementById("card-container")
console.log(interviewList)

function calculateTotalcards() {
    totalJobs.innerText = cardContainer.children.length
    totalInterview.innerText = Interviews.length
    totalRejected.innerText = Rejecteds.length
}

calculateTotalcards()