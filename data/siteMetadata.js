/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Professional Website of Nathan Bell - Web Designer/Web Developer',
  author: 'Nathan Bell',
  headerTitle: 'Nathan Bell',
  hideHeaderTitle: true,
  description:
    "Hi, I’m Nathan, I’m sharing my journey building modern, fast web experiences with Next.js, React, Tailwind CSS, and TypeScript. I love helping businesses stand out online with beautiful, high-performance sites.",
  heroTitle: "Hi, I'm Nathan!",
  heroSubtitle:
    "Welcome to my blog - I’m Nathan, learning and sharing insights on web development, creative work, life in the south, and dad life.",

  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: process.env.NEXT_PUBLIC_APP_URL,
  siteRepo: 'https://github.com/bellatl/bell-portfolio',
  siteLogo: `${process.env.BASE_PATH || ''}/static/logo.svg`,
  siteLogoDark: `${process.env.BASE_PATH || ''}/static/logo-dark.svg`,
  keywords: ['Nathan Bell', 'Web Design', 'Web Development', 'Atlanta', 'Marketing', 'AI'],
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/opengraph-image.png`,
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'bell.atlanta@gmail.com',
  github: 'https://github.com/bellatl',
  // x: 'https://x.com/franmoretti_',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/bellatl/',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com',
  // medium: 'https://medium.com',
  // bluesky: 'https://bsky.app/',
  locale: 'en-US',
  discussTwitter: false,
  stickyNav: false, // set to true if you want a navbar fixed to the top
  viewCounter: true,
  // newsletter: {
  //   // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
  //   // Please add your .env file and modify it according to your selection
  //   provider: 'buttondown',
  // },
  comments: {
    //   // If you want to use an analytics provider you have to add it to the
    //   // content security policy in the `next.config.js` file.
    //   // Select a provider and use the environment variables associated to it
    //   // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
