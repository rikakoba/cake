let formBox = document.querySelector(".callback-form");


document.querySelector("#form-btn").addEventListener("click", async function(e) {
    e.preventDefault();
    let check = true
    let name = formBox.querySelector(".form-input[name='name']");
    let email = formBox.querySelector(".form-input[name='email']");
    let other_data = formBox.querySelector(".form-data");
    name.classList.remove("error");
    email.classList.remove("error");
    other_data.classList.remove("error");

    if (name.value.length < 2) {
        check = false
        name.classList.add("error");
    }
    // let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    // let valid = re.test(email.value);
    // console.log(valid);
    if (email.value.length < 3) {
        check = false;
        email.classList.add("error");
    }
    
    if (check) {
        formBox.classList.add("load");
        let botKey = "7404324803:AAHBH7C3ooFOWpbV-7WbONDPujiEZhWSDIw";
        let data = `
Новый Lead:%0A
Имя: ${name.value}%0A
Почта: ${email.value}%0A
Дополнительно: ${other_data.value}%0A
        `;
        let chat_id = "7340557858";
        let url = `https://api.telegram.org/bot${botKey}/sendMessage?chat_id=${chat_id}&text=${data}`;
        let response = await fetch(url);
        // mode: 'no-cors',
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        //     'X_KEY': "7530f7faa0d8578d069d0710efba3320",
        // },
        // body: JSON.stringify(data),

        let result = await response.json();
        // console.log(response);
        // console.log(result);
        formBox.classList.remove("load")
    }
})