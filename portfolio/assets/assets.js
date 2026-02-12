// All paths here assume the images live in the `public` folder, e.g. `public/user-image.png`.
// Add (or copy back) your original PNGs/SVGs into `portfolio/public` with these names,
// and the UI will show them again.
export const assets = {
    user_image: '/user-image.png',
    code_icon: '/code-icon.png',
    code_icon_dark: '/code-icon-dark.png',
    edu_icon: '/edu-icon.png',
    edu_icon_dark: '/edu-icon-dark.png',
    project_icon: '/project-icon.png',
    project_icon_dark: '/project-icon-dark.png',
    vscode: '/vscode.png',
    firebase: '/firebase.png',
    figma: '/figma.png',
    git: '/git.png',
    mongodb: '/mongodb.png',
    right_arrow_white: '/right-arrow-white.png',

    mail_icon: '/mail_icon.png',
    mail_icon_dark: '/mail_icon_dark.png',
    profile_img: '/profile-img.png',
    download_icon: '/download-icon.png',
    hand_icon: '/hand-icon.png',
    header_bg_color: '/header-bg-color.png',
    footer_bg_color: '/footer-bg-color.png',
    moon_icon: '/moon_icon.png',
    sun_icon: '/sun_icon.png',
    arrow_icon: '/arrow-icon.png',
    arrow_icon_dark: '/arrow-icon-dark.png',
    menu_black: '/menu-black.png',
    menu_white: '/menu-white.png',
    close_black: '/close-black.png',
    close_white: '/close-white.png',
    web_icon: '/web-icon.png',
    mobile_icon: '/mobile-icon.png',
    ui_icon: '/ui-icon.png',
    graphics_icon: '/graphics-icon.png',
    right_arrow: '/right-arrow.png',
    send_icon: '/send-icon.png',
    right_arrow_bold: '/right-arrow-bold.png',
    right_arrow_bold_dark: '/right-arrow-bold-dark.png'
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Spotify-clone app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Movie Booking  site',
        description: 'MERN Stack',
        bgImage: '/work-3.png',
    },
    {
        title: 'AI & ML',
        description: 'Diabetic Prediction System',
        bgImage: '/work-4.png',
    },
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'AI and Machine Learning', description: 'Building intelligent predictive systems using machine learning algorithms and data analysis techniques....', link: '' },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, React Js, Next Js, Java, Python' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bsc. in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];