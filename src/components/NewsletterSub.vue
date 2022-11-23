<script>
import { store } from "../store"

export default {
    name: "NewsletterSub",
    data() {
        return {
            store
        }
    },
    methods: {
        storeMail() {
            store.newsletterSubscribers.push(store.mailText)
            //console.log(store.newsletterSubscribers);
            store.mailText = "Grazie per esserti scritto !"
        }
    }
}
</script>

<template>
    <section class="newsletter text-center">
        <h4>
            Subscribe to our Newsletter
        </h4>
        <div class="my_form d-flex justify-content-center align-items-center">
            <input v-model="store.mailText" placeholder="Insert your email*" type="email" id="email" name="email"
                @keyup.enter="storeMail()">
            <span class="newsletter_sub" @click="storeMail()">
                SEND
            </span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
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