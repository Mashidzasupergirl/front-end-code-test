//TO DO: 
// 1. Get data from inputs (alarm if there is no data)
// 2. Post this data below
// 3. Edit session
// 4. Delete session - are you sure? yes / no

(function () {
    const DATA = [
        {
            projekt: 'First',
            activity: 'Drama',
            from: '2:00',
            to: '16:00',
            note: 'Proin vel iaculis diam',
            billable: true
        },
        {
            projekt: 'Hello',
            activity: 'Jumping',
            from: '2:00',
            to: '16:00',
            note: 'Proin vel iaculis diam',
            billable: true
        }
    ]

    let selectedProject;
    let selectedAktivitet;
    let timeFrom;
    let timeTo;
    let isBillable;
    let writtenNote;

    const projectInput = document.getElementById('project');
    projectInput.addEventListener('change', (event) => {
        selectedProject = projectInput.value
    });

    const activityInput = document.getElementById('activity');
    activityInput.addEventListener('change', (event) => {
        selectedActivity = activityInput.value
    });

    const fromInput = document.getElementById('from');
    fromInput.addEventListener('change', (event) => {
        timeFrom = fromInput.value
    });

    const toInput = document.getElementById('to');
    toInput.addEventListener('change', (event) => {
        timeTo = toInput.value
    });

    const billableInput = document.getElementById('billable');
    billableInput.addEventListener('change', (event) => {
        isBillable = billableInput.value
    });
    const textareaInput = document.getElementById('textarea');
    textareaInput.addEventListener('change', (event) => {
        writtenNote = textareaInput.value
    });


    const getDataFromInputs = () => {
        const newRecord = {
            projekt: selectedProject,
            activity: selectedAktivitet,
            from: timeFrom,
            to: timeTo,
            note: writtenNote,
            billable: isBillable
        }
        DATA.push(newRecord)
    }

    const sparaButton = document.getElementById('spara');
    sparaButton.addEventListener("click", (event) => {
        getDataFromInputs()
        postData()
        clearAllInputs()
        event.preventDefault();
    })

    const clearAllInputs = () => {
        projectInput.value = ''
        activityInput.value = ''
        fromInput.value = ''
        toInput.value = ''
        billableInput.value = ''
        textareaInput.value = ''
        selectedProject = undefined
        selectedAktivitet = undefined
        timeFrom = undefined
        timeTo = undefined
        isBillable = undefined
        writtenNote = undefined
    }

    const postData = () => {
        const tbody = document.getElementsByTagName('tbody')[0]
        tbody.innerHTML = ''

        DATA.map(record => tbody.innerHTML += `<tr>
        <td>${record.projekt}</td>
        <td>${record.activity}</td>
        <td>${record.from}</td>
        <td>${record.to}</td>
        <td>${record.note}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
    </tr>`)
    }
    postData()
}());

