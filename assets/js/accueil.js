let sortDirection = false;

let leadData = [
    { name: 'bgdu90', score:70 },
    { name: 'XXgamer12', score:12 },
    { name: 'Tarentule34', score:73 },
    { name: 'zirgo', score:78 },
    { name: 'loaze', score:72 },
    { name: 'Boni', score:80 },
];

window.onload = () =>{
    loadTableData(leadData);
}

loadTableData(leadData)


function loadTableData(leadData){
    const tableBody = document.getElementById('tableData');
    let datahtml ="";

    for(let lead of leadData){
        datahtml += `<tr><td>${lead.name}</td><td>${lead.score}</td></tr>`;
    }
    console.log(datahtml)

    tableBody.innerHTML = datahtml;
}

function sortColumn(columnName){
    const dataType = typeof leadData[0][columnName];
    sortDirection = !sortDirection;

    switch(dataType){
        case 'number':
            sortNumberColumn(sortDirection, columnName);
            break;
    }
    loadTableData(leadData);
}
function sortNumberColumn(sort, columnName){
    leadData = leadData.sort((p1,p2)=>{
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    });
}