



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

           newToDo: ''

        }
    }

    
}).mount('#app');