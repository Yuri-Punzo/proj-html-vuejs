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
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
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
                    <h5>{{ article.title }}</h5>
                    <p>{{ article.date }} | {{ article.comments }}</p>
                    <p>{{ article.text }}</p>
                </div>
            </div>
            <!-- /first 3 articles -->
            <div class="featured_article position-relative" v-for="article in articlesList">
                <img class="featured_image" v-show="article.featured === true" :src="`src/assets/img/${article.image}`"
                    alt="">
                <div class="featured_info">
                    <h5 v-show="article.featured === true">{{ article.title }}</h5>
                    <p v-show="article.featured === true">{{ article.date }} | {{ article.comments }}</p>
                    <p v-show="article.featured === true">{{ article.text }}</p>
                </div>
            </div>
            <!-- /featured article -->
            <div class="row">
                <div class="col all_articles" v-for="article in articlesList.slice(3)"
                    v-show="article.featured === false">
                    <img :src="`src/assets/img/${article.image}`" alt="">
                    <h5>{{ article.title }}</h5>
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

    img {
        max-width: 100%;
    }
}

.featured_article {
    margin-top: 50px;
    margin-bottom: 40px;

    .featured_image {
        max-width: 100%;
    }

    .featured_info {
        position: absolute;
        top: 1px;
        left: 1px;
    }
}
</style>