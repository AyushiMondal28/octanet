let input = document.getElementById('text');
let add_btn = document.getElementById('add-btn');
let task_list=document.getElementById('task_list');
let reload_btn= document.getElementById('refresh');

reload_btn.addEventListener('click',function(){
    window.location.reload();
})

document.getElementById("text").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addItem();
    }
  });

add_btn.addEventListener('click',addItem);

function addItem(){
    var inputValue = input.value.trim();
    if (inputValue !== "") {
        const task = document.createElement('div');

        const rmv_btn = document.createElement('button');
        const icon =document.createElement('i');
        icon.classList= "fa-solid fa-xmark";
        rmv_btn.appendChild(icon);

        const task_name =document.createElement('p');
        task.className="task";
        task_list.appendChild(task);
        task.appendChild(task_name);
        task.appendChild(rmv_btn);
    
        task_name.innerText= input.value;
        rmv_btn.addEventListener('click',function(){
            task.remove();
        })
        input.value = "";
    
}

}
