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
        url: "https://dojoplanner.legana.com.br/",
        type: LinkType.PROJECT,
        status: StatusType.LAUNCHED,
        statusText: StatusText[StatusType.LAUNCHED]
    },
    {
        name: "o Convite360",
        url: "https://convite360.vercel.app/",
        type: LinkType.PROJECT,
        status: StatusType.LAUNCHED,
        statusText: StatusText[StatusType.LAUNCHED]
    },
    {
        name: "o CryptoPru",
        url: "https://caiollaz.github.io/CryptoPru/",
        type: LinkType.PROJECT,
        status: StatusType.LAUNCHED,
        statusText: StatusText[StatusType.LAUNCHED]
    },
    {
        name: "o Finance.ia",
        url: "https://financelab.vercel.app/",
        type: LinkType.PROJECT,
        status: StatusType.BETA,
        statusText: StatusText[StatusType.BETA]
    },
    {
        name: "a Legana",
        url: "https://legana.vercel.app/",
        type: LinkType.PROJECT,
        status: StatusType.DEVELOPMENT,
        statusText: StatusText[StatusType.DEVELOPMENT]
    },
    {
        name: "a Certifique.me",
        url: "https://certifique-me.vercel.app/",
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