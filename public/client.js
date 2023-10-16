document.getElementById('GDbutton').addEventListener('click', loadData);

async function loadData() {
    alert('clicked');
    let response =fetch('http://localhost4242/data.json');
    let cd = (await response).json()
    console.log(cd);
    PopulateData(cd);
}

function PopulateData(ab) {
    const myData = document.getElementById('list');
    myData.innerHTML = '';

    ab.foreach(contact => {
        const listItem = document.createElement('li')
        listItem.textContent= `${contact.name} ${contact.info}`;
        myData.appendChild(listItem);
    });
}