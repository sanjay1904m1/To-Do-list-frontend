function addtask(){
    document.getElementById("displayError").innerHTML="";
    const tk=document.getElementById("inlineFormInput");
    const listelement=document.getElementById("formtext");
    const entireList=document.querySelector('#tasksList');
    const newtask=tk.value;

    if(newtask==""){
        document.getElementById("displayError").innerHTML="Mandotary Field";

    }

        else{
        console.log(newtask)
        let task_list=document.createElement('div');
        task_list.classList.add("task");

        let task_content=document.createElement('div');
        task_content.classList.add("content");
        

        task_list.appendChild(task_content);

        const text_input =document.createElement("input");
        text_input.classList.add("displayTasks");
        text_input.type="text";
        text_input.value=newtask;
        text_input.setAttribute("readonly", "readonly");

        task_content.appendChild(text_input);



        const task_actions=document.createElement("div");
        task_actions.classList.add("actions");

        const edit=document.createElement("button");
        edit.classList.add("btn");
        edit.innerHTML="Edit"

        const delet=document.createElement("button");
        delet.classList.add("btn");
        delet.innerHTML="Finish"

        task_actions.appendChild(edit);
        task_actions.appendChild(delet)
        task_list.appendChild(task_actions)



        entireList.append(task_list)

        

        tk.value=""

        edit.addEventListener("click", function(){
            if(edit.innerText=="Edit"){
                text_input.removeAttribute("readonly");
            text_input.focus();
            edit.innerHTML="Save";
            }
            else{
                text_input.setAttribute("readonly", "readonly");
            text_input.focus();
            edit.innerHTML="Edit";
            }


        });


        delet.addEventListener("click", function(){
            entireList.removeChild(task_list);
            const finishimg="https://media1.tenor.com/images/153242d25a0c6696d9eebd5847c16eb2/tenor.gif?itemid=14167228"
            document.getElementById("taskFinish").style.display='block'
            setTimeout(function() {
                document.getElementById('taskFinish').style.display='none'
              }, 3*1000);

        });

    }
}
