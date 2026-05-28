
<template>
    <footer class="bg-green-800 text-white px-4 py-5 mt-10 ">
        <div class="flex flex-wrap justify-between gap-4 max-w-6xl mx-auto">
            <div>
                <h2 class="text-yellow-300 font-bold text-lg mb-3">TEMBERAURWANDA</h2>
                <p class="text-sm text-green-200"> 2024 Discover the beauty of the land of a thound hills .</p>
            </div>

            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">Quick link</h3>
                <ul class="space-y-2 text-sm">
                    <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
                    <li><RouterLink to="/about" class="hover:text-yellow-300">about us </RouterLink></li>
                    <li><RouterLink to="/services" class="hover:text-yellow-300">services</RouterLink></li>
                    <li><RouterLink to="/contact" class="hover:text-yellow-300">contact us </RouterLink></li>
                    <li><RouterLink to="/" class="hover:text-yellow-300">Location</RouterLink></li>    
                </ul>
            </div>
            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
                <ul class="space-y-2 text-sm">
                    <li><RouterLink to="" class="hover:text-yellow-300">Northern province</RouterLink></li>
                     <li><RouterLink to="" class="hover:text-yellow-300">Southern province</RouterLink></li>
                      <li><RouterLink to="" class="hover:text-yellow-300">Kigali city</RouterLink></li>
                       <li><RouterLink to="" class="hover:text-yellow-300">Western province</RouterLink></li>
                        <li><RouterLink to="" class="hover:text-yellow-300">Easthern province</RouterLink></li>
                </ul>
            </div>
            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">contact info</h3>
                <ul class="space-y-2 text-green-300">
                    <li>temberarwanda@gmail.com</li>
                    <li>+250 788 123 456</li>
                    <li>kagugu kigali,Rwanda</li>
                </ul>
        </div>

        </div>
        <div class="border-t border-green-600 mt-8 pt-4 text text-sm text-green">
            <p class="text-center">© 2025 visit Rwanda.All rights reserved</p>
        </div>
    </footer>
</template>          