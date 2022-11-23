<script>
import { store } from "../store"

export default {
    name: "SiteHeader",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div id="site_header">
        <div class="container">
            <div class="row">
                <div class="col-auto">
                    <div class="logo">
                        <img src="../assets/img/logo.png" alt="">
                    </div>
                </div>
                <div class="col my_col">
                    <nav class="my_navbar">
                        <a :href="item.href" v-for="item in store.navbarMenu"
                            :class="item.text === 'Home' ? 'active' : ''">
                            {{ item.text }}
                        </a>
                        <span class="join_us">JOIN US</span>
                        <font-awesome-icon class="search_icon" icon="fa-solid fa-magnifying-glass" />
                        <div class="triangle"></div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- /#site_header -->

</template>

<style lang="scss" scoped>
#site_header {
    font-size: 12px;
    background-color: #26a9bd;
}

.logo {
    img {
        max-width: 100%;
        height: 80px;
        padding: 1rem 1rem 1rem 0;
    }
}

.my_col {
    display: flex;
    align-items: center;
    justify-content: end;
}

/* .active {
    come fare a mettere il triangolo su active ?
} */

a {
    font-size: 14px;
    text-decoration: none;
    color: white;
    margin: 0 16px;

    &:hover {
        color: lightgray;
    }
}

.join_us {
    padding: 8px 12px;
    margin: 0 16px;
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

.search_icon {
    height: 12px;
    color: white;
    padding-left: 16px;

    &:hover {
        cursor: pointer;
        color: lightgray;
    }
}

.triangle {
    position: absolute;
    top: 80px;
    right: 833px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #26a9bd;
}
</style>