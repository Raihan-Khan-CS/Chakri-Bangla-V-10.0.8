// --- DATABASE (Your existing 'db' object goes here) ---
// This is the SINGLE SOURCE OF TRUTH for all posts.
const db = {
    items: [
        // Job Circulars: Government Job (id 100-199)
        {
            id: 101,
            type: 'circular',
            category: 'govt',
            company_bn: 'বাংলাদেশ ক্ষুদ্র ও কুটির শিল্প করপোরেশন (বিসিক)',
            title_bn: '১৮৫টি পদে বিশাল নিয়োগ বিজ্ঞপ্তি',
            deadline_bn: 'জুলাই ৩১, ২০২৫',
            file: 'job-circulars/circular-govt-bscic.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 102,
            type: 'circular',
            category: 'govt',
            company_bn: 'গণযোগাযোগ অধিদপ্তর',
            title_bn: '১৭৭টি বিভিন্ন পদে জনবল নিয়োগ',
            deadline_bn: 'আগস্ট ০৫, ২০২৫',
            file: 'job-circulars/circular-govt-mcd.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 103,
            type: 'circular',
            category: 'govt',
            company_bn: 'ঢাকা ওয়াসা',
            title_bn: 'উপ-সহকারী প্রকৌশলীসহ বিভিন্ন পদে নিয়োগ',
            deadline_bn: 'জুলাই ২৫, ২০২৫',
            file: 'job-circulars/circular-govt-wasa.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 104,
            type: 'circular',
            category: 'govt',
            company_bn: 'বর্ডার গার্ড বাংলাদেশ (বিজিবি)',
            title_bn: 'অসামরিক পদে ১৬৬ জনকে নিয়োগ',
            deadline_bn: 'জুলাই ২৮, ২০২৫',
            file: 'job-circulars/circular-govt-bgb.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 105,
            type: 'circular',
            category: 'govt',
            company_bn: 'স্বাস্থ্য অধিদপ্তর (DGHS)',
            title_bn: 'মেডিকেল টেকনোলজিস্ট ও অন্যান্য পদে নিয়োগ',
            deadline_bn: 'আগস্ট ১০, ২০২৫',
            file: 'job-circulars/circular-govt-dghs.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },

        {
            id: 106,
            type: 'circular',
            category: 'govt',
            company_bn: 'বাংলাদেশ গম ও ভুট্টা গবেষণা ইনস্টিটিউট',
            title_bn: '৫৯টি পদে নতুন নিয়োগ বিজ্ঞপ্তি',
            deadline_bn: 'জুলাই ১৫, ২০২৫',
            file: 'job-circulars/circular-govt-bwmri.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },


        // Job Circulars: Private Job  id (201-299)
        {
            id: 201,
            type: 'circular',
            category: 'private',
            company_bn: 'স্কয়ার ফার্মাসিউটিক্যালস লিমিটেড',
            title_bn: 'মেডিকেল প্রমোশন অফিসার পদে নিয়োগ',
            deadline_bn: 'আগস্ট ০৫, ২০২৫',
            file: 'job-circulars/circular-private-square.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 202,
            type: 'circular',
            category: 'private',
            company_bn: 'ব্র্যাক ব্যাংক পিএলসি',
            title_bn: 'রিলেশনশিপ অফিসার পদে লোকবল নিয়োগ',
            deadline_bn: 'জুলাই ৩০, ২০২৫',
            file: 'job-circulars/circular-private-bracbank.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 203,
            type: 'circular',
            category: 'private',
            company_bn: 'গ্রামীণফোন লিমিটেড',
            title_bn: 'ম্যানেজমেন্ট ট্রেইনি প্রোগ্রামের জন্য আবেদন গ্রহণ',
            deadline_bn: 'আগস্ট ১৫, ২০২৫',
            file: 'job-circulars/circular-private-gp.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 204,
            type: 'circular',
            category: 'private',
            company_bn: 'বসুন্ধরা গ্রুপ',
            title_bn: 'এক্সিকিউটিভ (সেলস এন্ড মার্কেটিং) পদে নিয়োগ',
            deadline_bn: 'জুলাই ২৮, ২০২৫',
            file: 'job-circulars/circular-private-bashundhara.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 205,
            type: 'circular',
            category: 'private',
            company_bn: 'আকিজ ফুড এন্ড বেভারেজ লিমিটেড',
            title_bn: 'ব্র্যান্ড ম্যানেজার পদে লোক নিয়োগ',
            deadline_bn: 'আগস্ট ০৮, ২০২৫',
            file: 'job-circulars/circular-private-akij.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },

        // Job Circulars: Bank Job (301-399)
        {
            id: 301,
            type: 'circular',
            category: 'bank',
            company_bn: 'সোনালী ব্যাংক পিএলসি',
            title_bn: 'অফিসার (জেনারেল) পদে নিয়োগ বিজ্ঞপ্তি',
            deadline_bn: 'আগস্ট ২০, ২০২৫',
            file: 'job-circulars/circular-bank-sonali.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 302,
            type: 'circular',
            category: 'bank',
            company_bn: 'ডাচ-বাংলা ব্যাংক পিএলসি',
            title_bn: 'ট্রেইনি অফিসার পদে নিয়োগ',
            deadline_bn: 'আগস্ট ১০, ২০২৫',
            file: 'job-circulars/circular-bank-dbbl.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 303,
            type: 'circular',
            category: 'bank',
            company_bn: 'ইসলামী ব্যাংক বাংলাদেশ পিএলসি',
            title_bn: 'প্রবেশনারি অফিসার পদে আবেদন গ্রহণ',
            deadline_bn: 'আগস্ট ১২, ২০২৫',
            file: 'job-circulars/circular-bank-ibbl.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 304,
            type: 'circular',
            category: 'bank',
            company_bn: 'ইস্টার্ন ব্যাংক পিএলসি',
            title_bn: 'ম্যানেজমেন্ট ট্রেইনি প্রোগ্রামের জন্য নিয়োগ',
            deadline_bn: 'জুলাই ৩১, ২০২৫',
            file: 'job-circulars/circular-bank-ebl.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 305,
            type: 'circular',
            category: 'bank',
            company_bn: 'ব্যাংকার্স সিলেকশন কমিটি (৫টি ব্যাংক)',
            title_bn: 'অফিসার (ক্যাশ) পদে সমন্বিত নিয়োগ',
            deadline_bn: 'আগস্ট ০৫, ২০২৫',
            file: 'job-circulars/circular-bank-bbsc.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },

        // Job Circulars: NGO Job  (401-499)
        {
            id: 401,
            type: 'circular',
            category: 'ngo',
            company_bn: 'ব্র্যাক',
            title_bn: 'দাবি কর্মসূচিতে ফিল্ড অর্গানাইজার পদে নিয়োগ',
            deadline_bn: 'আগস্ট ১০, ২০২৫',
            file: 'job-circulars/circular-ngo-brac.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 402,
            type: 'circular',
            category: 'ngo',
            company_bn: 'আশা (ASA)',
            title_bn: 'জুনিয়র লোন অফিসার পদে লোকবল নিয়োগ',
            deadline_bn: 'জুলাই ৩০, ২০২৫',
            file: 'job-circulars/circular-ngo-asa.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 403,
            type: 'circular',
            category: 'ngo',
            company_bn: 'টিএমএসএস (TMSS)',
            title_bn: 'স্বাস্থ্য কর্মকর্তা পদে নিয়োগ বিজ্ঞপ্তি',
            deadline_bn: 'আগস্ট ০৮, ২০২৫',
            file: 'job-circulars/circular-ngo-tmss.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 404,
            type: 'circular',
            category: 'ngo',
            company_bn: 'কেয়ার বাংলাদেশ',
            title_bn: 'প্রজেক্ট অফিসার (লাইভলিহুড) পদে আবেদন গ্রহণ',
            deadline_bn: 'আগস্ট ১৪, ২০২৫',
            file: 'job-circulars/circular-ngo-care.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 405,
            type: 'circular',
            category: 'ngo',
            company_bn: 'প্রশিকা',
            title_bn: 'মনিটরিং এন্ড ইভালুয়েশন অফিসার নিয়োগ',
            deadline_bn: 'জুলাই ২৮, ২০২৫',
            file: 'job-circulars/circular-ngo-proshika.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },

        // Job News id (1001-2000)
        {
            id: 1001,
            type: 'news',
            title_bn: '৪৫তম বিসিএসের মৌখিক পরীক্ষার সময়সূচি প্রকাশ',
            publish_date: 'জুন ২৫, ২০২৫',
            file: 'job-news/news-1001.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 1002,
            type: 'news',
            title_bn: 'প্রাথমিক সহকারী শিক্ষক নিয়োগের চূড়ান্ত ফল প্রকাশ',
            publish_date: 'জুলাই ০৮, ২০২৫',
            file: 'job-news/news-1002.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 1003,
            type: 'news',
            title_bn: 'ব্যাংকার্স সিলেকশন কমিটির পরীক্ষার নতুন সময়সূচি',
            publish_date: 'জুলাই ০৭, ২০২৫',
            file: 'job-news/news-1003.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 1004,
            type: 'news',
            title_bn: 'রেলওয়ে নিয়োগ পরীক্ষার প্রবেশপত্র ডাউনলোড শুরু',
            publish_date: 'জুলাই ০৬, ২০২৫',
            file: 'job-news/news-1004.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 1005,
            type: 'news',
            title_bn: 'সাত ব্যাংকের অফিসার পদের পরীক্ষার কেন্দ্র তালিকা প্রকাশ',
            publish_date: 'জুলাই ০৫, ২০২৫',
            file: 'job-news/news-1005.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 1006,
            type: 'news',
            title_bn: ' ৪৬তম বিসিএস নন-ক্যাডার পদের তালিকা প্রকাশ করলো পিএসসি',
            publish_date: 'জুলাই ০৪, ২০২৫',
            file: 'job-news/news-1006.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 1007,
            type: 'news',
            title_bn: 'উপজেলা সমাজসেবা অফিসার পদের মৌখিক পরীক্ষার তারিখ ঘোষণা',
            publish_date: 'জুলাই ০৩, ২০২৫',
            file: 'job-news/news-1007.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 1008,
            type: 'news',
            title_bn: 'কৃষি সম্প্রসারণ অধিদপ্তরের পরীক্ষার তারিখ পরিবর্তন',
            publish_date: 'জুলাই ০২, ২০২৫',
            file: 'job-news/news-1008.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
        {
            id: 1009,
            type: 'news',
            title_bn: '৪৭তম বিসিএসের প্রিলিমিনারি পরীক্ষার সম্ভাব্য তারিখ প্রকাশ',
            publish_date: 'জুলাই ০১, ২০২৫',
            file: 'job-news/news-1009.html',
            thumb: '../images/Bangladesh.jpg',
            image: '../images/Bangladesh.jpg'
        },
    ],
    categories: {
        news: {
            bn: 'চাকরির খবর',
            icon: '📰'
        },
        govt: {
            bn: 'সরকারি চাকরির সার্কুলার',
            icon: '🏛️'
        },
        private: {
            bn: 'বেসরকারি চাকরির সার্কুলার',
            icon: '🏢'
        },
        bank: {
            bn: 'ব্যাংক চাকরির সার্কুলার',
            icon: '🏦'
        },
        ngo: {
            bn: 'এনজিও চাকরির সার্কুলার',
            icon: '🏢'
        },
    },
};

// --- TEMPLATING FUNCTIONS (Your existing 'templates' object goes here) ---
const templates = {
    itemCard: (item) => {
        const isHomepage = !document.body.hasAttribute('data-post-id');
        const pathPrefix = isHomepage ? '' : '../';
        const link = item.file ? `${pathPrefix}${item.file}` : '#';
        const clickHandler = item.file ? `window.location.href='${link}';` : `alert('বিস্তারিত তথ্য শীঘ্রই আসছে।');`;
        return `<a href="${link}" class="item-card" onclick="event.preventDefault(); ${clickHandler}"><h3 class="item-card-title">${item.title_bn}</h3><div class="item-card-meta">${item.type==='circular'?`<span><i class="fas fa-building"></i> ${item.company_bn}</span><span><i class="fas fa-calendar-times"></i> ${item.deadline_bn}</span>`:`<span><i class="fas fa-calendar-alt"></i> ${item.publish_date}</span>`}</div></a>`;
    },
    fullListItem: (item) => {
        const pathPrefix = document.getElementById('page-content') ? '' : '../';
        const link = item.file ? `${pathPrefix}${item.file}` : '#';
        const clickHandler = item.file ? `window.location.href='${link}';` : `alert('বিস্তারিত তথ্য শীঘ্রই আসছে।');`;
        return `<article class="full-list-item"><div class="icon">${db.categories[item.category||'news'].icon}</div><div class="item-details"><a href="${link}" class="item-title" onclick="event.preventDefault(); ${clickHandler}">${item.title_bn}</a><div class="item-meta">${item.type==='circular'?`<span><i class="fas fa-building"></i> ${item.company_bn}</span><span><i class="fas fa-calendar-times"></i> ${item.deadline_bn}</span>`:`<span><i class="fas fa-calendar-alt"></i> ${item.publish_date}</span>`}</div></div></article>`;
    },
    homeSection: (key) => {
        const category = db.categories[key];
        const itemsToShow = (key === 'news') ? db.items.filter(i => i.type === 'news').slice(0, 8) : db.items.filter(i => i.type === 'circular' && i.category === key).slice(0, 8);
        if (itemsToShow.length === 0) return '';
        const itemGridHtml = itemsToShow.map(item => templates.itemCard(item)).join('');
        return `<section class="home-section"><div class="section-header"><h2>${category.icon} ${category.bn}</h2><a href="#" class="btn-view-all" onclick="handleNavClick(event, 'category', '${key}')">সব দেখুন</a></div><div class="item-grid">${itemGridHtml}</div></section>`;
    },
    relatedPostItem: (item) => {
        const pathPrefix = '../';
        const link = item.file ? `${pathPrefix}${item.file}` : '#';
        const clickHandler = item.file ? `window.location.href='${link}';` : `alert('বিস্তারিত তথ্য শীঘ্রই আসছে।');`;
        return `<li><a href="${link}" class="related-post-item" onclick="event.preventDefault(); ${clickHandler}"><img src="${item.thumb}" alt="${item.title_bn}" class="related-post-thumb" onerror="this.src='https://placehold.co/100x100/cccccc/ffffff?text=Img'"/>
                        <h4 class="related-post-title">${item.title_bn}</h4></a></li>`;
    }
};

// --- State management for the current view on the homepage
const state = {
    currentPage: 'home',
    currentPageArg: null
};

// ===================================================================
// START: NEW DYNAMIC HEADER/FOOTER LOADER
// ===================================================================

/**
 * Loads the header and footer from index.html into the current page.
 */
async function loadSharedLayout() {
    const headerElement = document.querySelector("header");
    const footerElement = document.querySelector("footer");

    if (!headerElement || !footerElement) {
        // If placeholders are not found, do nothing.
        // This check is important for the index.html page itself.
        return;
    }

    // 1. Determine the correct relative path to the root directory
    const path = window.location.pathname;
    let basePath = './';
    const pathSegments = path.split('/').filter(segment => segment.length > 0 && !segment.endsWith('.html'));
    
    if (pathSegments.length > 1) { // A basic check for subdirectories
       basePath = '../'.repeat(pathSegments.length -1);
    }
    
    // A more specific check for deeply nested BCS exam pages
    if (path.includes('/bcs-exam/')) {
       basePath = path.split('/').length > 4 ? '../../' : '../';
    }


    try {
        // 2. Fetch the content of index.html from the root
        const response = await fetch(`${basePath}index.html`);
        if (!response.ok) throw new Error("Could not load layout from index.html");
        const text = await response.text();

        // 3. Parse the fetched text into an HTML document
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        const headerNode = doc.querySelector('.header');
        const footerNode = doc.querySelector('.footer');

        if (headerNode && footerNode) {
            // 4. Correct all paths within the fetched HTML
            adjustElementPaths(headerNode, basePath);
            adjustElementPaths(footerNode, basePath);

            // 5. Inject the corrected HTML into the current page's placeholders
            headerElement.innerHTML = headerNode.innerHTML;
            footerElement.innerHTML = footerNode.innerHTML;

            // 6. Re-attach event listeners to the new header elements
            reinitializeHeaderEventListeners();
        }
    } catch (error) {
        console.error("Error loading shared layout:", error);
        headerElement.innerHTML = "<p>Error: Could not load header.</p>";
        footerElement.innerHTML = "<p>Error: Could not load footer.</p>";
    }
}

/**
 * Adjusts all href and src attributes in a given HTML node to work from any directory depth.
 * @param {HTMLElement} node - The HTML node (header or footer) to process.
 * @param {string} basePath - The relative path to the root (e.g., './', '../').
 */
function adjustElementPaths(node, basePath) {
    // Adjust anchor tags
    node.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
            // Special handling for homepage links with parameters
            if (href.includes('?page=')) {
                const [path, query] = href.split('?');
                a.href = `${basePath}index.html?${query}`;
            } else {
                 a.href = `${basePath}${href}`;
            }
        }
    });

    // Adjust image tags
    node.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('http')) {
            img.src = `${basePath}${src}`;
        }
    });
}


