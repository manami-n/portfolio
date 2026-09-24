<script setup>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
    <main class="theme-matcha">
        <section class="work-land">
            <div class="content-width" >
            <div class="title">
                <h1>Matcha Café Wakaba</h1>
                <p>Sip and Savor Kyoto Through Matcha</p>
                <ul class="links">
                    <li><a href="../assets/projects/mc-PC.pdf" target="_blank" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> PDF Wide</a></li>
                    <li><a href="../assets/projects/mc-SP.pdf" target="_blank" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> PDF Mobile</a></li>
                    <li><a href="../archives/mc/" target="_blank" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo(JA)</a></li>
                </ul>
            </div>
            <div class="main-images">
                <img src="../assets/img/projects/mc-img1.png" alt="Screenshot">
            </div>
            <div class="main-logo">
                <img src="../assets/img/projects/mc-logo.png" alt="Logo">
            </div>
            <div class="ideas">
                <h2>Main Ideas</h2>
                <p>Kyoto Trading Germany, a trading company with a brunch restaurant and shop in Düsseldorf, focuses primarily on branding. <br>
                    The website highlights café information, features an online shop, and offers short recipes, historical insights, and general information about matcha.</p>
            </div>
            <div class="keywords">
                <h2>Keywords</h2>
                <ul>
                    <li>Elegant</li>
                    <li>Spring</li>
                    <li>Brand</li>
                    <li>Tasty</li>
                    <li>Trendy</li>
                    <li>Knowledgeable</li>
                </ul>
            </div>
            </div>
        </section>
        <section class="how">
            <div class="content-width">
            <h2 data-span="with love">How it is done</h2>
            <div class="sitemap">
                <h3>Site Map</h3>
                <img src="../assets/img/projects/mc-sm.png" alt="Sitemap">
            </div>
            <div class="wireframes">
                <h3>Wire Frames</h3>
                <img src="../assets/img/projects/mc-wf1.png" alt="Wireframes">
                <img src="../assets/img/projects/mc-wf2.png" alt="Wireframes">
                
            </div>
            <div class="points">
                <h3>Points</h3>
                <ul>
                    <li>The website's color palette is based on matcha green and elegant transparent white.</li>
                    <li>An Instagram widget on the landing page provides a fresh impression with each visit.</li>
                    <li>The menu is available in PDF format, allowing for easy updates with printed seasonal menus.</li>
                </ul>
            </div>
            <div class="links">
                <h3>Links</h3>
                <ul>
                    <li><a href="../assets/projects/mc-PC.pdf" target="_blank" class="big-link">PC PDF</a></li>
                    <li><a href="../assets/projects/mc-SP.pdf" target="_blank" class="big-link">Mobile PDF</a></li>
                    <li><a href="../archives/mc/" target="_blank" class="big-link">Demo (Japanese)</a></li>
                </ul>
            </div>
    
            <div class="colors">
                <h3>Colors</h3>
                <ul>
                    <li class="color">#A4AD34</li>
                    <li class="color">#897D55</li>
                    <li class="color">#455C4B</li>
                    <li class="color">#366A6C</li>
                    <li class="color">#5B5B5B</li>
                </ul>
            </div>
            <div class="fonts">
                <h3>Typography</h3>
                <div>
                    <h4>Large Headings</h4>
                    <p class="name normal"><a href="https://fonts.google.com/specimen/Karma">Karma</a></p>
                    <div>
                        <p class="alphabets normal" style="font-weight: 600">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p class="alphabets normal" style="font-weight: 600">abcdefghijklmnopqrstuvwxyz</p>
                        <p class="alphabets normal" style="font-weight: 600">0123456789</p>
                    </div>
                </div>
                <div>
                    <h4>Normal texts</h4>
                    <p class="name normal"><a href="https://fonts.google.com/specimen/Karma">Karma</a></p>
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
        .theme-matcha { --color-1 : #A4AD34cc;
                --color-2 : #455C4B; 
                --color-land-bg : #A4AD34cc;
                --color-land-txA : #455C4B;
                --color-land-txB : #3c3c3c;
                --font-L1 : "Londrina Solid", sans-serif;
                --font-N1 : "Karma", serif;}
</style>