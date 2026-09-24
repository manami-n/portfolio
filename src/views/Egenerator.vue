<script setup>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
<main class="theme-egenerator">
        <section class="work-land">
            <div class="content-width">
            <div class="title">
                <h1>Email Generator</h1>
                <p>HTML Email template in a few clicks</p>
                <ul class="links">
                    <li>
                        <a href="https://github.com/manami-n/email-generator" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Github</a>
                    </li>
                    <li>
                        <a href="https://hub.docker.com/r/manami0/email-generator" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> DockerHub</a>
                    </li>
                </ul>
            </div>
            <div class="main-images">
                <img src="../assets/img/projects/eg-img1.png" alt="Screenshot">
            </div>
            <div class="main-logo">
                <p style="font-size: 4vw">Email Generator</p>
            </div>
            <div class="tools">
                <h2>Tools</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>Symfony</li>
                    <li>Composer</li>
                    <li>Docker</li>
                    <li>Git</li>
                </ul>
            </div>
            <div class="ideas">
                <h2>Main Ideas</h2>
                <p>Email generator was my first personal project(keeping the ownership admitted) during my internship. This was made for the web developers who need to create HTML email layout repeatedly for different clients.<br>
                Using Bootstrap for a quick styling, Symfony as it was requirement from the company, and Docker to be able to recreate environment easily.</p>
            </div>
            <div class="keywords">
                <h2>Keywords</h2>
                <ul>
                    <li>Web Tool</li>
                    <li>Email</li>
                    <li>Templates</li>
                    <li>Developers</li>
                    <li>Customization</li>
                </ul>
            </div>
            </div>
        </section>

        <section class="targets">
            <div class="content-width">
                <h2 class="h2-target">Target Audience</h2>
                <div class="target-cards">
                    <div>
                        <p class="shape1 shape"><i class="fa-solid fa-users"></i></p>
                        <p>Developers who need to create HTML emails repeatedly.</p>
                    </div>
                    <div>
                        <p class="shape2 shape"><i class="fa-solid fa-users"></i></p>
                        <p>Business owners who want to create HTML emails without special knowledge.</p>
                    </div>
                </div>
            <div class="functions">
                <h2 data-span="Main" class="h2-func">Functions</h2>
                <ol>
                    <li>Users can choose the email layout easily, by clicking and choosing different shapes.</li>
                    <li>Users can choose key colors, font family (either fully customized or choose from list), and the font size for further customization.</li>
                    <li>Users can copy the HTML code in one click, paste in their projects. Simply replacing images and text to be able to use.</li>
                </ol>
            </div>
            </div> 
        </section>
        <section class="video">
            <div class="content-width">
                    <h2 data-span="with love">Demo video</h2>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/1WMg-L4YSRA?autoplay=1&color=white&mute=1&loop=1&rel=0&playlist=1WMg-L4YSRA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
        </section>
         
    </main>
</template>

<style scoped>
        .theme-egenerator { --color-1 : #59bcc8;
                --color-2 : #111; 
                --color-land-bg : #ecf1f5;
                --color-land-txA : #714c9c;
                --color-land-txB : #6879af;
        }
</style>