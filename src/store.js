import { reactive } from "vue";

export const store = reactive({
    articlesList: [
        {
            image: "post_feat_img_25-700x441.jpg",
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
            image: "post_feat_img_24-700x441.jpg",
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
            image: "post_feat_img_23-700x441.jpg",
            image_small: "post_feat_img_23-147x118.jpg",
            title: "Article 3 - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: true,
            reviewed_product: false
        },
        {
            image: "post_feat_img_22-700x441.jpg",
            image_small: "post_feat_img_22-147x118.jpg",
            title: "Article 4 - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: true,
            reviewed_product: false
        },
        {
            image: "post_feat_img_21-700x441.jpg",
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
            image: "post_feat_img_20-700x441.jpg",
            image_small: "post_feat_img_20-147x118.jpg",
            title: "Article 6 - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: true,
            reviewed_product: false
        },
        {
            image: "featured_article_1_bg.jpg",
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
            image: "featured_article_2_bg.jpg",
            image_small: "",
            title: "Reviewed Product - Blah blah blah blah blah",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt ? Nulla nam sapiente mollitia ut dignissimos dicta.",
            date: "October 11th, 2022",
            comments: "Comments Off",
            featured: false,
            tutorial_guide: false,
            reviewed_product: true
        }
    ]
})