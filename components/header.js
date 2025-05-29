// Reusable header component
function createHeader() {
    return `
    <!-- Skip to main content -->
    <a href="#main-content" class="sr-only focus:not-sr-only bg-blue-700 text-white p-2 focus-ring">Skip to main content</a>

    <!-- Top Bar -->
    <div class="bg-gray-800 text-white py-2">
        <div class="container mx-auto px-4 flex justify-between items-center text-sm">
            <div class="flex items-center space-x-4">
                <span><i class="far fa-calendar"></i> <span id="currentDate"></span></span>
                <span><i class="far fa-clock"></i> <span id="currentTime"></span></span>
            </div>
            <div class="flex items-center space-x-4">
                <button onclick="changeFontSize('decrease')" aria-label="Decrease font size" class="px-2">A-</button>
                <button onclick="changeFontSize('normal')" aria-label="Normal font size" class="px-2">A</button>
                <button onclick="changeFontSize('increase')" aria-label="Increase font size" class="px-2">A+</button>
                <span class="mx-2">|</span>
                <a href="#" class="hover:text-yellow-300">हिंदी</a>
            </div>
        </div>
    </div>

    <!-- Header -->
    <header class="bg-white shadow sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4 flex items-center justify-between">
            <div class="flex items-center">
                <img src="logo.jpg" alt="Government of India Logo" class="h-12">
                <div class="ml-4">
                    <h1 class="text-xl font-bold text-blue-900">Department of Financial Services</h1>
                    <p class="text-sm text-gray-600">Ministry of Finance, Government of India</p>
                </div>
            </div>
            <div class="flex items-center space-x-4">
                <div class="relative">
                    <input type="search" id="searchInput" placeholder="Search..." aria-label="Search" class="border rounded p-1 pl-8 focus-ring">
                    <svg class="absolute left-2 top-2 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <!-- BB-8 Toggle -->
                <label class="bb8-toggle">
                    <input class="bb8-toggle__checkbox" type="checkbox" id="theme-toggle">
                    <div class="bb8-toggle__container">
                        <div class="bb8-toggle__scenery">
                            <div class="bb8-toggle__star"></div>
                            <div class="bb8-toggle__star"></div>
                            <div class="bb8-toggle__star"></div>
                            <div class="bb8-toggle__star"></div>
                            <div class="bb8-toggle__star"></div>
                            <div class="bb8-toggle__star"></div>
                            <div class="bb8-toggle__star"></div>
                            <div class="tatto-1"></div>
                            <div class="tatto-2"></div>
                            <div class="gomrassen"></div>
                            <div class="hermes"></div>
                            <div class="chenini"></div>
                            <div class="bb8-toggle__cloud"></div>
                            <div class="bb8-toggle__cloud"></div>
                            <div class="bb8-toggle__cloud"></div>
                        </div>
                        <div class="bb8">
                            <div class="bb8__head-container">
                                <div class="bb8__antenna"></div>
                                <div class="bb8__antenna"></div>
                                <div class="bb8__head"></div>
                            </div>
                            <div class="bb8__body"></div>
                        </div>
                        <div class="artificial__hidden">
                            <div class="bb8__shadow"></div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
        <nav class="bg-blue-900 text-white">
            <div class="container mx-auto px-4">
                <ul class="flex space-x-4 py-3 overflow-x-auto">
                    <li><a href="index.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">Home</a></li>
                    <li class="relative group">
                        <a href="who-we-are.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">Who We Are</a>
                        <ul class="absolute hidden group-hover:block bg-blue-800 mt-2 rounded shadow-lg">
                            <li><a href="about.html" class="block px-4 py-2 hover:bg-blue-700">About Us</a></li>
                            <li><a href="organizational-structure.html" class="block px-4 py-2 hover:bg-blue-700">Organizational Structure</a></li>
                            <li><a href="vision-mission.html" class="block px-4 py-2 hover:bg-blue-700">Vision & Mission</a></li>
                        </ul>
                    </li>
                    <li class="relative group">
                        <a href="banking.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">Banking</a>
                        <ul class="absolute hidden group-hover:block bg-blue-800 mt-2 rounded shadow-lg">
                            <li><a href="public-sector-banks.html" class="block px-4 py-2 hover:bg-blue-700">Public Sector Banks</a></li>
                            <li><a href="private-banks.html" class="block px-4 py-2 hover:bg-blue-700">Private Banks</a></li>
                            <li><a href="regional-rural-banks.html" class="block px-4 py-2 hover:bg-blue-700">Regional Rural Banks</a></li>
                            <li><a href="cooperative-banks.html" class="block px-4 py-2 hover:bg-blue-700">Cooperative Banks</a></li>
                        </ul>
                    </li>
                    <li><a href="insurance.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">Insurance</a></li>
                    <li><a href="financial-inclusion.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">Financial Inclusion</a></li>
                    <li><a href="cyber-security.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">Cyber Security & Fintech</a></li>
                    <li><a href="schemes.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">Schemes</a></li>
                    <li><a href="rti.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">RTI</a></li>
                    <li><a href="resources.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">Resources</a></li>
                    <li><a href="contact.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">Contact</a></li>
                    <li><a href="signup.html" class="hover:text-yellow-300 focus-ring whitespace-nowrap">Login</a></li>
                </ul>
            </div>
        </nav>
    </header>
    `;
}