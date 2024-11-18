export const addons = [{
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: {
        mo: '$1/mo',
        yr: '$10/yr'
    }
}, {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: {
        mo: '$2/mo',
        yr: '$20/yr'
    }
}, {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
        mo: '$2/mo',
        yr: '$20/yr'
    }
}] as {
    title: string
    description: string
    price: {
        [key: string]: string
    }
}[]

export const plans = [{
    title: 'Arcade',
    src: '/assets/icon-arcade.svg',
    price: {
        mo: '$9/mo',
        yr: '$90/yr'
    }
}, {
    title: 'Advanced',
    src: '/assets/icon-advanced.svg',
    price: {
        mo: '$12/mo',
        yr: '$120/yr'
    }
}, {
    title: 'Pro',
    src: '/assets/icon-pro.svg',
    price: {
        mo: '$15/mo',
        yr: '$150/yr'
    }
}] as {
    title: string
    src: string
    price: {
        [key: string]: string
    }
}[]