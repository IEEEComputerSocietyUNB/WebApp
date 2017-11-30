function chama_eventos_do_dia(dia, mesano){
    if(dia == 31){
        var eventos_do_dia = document.getElementById("eventos-do-dia")
        eventos_do_dia.innerHTML = "<h1>31 de Outubro</h1>"
    }
}

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

function replace_calendar(year, month) {
    document.getElementById('calendar_placeholder').innerHTML = draw_calendar(year, month);
}

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

    // TODO Generate the rest of the table

    outlet += header;
    return outlet;
}

function generate_raw_calendar() {
    return `<table class="calendar" id="calendar">
        <tr>
            <th colspan="7">
                <span class="circle t_left">
                    <a href="/?q=calendar {{previous_month}}">

                    </a>
                </span>
                <span class="calendar__header">
                    <b>{{month_year}}</b>
                </span>
                <span class="circle t_right">
                    <a href="/?q=calendar {{next_month}}">
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </a>
                </span>
            </th>
        </tr>
        <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
        </tr>
        <tr>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
        </tr>
        <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
        </tr>
        <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
        </tr>
        <tr>
            <td>29</td>
            <td>30</td>
            <td><button type="button" onclick="chama_eventos_do_dia(31, '{{month_year}}')">31</button></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>`
}

var placeholder = document.getElementById('calendar_placeholder');
if (placeholder.innerHTML.trim().length === 0) {
    var today = new Date(Date.now());
    placeholder.innerHTML = draw_calendar(today.getYear() + 1900, today.getMonth());
}
