<script setup>
import logo from '../assets/img/logo.svg'
import globe from '../assets/img/ico-globe.svg'
</script>

<template>
    <!-- ===========================
            HEADER
     =========================== -->
    <header>
        <div class="content-width">
            <a href="/"><img :src="logo" alt="Manami Naito"></a>
            <nav>
                <ul>
                    <li><router-link to="/">TOP</router-link></li>
                    <li><router-link to="/#projects">PROJECTS</router-link>
                        <ul class="sub">
                            <li><router-link to="/websites">Websites</router-link></li>
                            <li><router-link to="/webapps">Web Apps</router-link></li>
                        </ul>
                        </li>
                    <li><router-link to="/#experience">EXPERIENCE</router-link></li>
                    <li><router-link to="/#jumpabout">ABOUT</router-link></li>
                    <li class="lang"><router-link to="/#"><img :src="globe" alt="Language"></img></router-link>
                        <ul class="sub">
                            <!-- <li><a href="#">ES</a></li>
                            <li><a href="#">JP</a></li> -->
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
        <div id="burg"> <span></span> </div>
        <div id="burg-bg"></div>
    </header>
</template>
