// Sample data for the application
let masajid = [
    {
        id: 1,
        name: "Chok Masjid",
        address: "Small Mosque Street, Pernambut",
        imam: "Saadi Hazrat",
        contact: "0234562789",
        prayerTimes: {
            fajr: "05:30",
            dhuhr: "13:15",
            asr: "16:30",
            maghrib: "19:00",
            isha: "20:15"
        }
    },
    {
        id: 2,
        name: "Choti Masjid",
        address: "Small Mosque Street, Pernambut",
        imam: "Sheikh Abdullah",
        contact: "0123456789",
        prayerTimes: {
            fajr: "05:30",
            dhuhr: "13:15",
            asr: "16:30",
            maghrib: "19:00",
            isha: "20:15"
        }
    },
    {
        id: 3,
        name: "Masjid Al-Huda",
        address: "123 Islamic Street, Makkah Town",
        imam: "Sheikh Farooq",
        contact: "0192837465",
        prayerTimes: {
            fajr: "05:32",
            dhuhr: "13:18",
            asr: "16:32",
            maghrib: "19:02",
            isha: "20:17"
        }
    },
    {
        id: 4,
        name: "Masjid An-Noor",
        address: "456 Sunnah Avenue, Madinah City",
        imam: "Sheikh Muhammad",
        contact: "0987654321",
        prayerTimes: {
            fajr: "05:45",
            dhuhr: "13:30",
            asr: "16:45",
            maghrib: "19:15",
            isha: "20:30"
        }
    },
    {
        id: 5,
        name: "Masjid Al-Falah",
        address: "Green Garden Road, Vellore",
        imam: "Mufti Salman",
        contact: "0912345678",
        prayerTimes: {
            fajr: "05:40",
            dhuhr: "13:25",
            asr: "16:40",
            maghrib: "19:10",
            isha: "20:20"
        }
    },
    {
        id: 6,
        name: "Masjid Usman Bin Affan",
        address: "Old Bazaar, Pernambut",
        imam: "Imam Rafiq",
        contact: "0823456712",
        prayerTimes: {
            fajr: "05:33",
            dhuhr: "13:18",
            asr: "16:33",
            maghrib: "19:03",
            isha: "20:18"
        }
    },
    {
        id: 7,
        name: "Masjid Al-Taqwa",
        address: "Hilltop Area, Pernambut",
        imam: "Sheikh Imran",
        contact: "0789012345",
        prayerTimes: {
            fajr: "05:28",
            dhuhr: "13:12",
            asr: "16:28",
            maghrib: "18:58",
            isha: "20:10"
        }
    },
    {
        id: 8,
        name: "Masjid Rahmaniya",
        address: "Rahmania Street, Ambur Road",
        imam: "Maulana Yasin",
        contact: "0876543210",
        prayerTimes: {
            fajr: "05:37",
            dhuhr: "13:27",
            asr: "16:43",
            maghrib: "19:12",
            isha: "20:22"
        }
    },
    {
        id: 9,
        name: "Masjid-e-Quba",
        address: "Bismillah Nagar, Pernambut",
        imam: "Sheikh Khalid",
        contact: "0765432198",
        prayerTimes: {
            fajr: "05:29",
            dhuhr: "13:14",
            asr: "16:29",
            maghrib: "19:01",
            isha: "20:13"
        }
    },
    {
        id: 10,
        name: "Masjid Noorani",
        address: "Masjid Street, Vaniyambadi",
        imam: "Maulana Faheem",
        contact: "0654321987",
        prayerTimes: {
            fajr: "05:36",
            dhuhr: "13:22",
            asr: "16:38",
            maghrib: "19:09",
            isha: "20:21"
        }
    },
    {
        id: 11,
        name: "Masjid Bait-us-Salaam",
        address: "Peace Road, Nellikuppam",
        imam: "Imam Junaid",
        contact: "0543219876",
        prayerTimes: {
            fajr: "05:34",
            dhuhr: "13:20",
            asr: "16:34",
            maghrib: "19:04",
            isha: "20:19"
        }
    },
    {
        id: 12,
        name: "Masjid Al-Kausar",
        address: "Riverbank Road, Arcot",
        imam: "Sheikh Azhar",
        contact: "0432198765",
        prayerTimes: {
            fajr: "05:41",
            dhuhr: "13:28",
            asr: "16:42",
            maghrib: "19:13",
            isha: "20:24"
        }
    },
    {
        id: 13,
        name: "Masjid Al-Rahma",
        address: "Mill Street, Pernambut",
        imam: "Maulana Ibrahim",
        contact: "0321987654",
        prayerTimes: {
            fajr: "05:39",
            dhuhr: "13:24",
            asr: "16:39",
            maghrib: "19:11",
            isha: "20:23"
        }
    },
    {
        id: 14,
        name: "Masjid Bilal",
        address: "Central Colony, Pernambut",
        imam: "Imam Bilal Ahmed",
        contact: "0219876543",
        prayerTimes: {
            fajr: "05:27",
            dhuhr: "13:11",
            asr: "16:27",
            maghrib: "18:57",
            isha: "20:09"
        }
    }
];


