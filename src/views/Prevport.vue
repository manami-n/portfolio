<script>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
    <main class="theme-prevport">
        <section class="work-land">
            <div class="content-width" >
            <div class="title">
                <h1>Portfolio 2018</h1>
                <p>Freelance Purpose Portfolio</p>
                <ul class="links">
                    <li><a href="../assets/projects/p2-PC.pdf"  target="_blank" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> PDF Wide</a></li>
                    <li><a href="../assets/projects/p2-SP.pdf" target="_blank" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> PDF Mobile</a></li>
                    <li><a href="../archives/p2/" target="_blank" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a></li>
                </ul>
            </div>
            <div class="main-images">
                <img src="../assets/img/projects/p2-img1.png" alt="Screenshot">
            </div>
            <div class="main-logo">
                <img src="../assets/img/projects/p2-logo.png" alt="Logo">
            </div>
            <div class="ideas">
                <h2>Main Ideas</h2>
                <p>Show casing my front-end works for the potencial clients as a freelance web-designer. <br>
                Focusing on the work than my personal introduction, and having a online form to contact me via portfolio.</p>
            </div>
            <div class="keywords">
                <h2>Keywords</h2>
                <ul>
                    <li>Unique</li>
                    <li>Clean</li>
                    <li>Homie</li>
                    <li>Playful</li>
                    <li>Dynamic</li>
                    <li>Friendly</li>
                </ul>
            </div>
            </div>
        </section>
        <section class="how">
            <div class="content-width">
            <h2 data-span="with love">How it is done</h2>
            <div class="sitemap">
                <h3>Site Map</h3>
                <img src="../assets/img/projects/p2-sm.png" alt="Sitemap">
            </div>
            <div class="wireframes">
                <h3>Wire Frames</h3>
                <img src="../assets/img/projects/p2-wf1.png" alt="Wireframes">
                <img src="../assets/img/projects/p2-wf2.png" alt="Wireframes">
                
            </div>
            <div class="points">
                <h3>Points</h3>
                <ul>
                    <li>Features playful websites with carefully crafted movement manipulations using JavaScript and jQuery.</li>
                    <li>Design is simple yet easy to navigate, with support for two languages.</li>
                    <li>Implements a contact form built with PHP, ensuring secure and reliable communication.</li>
                </ul>
            </div>
    
            <div class="colors">
                <h3>Colors</h3>
                <ul>
                    <li class="color">#CE5454</li>
                    <li class="color">#FFFFFF</li>
                    <li class="color">#DBD9D9</li>
                    <li class="color">#56554E</li>
                    <li class="color">#333333</li>
                </ul>
            </div>
            <div class="fonts">
                <h3>Typography</h3>
                <div>
                    <h4>Large Headings</h4>
                    <p class="name large"><a href="https://fonts.google.com/specimen/Sirin+Stencil">Sirin<br>Stencil</a></p>
                    <div>
                        <p class="alphabets large">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p class="alphabets large">abcdefghijklmnopqrstuvwxyz</p>
                        <p class="alphabets large">0123456789</p>
                    </div>
                </div>
                <div>
                    <h4>Normal texts</h4>
                    <p class="name normal"><a href="https://fonts.google.com/specimen/PT+Sans">PT Sans</a></p>
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
        .theme-prevport { --color-1 : #CE5454;
                --color-2 : #56554e; 
                --color-land-bg : #dbd9d9;
                --color-land-txA : #CE5454;
                --color-land-txB : #333;
                --font-L1 : "Sirin Stencil", sans-serif;
                --font-N1 : "PT Sans", sans-serif;}
</style>