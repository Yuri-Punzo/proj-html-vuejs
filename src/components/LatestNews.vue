<script>
export default {
    name: "LatestNews",
    data() {
        return {
            articlesList: [
                {
                    image: "post_feat_img_25-700x441.jpg",
                    title: "Article 1 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "post_feat_img_24-700x441.jpg",
                    title: "Article 2 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "post_feat_img_23-700x441.jpg",
                    title: "Article 3 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "post_feat_img_22-700x441.jpg",
                    title: "Article 4 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "post_feat_img_21-700x441.jpg",
                    title: "Article 5 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "post_feat_img_20-700x441.jpg",
                    title: "Article 6 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "featured_article_1_bg.jpg",
                    title: "Featured Article- Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt ? Nulla nam sapiente mollitia ut dignissimos dicta.",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: true
                },

            ]
        }
    }
}
</script>

<template>
    <section class="latest_news">
        <div class="container">
            <div class="latest_news_header text-center">
                <h5>
                    PHASELLUS EGET METUS
                </h5>
                <h3>
                    All the latest news
                </h3>
                <div class="orange_br"></div>
            </div>
            <!-- /latest_news_header -->
            <div class="row">
                <div class="col all_articles" v-for="article in articlesList.slice(0, 3)"
                    v-show="article.featured === false">
                    <img :src="`src/assets/img/${article.image}`" alt="">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.date }} | {{ article.comments }}</p>
                    <p>{{ article.text }}</p>
                </div>
            </div>
            <!-- /first 3 articles -->
            <div class="featured_article position-relative" v-for="article in articlesList">
                <img class="featured_image" v-show="article.featured === true" :src="`src/assets/img/${article.image}`"
                    alt="">
                <div class="featured_info">
                    <div class="my_container">
                        <h5>FEATURED ARTICLE</h5>
                        <h3 v-show="article.featured === true">{{ article.title }}</h3>
                        <p v-show="article.featured === true">{{ article.text }}</p>
                        <span class="read_more_btn">
                            READ MORE
                            <font-awesome-icon class="chevron_right" icon="fa-solid fa-chevron-right" />
                        </span>
                    </div>
                </div>
            </div>
            <!-- /featured article -->
            <div class="row">
                <div class="col all_articles" v-for="article in articlesList.slice(3)"
                    v-show="article.featured === false">
                    <img :src="`src/assets/img/${article.image}`" alt="">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.date }} | {{ article.comments }}</p>
                    <p>{{ article.text }}</p>
                </div>
            </div>
            <!-- /last 3 articles -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
.latest_news_header {
    padding-top: 70px;

    h5 {
        font-weight: bold;
        font-size: 12px;
        color: #525252;
        padding-bottom: 12px;
        letter-spacing: 4px;
    }

    h3 {
        font-size: 35px;
        font-weight: bold;
        color: black;
        padding-bottom: 20px;
    }

    .orange_br {
        width: 52px;
        margin: auto;
        border-bottom: 2px solid #ff8d61;
    }
}

.all_articles {
    margin-top: 50px;

    h3 {
        font-weight: bold;
        font-size: 24px;
        margin-top: 16px;
    }

    img {
        max-width: 100%;
    }

    p {
        color: #808080;
    }
}

.featured_article {
    margin-top: 50px;
    margin-bottom: 40px;
    color: white;

    .featured_image {
        max-width: 100%;
    }

    .featured_info {
        position: absolute;
        top: 290px;
        left: 110px;

        .my_container {
            width: 95%;

            h3 {
                font-weight: bold;
                font-size: 48px;
                margin-bottom: 24px;
            }

            .read_more_btn {
                display: inline-block;
                padding: 10px 36px;
                margin-top: 16px;
                background-color: black;
                color: white;
                border-radius: 2px;
                font-weight: bold;
                font-size: 24px;
                transition: 0.3s;

                &:hover {
                    cursor: pointer;
                    background-color: white;
                    color: black;
                    box-shadow: 0 0 0 3px white, inset 0 0 0 2px black;
                }

                .chevron_right {
                    font-size: 21px;
                }
            }
        }
    }

    h5 {
        font-weight: bold;
        font-size: 20px;
        padding-bottom: 12px;
        letter-spacing: 4px;
    }
}
</style>