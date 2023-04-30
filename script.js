const todosApp = {
  data() {
    return {
      todos: [],
      newTodo: {
        done: false,
      },
    };
  },
  methods: {
    adicionarTarefa() {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = { done: false };
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("Favor, preencha o campo abaixo.");
      }
    },
    limparTarefas() {
      this.todos = [];
      localStorage.removeItem("todos");
    },
  },
  created() {
    if (JSON.parse(localStorage.getItem("todos")) !== null) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
  },
};

// inicia um projeto do vue3
Vue.createApp(todosApp).mount("#app");