let jamaats = [
    {
        id: 1,
        duration: 3,
        startDate: "2024-07-01",
        endDate: "2024-07-03",
        masjidId: 2,
        members: ["Ayaan", "Fatima", "Zayd", "Aisha", "Ibrahim", "Maryam", "Yusuf", "Huda", "Ali", "Khadija"],
        amir: "Mohammed Thousef",
        notes: "Local jamaat for 3 days",
        status: "completed"
    },
    {
        id: 2,
        duration: 3,
        startDate: "2025-09-03",
        endDate: "2025-09-06",
        masjidId: 3,
        members: ["Hassan", "Sumayya", "Omar", "Safiya", "Bilal", "Rania", "Salman", "Noor"],
        amir: "Abdullah",
        notes: "Local jamaat for 3 days",
        status: "completed"
    },
    {
        id: 3,
        duration: 10,
        startDate: "2025-10-01",
        endDate: "2025-10-10",
        masjidId: 4,
        members: ["Amira", "Khalid", "Nadia", "Faizan", "Yasmin", "Sami", "Haleema"],
        amir: "Ahmed Ali",
        notes: "10-day jamaat within the district",
        status: "active"
    },
    {
        id: 4,
        duration: 40,
        startDate: "2025-11-01",
        endDate: "2025-12-10",
        masjidId: 3,
        members: ["Aaliyah", "Imran", "Naima", "Haroon", "Bushra"],
        amir: "Ahmed Khan",
        notes: "40-day khurooj to interior villages",
        status: "active"
    },
    {
        id: 5,
        duration: 40,
        startDate: "2026-01-01",
        endDate: "2026-02-10",
        masjidId: 1,
        members: ["Sajida", "Talha", "Hafsa", "Maaz", "Aqsa", "Junaid", "Zainab", "Ilyas", "Ruqayyah"],
        amir: "Abdul Rahman",
        notes: "40-day khurooj to neighboring city",
        status: "upcoming"
    },
    {
        id: 6,
        duration: 10,
        startDate: "2026-03-15",
        endDate: "2026-03-25",
        masjidId: 5,
        members: ["Tariq", "Layla", "Rashid", "Nusaiba", "Zara"],
        amir: "Imran Siddiqi",
        notes: "10-day jamaat focusing on youth dawah",
        status: "upcoming"
    },
    {
        id: 7,
        duration: 3,
        startDate: "2024-11-10",
        endDate: "2024-11-13",
        masjidId: 6,
        members: ["Asma", "Hamza", "Faris", "Lubna", "Zunairah"],
        amir: "Saeed Ahmed",
        notes: "3-day weekend jamaat",
        status: "completed"
    },
    {
        id: 8,
        duration: 7,
        startDate: "2025-05-01",
        endDate: "2025-05-08",
        masjidId: 7,
        members: ["Zohra", "Usman", "Tamim", "Rafi", "Jameela", "Sana"],
        amir: "Yahya Moin",
        notes: "7-day jamaat to nearby taluks",
        status: "completed"
    },
    {
        id: 9,
        duration: 4,
        startDate: "2025-12-20",
        endDate: "2025-12-24",
        masjidId: 8,
        members: ["Rayyan", "Mariam", "Huzayfa", "Iqra", "Nabeel"],
        amir: "Naeem Akhtar",
        notes: "Winter break special jamaat",
        status: "upcoming"
    },
    {
        id: 10,
        duration: 20,
        startDate: "2026-04-01",
        endDate: "2026-04-21",
        masjidId: 9,
        members: ["Hina", "Jawad", "Tasneem", "Kashif", "Shaista", "Adnan"],
        amir: "Shabbir Hussain",
        notes: "20-day khurooj with regional focus",
        status: "upcoming"
    }
];


let amaal = {
    fajrTaaleem: [
        {
            id: 1,
            date: "2023-06-15",
            topic: "Importance of Dawah",
            speaker: "Sheikh Abdullah"
        },
        {
            id: 2,
            date: "2023-06-16",
            topic: "Sincerity in Worship",
            speaker: "Sheikh Muhammad"
        }
    ],
    maghribBayan: [
        {
            id: 1,
            date: "2023-06-15",
            summary: "Discussion on the life of the Prophet (PBUH)",
            speaker: "Sheikh Abdullah"
        }
    ],
    mashwara: [
        {
            id: 1,
            date: "2023-06-15",
            notes: "Planning for upcoming jamaats and resource allocation"
        }
    ]
};

