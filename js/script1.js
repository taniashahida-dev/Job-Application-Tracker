let Interviews = []
let Rejecteds = []
let currentStatus = 'All'

let totalJobs = document.getElementById("total-jobs")
let totalInterview = document.getElementById("total-interview")
let totalRejected = document.getElementById("total-rejected")

const allJobList = document.getElementById('All-job-list')
const interviewList = document.getElementById("Interview-list")
const rejectedList = document.getElementById('Rejected-list')
const cardContainer = document.getElementById("card-container")

const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')
const deleteSection = document.getElementById('delete-section')


function calculateTotalcards() {
    totalJobs.innerText = cardContainer.children.length
    totalInterview.innerText = Interviews.length
    totalRejected.innerText = Rejecteds.length
   let isEmpty = false

    if (currentStatus === 'All-job-list' && cardContainer.children.length === 0) {
        isEmpty = true
    } else if (currentStatus === 'Interview-list' && Interviews.length === 0) {
        isEmpty = true
    } else if (currentStatus === 'Rejected-list' && Rejecteds.length === 0) {
        isEmpty = true
    }

    if (isEmpty) {
        deleteSection.classList.remove('hidden')
    } else {
        deleteSection.classList.add('hidden')
    }
}

calculateTotalcards()


function btnTogle(id) {
    allJobList.classList.add('bg-white', 'text-black')
    interviewList.classList.add('bg-white', 'text-black')
    rejectedList.classList.add('bg-white', 'text-black')

    allJobList.classList.remove('bg-blue-700','text-white')
    interviewList.classList.remove('bg-blue-700','text-white')
    rejectedList.classList.remove('bg-blue-700','text-white')

    const selected = document.getElementById(id)

    currentStatus = id
    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-700','text-white')

    if (id == 'Interview-list') {
        cardContainer.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterviews()

    } else if (id == 'All-job-list') {
        cardContainer.classList.remove('hidden');
        filterSection.classList.add('hidden')

    } else if (id == 'Rejected-list') {
        cardContainer.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderrejecteds()
    }

    calculateTotalcards(); 
}


mainContainer.addEventListener("click", function(event){

  
   if (event.target.classList.contains('interview-btn')) {

        const parent = event.target.parentNode.parentNode

        const companyName = parent.querySelector('.com-name').innerText
        const position = parent.querySelector('.position').innerText
        const sellery = parent.querySelector('.sellary').innerText
        const description = parent.querySelector('.description').innerText

        parent.querySelector('.batch').innerText = 'Interview'
        batch.classList.remove('bg-gray-400','bg-red-400')
        batch.classList.add('bg-green-400')

        const cardInformation = {
            companyName,
            position,
            sellery,
            batch: 'Interview',
            description
        }

        const jobExist = Interviews.find(item => item.companyName == companyName)

        if (!jobExist) {
            Interviews.push(cardInformation)
        }

        Rejecteds = Rejecteds.filter(item => item.companyName != companyName)

        if (currentStatus == 'Interview-list') {
            renderInterviews()
        }

        calculateTotalcards()
   }

   else if (event.target.classList.contains('reject-btn')) {

        const parent = event.target.parentNode.parentNode

        const companyName = parent.querySelector('.com-name').innerText
        const position = parent.querySelector('.position').innerText
        const sellery = parent.querySelector('.sellary').innerText
        const description = parent.querySelector('.description').innerText

        parent.querySelector('.batch').innerText = 'Rejected'
        batch.classList.remove('bg-gray-400','bg-green-400')
        batch.classList.add('bg-red-400')

        const cardInformation = {
            companyName,
            position,
            sellery,
            batch: 'Rejected',
            description
        }

        const jobExist = Rejecteds.find(item => item.companyName == companyName)

        if (!jobExist) {
            Rejecteds.push(cardInformation)
        }

      
        Interviews = Interviews.filter(item => item.companyName != companyName)

        if (currentStatus == 'Rejected-list') {
            renderrejecteds()
        }

        calculateTotalcards()
   }

      else if (event.target.closest('.delete-button')) {

        const parent = event.target.closest('.card')

        const companyName = parent.querySelector('.com-name').innerText

        parent.remove()

        Interviews = Interviews.filter(item => item.companyName != companyName)

       
        Rejecteds = Rejecteds.filter(item => item.companyName != companyName)

  
        if (currentStatus == 'Interview-list') {
            renderInterviews()
        }

    
        if (currentStatus == 'Rejected-list') {
            renderrejecteds()
        }

        calculateTotalcards()
   }

})

function renderInterviews() {
     filterSection.innerHTML=''

     for(let interview of Interviews)
     {
         let div = document.createElement('div');
         div.className ='mt-10 space-y-7'
         div.innerHTML= `
          <div class="card space-y-1.5 bg-white rounded-lg p-6">
    <div class="font-bold flex justify-between">
      <p class="com-name">${interview.companyName}</p>
      <button class="delete-button text-gray-600">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
    <div>
      <p class="position text-gray-600">${interview.position}</p>
      <p class="sellary text-gray-600">${interview.sellery}</p>
      <p class="batch bg-gray-400 px-3.5 py-2 rounded-sm my-1.5 w-36">${interview.batch}</p>
      <p class="description text-gray-900">
        ${interview.description}
      </p>
    </div>
    <div>
      <button class="interview-btn border-2 border-green-600 text-green-600 py-2 px-3.5 rounded-sm">Interview</button>
      <button class="reject-btn border-2 border-red-600 text-red-600 py-2 px-3.5 rounded-sm">Rejected</button>
    </div>
  </div>
         `
          filterSection.appendChild(div)

     }
}



function renderrejecteds() {
     filterSection.innerHTML=''

     for(let list of Rejecteds)
     {
         let div = document.createElement('div');
         div.className ='mt-10 space-y-7'
         div.innerHTML= `
          <div class="card space-y-1.5 bg-white rounded-lg p-6">
    <div class="font-bold flex justify-between">
      <p class="com-name">${list.companyName}</p>
      <button class="delete-button text-gray-600">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </div>
    <div>
      <p class="position text-gray-600">${list.position}</p>
      <p class="sellary text-gray-600">${list.sellery}</p>
      <p class="batch bg-gray-400 px-3.5 py-2 rounded-sm my-1.5 w-36">${list.batch}</p>
      <p class="description text-gray-900">
        ${list.description}
      </p>
    </div>
    <div>
      <button class="interview-btn border-2 border-green-600 text-green-600 py-2 px-3.5 rounded-sm">Interview</button>
      <button class="reject-btn border-2 border-red-600 text-red-600 py-2 px-3.5 rounded-sm">Rejected</button>
    </div>
  </div>
         `
          filterSection.appendChild(div)

     }
}