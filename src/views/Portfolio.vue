<script>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
    <main class="theme-portfolio">
        <section class="work-land">
            <div class="content-width">
            <div class="title">
                <h1>This Portfolio</h1>
                <p>My cosy little showroom</p>
                <ul class="links">
                    <li><a href="https://www.figma.com/design/v5ZsGRDSiD65otiBAVcx1E/Portfolio?node-id=0-1&t=pxGKEYrNxvxSPslp-1" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Figma</a></li>
                    <li><a href="" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> GitHub</a></li>
                </ul>
            </div>
            <div class="main-images">
                <img src="../assets/img/projects/pf-img1.png" alt="Screenshot">
            </div>
            <div class="main-logo">
                <img src="../assets/img/projects/pf-logo.svg" alt="Logo">
            </div>
            <div class="ideas">
                <h2>Main Ideas</h2>
                <p>This portfolio showcases my diverse skills in design, UI, front-end, and web applications development. <br>
                    It allows recruiters and HR professionals to download my resume and understand my process for creating websites and apps. <br>
                    Designed with future projects in mind, it ensures a comprehensive display of my capabilities and is easily expandable.</p>
            </div>
            <div class="keywords">
                <h2>Keywords</h2>
                <ul>
                    <li>Minimal</li>
                    <li>Simple</li>
                    <li>Japandi</li>
                    <li>Pottery</li>
                    <li>Calm</li>
                    <li>Stylish</li>
                    <li>Zen</li>
                    <li>Nature</li>
                </ul>
            </div>
            </div>
        </section>
        <section class="how">
            <div class="content-width">
            <h2 data-span="with love">How it is done</h2>
            <div class="sitemap">
                <h3>Site Map</h3>
                <img src="../assets/img/projects/pf-sm.png" alt="Sitemap">
            </div>
            <div class="wireframes">
                <h3>Wire Frames</h3>
                <img src="../assets/img/projects/pf-wf1.png" alt="Wireframes">
                <img src="../assets/img/projects/pf-wf2.png" alt="Wireframes">
                
            </div>
            <div class="points">
                <h3>Points</h3>
                <ul>
                    <li>Crafted with a minimalist, clean, and timeless design to highlight the content.</li>
                    <li>Designed to be inclusive and user-friendly, supporting multiple languages and prioritizing accessibility.</li>
                    <li>Built for easy maintenance, seamless integration of new technologies, and effortless scalability.</li>
                </ul>
            </div>
    
            <div class="colors">
                <h3>Colors</h3>
                <ul>
                    <li class="color">#536050</li>
                    <li class="color">#e9e9e9</li>
                    <li class="color">#3c342e</li>
                    <li class="color">#dac3a0</li>
                    <li class="color">#d0beb3</li>
                </ul>
            </div>
            <div class="fonts">
                <h3>Typography</h3>
                <div>
                    <h4>Large Headings</h4>
                    <p class="name large"><a href="https://fonts.google.com/specimen/Nunito">Nunito</a></p>
                    <div>
                        <p class="alphabets large">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p class="alphabets large">abcdefghijklmnopqrstuvwxyz</p>
                        <p class="alphabets large">0123456789</p>
                    </div>
                </div>
                <div>
                    <h4>Normal texts</h4>
                    <p class="name normal"><a href="https://fonts.google.com/specimen/Assistant">Assistant</a></p>
                    <div>
                        <p class="alphabets normal">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p class="alphabets normal">abcdefghijklmnopqrstuvwxyz</p>
                        <p class="alphabets normal">0123456789</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </main>
</template>

<style scoped>

</style>