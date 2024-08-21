export const getCategory = (category: string) => {
    switch (category) {
        case 'chairs':
            return 'СТУЛЬЯ'
        case 'armchairs':
            return 'КРЕСЛА'
        case 'sofas':
            return 'ДИВАНЫ'
        case 'poufs':
            return 'ПУФЫ'
        case 'tables':
            return 'СТОЛЫ'
        default:
            return 'Такой мебели у нас еще нет :)'
    }
}