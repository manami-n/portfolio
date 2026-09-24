<script setup>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
<main class="theme-instaplugin">
        <section class="work-land">
            <div class="content-width">
            <div class="title">
                <h1>Instagram Plugin</h1>
                <p>Show your Instagram posts in Wordpress</p>
                <ul class="links">
                    <li>
                        <a href="https://github.com/manami-n/instagram-plugin" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Github</a>
                    </li>
                    <li>
                        <a href="https://hub.docker.com/r/manami0/instagram-plugin" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> DockerHub</a>
                    </li>
                </ul>
            </div>
            <div class="main-images">
                <img src="../assets/img/projects/ip-img1.png" alt="Screenshot">
            </div>
            <div class="main-logo">
                <p style="font-size: 4vw">Instagram Grid</p>
            </div>
            <div class="tools">
                <h2>Tools</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>Symfony</li>
                    <li>Composer</li>
                    <li>Wordpress</li>
                    <li>Meta APIs</li>
                    <li>Docker</li>
                    <li>Git</li>
                </ul>
            </div>
            <div class="ideas">
                <h2>Main Ideas</h2>
                <p>Instagram plugin was my second personal project(keeping the ownership admitted) during my internship. The idea is people can use plugin for free to show their Instagram posts in their websites. <br>
                    Unfortunately, I didn't have enough time to finish the project, the Wordpress inplementation was still in process.</p>
            </div>
            <div class="keywords">
                <h2>Keywords</h2>
                <ul>
                    <li>Web Tool</li>
                    <li>Social Media</li>
                    <li>API</li>
                    <li>Developers</li>
                    <li>Wordpress</li>
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
                        <p>Website owners who wants to shows their instagram posts dynamically.</p>
                    </div>
                    <div>
                        <p class="shape2 shape"><i class="fa-solid fa-users"></i></p>
                        <p>Web developers who want to add Instagram Plugin without depending on the 3rd party plug-ins.</p>
                    </div>
                </div>
            <div class="functions">
                <h2 data-span="Main" class="h2-func">Functions</h2>
                <ol>
                    <li>Users can add account information, data from Instagram posts using API/Token from Meta Developer's account.</li>
                    <li>Users can customize the grid design to suit their preferences.</li>
                </ol>
            </div>
            </div> 
        </section>
        <section class="video">
            <div class="content-width">
                    <h2 data-span="with love">Demo video</h2>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/Z2FI6STbV1A?autoplay=1&color=white&mute=1&loop=1&rel=0&playlist=Z2FI6STbV1A" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
        </section>
         
    </main>
</template>

<style scoped>
        .theme-instaplugin { --color-1 : #f7d56e;
                --color-2 : #f87266; 
                --color-land-bg : #e7e7e7;
                --color-land-txA : #b931d2;
                --color-land-txB : #f52a76;
        }
</style>