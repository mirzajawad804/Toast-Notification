
function createtoaster(config) {
    return function () {
        // Toast Container
        const toastContainer = document.createElement("div");
        toastContainer.className = "toast-container top-right";

        // Toast
        const toast = document.createElement("div");
        toast.className = "toast toast-success";

        // Toast Icon
        const toastIcon = document.createElement("div");
        toastIcon.className = "toast-icon";
        toastIcon.innerText = "✔";

        // Toast Content
        const toastContent = document.createElement("div");
        toastContent.className = "toast-content";

        // Title
        const title = document.createElement("h4");
        title.innerText = "Success";

        // Message
        const message = document.createElement("p");
        message.innerText = "Your data has been saved successfully.";

        // Append structure
        toastContent.appendChild(title);
        toastContent.appendChild(message);

        toast.appendChild(toastIcon);
        toast.appendChild(toastContent);

        toastContainer.appendChild(toast);

        // Add to body
        document.body.appendChild(toastContainer);

    setTimeout(() => {
        document.body.removeChild(toastContainer);
    }, config.duration * 1000);
    }
}

let toaster = createtoaster({
positionX : "right",
positionY : "top",
duration :  3
});

toaster();
