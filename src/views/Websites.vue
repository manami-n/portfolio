<script>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
    <main>
<!-- ===========================
            LANDING
     =========================== -->
        <section id="websitesList">
            <div class="content-width">
                <h1>Website Gallery</h1>
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
                        <a href="/portfolio.html" class="more">Learn more</a>
                    </div>
                    <div class="image">
                        <figure>
                            <img src="../assets/img/project1.avif" alt="preview">
                        </figure>
                        
                    </div>
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
                        <a href="/matcha" class="more">Learn more</a>
                    </div>
                    <div class="image">
                        <figure>
                            <img src="../assets/img/project2.avif" alt="preview">
                        </figure>
                        
                    </div>
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
                         <a href="/wedding.html" class="more">Learn more</a>
                    </div>
                    <div class="image">
                        <figure>
                            <img src="../assets/img/project3.avif" alt="preview">
                        </figure>
                    </div>
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
                        <a href="/prevport.html" class="more">Learn more</a>
                    </div>
                    <div class="image">
                        <figure>
                            <img src="../assets/img/project4.avif" alt="preview">
                        </figure>
                    </div>
                </article>
            </div>
        </section>
    </main>
</template>