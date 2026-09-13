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
            <a href="/index.html"><img :src="logo" alt="Manami Naito"></a>
            <nav>
                <ul>
                    <li><a href="/index.html">TOP</a></li>
                    <li><a href="/index.html#projects">PROJECTS</a>
                        <ul class="sub">
                            <li><a href="/websites.html">Websites</a></li>
                            <li><a href="/webapps.html">Web Apps</a></li>
                        </ul>
                        </li>
                    <li><a href="/index.html#experience">EXPERIENCE</a></li>
                    <li><a href="/index.html#jumpabout">ABOUT</a></li>
                    <li class="lang"><a href="/index.html#"><img :src="globe" alt="Language"></a>
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