let users = [
    {
        id: 1,
        name: "Admin User",
        email: "admin@tabligh.org",
        role: "admin",
        status: "active"
    },
    {
        id: 2,
        name: "Amir Khan",
        email: "amir@tabligh.org",
        role: "amir",
        status: "active"
    }
];

// DOM Elements
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebar');
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');

// Modal elements
const masjidModal = document.getElementById('masjid-modal');
const jamaatModal = document.getElementById('jamaat-modal');
const amaalModal = document.getElementById('amaal-modal');
const userModal = document.getElementById('user-modal');

// Buttons
const addMasjidBtn = document.getElementById('add-masjid-btn');
const addJamaatBtn = document.getElementById('add-jamaat-btn');
const addNewJamaatBtn = document.getElementById('add-new-jamaat-btn');
const addAmaalBtn = document.getElementById('add-amaal-btn');
const addUserBtn = document.getElementById('add-user-btn');

// Form elements
const masjidForm = document.getElementById('masjid-form');
const jamaatForm = document.getElementById('jamaat-form');
const amaalForm = document.getElementById('amaal-form');
const userForm = document.getElementById('user-form');

// Tab elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    // Load data
    renderMasajid();
    renderJamaats();
    renderRecentJamaats();
    renderAmaal();
    renderUsers();
    renderCharts();

    // Update dashboard stats
    updateDashboardStats();

    // Set up event listeners
    setupEventListeners();
});

let navmenu = document.querySelector('.nav-menu')

function setupEventListeners() {
    // Sidebar toggle
    toggleSidebar.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        navmenu.classList.remove('display-none');
    });

    // Navigation items
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all nav items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            navmenu.classList.add('display-none');

            // Add active class to clicked nav item
            this.classList.add('active');

            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active'));

            // Show the corresponding content section
            const sectionId = this.getAttribute('data-section') + '-section';
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Masjid modal
    addMasjidBtn.addEventListener('click', () => openModal('masjid'));
    document.getElementById('cancel-masjid').addEventListener('click', () => closeModal('masjid'));
    document.getElementById('save-masjid').addEventListener('click', saveMasjid);

    // Jamaat modal
    addJamaatBtn.addEventListener('click', () => openModal('jamaat'));
    addNewJamaatBtn.addEventListener('click', () => openModal('jamaat'));
    document.getElementById('cancel-jamaat').addEventListener('click', () => closeModal('jamaat'));
    document.getElementById('save-jamaat').addEventListener('click', saveJamaat);

    // A'maal modal
    addAmaalBtn.addEventListener('click', () => openModal('amaal'));
    document.getElementById('cancel-amaal').addEventListener('click', () => closeModal('amaal'));
    document.getElementById('save-amaal').addEventListener('click', saveAmaal);

    // User modal
    addUserBtn.addEventListener('click', () => openModal('user'));
    document.getElementById('cancel-user').addEventListener('click', () => closeModal('user'));
    document.getElementById('save-user').addEventListener('click', saveUser);

    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Show the corresponding tab content
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

function openModal(modalType) {
    const modal = document.getElementById(`${modalType}-modal`);
    modal.style.display = 'flex';

    // Reset form
    document.getElementById(`${modalType}-form`).reset();

    // Prepare modal based on type
    switch (modalType) {
        case 'masjid':
            document.getElementById('masjid-id').value = '';
            document.querySelector('#masjid-modal .modal-title').textContent = 'Add New Masjid';
            break;

        case 'jamaat':
            document.getElementById('jamaat-id').value = '';
            document.querySelector('#jamaat-modal .modal-title').textContent = 'Add New Jamaat';

            // Populate masjid dropdown
            const masjidSelect = document.getElementById('jamaat-masjid');
            masjidSelect.innerHTML = '<option value="">Select Masjid</option>';
            masajid.forEach(masjid => {
                const option = document.createElement('option');
                option.value = masjid.id;
                option.textContent = masjid.name;
                masjidSelect.appendChild(option);
            });
            break;

        case 'amaal':
            document.getElementById('amaal-id').value = '';
            document.getElementById('amaal-type').value = '';
            document.querySelector('#amaal-modal .modal-title').textContent = 'Add Daily A\'maal';

            // Show all fields initially
            document.getElementById('taaleem-topic-group').style.display = 'block';
            document.getElementById('bayan-summary-group').style.display = 'block';
            document.getElementById('mashwara-notes-group').style.display = 'block';
            document.getElementById('speaker-group').style.display = 'block';
            break;

        case 'user':
            document.getElementById('user-id').value = '';
            document.querySelector('#user-modal .modal-title').textContent = 'Add New User';
            document.getElementById('user-password').required = true;
            break;
    }
}

