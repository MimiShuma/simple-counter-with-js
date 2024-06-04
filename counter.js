// Counter object
let counter = {
    count: 0,
    increment: function () {
        this.count++;
        document.getElementById('displayCount').textContent = 'Count: ' + this.count;
    }
};

// Get the button element
let button = document.getElementById('incrementButton');

// Bind the increment method to the counter object and set it as the click event handler
button.addEventListener('click', counter.increment.bind(counter));
