



const {createApp} = Vue;

createApp({
    data(){
        return{
           toDoList : [
            {
                text: 'Fare la spesa',
                done: false
            },
            {
                text: 'Andare alla posta',
                done: false
            },
            {
                text: 'Andare alla riunione',
                done: false
            },
            {
                text:'Andare in banca',
                done: false
            }

           ],

           newTask: {
            text: '',
            done: false
           }
            
           

        }
    },
    methods: {
        addTask(text){

             const newObjTask = {
                 ...this.newTask
             };
             this.toDoList.push(newObjTask);
             this.newTask.text = '';
            
                
        },

        removeTask(i){
            console.log('cliccato task');
            this.toDoList.splice(i, 1);
        }
    }

    
}).mount('#app');