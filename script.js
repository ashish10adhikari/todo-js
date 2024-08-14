const addtext = document.getElementById('addtext');
        const button = document.getElementById('button');
        const todobox = document.getElementById('todo-box');

        console.log(addtext.value);
        button.onclick = function () {
            if (addtext.value === '') {
                alert('Please enter your task');
            }
            else{
                let li= document.createElement("li");
                li.innerHTML= addtext.value;

                let deleteIcon = document.createElement("i")
                deleteIcon.className="fas fa-times";

                deleteIcon.onclick = function(){
                    todobox.removeChild(li);
                };
                
                li.appendChild(deleteIcon);
                    
                
                todobox.appendChild(li);

                addtext.value='';

                li.addEventListener(
                "click",
                function(){
                    li.classList.toggle("done");
                }
            )

            }
            
        };