/**
 * Re-attaches necessary event listeners after the header is dynamically loaded.
 */
function reinitializeHeaderEventListeners() {
    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Re-attach click handlers for navigation and dropdowns
    // Using event delegation on the header is more efficient
    const header = document.querySelector('header');
    if(header) {
        header.addEventListener('click', function(event){
            const target = event.target;
            
            // Handle dropdown toggles on mobile
            if(target.matches('.nav-link') && target.getAttribute('onclick')?.includes('toggleDropdown')){
                toggleDropdown(event);
            }

            // Handle navigation clicks
            const navLink = target.closest('a');
            if(navLink && navLink.getAttribute('onclick')?.includes('handleNavClick')){
                // Extract arguments from the onclick attribute string
                const onclickString = navLink.getAttribute('onclick');
                const args = onclickString.match(/'([^']*)'/g).map(arg => arg.replace(/'/g, ''));
                handleNavClick(event, args[0], args[1]);
            }
        });
    }
}

// ===================================================================
// END: NEW DYNAMIC HEADER/FOOTER LOADER
// ===================================================================


// --- ORIGINAL PAGE RENDERING LOGIC AND EVENT HANDLERS ---

function renderHomepage(pageKey, pageArg = null) {
    const contentDiv = document.getElementById('page-content');
    if (!contentDiv) return;

    let contentHtml = '';
    if (pageKey === 'home') {
        const circularCategories = ['govt', 'private', 'bank', 'ngo'];
        const newsSectionHtml = templates.homeSection('news');
        const circularSectionsHtml = circularCategories.map(key => templates.homeSection(key)).join('');
        const prepSectionHtml = `<section class="home-section"><div class="section-header"><h2><i class="fas fa-book-reader"></i> পরীক্ষার প্রস্তুতি</h2></div><div class="prep-grid">
                             <a href="bcs-exam.html" class="prep-card"><div class="icon">🏛️</div><h3>বিসিএস প্রস্তুতি</h3><p>গাইডলাইন ও টিপস</p></a>
                             <a href="#" class="prep-card" onclick="handleNavClick(event, 'category', 'bank')"><div class="icon">🏦</div><h3>ব্যাংক জব প্রস্তুতি</h3><p>গাইডলাইন ও টিপস</p></a>
                             <a href="#" class="prep-card" onclick="handleNavClick(event, 'page', 'career-advice')"><div class="icon">💬</div><h3>ক্যারিয়ার পরামর্শ</h3><p>গাইডলাইন ও টিপস</p></a>
                        </div></section>`;
        contentHtml = `<div class="container">${newsSectionHtml}${circularSectionsHtml}${prepSectionHtml}</div>`;

    } else if (pageKey === 'category') {
        const category = db.categories[pageArg];
        const itemsToList = (pageArg === 'news') ? db.items.filter(i => i.type === 'news') : db.items.filter(i => i.type === 'circular' && i.category === pageArg);
        const itemListHtml = itemsToList.length > 0 ? itemsToList.map(item => templates.fullListItem(item)).join('') : `<p style="padding: 20px;">এই বিভাগে কোনো তথ্য পাওয়া যায়নি।</p>`;
        contentHtml = `<div class="container"><div class="home-section"><div class="section-header"><h2>${category.icon} ${category.bn}</h2></div><div class="full-item-list">${itemListHtml}</div></div></div>`;
    
    } else if (pageKey === 'page' && pageArg === 'career-advice'){
        contentHtml = `<div class="container"><div class="static-page"><h1>ক্যারিয়ার পরামর্শ</h1><p>এই বিভাগটি শীঘ্রই আসছে...</p></div></div>`;
    
    } else {
        contentHtml = `<div class="container"><div class="static-page"><h1>404 - পেজটি খুঁজে পাওয়া যায়নি</h1></div></div>`;
    }
    
    contentDiv.innerHTML = contentHtml;
    window.scrollTo(0, 0);
    updateNavActiveState(pageKey, pageArg);
}


