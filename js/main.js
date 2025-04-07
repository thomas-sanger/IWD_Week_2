fetch("kb-data.json")
  .then((response) => {
    // checks to see if the fetch() was successful
    // if not, throw an error
    // otherwise, call response.json() to parse the response into a JavaScript object
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // constant to store JSON data
    const kbArray = data.knowledgeBase;

    // clears <div id="output">
    const container = document.getElementById("output");
    container.innerHTML = "";

    // loops through kbArray
    kbArray.forEach((item) => {
      // creates a heading
      const questionE1 = document.createElement("h4");
      questionE1.textContent = item.questionName;

      // creates question <p>
      const qText = document.createElement("p");
      qText.innerHTML = `<strong>Q:</strong> ${item.question}`;

      // creates answer <p>
      const aText = document.createElement("p");
      aText.innerHTML = `<strong>A:</strong>${item.answer}`;

      // appends them to the page
      container.appendChild(questionE1);
      container.appendChild(qText);
      container.appendChild(aText);
    });
  })
  // if the file fails to load or parse it will print the error to the console
  .catch((error) => {
    console.error("Error fetching JSON: ", error);
  });
