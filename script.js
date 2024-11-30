document.getElementById("donation-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Collect form values
    const name = document.getElementById("name").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const address = document.getElementById("address").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const notes = document.getElementById("notes").value.trim();

    // Validate required fields
    if (!name || !contact || !address || !amount || amount <= 0) {
        alert("Sila lengkapkan semua maklumat dengan jumlah sumbangan yang sah!");
        return;
    }

    // Construct the message
    const message = encodeURIComponent(
        `Nama: ${name}\nNo. Telefon / Email: ${contact}\nAlamat: ${address}\nJumlah Sumbangan: RM${amount}\nNota: ${notes}`
    );

    // Construct WhatsApp URL
    const whatsappURL = `https://wa.me/601112122629?text=${message}`;

    // Ask the user how to proceed
    if (confirm("Hantar maklumat melalui WhatsApp?")) {
        window.open(whatsappURL, "_blank");
        alert("Maklumat anda sedang dihantar melalui WhatsApp.");
    } else {
        // Fallback to email if not sending via WhatsApp
        const email = "persidam.sa@gmail.com";
        const emailSubject = "Donation Receipt Request";
        const emailBody = encodeURIComponent(`Nama: ${name}\nNo. Telefon / Email: ${contact}\nAlamat: ${address}\nJumlah Sumbangan: RM${amount}\nNota: ${notes}`);
        window.location.href = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
        alert("Maklumat anda sedang dihantar melalui email.");
    }
});