function handleNavClick(event, pageKey, pageArg = null) {
    event.preventDefault();
    state.currentPage = pageKey;
    state.currentPageArg = pageArg;

    // Check if we are on the homepage or need to navigate
    if (document.getElementById('page-content')) {
        renderHomepage(pageKey, pageArg);
    } else {
        // Determine the correct base path for navigation
        const path = window.location.pathname;
        let basePath = '../'; // Default for one level deep
        if (path.includes('/bcs-exam/bangla-Bhasha-o-shahityo/') || path.includes('/bcs-exam/english-language-and-literature/')) {
            basePath = '../../'; // For two levels deep
        }

        // Navigate to the correct page
        let targetUrl = `${basePath}index.html`;
        if (pageKey === 'page' && ['about', 'contact', 'faq', 'privacy-policy', 'terms-and-conditions', 'disclaimer'].includes(pageArg)) {
             targetUrl = `${basePath}${pageArg}.html`;
        } else if (pageKey === 'page' && pageArg === 'bcs'){
             targetUrl = `${basePath}bcs-exam.html`;
        } else {
             targetUrl = `${basePath}index.html?page=${pageKey}&arg=${pageArg}`;
        }
        window.location.href = targetUrl;
    }
}


function updateNavActiveState(pageKey, pageArg) {
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    let activeLink;
    if (pageKey === 'home') activeLink = document.querySelector('.nav-link[data-page="home"]');
    if (pageKey === 'category' && pageArg === 'news') activeLink = document.querySelector('.nav-link[data-page="news"]');
    if (pageKey === 'page' && pageArg === 'about') activeLink = document.querySelector('.nav-link[data-page="about"]');
    if (pageKey === 'page' && pageArg === 'contact') activeLink = document.querySelector('.nav-link[data-page="contact"]');
    
    // Highlight the "Exam Prep" dropdown if on the BCS main page
    if (window.location.pathname.endsWith('bcs-exam.html')) {
        activeLink = document.querySelector('a.nav-link[onclick*="bcs-exam.html"]');
    }

    if (activeLink) activeLink.classList.add('active');
}