function closeModal(modalType) {
    document.getElementById(`${modalType}-modal`).style.display = 'none';
}

function saveMasjid() {
    const id = document.getElementById('masjid-id').value;
    const name = document.getElementById('masjid-name').value;
    const address = document.getElementById('masjid-address').value;
    const imam = document.getElementById('masjid-imam').value;
    const contact = document.getElementById('masjid-contact').value;

    const prayerTimes = {
        fajr: document.getElementById('masjid-fajr').value,
        dhuhr: document.getElementById('masjid-dhuhr').value,
        asr: document.getElementById('masjid-asr').value,
        maghrib: document.getElementById('masjid-maghrib').value,
        isha: document.getElementById('masjid-isha').value
    };

    if (id) {
        // Update existing masjid
        const index = masajid.findIndex(m => m.id == id);
        if (index !== -1) {
            masajid[index] = {
                id: parseInt(id),
                name,
                address,
                imam,
                contact,
                prayerTimes
            };
        }
    } else {
        // Add new masjid
        const newId = masajid.length > 0 ? Math.max(...masajid.map(m => m.id)) + 1 : 1;
        masajid.push({
            id: newId,
            name,
            address,
            imam,
            contact,
            prayerTimes
        });
    }

    renderMasajid();
    updateDashboardStats();
    closeModal('masjid');
}

function saveJamaat() {
    const id = document.getElementById('jamaat-id').value;
    const duration = document.getElementById('jamaat-duration').value;
    const startDate = document.getElementById('jamaat-start-date').value;
    const endDate = document.getElementById('jamaat-end-date').value;
    const masjidId = document.getElementById('jamaat-masjid').value;
    const members = document.getElementById('jamaat-members').value.split(',').map(m => m.trim());
    const amir = document.getElementById('jamaat-amir').value;
    const notes = document.getElementById('jamaat-notes').value;

    // Determine status based on dates
    const today = new Date().toISOString().split('T')[0];
    let status;
    if (endDate < today) {
        status = 'completed';
    } else if (startDate <= today && endDate >= today) {
        status = 'active';
    } else {
        status = 'upcoming';
    }

    if (id) {
        // Update existing jamaat
        const index = jamaats.findIndex(j => j.id == id);
        if (index !== -1) {
            jamaats[index] = {
                id: parseInt(id),
                duration: parseInt(duration),
                startDate,
                endDate,
                masjidId: parseInt(masjidId),
                members,
                amir,
                notes,
                status
            };
        }
    } else {
        // Add new jamaat
        const newId = jamaats.length > 0 ? Math.max(...jamaats.map(j => j.id)) + 1 : 1;
        jamaats.push({
            id: newId,
            duration: parseInt(duration),
            startDate,
            endDate,
            masjidId: parseInt(masjidId),
            members,
            amir,
            notes,
            status
        });
    }

    renderJamaats();
    renderRecentJamaats();
    updateDashboardStats();
    renderCharts();
    closeModal('jamaat');
}

function saveAmaal() {
    const id = document.getElementById('amaal-id').value;
    const type = document.getElementById('amaal-type').value || 'fajr'; // Default to fajr if not set
    const date = document.getElementById('amaal-date').value;

    if (type === 'fajr') {
        const topic = document.getElementById('taaleem-topic').value;
        const speaker = document.getElementById('speaker-name').value;

        if (id) {
            // Update existing taaleem
            const index = amaal.fajrTaaleem.findIndex(t => t.id == id);
            if (index !== -1) {
                amaal.fajrTaaleem[index] = { id: parseInt(id), date, topic, speaker };
            }
        } else {
            // Add new taaleem
            const newId = amaal.fajrTaaleem.length > 0 ? Math.max(...amaal.fajrTaaleem.map(t => t.id)) + 1 : 1;
            amaal.fajrTaaleem.push({ id: newId, date, topic, speaker });
        }
    } else if (type === 'maghrib') {
        const summary = document.getElementById('bayan-summary').value;
        const speaker = document.getElementById('speaker-name').value;

        if (id) {
            // Update existing bayan
            const index = amaal.maghribBayan.findIndex(b => b.id == id);
            if (index !== -1) {
                amaal.maghribBayan[index] = { id: parseInt(id), date, summary, speaker };
            }
        } else {
            // Add new bayan
            const newId = amaal.maghribBayan.length > 0 ? Math.max(...amaal.maghribBayan.map(b => b.id)) + 1 : 1;
            amaal.maghribBayan.push({ id: newId, date, summary, speaker });
        }
    } else if (type === 'mashwara') {
        const notes = document.getElementById('mashwara-notes').value;

        if (id) {
            // Update existing mashwara
            const index = amaal.mashwara.findIndex(m => m.id == id);
            if (index !== -1) {
                amaal.mashwara[index] = { id: parseInt(id), date, notes };
            }
        } else {
            // Add new mashwara
            const newId = amaal.mashwara.length > 0 ? Math.max(...amaal.mashwara.map(m => m.id)) + 1 : 1;
            amaal.mashwara.push({ id: newId, date, notes });
        }
    }

    renderAmaal();
    closeModal('amaal');
}

