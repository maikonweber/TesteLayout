
window.onresize = function(){
    if (document.body.clientWidth >= 1240) {
        location.reload(); 
        getJson().then(data => {
            const newData = (data.slice(0, 7))
            buildTable(newData); 
        });
        
    }
    
 };


function resizedw(){
    // Haven't resized in 100ms!
}


var doit;

const mediaQuery = window.matchMedia('(max-width: 1250px)')

if (mediaQuery.matches) {
    

}



    getJson().then(data => {
    const newData = (data.slice(0, 7))
        buildTable(newData);
        });





var radios = document.getElementsByClassName('total');
function toggleButton(el) {
  for (var i = 0, l = radios.length; i < l; i++) {
    var fn = radios[i] == el ? 'add' : 'remove';
    radios[i].classList[fn]('focus');
  }
}


async function getJson() {
    const response = await fetch("tablet.json")
    const data = await response.json()
    


    return data;
}

function reloadmedia() {

const mediaQuery = window.matchMedia('(max-width: 1250px)')
// Check if the media query is true
if (mediaQuery.matches) {
    

}
}




function getDepot() {
    
    document.getElementById('myTable').innerHTML = ''
    getJson().then(data => {
    var array = []
    for (var b = 0; b < data.length; b++) {
        if (data[b].status === "Depositado") {
           array.push(data[b]);
      }
        }
    
        buildTable(array.slice(0, 7));
        
});

function update() {
  
}
}
function getAtr() {

    document.getElementById('myTable').innerHTML = ''
    getJson().then(data => {
    var array = []
    for (var b = 0; b < data.length; b++) {
        if (data[b].status === "Atrasado") {
           array.push(data[b]);
      }
        }
        
        buildTable(array);
        
});
}
function getRet() {
    
    document.getElementById('myTable').innerHTML = ''
    getJson().then(data => {
    var array = []
    for (var b = 0; b < data.length; b++) {
        if (data[b].status === "Retido") {
           array.push(data[b]);
      }
        }
        buildTable(array);
        
});
}

function getTot() {

    document.getElementById('myTable').innerHTML = ''
    getJson().then(data => {
        const newData =  (data.slice(0, 7))
        buildTable(newData);
        const state = { page:1, 
            perPage: 6,     
        }   
        console.log(state.page)  
    
  
});
}

function update() {
    document.getElementById('myTable').innerHTML = ''
    getJson().then(data => {
        const newData =  (data.slice(7, 11))
        buildTable(newData);


});
  }

function update1() {
    document.getElementById('myTable').innerHTML = ''
    getJson().then(data => {
        const newData =  (data.slice(0, 7))
        buildTable(newData);


});


}
    
function buildTable(data){
       var table = document.getElementById('myTable')

        
       
        for (var i = 0; i < data.length; i++) {  
            
            if (i % 2 == 0) {
            document.getElementById('myTable').innerHTML += `
            <tr class="ciano">
            <td>${data[i].locker}</td>
            <td>${data[i].cliente}</td>
            <td>${data[i].pedido}</td>
            <td>${data[i].telefone}</td>
            <td>${data[i].data}</td>
            <td>${data[i].status}</td>
            </tr>`   
                
                
              
               
            } else  {
                document.getElementById('myTable').innerHTML += `
                <tr class="black">
                <td>${data[i].locker}</td>
                <td>${data[i].cliente}</td>
                <td>${data[i].pedido}</td>
                <td>${data[i].telefone}</td>
                <td>${data[i].data}</td>
                <td>${data[i].status}</td>
                </tr>`   
                

        }
                  
    }
};