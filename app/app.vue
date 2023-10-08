<template>
  <div class="parent">
    <div class="quote">
      <blockquote>{{ quote }}</blockquote>
      <p>- {{ author }} -</p>
    </div>
    <div class="todo">
      <p>- {{ todo }} -</p>
    </div>
    <div class="get-quote">
      <button @click="getQuote">Get Quote</button>
    </div>
    <div class="get-todo">
      <button @click="getTodo">Get Task</button>
    </div>
  </div>
</template>

<style>
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-content: center;
  align-items: center;
  place-items: center;
  width: 400px;
  margin-top: 150px;
  margin-left: 35%;
}

.quote {
  grid-area: 1 / 1 / 2 / 2;
}

.todo {
  grid-area: 1 / 2 / 2 / 3;
}

.get-quote {
  grid-area: 2 / 1 / 3 / 2;
}

.get-todo {
  grid-area: 2 / 2 / 3 / 3;
}

.quote {
  width: 250px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  background-color: rgb(96, 206, 206);
  margin: 10px;
}

.todo {
  width: 250px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  background-color: rgb(225, 73, 73);
}

blockquote {
  font-weight: bolder;
  font-size: larger;
  color: blanchedalmond;
  font-style: italic;
}

p {
  font-size: larger;
}

button {
  width: 150px;
  padding: 10px;
  background-color: brown;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
}
</style>

<script>
import { Client, Functions } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('[PROJECT-ID]');

const functions = new Functions(client);

export default {
  methods: {
    async getQuote() {
      try {
        const response = await functions.createExecution(
          '[FUNCTION-ID]',
          JSON.stringify({}),
          false,
          '/',
          'GET',
          {}
        );

        const result = JSON.parse(response.responseBody);
        const body = JSON.parse(result.body);

        this.quote = body.quote;
        this.author = body.author;
      } catch (error) {
        console.error('Error fetching the quote:', error);
      }
    },
    async getTodo() {
      try {
        const response = await functions.createExecution(
          '[FUNCTION-ID]',
          JSON.stringify({}),
          false,
          '/',
          'GET',
          {}
        );

        const result = JSON.parse(response.responseBody);
        const body = JSON.parse(result.body);

        this.todo = body.todo;
      } catch (error) {
        console.error('Error fetching the quote:', error);
      }
    },
  },
  data() {
    return {
      quote: '',
      author: '',
      todo: '',
    };
  },
};
</script>
