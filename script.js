let lists = document.getElementsByClassName('list');
let middleBox = document.getElementById('middle');
let upBox = document.getElementById('up');
let downBox = document.getElementById('down');
let leftBox = document.getElementById('left');

for(list of lists)
[
    list.addEventListener('dragstart', function(e) {
        let selected = e.target;  
        
        middleBox.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        middleBox.addEventListener('drop', function(e){
            middleBox.appendChild(selected);
            selected = null;
        });
        upBox.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        upBox.addEventListener('drop', function(e){
            upBox.appendChild(selected);
            selected = null;
        });
        downBox.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        downBox.addEventListener('drop', function(e){
            downBox.appendChild(selected);
            selected = null;
        });
        leftBox.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        leftBox.addEventListener('drop', function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
]