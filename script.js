function openRegistrationForm() {

    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";


    const formBox = document.createElement("div");

    formBox.style.backgroundColor = "#eff6ff";
    formBox.style.padding = "25px";
    formBox.style.borderRadius = "14px";
    formBox.style.border = "2px solid #93c5fd";
    formBox.style.width = "300px";

    formBox.innerHTML = `
        <h2 style="
            margin-top:0;
            color:#1e3a8a;
            text-align:center;
        ">
            Registration
        </h2>

        <form id="registerForm">

            <input
                type="text"
                id="name"
                placeholder="Name"
                required
                style="
                    width:100%;
                    padding:10px;
                    margin-bottom:12px;
                    border-radius:8px;
                    border:1px solid #93c5fd;
                    box-sizing:border-box;
                "
            >

            <input
                type="number"
                id="age"
                placeholder="Age"
                required
                style="
                    width:100%;
                    padding:10px;
                    margin-bottom:12px;
                    border-radius:8px;
                    border:1px solid #93c5fd;
                    box-sizing:border-box;
                "
            >

            <input
                type="email"
                id="email"
                placeholder="Email"
                required
                style="
                    width:100%;
                    padding:10px;
                    margin-bottom:18px;
                    border-radius:8px;
                    border:1px solid #93c5fd;
                    box-sizing:border-box;
                "
            >

            <button
                type="submit"
                style="
                    width:100%;
                    padding:12px;
                    background:#dbeafe;
                    color:#1e3a8a;
                    border:2px solid #93c5fd;
                    border-radius:10px;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                Submit
            </button>

        </form>
    `;

    overlay.appendChild(formBox);
    document.body.appendChild(overlay);

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const age =
            document.getElementById("age").value;

        const email =
            document.getElementById("email").value;

        alert(
            "Registered successfully!\n\n" +
            "Name: " + name + "\n" +
            "Age: " + age + "\n" +
            "Email: " + email
        );

        overlay.remove();
    });
}

document
    .getElementById("openForm")
    .addEventListener("click", openRegistrationForm);
