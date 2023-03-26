  function openEmail() {

    let mail = document.getElementById("clientMail").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    window.location.href = "mailto:helloWorld@gmail.com?subject=" + subject + "&body=" + message + mail

  }

