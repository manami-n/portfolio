<script setup>
import li from '../assets/img/ico-linkedin.svg'
import gh from '../assets/img/ico-github.svg'
import ig from '../assets/img/ico-insta.svg'
</script>

<template>
<!-- ===========================
            FOOTER
     =========================== -->
    <footer>
        <ul>
            <li><a href="https://www.linkedin.com/in/manami-n/" aria-label="Link to Linked In Profile" target="_blank"><img :src="li" alt="LinkedIn"></a></li>
            <li><a href="https://github.com/manami-n" aria-label="Link to GitHub page" target="_blank"><img :src="gh" alt="GitHub"></a></li>
            <li><a href="https://www.instagram.com/manapari.n/" aria-label="Link to the Instagram Account" target="_blank"><img :src="ig" alt="Instagram"></a></li>
        </ul>
        <p><small>&copy;Manami Naito</small></p>
    </footer>
</template>
