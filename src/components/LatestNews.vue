<script>
export default {
    name: "LatestNews",
    data() {
        return {
            articlesList: [
                {
                    image: "post_feat_img_25-320x202.jpg",
                    title: "Article 1 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "post_feat_img_24-320x202.jpg",
                    title: "Article 2 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "post_feat_img_23-320x202.jpg",
                    title: "Article 3 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "post_feat_img_22-320x202.jpg",
                    title: "Article 4 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "post_feat_img_21-320x202.jpg",
                    title: "Article 5 - Blah blah blah",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nam sapiente mollitia ut dignissimos dicta, earum saepe animi deleniti aspernatur incidunt?",
                    date: "October 11th, 2022",
                    comments: "Comments Off",
                    featured: false
                },
                {
                    image: "post_feat_img_20-320x202.jpg",
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
        <div v-for="article in articlesList.slice(0, 3)">
            <img v-show="article.featured === false" :src="`src/assets/img/${article.image}`" alt="">
            <h5>{{ article.title }}</h5>
            <p>{{ article.date }} | {{ article.comments }}</p>
            <p>{{ article.text }}</p>
        </div>

        <div v-for="article in articlesList">
            <img v-show="article.featured === true" :src="`src/assets/img/${article.image}`" alt="">
            <h5 v-show="article.featured === true">{{ article.title }}</h5>
            <p v-show="article.featured === true">{{ article.date }} | {{ article.comments }}</p>
            <p v-show="article.featured === true">{{ article.text }}</p>
        </div>
        <div v-for="article in articlesList.slice(3)">
            <img v-show="article.featured === false" :src="`src/assets/img/${article.image}`" alt="">
            <h5>{{ article.title }}</h5>
            <p>{{ article.date }} | {{ article.comments }}</p>
            <p>{{ article.text }}</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>