function saveUser() {
    const id = document.getElementById('user-id').value;
    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const role = document.getElementById('user-role').value;
    const password = document.getElementById('user-password').value;
    const status = document.getElementById('user-status').value;

    if (id) {
        // Update existing user
        const index = users.findIndex(u => u.id == id);
        if (index !== -1) {
            users[index] = {
                id: parseInt(id),
                name,
                email,
                role,
                status
            };
            // Only update password if provided
            if (password) {
                users[index].password = password;
            }
        }
    } else {
        // Add new user
        const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        users.push({
            id: newId,
            name,
            email,
            role,
            password,
            status
        });
    }

    renderUsers();
    closeModal('user');
}

function renderMasajid() {
    const masajidList = document.getElementById('masajid-list');
    masajidList.innerHTML = '';

    masajid.forEach(masjid => {
        const row = document.createElement('tr');

        row.innerHTML = `
                    <td>${masjid.name}</td>
                    <td>${masjid.address}</td>
                    <td>${masjid.imam}</td>
                    <td>${masjid.contact}</td>
                    <td>
                        <button class="btn btn-secondary edit-masjid" data-id="${masjid.id}">Edit</button>
                        <button class="btn btn-secondary delete-masjid" data-id="${masjid.id}">Delete</button>
                    </td>
                `;

        masajidList.appendChild(row);
    });

    // Add event listeners for edit and delete buttons
    document.querySelectorAll('.edit-masjid').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            editMasjid(id);
        });
    });

    document.querySelectorAll('.delete-masjid').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            deleteMasjid(id);
        });
    });
}

function renderJamaats() {
    const jamaatList = document.getElementById('jamaat-list');
    jamaatList.innerHTML = '';

    jamaats.forEach(jamaat => {
        const masjid = masajid.find(m => m.id == jamaat.masjidId);
        const masjidName = masjid ? masjid.name : 'Not assigned';

        let statusBadge;
        if (jamaat.status === 'active') {
            statusBadge = '<span class="badge badge-success">Active</span>';
        } else if (jamaat.status === 'completed') {
            statusBadge = '<span class="badge badge-info">Completed</span>';
        } else {
            statusBadge = '<span class="badge badge-warning">Upcoming</span>';
        }

        const row = document.createElement('tr');

        row.innerHTML = `
                    <td>${jamaat.id}</td>
                    <td>${jamaat.duration} Days</td>
                    <td>${formatDate(jamaat.startDate)}</td>
                    <td>${formatDate(jamaat.endDate)}</td>
                    <td>${jamaat.members.join(', ')}</td>
                    <td>${masjidName}</td>
                    <td>${statusBadge}</td>
                    <td>
                        <button class="btn btn-secondary edit-jamaat" data-id="${jamaat.id}">Edit</button>
                        <button class="btn btn-secondary delete-jamaat" data-id="${jamaat.id}">Delete</button>
                    </td>
                `;

        jamaatList.appendChild(row);
    });

    // Add event listeners for edit and delete buttons
    document.querySelectorAll('.edit-jamaat').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            editJamaat(id);
        });
    });

    document.querySelectorAll('.delete-jamaat').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            deleteJamaat(id);
        });
    });
}

