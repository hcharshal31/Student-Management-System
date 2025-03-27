let thead = document.getElementById("thead");
let tbody = document.getElementById("tbody");
let table = document.getElementById("table");

let fetchData = async () => {
    try{
        const response = await fetch("https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json");
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    } 
}

let dataArr;
fetchData().then((data)=>{
    if(data){
        dataArr = data;
        console.log(dataArr);
        displayData(dataArr);
    }
});

// Function for displaying the data
function displayData(data){
    data.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td><div  id="name"><img src="${item.img_src}" style="width: 40px; height: 40px; margin-right: 10px; padding-bottom: 10px; border-radius: 50%;">${item.first_name + " " +item.last_name}</div></td>
                <td>${item.email}</td>
                <td>${item.class}</td>
                <td>${item.gender}</td>
                <td>${item.city}</td>
                <td>${item.marks}</td>
                <td>${item.passing === true? "Pass": "Failed"}</td>
            </tr>`
    });
}

// Search functionality
function searchName(){
    let searchVal = document.getElementById("search").value;
    let searchData = dataArr.filter((item)=>{
        if(item.first_name.toLowerCase().includes(searchVal) || item.last_name.toLowerCase().includes(searchVal)){
            return item;
        }
    });
    tbody.innerHTML = "";

    displayData(searchData);
}

// For sorting the data based on a name(A - Z)
function sortAtoB(){
    const sortedAB = [...dataArr].sort((a, b) => a.first_name.localeCompare(b.first_name));
    tbody.innerHTML = "";

    displayData(sortedAB);
}

// For sorting the data based on a name(Z - A)
function sortBtoA(){
    const sortedBA = [...dataArr].sort((a, b) => b.first_name.localeCompare(a.first_name));
    tbody.innerHTML = "";
    displayData(sortedBA);
}

// For sorting the data based on a Marks in Ascending order and desplaying it.
function sortByMarks(){
    const sortedMarks = [...dataArr].sort((a, b) => a.marks - b.marks);
    tbody.innerHTML = "";

    displayData(sortedMarks);
}

// For sorting the data based on a Passed or failed (Passed - Failed).
function sortByPassing(){
    const sortedPassing = [...dataArr].sort((a, b) => b.passing - a.passing);
    tbody.innerHTML = "";

    displayData(sortedPassing);
}

// For sorting the data based on class in Ascending order.
function sortByClass(){
    const sortedClass = [...dataArr].sort((a, b) => a.class - b.class);
    tbody.innerHTML = "";

    displayData(sortedClass);
}

// For sorting the data based on gender in Ascending order.
function sortByGender(){
    const sortedGender = [...dataArr].sort((a, b) => a.gender.localeCompare(b.gender));
    tbody.innerHTML = "";
    displayData(sortedGender);
}