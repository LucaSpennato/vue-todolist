
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
            newTodoItem: '',
           
        },
        methods: {
            todoDelete: function(listElementIndex){

                this.todos.splice(listElementIndex, 1);
                
            },

            newTodoListItem: function(){

                if(this.newTodoItem == ''){

                }else{
                    this.todos.push({text: this.newTodoItem, done: false});
    
                    this.newTodoItem = '';
                }
            },

            todoDone: function(indexElement){

                this.todos[indexElement].done = !this.todos[indexElement].done;
                   
            },

        }

    },
);    