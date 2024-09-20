function hideCards(cards: Element[]) {
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        card.classList.add('scale-0');
        setTimeout(() => card.classList.add('hidden'), 500);
    }
}

function showCards(cards: Element[]) {
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        setTimeout(() => card.classList.remove('hidden'), 500);
        setTimeout(() => card.classList.remove('scale-0'), 600);
    }
}

function debounce<T extends (...args: any[]) => ReturnType<T>>(
    func: T,
    delay: number,
): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function filterCards(this: unknown) {
    const searchText = (
        document.getElementById('findByNameInput') as HTMLInputElement
    )?.value.toLowerCase();

    const selectedService = (document.getElementById('serviceSelect') as HTMLSelectElement)?.value;

    const selectedIndustry = (document.getElementById('industrySelect') as HTMLSelectElement)
        ?.value;

    const projectCards = document.querySelectorAll<HTMLAnchorElement>('.project-card');
    let showCardsList: Element[] = [];
    let hideCardsList: Element[] = [];

    projectCards.forEach((card) => {
        const projectName = card.getAttribute('id')?.toLowerCase() || '';
        const projectCategory = card.classList.contains(selectedService);
        const projectIndustry = card.classList.contains(selectedIndustry);

        const matchesName = projectName.includes(searchText || '');
        const matchesCategory = !selectedService || projectCategory;
        const matchesIndustry = !selectedIndustry || projectIndustry;

        if (matchesName && matchesCategory && matchesIndustry) {
            showCardsList.push(card);
        } else {
            hideCardsList.push(card);
        }
    });

    hideCards(hideCardsList);
    showCards(showCardsList);
}

const debouncedFilterCards = debounce(filterCards, 300);

document.getElementById('findByNameInput')?.addEventListener('keyup', debouncedFilterCards);

document.getElementById('serviceSelect')?.addEventListener('change', debouncedFilterCards);

document.getElementById('industrySelect')?.addEventListener('change', debouncedFilterCards);
