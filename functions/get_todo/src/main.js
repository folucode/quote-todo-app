export default async ({ req, res, log, error }) => {
  try {
    
    const todos = [
      "Buy groceries",
      "Go for a run",
      "Read a book",
      "Call a friend",
      "Write a blog post",
      "Clean the house",
      "Learn a new language",
      "Cook dinner",
      "Watch a movie",
      "Take a walk in the park",
      "Plan a vacation",
      "Organize your closet",
      "Start a new hobby",
      "Visit a museum",
      "Write a thank-you note",
      "Volunteer at a local charity",
      "Listen to your favorite music",
      "Create a budget",
      "Practice mindfulness",
      "Fix something around the house",
      "Try a new recipe",
      "Visit a farmer's market",
      "Learn to play a musical instrument",
      "Take a yoga class",
      "Write in a journal",
    ];

    const randomTodoIndex = Math.floor(Math.random() * todos.length);
    const randomTodo = todos[randomTodoIndex];

    log({
      statusCode: 200,
      body: JSON.stringify({ todo: randomTodo }),
    })

    return res.json({
      statusCode: 200,
      body: JSON.stringify({ todo: randomTodo }),
    });

  } catch (error) {
    return res.json({
      statusCode: 200,
      body: JSON.stringify({ error: 'An error occurred while fetching task.' }),
    });
  }
};
