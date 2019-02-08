var days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday'
];

var slots = [
	'11:30 - 12:30',
	'12:30 - 1:00',
	'1:00 - 2:30',
	'2:30 - 4:00',
	'4:00 - 5:30'
];

var timetable = [
	{
		'name': 'Database Concepts',
		'slots': [0, 1, 3, 4, 17]
	},
	{
		'name': 'Software Engineering Fundamentals',
		'slots': [2, 3, 7]
	},
	{
		'name': 'Advanced Programming',
		'slots': [2, 14, 18]
	},
	{
		'name': 'Programming Techniques',
		'slots': [4, 8, 10, 11, 13]
	},
	{
		'name': 'Advanced Programming Techniques',
		'slots': [5, 6, 9, 12, 13, 17]
	},
	{
		'name': 'Data Communication and Net-Centric Computing',
		'slots': [7, 18]
	},
	{
		'name': 'Programming Fundamentals',
		'slots': [8, 19, 22, 23]
	},
	{
		'name': 'Programming 1',
		'slots': [9, 15, 16, 19, 24]
	},
	{
		'name': 'Web Programming',
		'slots': [12, 17, 24]
	},
	{
		'name': 'Intro to Programming',
		'slots': [14, 20, 21, 22]
	},
	{
		'name': 'Algorithms and Analysis',
		'slots': [22, 23]
	}
];

function format_timetable_array() {
	var formatted = [];

	timetable.forEach(function(slot) {
		for (var i = 0; i < (days.length*slots.length); i++) {
			if (slot.slots.includes(i)) {
				if (formatted[i] == undefined)
					formatted[i] = [];
				formatted[i].push(slot.name);
			}
		}
	});

	return formatted;
}

function generate_full_timetable() {
	var table = document.createElement('table');

	table.createTHead();
	table.tHead.appendChild(document.createElement('tr'));
	var blank = document.createElement('td');
	table.tHead.children[0].appendChild(blank);
	days.forEach(function(day) {
		var td = document.createElement('td');
		td.appendChild(document.createTextNode(day));
		table.tHead.children[0].appendChild(td);
	});

	var i = 0;
	table.createTBody();
	slots.forEach(function(slot) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		td.classList.add('slot');
		td.appendChild(document.createTextNode(slot));
		tr.appendChild(td);

		var formatted = format_timetable_array();
		var k = i;
		for (var j = i; j < k + slots.length; j++) {
			var td = document.createElement('td');
			formatted[j].forEach(function(lesson) {
				var l = document.createElement('span');
				l.appendChild(document.createTextNode(lesson));
				td.appendChild(l);
			});
			tr.appendChild(td);
			i++;
		}

		table.tBodies[0].appendChild(tr);
	});

	return table;
}

document.body.appendChild(generate_full_timetable());
