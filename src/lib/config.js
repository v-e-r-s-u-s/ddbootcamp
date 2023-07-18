export const config = {
  title: '',
  author: 'Dummy Daniel',
  themeAuthor: 'Ahmad Kiarostami',
  headerTitle: 'Dummy Daniel',
  description: 'Official Site of Dummy Daniel. Based on SvelteKit Tailwind Blog Starter',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  domain: 'https://www.dummydaniel.com/',
  siteUrl: 'https://www.dummydaniel.com',
  siteLogo: '/icon-512.png',
  email: 'funwithbubbles@dummydaniel.com',
  github: '',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  locale: 'en-US',
  primaryColor: '#06a261',
  logoText: `
DDDDDDDDDDDDD        
D::::::::::::DDD     
D:::::::::::::::DD   
DDD:::::DDDDD:::::D  
  D:::::D    D:::::D 
  D:::::D     D:::::D
  D:::::D     D:::::D
  D:::::D     D:::::D
  D:::::D     D:::::D
  D:::::D     D:::::D
  D:::::D     D:::::D
  D:::::D    D:::::D 
DDD:::::DDDDD:::::D  
D:::::::::::::::DD   
D::::::::::::DDD     
DDDDDDDDDDDDD`,

  // supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
  // use false or null to disable newsletter
  // check .env.example for settings needed values for each service
  newsletter: 'false',

  multiuser: false
};

export const user = {
  name: 'admin',
  // avatar value can be removed for image
  //avatar: '/logo.png',
  // twitter value can be removed for no link to twitter
  //twitter: 'https://twitter.com/piedpiperplc'
};

export const navLinks = [
  { href: '/about', title: 'About' },
  { href: '/lesson', title: 'Lessons' },
  { href: '/blog', title: 'Blog' }
];

export const openGraph = {
  enabled: true,
  width: 1200,
  height: 630
};

// supported providers: giscus, utterances
export const comment = {
  provider: 'giscus',
  giscus: {
    // Visit the link below, and follow the steps in the 'configuration' section
    // https://giscus.app/
    repo: 'v-e-r-s-u-s/dummydaniel',
    reposId: 'R_kgDOJ3wBDg',
    category: 'General',
    categoryId: 'DIC_kwDOJ3wBDs4CXw2F',
    mapping: 'pathname', // supported options: pathname, url, title
    reactionsEnabled: '1', // Emoji reactions: 1 = enable / 0 = disable
    // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
    metadata: '0',
    // theme example: light, dark, dark_dimmed, dark_high_contrast
    // Place the comment box above the comments. options: bottom, top
    inputPosition: 'bottom',
    // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
    lang: 'en',
    dataStrict: '0',
    loading: 'lazy',
    // theme example: light, dark, preferred_color_scheme, light_high_contrast, dark_high_contrast
    // light_protanopia, dark_protanopiam, light_tritanopia, dark_tritanopia, dark_dimmed, transparent_dark
    //theme: 'light',
    theme: 'light',
    // theme when dark mode
    darkTheme: 'dark',
    themeURL: ''
  }


};
