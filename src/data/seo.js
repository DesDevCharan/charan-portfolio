export const siteMeta = {
    title: 'Charanbabu Karnam | Web Engineer',
    favicon: 'https://user-images.githubusercontent.com/6417910/39085832-38879a66-45a6-11e8-84d5-1c8bb3dec14c.png',
    og: {
        description: "Hello! I'm Charanbabu Karnam, a Web Engineer based out of BLR.",
        title: "Charanbabu Karnam | Web Engineer",
        site_name: "Charanbabu Karnam | Web Engineer",
        type: "website",
        url: "https://charanbabukarnam.com",
        image: {
            url: "https://user-images.githubusercontent.com/6417910/39085830-34161bd8-45a6-11e8-896b-dcfd9deccfe5.jpeg",
            alt: "Charanbabu Karnam | Web Engineer",
            type: "image/jpeg",
            width: "400",
            height: "400",
        },
        description: "Hello! I'm Charanbabu Karnam, a Web Engineer based out of BLR.",
        locale: {
            main: "en_IN",
            alt: "en_US",
        }
    },
    twitter: {
        card: "summary",
        site: "@this_is_kcb",
        creator: "@charanbabukarnam"
    },
    author: "Charanbabu Karnam",
    copyright: "Charanbabu Karnam, Copyright (c) 2018",
    keywords: [
        "Charanbabu Karnam",
        "Deloitte",
        "frontend engineer",
        "fullstack engineer",
        "web engineer",
        "bangalore",
        "Cognizant",
        "Infosys",
        "Infy",
        "CTS",
        "gr8fynd",
        "inquizit",
        "xelpmoc",
        "software engineer",
        "engineer",
        "Web Engineer"
    ],
}

export const aboutMe = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Charanbabu Karnam",
    "jobTitle": "Web Engineer",
    "url": "https://charanbabukarnam.com",
    "sameAs": [
        "https://medium.com/@charanbabukarnam",
        "https://github.com/desdevcharan",
        "https://www.linkedin.com/in/charanbabukarnam",
        "https://twitter.com/this_is_KCB",
        "https://www.facebook.com/charanbabukarnam",
        "https://www.youtube.com/charanbabukarnam",
        "https://plus.google.com/+charanbabukarnam"
    ],
    "worksFor": {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "https://deloitte.com/"
    },
    "workLocation": {
        "@type": "City",
        "name": "Bangalore"
    },
    "gender": "male",
    "birthDate": "1994-09-23",
    "image": "",
    "alumniOf": "SVU College of Engineering, Tirupati."
}

export const aboutWebsite = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://charanbabukarnam.com",
    "name": "Charanbabu Karnam | Web Engineer, Flipkart.com",
    "author": {
        "@type": "Person",
        "name": "Charanbabu Karnam"
    }
}

export const aboutCampVanilla = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Camp Vanilla",
    "logo": "https://cdn-images-1.medium.com/max/184/1*Ibh2GzBpGrbOiXRD9o5-IA@2x.png"
}

export const articleSEO = (author, publisher, articleInfo) => ({
    "@context": "http://schema.org",
    "@type": "Article",
    "headline": articleInfo.heading,
    "description": articleInfo.subHeadings[0],
    "datePublished": articleInfo.publishedDate,
    "author": author,
    "publisher": publisher,
    "image": articleInfo.heroImage,
    "dateModified": articleInfo.publishedDate,
    "mainEntityOfPage": articleInfo.articleLink,
    "url": articleInfo.articleLink,
});