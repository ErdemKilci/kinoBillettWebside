let Tickets = [];

function buyTicket() {
    const film = document.getElementById('film').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefonNummer = document.getElementById('telefonNummer').value;
    const epost = document.getElementById('epost').value;

    if (!film || !antall || !fornavn || !etternavn || !telefonNummer || !epost) {
        alert("All fields must be filled out");
        return false;
    }

    if (!/^\d+$/.test(antall)) {
        alert("Enter a valid amount");
        return false;
    }

    if (!/^\d{8,}$/.test(telefonNummer)) {
        alert("Enter a valid phone number");
        return false;
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(epost)) {
        alert("Enter a valid e-post address");
        return false;
    }

    Tickets.push({ film, antall, fornavn, etternavn, telefonNummer, epost });
    
    showTickets();
    
    clearFields();
}

function showTickets() {
    const ticketList = document.getElementById('ticketsAll');
    ticketList.innerHTML = '';

    for (const ticket of Tickets) {
        const ticketInfo = document.createElement('div');
        ticketInfo.textContent = `Film: ${ticket.film}, Antall: ${ticket.antall}, Navn: ${ticket.fornavn} ${ticket.etternavn}
        ,Telefonnummer: ${ticket.telefonNummer}, ,E-post: ${ticket.epost}`;
        ticketList.appendChild(ticketInfo);
    }
}

function clearFields() {
    document.getElementById('film').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefonNummer').value = '';
    document.getElementById('epost').value = '';
}

function removeTickets() {
    Tickets = [];
    showTickets();
}