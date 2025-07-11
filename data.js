const LinkType = {
    PROJECT: 'project',
    PERSONAL: 'personal'
};

const StatusType = {
    LAUNCHED: 'launched',
    BETA: 'beta',
    DEVELOPMENT: 'development'
};

const StatusText = {
    [StatusType.LAUNCHED]: 'Lançado',
    [StatusType.BETA]: 'Beta',
    [StatusType.DEVELOPMENT]: 'Em desenvolvimento'
};

const links = [
    {
        name: "o DojoPlanner",
        url: "https://dojoplanner.com.br",
        type: LinkType.PROJECT,
        status: StatusType.DEVELOPMENT,
        statusText: StatusText[StatusType.DEVELOPMENT]
    },
    {
        name: "o Proficio",
        url: "https://proficio.com.br",
        type: LinkType.PROJECT,
        status: StatusType.DEVELOPMENT,
        statusText: StatusText[StatusType.DEVELOPMENT]
    },
    {
        name: "o meu portifólio",
        url: "https://caiollaz.github.io/portifolio-site/",
        type: LinkType.PERSONAL
    },
]; 
