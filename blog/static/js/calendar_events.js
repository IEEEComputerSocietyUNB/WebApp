function chama_eventos_do_dia(dia, mesano){
    if(dia == 31){
        var eventos_do_dia = document.getElementById("eventos-do-dia")
        eventos_do_dia.innerHTML = "<h1>31 de Outubro</h1>"
    }
}

/**
 * Turns a number into a human readable representation.
 */
function number_to_month(n) {
    var months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    return months[n];
}

/**
 * Replaces the current calendar with a newly generated one.
 */
function replace_calendar(year, month) {
    document.getElementById('calendar_placeholder').innerHTML = draw_calendar(year, month);
}

/**
 * Creates a calendar based on the given year and month.
 */
function draw_calendar(year, month) {
    var outlet = '<table class="calendar" id="calendar">';

    // Generating header
    var previous_month = ((month-1) < 0)? 11 : month-1;
    var previous_year = ((month-1) < 0)? year-1 : year;
    var next_month = ((month+1) > 11)? 0 : month + 1;
    var next_year = ((month+1) > 11)? year+1 : year;
    var header = `<tr>
    <th colspan="7">
        <button class="calendar-button" onclick="replace_calendar(` + previous_year + ', ' + previous_month + `);">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <b>` + number_to_month(month) + '/' + year + `</b>
        <button class="calendar-button" onclick="replace_calendar(` + next_year + ', ' + next_month + `);">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
    </th>`

    // Generating weekdays for calendar
    var first_day_of_the_month = new Date(year, month);
    var first_weekday = first_day_of_the_month.getDay();
    var number_of_days = new Date(year, month+1, 0).getDate();
    var current_day = 1;
    var table = `<tr>
        <th>D</th>
        <th>S</th>
        <th>T</th>
        <th>Q</th>
        <th>Q</th>
        <th>S</th>
        <th>S</th>
    </tr>`

    // -- Drawing first line
    var line = "<tr>"
    for (var i = 0; i < 7; ++i) {
        if (i < first_weekday) {
            line += "<td></td>";
        } else {
            line += "<td>" + current_day + "</td>";
            current_day++;
        }
    }
    line += "</tr>";
    table += line;

    // -- Drawing following lines
    while (current_day <= number_of_days) {
        line = "<tr>";
        for (i = 0; i < 7; ++i) {
            if (current_day <= number_of_days) {
                line += "<td>" + current_day + "</td>";
            } else {
                line += "<td></td>";
            }
            current_day++;
        }
        line += "</tr>";
        table += line;
    }

    // Consolidating HTML
    outlet += header;
    outlet += table;
    return outlet;
}

var placeholder = document.getElementById('calendar_placeholder');
if (placeholder.innerHTML.trim().length === 0) {
    var today = new Date(Date.now());
    replace_calendar(today.getYear() + 1900, today.getMonth());
}
