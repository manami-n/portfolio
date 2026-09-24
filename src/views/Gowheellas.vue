<script setup>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
    <main class="theme-gowheellas">
        <section class="work-land">
            <div class="content-width">
            <div class="title">
                <h1>GoWheel·las</h1>
                <p>Rental Car Service</p>
                <ul class="links">
                    <li>
                        <a href="https://github.com/manami-n/Cief_NODE_RentingCars" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Github</a>
                    </li>
                </ul>
            </div>
            <div class="main-images">
                <img src="../assets/img/projects/gw-img1.png" alt="Screenshot">
            </div>
            <div class="main-logo">
                <img src="../assets/img/projects/gw-logo.png" alt="Logo">
            </div>
            <div class="tools">
                <h2>Tools</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>Express.js</li>
                    <li>Session</li>
                    <li>Git</li>
                </ul>
            </div>
            <div class="ideas">
                <h2>Main Ideas</h2>
                <p>GoWheel·las was my rental-car service project during the course. Two different ports in the node.js server make separate entry points for the employees and the customers. <br>
                The employees can add a new vehicle, or modify the vehicle information, at the same time, they also know how many of them are currently rented.
                The customers can see the information dynamically, check availability of the vehicle, and rent it. They can also save their personal information for repeated use.</p>
            </div>
            <div class="keywords">
                <h2>Keywords</h2>
                <ul>
                    <li>Vehicles</li>
                    <li>Rental</li>
                    <li>Simple&Clear</li>
                    <li>Dynamic</li>
                    <li>W-Sides</li>
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
                        <p>Employees who want to see dynamically how many cars are rented.</p>
                    </div>
                    <div>
                        <p class="shape2 shape"><i class="fa-solid fa-users"></i></p>
                        <p>Customers who want to rent a car without hustle and see clear information.</p>
                    </div>
                </div>
            <div class="functions">
                <h2 data-span="Main" class="h2-func">Functions</h2>
                <ol>
                    <li>Employees can visually see their stock information, and easily add or edit the vehicle information without any knowledge.</li>
                    <li>Customers can dynamically see the available models, check availability, and rent a vehicle.</li>
                    <li>Customers can register their personal information for the future use.</li>
                </ol>
            </div>
            </div> 
        </section>
        <section class="video">
            <div class="content-width">
                    <h2 data-span="with love">Demo video</h2>
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/h-jZjo0JWU8?si=aGfO6r8OQsjb6st0&autoplay=1&color=white&mute=1&loop=1&rel=0&rel=0&playlist=h-jZjo0JWU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
        </section>
        <section>
            <div class="content-width">
             <div class="sitemap">
                <h2>Site Map</h2>
                <img src="../assets/img/projects/gw-sm.png" alt="Sitemap">
            </div>
        </div>
        </section>
    </main>
</template>

<style scoped>
        .theme-gowheellas { --color-1 : #e62a2a;
                --color-2 : #740c08; 
                --color-land-bg : #fff;
                --color-land-txA : #e62a2a;
                --color-land-txB : #740c08;
        }
</style>