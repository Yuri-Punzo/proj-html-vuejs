<script>
import { store } from "../store"

export default {
    name: "LatestNews",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
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
            <div class="col all_articles" v-for="article in store.articlesList.slice(0, 3)">
                <div v-show="article.featured === false">
                    <img :src="`src/assets/img/${article.image}`" alt="">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.date }} | {{ article.comments }}</p>
                    <p>{{ article.text }}</p>
                </div>
            </div>
        </div>
        <!-- /first 3 articles -->
        <div class="featured_article position-relative" v-for="article in store.articlesList">
            <div v-show="article.featured === true">
                <img class="featured_image" :src="`src/assets/img/${article.image}`" alt="">
                <div class="featured_info">
                    <div class="my_container">
                        <h5>FEATURED ARTICLE</h5>
                        <h3>{{ article.title }}</h3>
                        <p>{{ article.text }}</p>
                        <span class="read_more_btn">
                            READ MORE
                            <font-awesome-icon class="chevron_right" icon="fa-solid fa-chevron-right" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- /featured article -->
        <div></div>
        <div class="row">
            <div class="col all_articles" v-for="article in store.articlesList.slice(3, 6)">
                <div v-show="article.featured === false">
                    <img :src="`src/assets/img/${article.image}`" alt="">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.date }} | {{ article.comments }}</p>
                    <p>{{ article.text }}</p>
                </div>
            </div>
        </div>
        <!-- /last 3 articles -->
    </div>
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
        font-size: 18px;
        margin-top: 16px;
    }

    img {
        max-width: 100%;
    }

    p {
        color: #808080;
        font-size: 12px;
    }
}

.featured_article {
    margin-top: 40px;
    margin-bottom: 30px;
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
                    font-size: 23px;
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