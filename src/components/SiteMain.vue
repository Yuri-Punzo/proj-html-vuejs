<script>
import LatestNews from "./LatestNews.vue"
import TutorialsAndGuides from "./TutorialsAndGuides.vue"
import ForumSections from "./ForumSections.vue"

export default {
    name: "SiteMain",
    components: {
        LatestNews,
        TutorialsAndGuides,
        ForumSections
    }
}
</script>

<template>
    <div id="site_main">
        <div class="my_jumbotron d-flex align-items-center">
            <div class="container">
                <h1>Tech Forum!</h1>
                <p>Discuss all the latest technology news and trends</p>
                <span class="call_to_action">
                    GET AVADA NOW
                    <font-awesome-icon class="chevron_right" icon="fa-solid fa-chevron-right" />
                </span>
            </div>
        </div>
        <!-- /jumbotron -->
        <div class="info">
            <div class="container d-flex justify-content-center">
                <div class="my_container text-center">
                    <h5>
                        AVADA FORUM IS THE PLACE TO BE
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem error dolorem, molestiae,
                        maiores
                        sequi adipisci voluptas assumenda cum laboriosam, perferendis dolor veniam! Omnis fugiat
                        distinctio
                        molestiae illo saepe itaque. Reiciendis.
                    </p>
                </div>
            </div>
        </div>
        <!-- /info -->
        <LatestNews />
        <!-- /Latest News -->
        <TutorialsAndGuides />
        <!-- /Tutorials And Guides -->
        <div class="blog_and_forum text-center">
            <h5>
                READ OUR BLOG
                <font-awesome-icon class="ps-1" icon="fa-solid fa-arrow-right-long" />
            </h5>
        </div>
        <!-- /read our blog -->
        <ForumSections />
        <!-- /Forum Sections -->
        <div class="blog_and_forum text-center">
            <h5>
                GO TO OUR FORUM
                <font-awesome-icon class="ps-1" icon="fa-solid fa-arrow-right-long" />
            </h5>
        </div>
        <!-- /go to our forum -->
        <section class="join_our_community">
            <div class="my_container text-center">
                <h2>
                    Hey! Join to our Community
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid porro nam odit iusto ut
                    fugiat, corrupti nulla id ab delectus.
                </p>
                <span class="cta_community">
                    SIGN UP
                    <font-awesome-icon class="chevron_right" icon="fa-solid fa-chevron-right" />
                </span>
            </div>
        </section>
        <!-- /join our community -->
        <section class="newsletter text-center">
            <h4>
                Subscribe to our Newsletter
            </h4>
            <div class="my_form d-flex justify-content-center align-items-center">
                <input placeholder="Insert your email*" type="email" id="email" name="email">
                <span class="newsletter_sub">
                    SEND
                </span>
            </div>
        </section>
        <!-- /newsletter subscribe -->
    </div>
    <!-- /#site_main -->
</template>

<style lang="scss" scoped>
.my_jumbotron {
    background-image: url("../assets/img/home_slider_bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    height: 850px;
    color: white;

    h1 {
        font-size: 88px;
        font-weight: bold;
    }

    p {
        font-size: 15;
    }

    .call_to_action {
        display: inline-block;
        border-radius: 2px;
        font-size: 12;
        font-weight: bold;
        background-color: #26a9bd;
        padding: 8px 12px;
        transition: 0.3s;
        margin-top: 1rem;
        letter-spacing: 1px;

        &:hover {
            cursor: pointer;
            background-color: white;
            color: #26a9bd;
            box-shadow: 0 0 0 3px white, inset 0 0 0 2px #26a9bd;
        }

        .chevron_right {
            font-size: 13px;
        }
    }
}

.info {
    background-color: #f2f2f2;

    .my_container {
        width: 65%;
        padding: 70px 0;

        h5 {
            font-weight: bold;
            font-size: 12px;
            color: #525252;
            padding-bottom: 12px;
            letter-spacing: 4px;
        }

        p {
            font-size: 18px;
            color: #898989;
        }
    }
}

.blog_and_forum {
    background-color: #191919;
    color: white;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }

    h5 {
        letter-spacing: 1px;
        font-weight: bold;
        font-size: 12px;
        padding: 40px;
        margin-bottom: 0 !important;
    }

}

.join_our_community {
    background-image: url(../assets/img/join_now_cta_bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    height: 600px;
    color: white;

    .my_container {
        margin: auto;
        width: 30%;
    }

    h2 {
        font-weight: bold;
        font-size: 56px;
        padding-top: 150px;
    }

    p {
        font-size: 16px;
        padding-top: 20px;
    }

    .cta_community {
        display: inline-block;
        border-radius: 2px;
        font-size: 12;
        font-weight: bold;
        background-color: #26a9bd;
        padding: 8px 30px;
        transition: 0.3s;
        margin-top: 1rem;
        letter-spacing: 1px;

        &:hover {
            cursor: pointer;
            background-color: white;
            color: #26a9bd;
            box-shadow: 0 0 0 3px white, inset 0 0 0 2px #26a9bd;
        }

        .chevron_right {
            font-size: 14px;
        }
    }
}

.newsletter {
    background-color: #f2f2f2;

    h4 {
        padding-top: 60px;
        font-size: 24px;
    }

    .my_form {
        padding-top: 20px;
        padding-bottom: 70px;
    }

    #email {
        width: 360px;
        color: black;
        font-size: 12px;
        padding: 8px;
        border: 1px #e2e2e2;
        margin-right: 24px;
    }

    .newsletter_sub {
        padding: 6px 64px;
        letter-spacing: 1px;
        background-color: black;
        color: white;
        border-radius: 2px;
        font-weight: bold;
        transition: 0.3s;

        &:hover {
            cursor: pointer;
            background-color: white;
            color: black;
            box-shadow: 0 0 0 3px white, inset 0 0 0 2px black;
        }
    }
}
</style>