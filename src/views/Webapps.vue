<script>
import { onMounted } from 'vue';
import { initPage } from '../script.js';

onMounted(() => {
  initPage()
})
</script>

<template>
    <main class="theme-webapps">
        <section id="websitesList">
            <div class="title">
                <div class="content-width">
                    <h1>Web Apps Gallery</h1>
                    <p>Here are some of my web application projects. <br>
                        Some of them are with PHP, and others are built with modern JavaScript frameworks. Each project showcases the ideas behind the development process, and how it works.</p>
                </div>
            </div>
            <div class="content-width">
                <article class="list-project">
                    <div class="texts">
                        <h2>Pupcakes</h2>
                        <p>This was my final project for Web application development course. The idea is to make a web service where people can find the places to eat with their pets (mainly dogs). Using OpenStreetMap API with Leaflet to generate map, and user can sign-up to make their favorite list or suggest a new place.</p>
                        <ul class="keywords">
                            <li>Figma</li>
                            <li>HTML</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>MySQL</li>
                            <li>Express.js</li>
                            <li>OpenStreetMap API</li>
                            <li>Leaflet</li>
                            <li>Git</li>
                        </ul>
                        <a href="/pupcakes.html" class="more">Learn more</a>
                    </div>
                    <div class="image">
                        <figure>
                            <img src="../assets/img/app1.avif" alt="preview">
                        </figure>
                        
                    </div>
                </article>
                <article class="list-project">
                    <div class="texts">
                        <h2>Email Generator</h2>
                        <p>Email generator was my first personal project(keeping the ownership admitted) during my internship. This was made for the web developers who need to create HTML email layout repeatedly for different clients.<br>
                            Using Bootstrap for a quick styling, Symfony as it was requirement from the company, and Docker to be able to recreate environment easily.</p>
                        <ul class="keywords">
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
                        <a href="/egenerator.html" class="more">Learn more</a>
                    </div>
                    <div class="image">
                        <figure>
                            <img src="../assets/img/app2.avif" alt="preview">
                        </figure>
                        
                    </div>
                </article>
                <article class="list-project">
                    <div class="texts">
                        <h2>GoWheel·las</h2>
                        <p>GoWheel·las was my rental-car service project during the course. Two different ports in the node.js server make separate entry points for the employees and the customers. <br>
                            The employees can add a new vehicle, or modify the vehicle information, at the same time, they also know how many of them are currently rented.
                            The customers can see the information dynamically, check availability of the vehicle, and rent it. They can also save their personal information for repeated use.</p>
                            <ul class="keywords">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Node.js</li>
                                <li>MySQL</li>
                                <li>Express.js</li>
                                <li>Session</li>
                                <li>Git</li>
                            </ul>
                        <a href="/gowheellas.html" class="more">Learn more</a>
                    </div>
                    <div class="image">
                        <figure>
                            <img src="../assets/img/app3.avif" alt="preview">
                        </figure>
                    </div>
                </article>
                <article class="list-project">
                    <div class="texts">
                        <h2>Wordpress Plugin for Instagram API</h2>
                        <p>Instagram plugin was my second personal project(keeping the ownership admitted) during my internship. The idea is people can use plugin for free to show their Instagram posts in their websites. <br>
                            Unfortunately, I didn't have enough time to finish the project, the Wordpress inplementation was still in process.</p>
                        <ul class="keywords">
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
                        <a href="/instaplugin.html" class="more">Learn more</a>
                    </div>
                    <div class="image">
                        <figure>
                            <img src="../assets/img/app4.avif" alt="preview">
                        </figure>
                    </div>
                </article>
            </div>
        </section>
    </main>
</template>

<style scoped>
.theme-webapps .title{
    background: url(../src/assets/img/webapps-bg.avif) no-repeat top left;
}
</style>