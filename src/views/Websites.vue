<script setup>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
    <main class="theme-websites">
        <section id="websitesList">
            <div class="title">
                <div class="content-width">
                    <h1>Websites Gallery</h1>
                    <p>Here are some of my static websites. <br>
                        I have designed and developed websites for various clients in different languages, including small businesses, startups, and personal projects. <br>
                        Each project showcases my skills in design, UI, front-end development, and web applications development.</p>
                </div>
            </div>
            <div class="content-width">
                <article class="list-project">
                    <div class="texts">
                        <h2>This Portfolio</h2>
                        <p>This portfolio showcases my diverse skills in design, UI, front-end, and web applications development while showing my personality. <br>
                            It allows recruiters and HR professionals to download my resume and understand my process for creating websites and apps.</p>
                        <ul class="keywords">
                            <li>#minimal</li>
                            <li>#simple</li>
                            <li>#japandi</li>
                            <li>#pottery</li>
                            <li>#calm</li>
                            <li>#stylish</li>
                            <li>#zen</li>
                        </ul>
                        <router-link to="/portfolio" class="more" target="_blank">Learn more</router-link>
                    </div>
                    <router-link to="/portfolio" class="image" target="_blank">
                        <figure>
                            <img src="../assets/img/project1.avif" alt="preview">
                            <div class="media">
                                <img src="../assets/img/projects/pf-img1.png" alt="">
                            </div>
                        </figure>
                    </router-link>
                </article>
                <article class="list-project">
                    <div class="texts">
                        <h2>Matcha Café</h2>
                        <p>Kyoto Trading Germany, a trading company with a brunch restaurant and shop in Düsseldorf, focuses primarily on branding. <br>
                            The website highlights café information, features an online shop, and offers short recipes, historical insights, and general information about matcha.</p>
                        <p class="keywords">#elegant #spring #brand #tasty #trendy #knowledgeable</p>
                        <ul class="keywords">
                            <li>#elegant</li>
                            <li>#spring</li>
                            <li>#brand</li>
                            <li>#tasty</li>
                            <li>#trendy</li>
                            <li>#knowledgeable</li>
                        </ul>
                        <router-link to="/matcha" class="more" target="_blank">Learn more</router-link>
                    </div>
                    <router-link to="/matcha" class="image" target="_blank">
                        <figure>
                            <img src="../assets/img/project2.avif" alt="preview">
                            <div class="media">
                                <img src="../assets/img/projects/mc-img1.png" alt="">
                            </div>
                        </figure>
                    </router-link>
                </article>
                <article class="list-project">
                    <div class="texts">
                        <h2>Wedding</h2>
                        <p>KOKUBAN Wedding is a website where people can order custom welcome boards for their wedding parties. <br>
                            The request emphasized a happy atmosphere and highlighted the unique square blackboard appearance.</p>
                        <ul class="keywords">
                            <li>#warm</li>
                            <li>#blackboard</li>
                            <li>#chalk</li>
                            <li>#square</li>
                            <li>#happy</li>
                            <li>#handmade</li>
                            <li>#friendly</li>
                        </ul>
                         <router-link to="/wedding" class="more" target="_blank">Learn more</router-link>
                    </div>
                    <router-link to="/wedding" class="image" target="_blank">
                        <figure>
                            <img src="../assets/img/project3.avif" alt="preview">
                            <div class="media">
                                <img src="../assets/img/projects/kw-img1.png" alt="">
                            </div>
                        </figure>
                    </router-link>
                </article>
                <article class="list-project">
                    <div class="texts">
                        <h2>Previous Portfolio</h2>
                        <p>Show casing my front-end works for the potencial clients as a freelance web-designer. <br>
                            Focusing on the work than my personal introduction, and having a online form to contact me via portfolio.</p>
                        <ul class="keywords">
                            <li>#unique</li>
                            <li>#clean</li>
                            <li>#homie</li>
                            <li>#playful</li>
                            <li>#dynamic</li>
                            <li>#friendly</li>
                        </ul>
                        <router-link to="/prevport" class="more" target="_blank">Learn more</router-link>
                    </div>
                    <router-link to="/prevport" class="image" target="_blank">
                        <figure>
                            <img src="../assets/img/project4.avif" alt="preview">
                            <div class="media">
                                <img src="../assets/img/projects/p2-img1.png" alt="">
                            </div>
                        </figure>
                    </router-link>
                </article>
            </div>
        </section>
    </main>
</template>

<style scoped>
.theme-websites .title{
    background: url(/src/assets/img/websites-bg.avif) no-repeat center center;
}
</style>