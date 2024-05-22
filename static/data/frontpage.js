export const FrontpageBlocks = {
    SearchBar: 'searchbar',
    Hero: 'hero', // ONLY ONE HERO BLOCK TO MAINTAIN GOOD SEO PLEASE!
    FeaturedModules: 'featuredmodules',
    FeaturedGuides: 'featuredguides',
    FeaturedProjects: 'featuredprojects',
    FeaturedVideos: 'featuredvideos',
    FeaturedPrefabs: 'featuredprefabs',
}

export const frontpageData = [
    { type: FrontpageBlocks.SearchBar },
    {
        type: FrontpageBlocks.Hero,
        title: 'Get Started with Fluxscape',
        text: "Fluxscape is a powerful low-code web app builder that accelerates your application development process. Designed for both beginners and experienced developers, Fluxscape offers a visual development environment that requires no prior coding skills to get started. However, if you are familiar with coding, you can seamlessly integrate JavaScript as needed. Fluxscape also caters to designers by providing complete control over the aesthetics of your app. In Fluxscape, everything is live—you can edit your app in real-time.",
        secondText: " As Fluxscape is based on Noodl, you will find many references to Noodl throughout the documentation. This is because Fluxscape is part of what we call the 'Noodlverse'—a community and ecosystem built around the original Noodl platform. This documentation site contains all the resources you need to get started with Fluxscape and leverage the power of the Noodlverse!",
        gridItems: [
            {
                type: 'youtube',
                videoId: 'kD-Oz_M-IS4',
            },
            {
                type: 'link',
                colorVariable: '--doc-color-noodl-orange-20',
                backgroundImage:
                    '/img/featured-content-images/noodl-basics.png',
                label: 'Noodl basics',
                href: '/docs/getting-started/workflow',
                playIcon:false,
            },
            {
                type: 'link',
                colorVariable: '--doc-color-noodl-blue-20',
                backgroundImage:
                    '/img/featured-content-images/build-first-app.png',
                label: 'Intro to cloud services',
                href: 'https://www.youtube.com/watch?v=ecas2QPbr0g',
            },
        ],
    },
    { type: FrontpageBlocks.FeaturedGuides },
    { type: FrontpageBlocks.FeaturedPrefabs,},
    { type: FrontpageBlocks.FeaturedModules,},
    { type: FrontpageBlocks.FeaturedVideos },
]
