function renderAzkar(sectionName) {
    const container = document.getElementById('azkar-container');
    if(!container) return;
    container.innerHTML = ''; 

    const list = azkarData[sectionName];

    list.forEach(item => {
        let currentCount = localStorage.getItem(`count_${item.id}`) || item.count;
        
        const zikrDiv = document.createElement('div');
        zikrDiv.className = 'zikr';
        
        zikrDiv.innerHTML = `
            <div class="zikr-text">${item.text}</div>
            <div id="btn_${item.id}" 
                 class="count ${currentCount == 0 ? 'done' : ''}" 
                 onclick="updateCounter('${item.id}', ${item.count})">
                 ${currentCount == 0 ? '✓' : currentCount}
            </div>
        `;
        container.appendChild(zikrDiv);
    });
}

function updateCounter(id, originalCount) {
    let current = parseInt(localStorage.getItem(`count_${id}`) || originalCount);
    if (current > 0) {
        current--;
        localStorage.setItem(`count_${id}`, current);
        const btn = document.getElementById(`btn_${id}`);
        if (current === 0) {
            btn.innerHTML = '✓';
            btn.classList.add('done');
        } else {
            btn.innerHTML = current;
        }
    }
}

