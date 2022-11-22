<script>
export default {
    name: "SiteMain"
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
        <div class="info d-flex justify-content-center">
            <div class="my_container text-center">
                <h5>
                    AVADA FORUM IS THE PLACE TO BE
                </h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem error dolorem, molestiae,
                    maiores
                    sequi adipisci voluptas assumenda cum laboriosam, perferendis dolor veniam! Omnis fugiat distinctio
                    molestiae illo saepe itaque. Reiciendis.
                </p>
            </div>
        </div>
        <!-- /info -->
        <!-- forum section dinamico -->

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

    &:hover {
        cursor: pointer;
        background-color: white;
        color: #26a9bd;
        box-shadow: 0 0 0 3px white, inset 0 0 0 2px #26a9bd;
    }
}

.chevron_right {
    font-size: 13px;
}

.info {
    background-color: #f2f2f2;
}

.my_container {
    width: 45%;
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
</style>