//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    let text = document.getElementById('text').value;
    let delay = document.getElementById('delay').value;

    await new Promise((resolve) => setTimeout(resolve, delay));
    
    document.getElementById('output').innerHTML = text;
});