<script setup>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
    <main class="theme-wedding">
        <section class="work-land">
            <div class="content-width" >
            <div class="title">
                <h1>Kokuban Wedding</h1>
                <p>Heartwarming Boards for Your Special Day</p>
                <ul class="links">
                    <li><a href="../assets/projects/kw-PC.pdf" target="_blank" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> PDF Wide</a></li>
                    <li><a href="../assets/projects/kw-SP.pdf" target="_blank" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> PDF Mobile</a></li>
                    <li><a href="../archives/kw/" target="_blank" class="big-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo(JA)</a></li>
                </ul>
            </div>
            <div class="main-images">
                <img src="../assets/img/projects/kw-img1.png" alt="Screenshot">
            </div>
            <div class="main-logo">
                <img src="../assets/img/projects/kw-logo.png" alt="Logo">
            </div>
            <div class="ideas">
                <h2>Main Ideas</h2>
                <p>KOKUBAN Wedding is a website where people can order custom welcome boards for their wedding parties. <br>
                    The request emphasized a happy atmosphere and highlighted the unique square blackboard appearance.</p>
            </div>
            <div class="keywords">
                <h2>Keywords</h2>
                <ul>
                    <li>Warm</li>
                    <li>Blackboard</li>
                    <li>Chalk</li>
                    <li>Square</li>
                    <li>Happy</li>
                    <li>Handmade</li>
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
                <img src="../assets/img/projects/kw-sm.png" alt="Sitemap">
            </div>
            <div class="wireframes">
                <h3>Wire Frames</h3>
                <img src="../assets/img/projects/kw-wf1.png" alt="Wireframes">
                <img src="../assets/img/projects/kw-wf2.png" alt="Wireframes">
                
            </div>
            <div class="points">
                <h3>Points</h3>
                <ul>
                    <li>Features a soft black and white base with four pastel colors for a stylish and gentle impression.</li>
                    <li>Integrates subtle animations to enhance the website's visual appeal.</li>
                    <li>Provides a seamless user experience with a clear site map and wireframes.</li>
                </ul>
            </div>    
            <div class="colors">
                <h3>Colors</h3>
                <ul>
                    <li class="color">#2b2b2b</li>
                    <li class="color">#F57C81</li>
                    <li class="color">#65CADE</li>
                    <li class="color">#F6C971</li>
                    <li class="color">#BBD893</li>
                </ul>
            </div>
            <div class="fonts">
                <h3>Typography</h3>
                <div>
                    <h4>Large Headings</h4>
                    <p class="name large"><a href="https://fonts.google.com/specimen/Londrina+Solid">Londrina</a></p>
                    <div>
                        <p class="alphabets large">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p class="alphabets large">abcdefghijklmnopqrstuvwxyz</p>
                        <p class="alphabets large">0123456789</p>
                    </div>
                    <p class="name large"><a href="https://fonts.google.com/specimen/Vampiro+One">Vampiro One</a></p>
                    <div>
                        <p class="alphabets large" style="font-family: 'Vampiro One', system-ui;">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p class="alphabets large" style="font-family: 'Vampiro One', system-ui;">abcdefghijklmnopqrstuvwxyz</p>
                        <p class="alphabets large" style="font-family: 'Vampiro One', system-ui;">0123456789</p>
                    </div>
                </div>
                <div>
                    <h4>Normal texts</h4>
                    <p class="name normal"><a href="https://fonts.adobe.com/fonts/kozuka-mincho-pro">Kozuka<br>Mincho</a></p>
                    <div>
                        <p class="alphabets normal" style="font-family: 'Kozuka Mincho Pro', 'Kozuka Mincho Std'">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p class="alphabets normal" style="font-family: 'Kozuka Mincho Pro', 'Kozuka Mincho Std'">abcdefghijklmnopqrstuvwxyz</p>
                        <p class="alphabets normal" style="font-family: 'Kozuka Mincho Pro', 'Kozuka Mincho Std'">0123456789</p>
                    </div>
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
        .theme-wedding { --color-1 : #65CADE;
                --color-2 : #2b2b2b; 
                --color-land-bg : #2b2b2b;
                --color-land-txA : #F57C81;
                --color-land-txB : #fff;
                --font-L1 : "Londrina Solid", sans-serif;
                --font-N1 : "Karma", serif;}
        .links a { color: var(--color-land-txA);}
        .links i{ color: var(--color-1); }
        .links a:after{ background-color: var(--color-1); }
</style>