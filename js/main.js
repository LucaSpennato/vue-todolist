
const app = new Vue(
    {

        el: '#app',
        data: {
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
            message: '',
           
        },
        methods: {
            todoDelete: function(listElementIndex){

                this.todos.splice(listElementIndex, 1);
                
            },

            newTodoItem: function(){

                this.todos.push({text: this.message, done: false});

                this.message = '';

            },

            todoDone: function(indexElement){

                this.todos[indexElement].done = !this.todos[indexElement].done;
                
                
            },


        }

    },
);    

// {'fa-solid fa-check text-success' : todo.done, 'fa-solid fa-x text-danger' : !todo.done}