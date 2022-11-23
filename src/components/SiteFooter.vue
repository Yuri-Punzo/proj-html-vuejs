<script>
import { store } from "../store"

export default {
    name: "SiteFooter",
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div id="site_footer">
        <section class="upper_footer">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h4>
                            AVADA TECH FORUM
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum, fugiat accusantium
                            voluptas inventore eaque iusto ea veritatis eos, voluptatibus nostrum a quibusdam. Quae!
                        </p>
                    </div>
                    <div class="col">
                        <h4>
                            POPULAR TOPICS
                        </h4>
                        <div class="link_box" v-for="link in store.footerLInks.slice(0, 4)">
                            <a class="my_links">
                                <font-awesome-icon class="chevron_right" icon="fa-solid fa-chevron-right" />
                                {{ link.text }}
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <h4>
                            RECENT TOPICS
                        </h4>
                        <div class="link_box" v-for="link in store.footerLInks.slice(4, 8)">
                            <a class="my_links">
                                <font-awesome-icon class="chevron_right" icon="fa-solid fa-chevron-right" />
                                {{ link.text }}
                            </a>
                        </div>
                    </div>
                    <div class="col">
                        <h4>
                            LATEST REPLIES
                        </h4>
                        <div class="link_box" v-for="link in store.footerLInks.slice(8, 12)">
                            <a class="my_links">
                                <font-awesome-icon class="chevron_right" icon="fa-solid fa-chevron-right" />
                                {{ link.text }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bottom_footer position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-auto copyright">
                        <span>
                            <font-awesome-icon class="copyright_icon" icon="fa-regular fa-copyright" />
                            Copyright 2012-2022 | Avada Theme by <span class="color_black">ThemeFusion</span> | All
                            Rights Reserved | Powered by <span class="color_black">Yuri</span>
                        </span>
                    </div>
                    <div class="col my_col socials">
                        <font-awesome-icon class="my_icons my_fb" icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon class="my_icons my_twit" icon="fa-brands fa-twitter" />
                        <font-awesome-icon class="my_icons my_insta" icon="fa-brands fa-instagram" />
                        <font-awesome-icon class="my_icons my_tube" icon="fa-brands fa-youtube" />
                        <div class="linguetta d-flex justify-content-center align-items-center">
                            <font-awesome-icon icon="fa-solid fa-chevron-up" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- /#site_footer -->
</template>

<style lang="scss" scoped>
.upper_footer {
    border-bottom: 2px solid #f2f2f2;
    padding-top: 28px;
    padding-bottom: 60px;

    h4 {
        font-weight: bold;
        font-size: 18px;
    }

    p {
        color: #808080;
        font-size: 12px;
        line-height: 24px;
    }

    .chevron_right {
        font-size: 12px;
    }

    .link_box {
        border-bottom: 2px solid #f2f2f2;
        padding: 12px 0;

        .my_links {
            color: black;
            font-size: 12px;
            text-decoration: none;

            &:hover {
                color: #808080;
                cursor: pointer;
            }
        }
    }

}

.bottom_footer {
    .copyright {
        display: flex;
        align-items: center;
        justify-content: start;
        color: #808080;
        font-size: 16px;
        /* padding: 32px; */
    }

    .color_black {
        color: black;
    }

    .my_col {
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .my_icons {
        font-size: 12px;
        color: white;
        width: 16px;
        height: 16px;
        line-height: 16px;
        vertical-align: middle;
        text-align: center;
        border-radius: 50%;
        padding: 16px;
        margin: 24px 0 24px 12px;

        &:hover {
            cursor: pointer;
        }
    }

    .my_fb {
        background: #3c5998;
    }

    .my_twit {
        background: #54acee;
    }

    .my_insta {
        background: #3f729b;
    }

    .my_tube {
        background: #cd201f;
    }

    .linguetta {
        position: absolute;
        bottom: 0px;
        right: 44px;
        width: 28px;
        height: 20px;
        background-color: #474747;
        color: white;
        font-size: 12px;
        border-radius: 2px 2px 0 0;

        &:hover {
            cursor: pointer;
        }
    }
}
</style>