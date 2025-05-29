function createFooter() {
    return `
    <!-- Footer -->
    <footer class="bg-blue-900 text-white py-8 mt-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
                    <p class="text-sm">Department of Financial Services</p>
                    <p class="text-sm">Ministry of Finance</p>
                    <p class="text-sm">Government of India</p>
                    <p class="text-sm">3rd Floor, Jeevan Deep Building</p>
                    <p class="text-sm">Parliament Street, New Delhi - 110001</p>
                    <p class="text-sm mt-2"><i class="fas fa-phone"></i> +91-11-23748721</p>
                    <p class="text-sm"><i class="fas fa-envelope"></i> info-dfs@nic.in</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="feedback.html" class="hover:text-yellow-300"><i class="fas fa-angle-right mr-1"></i>Feedback</a></li>
                        <li><a href="terms.html" class="hover:text-yellow-300"><i class="fas fa-angle-right mr-1"></i>Terms of Use</a></li>
                        <li><a href="privacy.html" class="hover:text-yellow-300"><i class="fas fa-angle-right mr-1"></i>Privacy Policy</a></li>
                        <li><a href="disclaimer.html" class="hover:text-yellow-300"><i class="fas fa-angle-right mr-1"></i>Disclaimer</a></li>
                        <li><a href="sitemap.html" class="hover:text-yellow-300"><i class="fas fa-angle-right mr-1"></i>Sitemap</a></li>
                        <li><a href="accessibility.html" class="hover:text-yellow-300"><i class="fas fa-angle-right mr-1"></i>Accessibility</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-2xl hover:text-yellow-300"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-2xl hover:text-yellow-300"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="text-2xl hover:text-yellow-300"><i class="fab fa-youtube"></i></a>
                        <a href="#" class="text-2xl hover:text-yellow-300"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <div class="mt-4">
                        <h4 class="font-semibold mb-2">Subscribe Newsletter</h4>
                        <form class="flex">
                            <input type="email" placeholder="Your email" class="px-3 py-2 rounded-l text-gray-800 flex-1">
                            <button type="submit" class="bg-yellow-400 text-blue-900 px-4 py-2 rounded-r hover:bg-yellow-500">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Website Stats</h3>
                    <p class="text-sm"><i class="fas fa-users"></i> Total Visitors: <span id="visitorCount">1,636,158</span></p>
                    <p class="text-sm"><i class="fas fa-user"></i> Today's Visitors: <span id="todayVisitors">2,341</span></p>
                    <p class="text-sm"><i class="fas fa-eye"></i> Page Views: <span id="pageViews">5,234,789</span></p>
                    <p class="text-sm mt-2"><i class="fas fa-clock"></i> Last Updated: May 13, 2025</p>
                    <div class="mt-4">
                        <img src="https://via.placeholder.com/150x50/ffffff/0052cc?text=Digital+India" alt="Digital India" class="h-12">
                    </div>
                </div>
            </div>
            <div class="border-t border-blue-800 mt-8 pt-6 text-center text-sm">
                <p>© 2025 Department of Financial Services. All rights reserved.</p>
                <p>Website Content Managed and Owned by Department of Financial Services, Ministry of Finance, Government of India</p>
                <p>Designed, Developed and Hosted by National Informatics Centre (NIC)</p>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <button id="backToTop" class="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hidden hover:bg-blue-700 transition-all">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Chat Support Widget -->
    <div id="chatWidget" class="fixed bottom-4 left-4 z-50">
        <button onclick="toggleChat()" class="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700">
            <i class="fas fa-comments"></i>
        </button>
        <div id="chatBox" class="hidden bg-white rounded-lg shadow-xl w-80 mb-2">
            <div class="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h3 class="font-semibold">DFS Support</h3>
                <button onclick="toggleChat()" class="text-xl">&times;</button>
            </div>
            <div class="p-4 h-64 overflow-y-auto" id="chatMessages">
                <div class="bg-gray-100 p-3 rounded mb-2">
                    <p class="text-sm">Welcome to DFS Support! How can I help you today?</p>
                </div>
            </div>
            <div class="p-4 border-t">
                <form onsubmit="sendMessage(event)" class="flex">
                    <input type="text" id="chatInput" placeholder="Type your message..." class="flex-1 border rounded-l px-3 py-2">
                    <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded-r hover:bg-green-700">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
    `;
}