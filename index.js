//TO DO: 
// 1. Get data from inputs (alarm if there is no data)
// 2. Post this data below
// 3. Edit session
// 4. Delete session - are you sure? yes / no

(function () {
    const DATA = [
        {
            projekt: 'First',
            activity: 'Fusce',
            from: '2:00',
            to: '16:00',
            note: 'Proin vel iaculis diam',
            billable: true
        },
        {
            projekt: 'Hello',
            activity: 'Fusce',
            from: '2:00',
            to: '16:00',
            note: 'Proin vel iaculis diam',
            billable: true
        }
    ]

    let selectedProject; // value 
    let selectedAktivitet;
    let timeFrom;
    let timeTo;
    let isBillable;
    let writtenNote;

    const getValueFromAnyInput = (inputValue, inputIdName) => {
        const anyInput = document.getElementById(inputIdName);
        anyInput.addEventListener('change', (event) => {
            inputValue = anyInput.value
        });
    }

    getValueFromAnyInput(selectedProject, 'project');
    getValueFromAnyInput(selectedAktivitet, 'activity');
    getValueFromAnyInput(timeFrom, 'from');
    getValueFromAnyInput(timeTo, 'to');
    getValueFromAnyInput(isBillable, 'billable');
    getValueFromAnyInput(writtenNote, 'textarea');

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
        event.preventDefault();
    })

    const postData = () => {
        const tbody = document.getElementsByTagName('tbody')[0]
        tbody.innerHTML = ''

        DATA.map(record => tbody.innerHTML += `<tr>
        <td>${record.projekt}</td>
        <td>F${record.activity}</td>
        <td>${record.from}</td>
        <td>${record.to}</td>
        <td>${record.note}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
    </tr>`)
    }
    postData()
}());