function renderRecentJamaats() {
    const recentJamaats = document.getElementById('recent-jamaats');
    recentJamaats.innerHTML = '';

    // Sort jamaats by start date (newest first)
    const sortedJamaats = [...jamaats].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

    // Get the 5 most recent jamaats
    const recent = sortedJamaats.slice(0, 5);

    recent.forEach(jamaat => {
        const masjid = masajid.find(m => m.id == jamaat.masjidId);
        const masjidName = masjid ? masjid.name : 'Not assigned';

        let statusBadge;
        if (jamaat.status === 'active') {
            statusBadge = '<span class="badge badge-success">Active</span>';
        } else if (jamaat.status === 'completed') {
            statusBadge = '<span class="badge badge-info">Completed</span>';
        } else {
            statusBadge = '<span class="badge badge-warning">Upcoming</span>';
        }

        const row = document.createElement('tr');

        row.innerHTML = `
                    <td>${jamaat.id}</td>
                    <td>${jamaat.duration} Days</td>
                    <td>${jamaat.members.length}</td>
                    <td>${masjidName}</td>
                    <td>${statusBadge}</td>
                    <td>
                        <button class="btn btn-secondary view-jamaat" data-id="${jamaat.id}">View</button>
                    </td>
                `;

        recentJamaats.appendChild(row);
    });

    // Add event listeners for view buttons
    document.querySelectorAll('.view-jamaat').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            viewJamaat(id);
        });
    });
}

function renderAmaal() {
    // Fajr Taaleem
    const fajrList = document.getElementById('fajr-taaleem-list');
    fajrList.innerHTML = '';

    amaal.fajrTaaleem.forEach(taaleem => {
        const row = document.createElement('tr');

        row.innerHTML = `
                    <td>${formatDate(taaleem.date)}</td>
                    <td>${taaleem.topic}</td>
                    <td>${taaleem.speaker}</td>
                    <td>
                        <button class="btn btn-secondary edit-amaal" data-type="fajr" data-id="${taaleem.id}">Edit</button>
                        <button class="btn btn-secondary delete-amaal" data-type="fajr" data-id="${taaleem.id}">Delete</button>
                    </td>
                `;

        fajrList.appendChild(row);
    });

    // Maghrib Bayan
    const maghribList = document.getElementById('maghrib-bayan-list');
    maghribList.innerHTML = '';

    amaal.maghribBayan.forEach(bayan => {
        const row = document.createElement('tr');

        row.innerHTML = `
                    <td>${formatDate(bayan.date)}</td>
                    <td>${bayan.summary}</td>
                    <td>${bayan.speaker}</td>
                    <td>
                        <button class="btn btn-secondary edit-amaal" data-type="maghrib" data-id="${bayan.id}">Edit</button>
                        <button class="btn btn-secondary delete-amaal" data-type="maghrib" data-id="${bayan.id}">Delete</button>
                    </td>
                `;

        maghribList.appendChild(row);
    });

    // Mashwara
    const mashwaraList = document.getElementById('mashwara-list');
    mashwaraList.innerHTML = '';

    amaal.mashwara.forEach(mashwara => {
        const row = document.createElement('tr');

        row.innerHTML = `
                    <td>${formatDate(mashwara.date)}</td>
                    <td>${mashwara.notes}</td>
                    <td>
                        <button class="btn btn-secondary edit-amaal" data-type="mashwara" data-id="${mashwara.id}">Edit</button>
                        <button class="btn btn-secondary delete-amaal" data-type="mashwara" data-id="${mashwara.id}">Delete</button>
                    </td>
                `;

        mashwaraList.appendChild(row);
    });

    // Add event listeners for edit and delete buttons
    document.querySelectorAll('.edit-amaal').forEach(btn => {
        btn.addEventListener('click', function () {
            const type = this.getAttribute('data-type');
            const id = this.getAttribute('data-id');
            editAmaal(type, id);
        });
    });

    document.querySelectorAll('.delete-amaal').forEach(btn => {
        btn.addEventListener('click', function () {
            const type = this.getAttribute('data-type');
            const id = this.getAttribute('data-id');
            deleteAmaal(type, id);
        });
    });
}

