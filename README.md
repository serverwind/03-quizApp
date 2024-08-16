## Task: Develop a Quiz App

### Description:

You will be creating a simple quiz app in React. Users can click on option buttons to answer questions, with the next question rendered each time an option is selected. At the end of the quiz, the final score will be displayed.

### Requirements:

1. **UI Components:**
    - Display a question and multiple option buttons for answers.
    - A button to move to the next question after an option is selected.
    - A final score display at the end of the quiz.
2. **Functional Requirements:**
    - Load questions from a hardcoded list in JSON format.
    - Render the next question each time an option is selected.
    - Keep track of the user's score based on correct answers.
    - Display the final score once all questions are answered.
3. **JSON Question List:**
    - Use a hardcoded JSON list of questions. Example:

        ```
        [
          {
            "question": "What is the capital of France?",
            "options": ["Paris", "London", "Berlin", "Madrid"],
            "answer": "Paris"
          },
          {
            "question": "What is 2 + 2?",
            "options": ["3", "4", "5", "6"],
            "answer": "4"
          }
        ]
        ```


### Additional Requirements:

- Use React for developing the application.
- Ensure a responsive design so the app looks good on different devices.
- Write clean and understandable code, following best practices.

### Acceptance Criteria:

- The user interface correctly displays each question and its options.
- The next question is rendered upon selecting an option.
- The final score is displayed at the end of the quiz.
- The user's score is correctly calculated based on their answers.
