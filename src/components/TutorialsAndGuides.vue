<script>
import { store } from "../store"

export default {
    name: "TutorialsAndGuides",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container my_container">
        <div class="row">
            <div class="col-8">
                <div class="product_review position-relative" v-for="article in store.articlesList">
                    <div v-show="article.reviewed_product === true">
                        <img class="product_image" :src="`src/assets/img/${article.image}`" alt="">
                        <div class="product_info">
                            <div class="my_container">
                                <h5>REVIEWED PRODUCT</h5>
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
                <!-- /product_review -->
            </div>
            <div class="col-4">
                <div class="tutorials_guides">
                    <div class="turorial_header">
                        <h4>
                            Tutorials & Guides
                        </h4>
                        <div class="orange_br"></div>
                    </div>
                    <div class="tutorials_guides_articles">
                        <div class="all_tutorials" v-for="article in store.articlesList">
                            <div class="my_row" v-show="article.tutorial_guide === true">
                                <div class="my_col">
                                    <img :src="`src/assets/img/${article.image_small}`" alt="">
                                </div>
                                <div class="my_col">
                                    <h3>{{ article.title }}</h3>
                                    <p>{{ article.date }} | {{ article.comments }}</p>
                                </div>
                            </div>
                            <!-- <div v-show="article.tutorial_guide === true">


                            </div> -->
                        </div>
                    </div>
                </div>
                <!-- /tutorial & guides -->
            </div>
        </div>
    </div>
    <!-- /TutorialsAndGuides -->
</template>

<style lang="scss" scoped>
.my_container {
    padding-top: 50px;
    padding-bottom: 150px;
}

.product_review {
    color: white;

    .product_image {
        max-width: 100%;
    }

    .product_info {
        position: absolute;
        top: 124px;
        left: 100px;

        .my_container {
            width: 85%;

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

.tutorials_guides {
    padding-left: 8px;

    h4 {
        font-size: 28px;
        font-weight: bold;
        line-height: 20px;
    }

    .orange_br {
        border-bottom: 2px solid #ff8d61;
        width: 85px;
        padding-top: 20px;
    }

    .tutorials_guides_articles {
        padding-top: 42px;

        .all_tutorials {
            .my_row {
                display: flex;
            }

            .my_col {
                padding-right: 12px;

                img {
                    padding-bottom: 42px;
                }

                h3 {
                    font-size: 21px;
                    font-weight: bold;
                }

                p {
                    font-size: 14px;
                    color: #808080;
                }
            }
        }
    }
}
</style>