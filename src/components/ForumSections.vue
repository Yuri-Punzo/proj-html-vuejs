<script>
import { store } from "../store"

export default {
    name: "ForumSections",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="forum_section">
        <div class="forum_section_header text-center">
            <h5>
                PHASELLUS EGET METUS
            </h5>
            <h3>
                Forum Sections
            </h3>
            <div class="orange_br"></div>
        </div>
        <!-- /latest_news_header -->
        <div class="container">
            <div class="my_row d-flex flex-wrap justify-content-between">
                <div class="my_col pb-5 text-center" v-for="section in store.forumSections">
                    <div class="square">
                        <font-awesome-icon class="my_icons" :icon="`${section.icon_path}`" />
                        <h2 class="section_titles">{{ section.title }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.forum_section {
    background-color: #f2f2f2;
    padding-bottom: 120px;

    .forum_section_header {
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
            width: 85px;
            margin: auto;
            border-bottom: 2px solid #ff8d61;
            margin-bottom: 50px;
        }
    }

    .square {
        background-color: white;
        height: 285px;
        width: 285px;
        border-top: 3px solid #27afc3;

        &:hover {
            cursor: pointer;
        }
    }

    .my_icons {
        color: white;
        background: #ff8d61;
        width: 50px;
        height: 50px;
        line-height: 50px;
        vertical-align: middle;
        text-align: center;
        border-radius: 50%;
        padding: 30px;
        margin-top: 54px;
    }

    .section_titles {
        font-weight: bold;
        font-size: 24px;
        padding-top: 24px;
    }
}
</style>
