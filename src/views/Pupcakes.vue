<script setup>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
     <main class="theme-pupcakes webapp">
        <section class="work-land">
            <div class="content-width">
            <div class="title">
                <h1>Pupcakes</h1>
                <p>Map for four legged friends</p>
                <ul class="links">
                    <li>
                        <a href="https://www.figma.com/design/v5ZsGRDSiD65otiBAVcx1E/Portfolio?node-id=0-1&t=pxGKEYrNxvxSPslp-1" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Figma</a>
                    </li>
                    <li>
                        <a href="https://github.com/manami-n/pupcakes" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Github</a>
                    </li>
                </ul>
            </div>
            <div class="main-images">
                <img src="../assets/img/projects/pc-img1.png" alt="Screenshot">
            </div>
            <div class="main-logo">
                <img src="../assets/img/projects/pc-logo.png" alt="Logo">
            </div>
            <div class="tools">
                <h2>Tools</h2>
                <ul>
                    <li>Figma</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>Express.js</li>
                    <li>OpenStreetMap API</li>
                    <li>Leaflet</li>
                    <li>Cookie</li>
                    <li>Git</li>
                </ul>
            </div>
            <div class="ideas">
                <h2>Main Ideas</h2>
                <p>This was my final project for Web application development course. The idea is to make a web service where people can find the places to eat with their pets (mainly dogs). Using OpenStreetMap API with Leaflet to generate map, and user can sign-up to make their favorite list or suggest a new place.</p>
            </div>
            <div class="keywords">
                <h2>Keywords</h2>
                <ul>
                    <li>Pet</li>
                    <li>Friendly</li>
                    <li>Community</li>
                    <li>Map</li>
                    <li>Foodie</li>
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
                        <p>Pets' owners in Barcelona who want to go out more with their pets.</p>
                    </div>
                    <div>
                        <p class="shape2 shape"><i class="fa-solid fa-users"></i></p>
                        <p>Gastronomy businesses which want to promote their pet-friendliness.</p>
                    </div>
                </div>
            <div class="functions">
                <h2 data-span="Main" class="h2-func">Functions</h2>
                <ol>
                    <li>User can easily find a pet-friendly places by name, through the map, or just near-by location. They can filter the places by category, reservation requirement, and etc.</li>
                    <li>User can also register Pupcakes in order to make their own favorite place list. Simply clicking heart icon to add or remove.</li>
                    <li>User can share a new restaurant by sending a suggestion. Suggested places appears as "Suggested" category instead of "Verified" category.</li>
                </ol>
            </div>
            </div> 
        </section>
        <section class="video">
            <div class="content-width">
                    <h2 data-span="with love">Demo video</h2>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/xyNFde_mw1o?autoplay=1&color=white&mute=1&loop=1&rel=0&playlist=xyNFde_mw1o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
        </section>
        <section>
            <div class="content-width">
             <div class="sitemap">
                <h2>Site Map</h2>
                <img src="../assets/img/projects/pc-sm.png" alt="Sitemap">
            </div>
        </div>
        </section>
         
    </main>
</template>

<style scoped>
    .theme-pupcakes {
        --color-1 : #FFDA77;
        --color-2 : #AEE6E6;
        --color-land-bg : #FBF6F0;
        --color-land-txA : #FFA45B;
        --color-land-txB : #333;
    }
</style>