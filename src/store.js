import { reactive } from "vue";

export const store = reactive({
    articlesList: [
        {
            image: "/img/post_feat_img_25-700x441.jpg",
            image_small: "",
            title: "Article 1 - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: false,
            reviewed_product: false
        },
        {
            image: "/img/post_feat_img_24-700x441.jpg",
            image_small: "",
            title: "Article 2 - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: false,
            reviewed_product: false
        },
        {
            image: "/img/post_feat_img_23-700x441.jpg",
            image_small: "/img/post_feat_img_23-147x118.jpg",
            title: "Article 3 - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: true,
            reviewed_product: false
        },
        {
            image: "/img/post_feat_img_22-700x441.jpg",
            image_small: "/img/post_feat_img_22-147x118.jpg",
            title: "Article 4 - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: true,
            reviewed_product: false
        },
        {
            image: "/img/post_feat_img_21-700x441.jpg",
            image_small: "",
            title: "Article 5 - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: false,
            reviewed_product: false
        },
        {
            image: "/img/post_feat_img_20-700x441.jpg",
            image_small: "/img/post_feat_img_20-147x118.jpg",
            title: "Article 6 - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: true,
            reviewed_product: false
        },
        {
            image: "/img/featured_article_1_bg.jpg",
            image_small: "",
            title: "Featured Article- Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt ? Nulla nam sapiente mollitia ut dignissimos dicta.",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: true,
            tutorial_guide: false,
            reviewed_product: false
        },
        {
            image: "/img/featured_article_2_bg.jpg",
            image_small: "",
            title: "Reviewed Product - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt ? Nulla nam sapiente mollitia ut dignissimos dicta.",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: false,
            reviewed_product: true
        }
    ],
    forumSections: [
        {
            title: "News & Community",
            icon_path: "fa-solid fa-file-lines"
        },
        {
            title: "Apple Forum",
            icon_path: "fa-brands fa-apple"
        },
        {
            title: "Microsoft Forum",
            icon_path: "fa-brands fa-windows"
        },
        {
            title: "Android Forum",
            icon_path: "fa-brands fa-android"
        },
        {
            title: "General Discussion",
            icon_path: "fa-solid fa-mug-saucer"
        },
        {
            title: "App & Software",
            icon_path: "fa-solid fa-cubes"
        },
        {
            title: "Gadgets & Stuff",
            icon_path: "fa-solid fa-laptop"
        },
        {
            title: "Tutorials & Guides",
            icon_path: "fa-solid fa-wrench"
        },

    ],
    navbarMenu: [
        {
            text: 'Home',
            href: '#'
        },
        {
            text: 'Apple',
            href: '#'
        },
        {
            text: 'Microsoft',
            href: '#'
        },
        {
            text: 'Android',
            href: '#'
        },
        {
            text: 'Forums',
            href: '#'
        },
        {
            text: 'Contact us',
            href: '#'
        }
    ],
    footerLInks: [
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos porro veniam soluta!',
            href: '#'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur numquam, dolore excepturi fugiat quas ex culpa fugit!',
            href: '#'
        },
        {
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos porro veniam soluta!',
            href: '#'
        },
        {
            text: 'Lorem ipsum dolor sit amet.',
            href: '#'
        },
        {
            text: 'Amet consectetur adipisicing elit. Veritatis consequatur numquam, dolore excepturi fugiat quas ex culpa fugit!',
            href: '#'
        },
        {
            text: 'Dolor sit amet consectetur adipisicing elit. Veritatis consequatur numquam, dolore excepturi fugiat quas ex culpa fugit!',
            href: '#'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi ad in temporibus.',
            href: '#'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis minus nihil nulla, dolorem suscipit enim expedita obcaecati rem doloribus quos.',
            href: '#'
        },
        {
            text: 'Dolor sit amet consectetur adipisicing elit. Veritatis consequatur numquam, dolore excepturi fugiat quas ex culpa fugit!',
            href: '#'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi ad in temporibus.',
            href: '#'
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis minus nihil nulla, dolorem suscipit enim expedita obcaecati rem doloribus quos.',
            href: '#'
        },
        {
            text: 'Amet consectetur adipisicing elit. Veritatis consequatur numquam, dolore excepturi fugiat quas ex culpa fugit!',
            href: '#'
        }
    ]
})