function initializePostPage() {
    const body = document.body;
    const postId = parseInt(body.getAttribute('data-post-id'), 10);
    const postType = body.getAttribute('data-post-type');
    const postCategory = body.getAttribute('data-post-category');

    if (!postId || !postType) return;

    const currentItem = db.items.find(item => item.id === postId);
    if (currentItem) {
        const postImage = document.getElementById('post-header-image');
        if (postImage && currentItem.image) {
            postImage.src = `../${currentItem.image}`;
        }
    }

    const relatedPostsContainer = document.getElementById('related-posts-list');
    if (relatedPostsContainer) {
        const relatedItems = db.items.filter(item => {
            if (item.id === postId) return false;
            if (postType === 'news') return item.type === 'news';
            return item.type === 'circular' && item.category === postCategory;
        }).slice(0, 5);
        relatedPostsContainer.innerHTML = relatedItems.map(item => templates.relatedPostItem(item)).join('');
    }

    // Share buttons logic
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const facebookBtn = document.getElementById('share-facebook');
    const twitterBtn = document.getElementById('share-twitter');
    const linkedinBtn = document.getElementById('share-linkedin');

    if (facebookBtn) facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    if (twitterBtn) twitterBtn.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
    if (linkedinBtn) linkedinBtn.href = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}`;
}


function toggleMobileMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

function toggleDropdown(event) {
    if (window.innerWidth <= 992) {
        event.preventDefault();
        const parentItem = event.target.parentElement;
        parentItem.classList.toggle('active');
        const dropdown = parentItem.querySelector('.dropdown');
        if (dropdown) {
            // Simple toggle for mobile view
             if(window.getComputedStyle(dropdown).display === 'none'){
                 dropdown.style.display = 'block';
             } else {
                 dropdown.style.display = 'none';
             }
        }
    }
}

// --- MAIN EXECUTION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Check if the current page is index.html
    const isIndexPage = window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html');

    if (isIndexPage) {
        // Homepage specific logic
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page') || 'home';
        const arg = urlParams.get('arg');
        renderHomepage(page, arg);
         // Re-attach listeners to the header on the homepage
        reinitializeHeaderEventListeners();
    } else {
        // Logic for all other pages
        loadSharedLayout().then(() => {
            if (document.body.hasAttribute('data-post-id')) {
                initializePostPage();
            }
             // For pages like about.html, bcs-exam.html etc.
            updateNavActiveState();
        });
    }
});