function renderUsers() {
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = '';

    users.forEach(user => {
        let roleBadge;
        if (user.role === 'admin') {
            roleBadge = '<span class="badge badge-danger">Admin</span>';
        } else if (user.role === 'amir') {
            roleBadge = '<span class="badge badge-warning">Amir</span>';
        } else {
            roleBadge = '<span class="badge badge-info">Member</span>';
        }

        let statusBadge = user.status === 'active'
            ? '<span class="badge badge-success">Active</span>'
            : '<span class="badge badge-secondary">Inactive</span>';

        const row = document.createElement('tr');

        row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${roleBadge}</td>
                    <td>${statusBadge}</td>
                    <td>
                        <button class="btn btn-secondary edit-user" data-id="${user.id}">Edit</button>
                        <button class="btn btn-secondary delete-user" data-id="${user.id}">Delete</button>
                    </td>
                `;

        usersList.appendChild(row);
    });

    // Add event listeners for edit and delete buttons
    document.querySelectorAll('.edit-user').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            editUser(id);
        });
    });

    document.querySelectorAll('.delete-user').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            deleteUser(id);
        });
    });
}

function renderCharts() {
    // Monthly Khurooj Chart
    const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');

    // Sample data for monthly khurooj
    const monthlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Jamaats per Month',
            data: [5, 8, 10, 7, 12, 15, 18, 20, 15, 12, 8, 6],
            backgroundColor: 'rgba(44, 120, 108, 0.2)',
            borderColor: 'rgba(44, 120, 108, 1)',
            borderWidth: 1
        }]
    };

    new Chart(monthlyCtx, {
        type: 'bar',
        data: monthlyData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Duration Pie Chart
    const durationCtx = document.getElementById('durationChart').getContext('2d');

    // Calculate durations from jamaats data
    const durations = {
        '3 Days': jamaats.filter(j => j.duration === 3).length,
        '10 Days': jamaats.filter(j => j.duration === 10).length,
        '40 Days': jamaats.filter(j => j.duration === 40).length,
        '4 Months': jamaats.filter(j => j.duration === 120).length
    };

    const durationData = {
        labels: Object.keys(durations),
        datasets: [{
            data: Object.values(durations),
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    new Chart(durationCtx, {
        type: 'pie',
        data: durationData,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Masjid Bar Chart
    const masjidCtx = document.getElementById('masjidChart').getContext('2d');

    // Count jamaats per masjid
    const masjidCounts = {};
    masajid.forEach(masjid => {
        masjidCounts[masjid.name] = jamaats.filter(j => j.masjidId === masjid.id).length;
    });

    const masjidData = {
        labels: Object.keys(masjidCounts),
        datasets: [{
            label: 'Jamaats per Masjid',
            data: Object.values(masjidCounts),
            backgroundColor: 'rgba(248, 180, 0, 0.7)',
            borderColor: 'rgba(248, 180, 0, 1)',
            borderWidth: 1
        }]
    };

    new Chart(masjidCtx, {
        type: 'bar',
        data: masjidData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateDashboardStats() {
    // Active jamaats
    const activeJamaats = jamaats.filter(j => j.status === 'active').length;
    document.getElementById('active-jamaats').textContent = activeJamaats;

    // Total masajid
    document.getElementById('total-masajid').textContent = masajid.length;

    // Monthly khurooj (this month)
    const currentMonth = new Date().getMonth();
    const monthlyKhurooj = jamaats.filter(j => {
        const jamaatMonth = new Date(j.startDate).getMonth();
        return jamaatMonth === currentMonth;
    }).length;
    document.getElementById('monthly-khurooj').textContent = monthlyKhurooj;

    // Total members (unique)
    const allMembers = jamaats.flatMap(j => j.members);
    const uniqueMembers = [...new Set(allMembers)].length;
    document.getElementById('total-members').textContent = uniqueMembers;
}

function editMasjid(id) {
    const masjid = masajid.find(m => m.id == id);
    if (!masjid) return;

    document.getElementById('masjid-id').value = masjid.id;
    document.getElementById('masjid-name').value = masjid.name;
    document.getElementById('masjid-address').value = masjid.address;
    document.getElementById('masjid-imam').value = masjid.imam;
    document.getElementById('masjid-contact').value = masjid.contact;
    document.getElementById('masjid-fajr').value = masjid.prayerTimes.fajr;
    document.getElementById('masjid-dhuhr').value = masjid.prayerTimes.dhuhr;
    document.getElementById('masjid-asr').value = masjid.prayerTimes.asr;
    document.getElementById('masjid-maghrib').value = masjid.prayerTimes.maghrib;
    document.getElementById('masjid-isha').value = masjid.prayerTimes.isha;

    document.querySelector('#masjid-modal .modal-title').textContent = 'Edit Masjid';
    masjidModal.style.display = 'flex';
}

function editJamaat(id) {
    const jamaat = jamaats.find(j => j.id == id);
    if (!jamaat) return;

    document.getElementById('jamaat-id').value = jamaat.id;
    document.getElementById('jamaat-duration').value = jamaat.duration;
    document.getElementById('jamaat-start-date').value = jamaat.startDate;
    document.getElementById('jamaat-end-date').value = jamaat.endDate;
    document.getElementById('jamaat-masjid').value = jamaat.masjidId;
    document.getElementById('jamaat-members').value = jamaat.members.join(', ');
    document.getElementById('jamaat-amir').value = jamaat.amir;
    document.getElementById('jamaat-notes').value = jamaat.notes;

    // Populate masjid dropdown
    const masjidSelect = document.getElementById('jamaat-masjid');
    masjidSelect.innerHTML = '<option value="">Select Masjid</option>';
    masajid.forEach(masjid => {
        const option = document.createElement('option');
        option.value = masjid.id;
        option.textContent = masjid.name;
        if (masjid.id == jamaat.masjidId) {
            option.selected = true;
        }
        masjidSelect.appendChild(option);
    });

    document.querySelector('#jamaat-modal .modal-title').textContent = 'Edit Jamaat';
    jamaatModal.style.display = 'flex';
}

function editAmaal(type, id) {
    let amaalItem;
    let modalTitle = '';

    if (type === 'fajr') {
        amaalItem = amaal.fajrTaaleem.find(t => t.id == id);
        modalTitle = 'Edit Fajr Taaleem';

        // Show only relevant fields
        document.getElementById('taaleem-topic-group').style.display = 'block';
        document.getElementById('bayan-summary-group').style.display = 'none';
        document.getElementById('mashwara-notes-group').style.display = 'none';
        document.getElementById('speaker-group').style.display = 'block';
    } else if (type === 'maghrib') {
        amaalItem = amaal.maghribBayan.find(b => b.id == id);
        modalTitle = 'Edit Maghrib Bayan';

        // Show only relevant fields
        document.getElementById('taaleem-topic-group').style.display = 'none';
        document.getElementById('bayan-summary-group').style.display = 'block';
        document.getElementById('mashwara-notes-group').style.display = 'none';
        document.getElementById('speaker-group').style.display = 'block';
    } else if (type === 'mashwara') {
        amaalItem = amaal.mashwara.find(m => m.id == id);
        modalTitle = 'Edit Mashwara Notes';

        // Show only relevant fields
        document.getElementById('taaleem-topic-group').style.display = 'none';
        document.getElementById('bayan-summary-group').style.display = 'none';
        document.getElementById('mashwara-notes-group').style.display = 'block';
        document.getElementById('speaker-group').style.display = 'none';
    }

    if (!amaalItem) return;

    document.getElementById('amaal-id').value = amaalItem.id;
    document.getElementById('amaal-type').value = type;
    document.getElementById('amaal-date').value = amaalItem.date;

    if (type === 'fajr') {
        document.getElementById('taaleem-topic').value = amaalItem.topic;
        document.getElementById('speaker-name').value = amaalItem.speaker;
    } else if (type === 'maghrib') {
        document.getElementById('bayan-summary').value = amaalItem.summary;
        document.getElementById('speaker-name').value = amaalItem.speaker;
    } else if (type === 'mashwara') {
        document.getElementById('mashwara-notes').value = amaalItem.notes;
    }

    document.querySelector('#amaal-modal .modal-title').textContent = modalTitle;
    amaalModal.style.display = 'flex';
}

function editUser(id) {
    const user = users.find(u => u.id == id);
    if (!user) return;

    document.getElementById('user-id').value = user.id;
    document.getElementById('user-name').value = user.name;
    document.getElementById('user-email').value = user.email;
    document.getElementById('user-role').value = user.role;
    document.getElementById('user-status').value = user.status;
    document.getElementById('user-password').required = false;

    document.querySelector('#user-modal .modal-title').textContent = 'Edit User';
    userModal.style.display = 'flex';
}

function viewJamaat(id) {
    const jamaat = jamaats.find(j => j.id == id);
    if (!jamaat) return;

    // For this simple implementation, we'll just edit the jamaat
    editJamaat(id);
}

function deleteMasjid(id) {
    if (confirm('Are you sure you want to delete this masjid?')) {
        masajid = masajid.filter(m => m.id != id);
        renderMasajid();
        updateDashboardStats();
    }
}

function deleteJamaat(id) {
    if (confirm('Are you sure you want to delete this jamaat?')) {
        jamaats = jamaats.filter(j => j.id != id);
        renderJamaats();
        renderRecentJamaats();
        updateDashboardStats();
        renderCharts();
    }
}

function deleteAmaal(type, id) {
    if (confirm('Are you sure you want to delete this record?')) {
        if (type === 'fajr') {
            amaal.fajrTaaleem = amaal.fajrTaaleem.filter(t => t.id != id);
        } else if (type === 'maghrib') {
            amaal.maghribBayan = amaal.maghribBayan.filter(b => b.id != id);
        } else if (type === 'mashwara') {
            amaal.mashwara = amaal.mashwara.filter(m => m.id != id);
        }

        renderAmaal();
    }
}

function deleteUser(id) {
    if (confirm('Are you sure you want to delete this user?')) {
        users = users.filter(u => u.id != id);
        renderUsers();
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}


// Add this to your JavaScript section
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('contact-phone').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. We will contact you soon at ${email}.`);
    
    // Reset the form
    this.reset();
});