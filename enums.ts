//Reverse enums
enum roles {
    USER,
    ADMIN,
    SELLER,
    DEALER
}

let userRole: string = roles[0];

//Custom keys for enums
enum links {
    YT = 'youtube.com',
    FB = 'facebook.com',
    VK = 'vkontakte.ru'
}

let vkLink = links.VK;