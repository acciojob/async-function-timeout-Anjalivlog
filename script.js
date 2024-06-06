//your JS code here. If required.
const form = document.getElementById('form');
const output = document.getElementById('output');

// Add submit event listener to the form
form.addEventListener('submit', async function(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Retrieve user-provided text and delay values
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value);

  // Clear previous output
  output.textContent = '';

  try {
    // Await the delay
    await delayFunction(delay);

    // Display the text after the delay
    output.textContent = text;
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

// Function to introduce a delay using a promise
function delayFunction(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}