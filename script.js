document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';

    const groupedEvents = eventsData.reduce((acc, event) => {
        const group = event.group || 'General';
        if (!acc[group]) {
            acc[group] = [];
        }
        acc[group].push(event);
        return acc;
    }, {});

    const sortedGroups = Object.keys(groupedEvents).sort();

    sortedGroups.forEach(groupName => {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('event-group');

        const groupTitle = document.createElement('h2');
        groupTitle.textContent = groupName;
        groupDiv.appendChild(groupTitle);

        const sortedEventsInGroup = groupedEvents[groupName].sort((a, b) => a.name.localeCompare(b.name));

        sortedEventsInGroup.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');

            const eventName = document.createElement('h3');
            eventName.textContent = event.name;
            eventCard.appendChild(eventName);

            const table = document.createElement('table');
            const tbody = document.createElement('tbody');


            const addRow = (label, content, isCode = false) => {
                if (content && (Array.isArray(content) ? content.length > 0 : String(content).trim() !== '')) {
                    const tr = document.createElement('tr');
                    const th = document.createElement('th');
                    th.textContent = label;
                    tr.appendChild(th);

                    const td = document.createElement('td');
                    if (Array.isArray(content)) {
                        const ul = document.createElement('ul');
                        content.forEach(item => {
                            const li = document.createElement('li');
                            if (isCode) {
                                const pre = document.createElement('pre');
                                pre.textContent = item;
                                li.appendChild(pre);
                            } else {
                                li.textContent = item;
                            }
                            ul.appendChild(li);
                        });
                        td.appendChild(ul);
                    } else {
                        if (isCode) {
                            const pre = document.createElement('pre');
                            pre.textContent = content;
                            td.appendChild(pre);
                        } else {
                            td.textContent = content;
                        }
                    }
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                } else if (label === "Switches" || label === "Contexts") {

                } else {
                    const tr = document.createElement('tr');
                    const th = document.createElement('th');
                    th.textContent = label;
                    tr.appendChild(th);
                    const td = document.createElement('td');
                    td.classList.add('no-data');
                    td.textContent = 'N/A';
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                }
            };

            addRow('Name', event.name);
            addRow('Event Lines', event.event_lines, true);
            addRow('Triggers', event.triggers);
            addRow('Generated Examples', event.generated_examples, true);
            addRow('Switches', event.switches);
            addRow('Contexts', event.contexts);
            addRow('Cancellable', event.cancellable ? 'True' : 'False');
            addRow('Has Location', event.has_location ? 'True' : 'False');
            addRow('Group', event.group);

            table.appendChild(tbody);
            eventCard.appendChild(table);

            const sourceLink = document.createElement('span');
            sourceLink.classList.add('source-link');
            const link = document.createElement('a');
            link.href = event.source;
            link.textContent = event.source;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            sourceLink.textContent = "Source: ";
            sourceLink.appendChild(link);
            eventCard.appendChild(sourceLink);

            groupDiv.appendChild(eventCard);
        });

        eventsContainer.appendChild(groupDiv);
    });
});