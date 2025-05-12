document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = document.querySelectorAll('.navbar a, .mobile-menu a');
    const sections = document.querySelectorAll('.section');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
            
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
        });
    });
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Initialize with dashboard active
    document.querySelector('.navbar a[href="#dashboard"]').click();
    
    // User dropdown (placeholder functionality)
    const userProfile = document.querySelector('.user-profile');
    userProfile.addEventListener('click', function() {
        alert('User profile dropdown would open here');
    });
    
    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    // Masjid modal
    const addMasjidBtn = document.getElementById('add-masjid-btn');
    const masjidModal = document.getElementById('masjid-modal');
    
    addMasjidBtn.addEventListener('click', function() {
        document.getElementById('modal-masjid-title').textContent = 'Add New Masjid';
        document.getElementById('masjid-form').reset();
        document.getElementById('masjid-id').value = '';
        masjidModal.classList.add('active');
    });
    
    // Jamaat modal
    const addJamaatBtn = document.getElementById('add-jamaat-btn');
    const jamaatModal = document.getElementById('jamaat-modal');
    
    addJamaatBtn.addEventListener('click', function() {
        document.getElementById('modal-jamaat-title').textContent = 'Add New Jamaat';
        document.getElementById('jamaat-form').reset();
        document.getElementById('jamaat-id').value = '';
        document.getElementById('jamaat-end-date').disabled = true;
        
        // Populate masjid dropdown (mock data)
        const masjidSelect = document.getElementById('jamaat-masjid');
        masjidSelect.innerHTML = '<option value="">Select Masjid</option>';
        mockMasajid.forEach(masjid => {
            const option = document.createElement('option');
            option.value = masjid.id;
            option.textContent = masjid.name;
            masjidSelect.appendChild(option);
        });
        
        jamaatModal.classList.add('active');
    });
    
    // Close modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modals.forEach(modal => modal.classList.remove('active'));
        });
    });
    
    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(tabBtn => tabBtn.classList.remove('active'));
            this.classList.add('active');
            
            // Show target tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}-tab`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Jamaat duration date calculation
    const jamaatDuration = document.getElementById('jamaat-duration');
    const jamaatStartDate = document.getElementById('jamaat-start-date');
    const jamaatEndDate = document.getElementById('jamaat-end-date');
    
    jamaatDuration.addEventListener('change', function() {
        if (this.value && jamaatStartDate.value) {
            calculateEndDate();
        }
    });
    
    jamaatStartDate.addEventListener('change', function() {
        if (jamaatDuration.value) {
            calculateEndDate();
        }
    });
    
    function calculateEndDate() {
        const duration = parseInt(jamaatDuration.value);
        const startDate = new Date(jamaatStartDate.value);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + duration);
        
        const formattedDate = endDate.toISOString().split('T')[0];
        jamaatEndDate.value = formattedDate;
        jamaatEndDate.disabled = false;
    }
    
    // Date selector for A'maal
    const amaalDate = document.getElementById('amaal-date');
    const prevDayBtn = document.getElementById('prev-day');
    const nextDayBtn = document.getElementById('next-day');
    
    prevDayBtn.addEventListener('click', function() {
        const currentDate = new Date(amaalDate.value);
        currentDate.setDate(currentDate.getDate() - 1);
        amaalDate.value = currentDate.toISOString().split('T')[0];
    });
    
    nextDayBtn.addEventListener('click', function() {
        const currentDate = new Date(amaalDate.value);
        currentDate.setDate(currentDate.getDate() + 1);
        amaalDate.value = currentDate.toISOString().split('T')[0];
    });
    
    // Current date and time
    function updateDateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        document.getElementById('current-time').textContent = timeString;
        
        // Islamic date placeholder (would use a proper Hijri date library in production)
        const islamicMonths = ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 
                              'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban', 
                              'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'];
        const islamicDate = `${now.getDate()} ${islamicMonths[now.getMonth()]} ${1445}`;
        document.getElementById('current-date').textContent = islamicDate;
    }
    
    setInterval(updateDateTime, 1000);
    updateDateTime();
    
    // Charts
    function initCharts() {
        // Khurooj Duration Chart
        const durationCtx = document.getElementById('khurooj-duration-chart').getContext('2d');
        const durationChart = new Chart(durationCtx, {
            type: 'pie',
            data: {
                labels: ['3 Days', '10 Days', '40 Days', '4 Months'],
                datasets: [{
                    data: [45, 30, 15, 10],
                    backgroundColor: [
                        '#4CAF50',
                        '#2196F3',
                        '#FF9800',
                        '#9C27B0'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
        
        // Monthly Khurooj Chart
        const monthlyCtx = document.getElementById('monthly-khurooj-chart').getContext('2d');
        const monthlyChart = new Chart(monthlyCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Jamaat Count',
                    data: [12, 15, 10, 14, 18, 20, 15, 12, 10, 14, 16, 20],
                    backgroundColor: '#2c786c',
                    borderWidth: 1
                }]
            },
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
        
        // Top Masajid Chart
        const masajidCtx = document.getElementById('top-masajid-chart').getContext('2d');
        const masajidChart = new Chart(masajidCtx, {
            type: 'doughnut',
            data: {
                labels: ['Masjid A', 'Masjid B', 'Masjid C', 'Masjid D', 'Others'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        '#2c786c',
                        '#004445',
                        '#f8b400',
                        '#ff7e5f',
                        '#faf5e4'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Mock data for demonstration
    const mockMasajid = [
        { id: 1, name: 'Masjid Al-Huda', address: '123 Main St, Karachi', city: 'Karachi', country: 'Pakistan', imam: 'Maulana Ahmed', contact: '03001234567' },
        { id: 2, name: 'Masjid Al-Noor', address: '456 Market Rd, Lahore', city: 'Lahore', country: 'Pakistan', imam: 'Maulana Ibrahim', contact: '03007654321' },
        { id: 3, name: 'Masjid Al-Sunnah', address: '789 Islamic Ave, Islamabad', city: 'Islamabad', country: 'Pakistan', imam: 'Maulana Yusuf', contact: '03009876543' }
    ];
    
    const mockJamaat = [
        { id: 1, duration: '3', startDate: '2023-06-10', endDate: '2023-06-13', members: 'Ali, Ahmed, Bilal', masjid: 'Masjid Al-Huda', status: 'active' },
        { id: 2, duration: '10', startDate: '2023-06-05', endDate: '2023-06-15', members: 'Usman, Umar, Hassan', masjid: 'Masjid Al-Noor', status: 'active' },
        { id: 3, duration: '40', startDate: '2023-05-01', endDate: '2023-06-10', members: 'Yusuf, Hamza, Omar', masjid: 'Masjid Al-Sunnah', status: 'completed' },
        { id: 4, duration: '3', startDate: '2023-06-15', endDate: '2023-06-18', members: 'Khalid, Waleed, Zubair', masjid: 'Masjid Al-Huda', status: 'upcoming' }
    ];
    
    // Populate masjid table
    function populateMasjidTable() {
        const tableBody = document.getElementById('masjid-table-body');
        tableBody.innerHTML = '';
        
        mockMasajid.forEach(masjid => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${masjid.name}</td>
                <td>${masjid.address}</td>
                <td>${masjid.imam}</td>
                <td>${masjid.contact}</td>
                <td>
                    <button class="btn-icon edit-masjid" data-id="${masjid.id}"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon delete-masjid" data-id="${masjid.id}"><i class="fas fa-trash"></i></button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        // Add event listeners to edit/delete buttons
        document.querySelectorAll('.edit-masjid').forEach(btn => {
            btn.addEventListener('click', function() {
                const masjidId = this.getAttribute('data-id');
                const masjid = mockMasajid.find(m => m.id == masjidId);
                
                if (masjid) {
                    document.getElementById('modal-masjid-title').textContent = 'Edit Masjid';
                    document.getElementById('masjid-id').value = masjid.id;
                    document.getElementById('masjid-name').value = masjid.name;
                    document.getElementById('masjid-address').value = masjid.address;
                    document.getElementById('masjid-city').value = masjid.city;
                    document.getElementById('masjid-country').value = masjid.country;
                    document.getElementById('masjid-imam').value = masjid.imam;
                    document.getElementById('masjid-contact').value = masjid.contact;
                    
                    // Set random prayer times for demo
                    document.getElementById('fajr-time').value = '05:30';
                    document.getElementById('dhuhr-time').value = '13:30';
                    document.getElementById('asr-time').value = '16:45';
                    document.getElementById('maghrib-time').value = '19:15';
                    document.getElementById('isha-time').value = '20:30';
                    
                    masjidModal.classList.add('active');
                }
            });
        });
        
        document.querySelectorAll('.delete-masjid').forEach(btn => {
            btn.addEventListener('click', function() {
                if (confirm('Are you sure you want to delete this masjid?')) {
                    alert('Masjid would be deleted in a real application');
                }
            });
        });
    }
    
    // Populate jamaat tables
    function populateJamaatTables() {
        // Active jamaat
        const activeTable = document.getElementById('active-jamaat-table');
        activeTable.innerHTML = '';
        
        const activeJamaat = mockJamaat.filter(j => j.status === 'active');
        activeJamaat.forEach(jamaat => {
            const row = document.createElement('tr');
            const daysLeft = calculateDaysLeft(jamaat.endDate);
            
            row.innerHTML = `
                <td>${jamaat.duration} Days</td>
                <td>${formatDate(jamaat.startDate)}</td>
                <td>${formatDate(jamaat.endDate)}</td>
                <td>${jamaat.members.split(',').length}</td>
                <td>${jamaat.masjid}</td>
                <td><span class="status-badge active">Active (${daysLeft} days left)</span></td>
                <td>
                    <button class="btn-icon edit-jamaat" data-id="${jamaat.id}"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon complete-jamaat" data-id="${jamaat.id}"><i class="fas fa-check-circle"></i></button>
                </td>
            `;
            activeTable.appendChild(row);
        });
        
        // Upcoming jamaat
        const upcomingTable = document.getElementById('upcoming-jamaat-table');
        upcomingTable.innerHTML = '';
        
        const upcomingJamaat = mockJamaat.filter(j => j.status === 'upcoming');
        upcomingJamaat.forEach(jamaat => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${jamaat.duration} Days</td>
                <td>${formatDate(jamaat.startDate)}</td>
                <td>${formatDate(jamaat.endDate)}</td>
                <td>${jamaat.members.split(',').length}</td>
                <td>${jamaat.masjid}</td>
                <td>
                    <button class="btn-icon edit-jamaat" data-id="${jamaat.id}"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon cancel-jamaat" data-id="${jamaat.id}"><i class="fas fa-times-circle"></i></button>
                </td>
            `;
            upcomingTable.appendChild(row);
        });
        
        // Completed jamaat
        const completedTable = document.getElementById('completed-jamaat-table');
        completedTable.innerHTML = '';
        
        const completedJamaat = mockJamaat.filter(j => j.status === 'completed');
        completedJamaat.forEach(jamaat => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${jamaat.duration} Days</td>
                <td>${formatDate(jamaat.startDate)}</td>
                <td>${formatDate(jamaat.endDate)}</td>
                <td>${jamaat.members.split(',').length}</td>
                <td>${jamaat.masjid}</td>
                <td>
                    <button class="btn-icon view-jamaat" data-id="${jamaat.id}"><i class="fas fa-eye"></i></button>
                </td>
            `;
            completedTable.appendChild(row);
        });
        
        // Add event listeners to jamaat buttons
        document.querySelectorAll('.edit-jamaat').forEach(btn => {
            btn.addEventListener('click', function() {
                const jamaatId = this.getAttribute('data-id');
                const jamaat = mockJamaat.find(j => j.id == jamaatId);
                
                if (jamaat) {
                    document.getElementById('modal-jamaat-title').textContent = 'Edit Jamaat';
                    document.getElementById('jamaat-id').value = jamaat.id;
                    document.getElementById('jamaat-duration').value = jamaat.duration;
                    document.getElementById('jamaat-start-date').value = jamaat.startDate;
                    document.getElementById('jamaat-end-date').value = jamaat.endDate;
                    document.getElementById('jamaat-members').value = jamaat.members;
                    
                    // Set masjid in dropdown
                    const masjidSelect = document.getElementById('jamaat-masjid');
                    const masjid = mockMasajid.find(m => m.name === jamaat.masjid);
                    if (masjid) {
                        masjidSelect.value = masjid.id;
                    }
                    
                    jamaatModal.classList.add('active');
                }
            });
        });
        
        document.querySelectorAll('.complete-jamaat').forEach(btn => {
            btn.addEventListener('click', function() {
                if (confirm('Mark this jamaat as completed?')) {
                    alert('Jamaat would be marked as completed in a real application');
                }
            });
        });
        
        document.querySelectorAll('.cancel-jamaat').forEach(btn => {
            btn.addEventListener('click', function() {
                if (confirm('Cancel this upcoming jamaat?')) {
                    alert('Jamaat would be canceled in a real application');
                }
            });
        });
    }
    
    // Populate dashboard tables
    function populateDashboardTables() {
        // Upcoming jamaat
        const upcomingList = document.getElementById('upcoming-jamaat-list');
        upcomingList.innerHTML = '';
        
        const upcomingJamaat = mockJamaat.filter(j => j.status === 'upcoming').slice(0, 5);
        upcomingJamaat.forEach(jamaat => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${jamaat.duration} Days</td>
                <td>${formatDate(jamaat.startDate)}</td>
                <td>${jamaat.members.split(',').length}</td>
                <td>${jamaat.masjid}</td>
            `;
            upcomingList.appendChild(row);
        });
        
        // Current jamaat
        const currentList = document.getElementById('current-jamaat-list');
        currentList.innerHTML = '';
        
        const currentJamaat = mockJamaat.filter(j => j.status === 'active').slice(0, 5);
        currentJamaat.forEach(jamaat => {
            const row = document.createElement('tr');
            const daysLeft = calculateDaysLeft(jamaat.endDate);
            
            row.innerHTML = `
                <td>${jamaat.duration} Days</td>
                <td>${daysLeft}</td>
                <td>${jamaat.members.split(',').length}</td>
                <td>${jamaat.masjid}</td>
            `;
            currentList.appendChild(row);
        });
    }
    
    // Helper functions
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
    
    function calculateDaysLeft(endDateString) {
        const endDate = new Date(endDateString);
        const today = new Date();
        const diffTime = endDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    }
    
    // Form submissions
    document.getElementById('masjid-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Masjid data would be saved in a real application');
        masjidModal.classList.remove('active');
    });
    
    document.getElementById('jamaat-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Jamaat data would be saved in a real application');
        jamaatModal.classList.remove('active');
    });
    
    document.getElementById('save-amaal').addEventListener('click', function() {
        alert('Daily A\'maal would be saved in a real application');
    });
    
    // Initialize all data and charts
    populateMasjidTable();
    populateJamaatTables();
    populateDashboardTables();
    initCharts();
});