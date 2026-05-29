import os
import glob

modal_html = """
<!-- GLOBAL APPOINTMENT MODAL & FLOATING BUTTON -->
<button class="floating-appointment-btn" id="floatingAppBtn" title="Book Appointment">
    <i class="fa-solid fa-calendar-check"></i>
</button>

<div id="globalAppointmentModal" class="global-modal-overlay">
    <div class="global-modal-container glass-card">
        <button class="close-modal-btn" id="closeGlobalModal"><i class="fa-solid fa-xmark"></i></button>
        <div class="appointment-header text-center">
            <span class="section-subtitle">SECURE A TIME</span>
            <h2 class="section-title" style="font-size: 1.8rem;">Schedule An Appointment</h2>
            <p style="font-size: 0.9rem; margin-bottom: 20px;">Fill out this form and our coordinator will call you back within 15 minutes.</p>
        </div>
        <form id="appointmentForm" class="appointment-form" novalidate>
            <div class="form-row">
                <div class="form-group">
                    <input type="text" id="name" name="name" required placeholder=" " class="form-control">
                    <label for="name" class="floating-label">Full Name</label>
                    <span class="error-msg">Please enter your name.</span>
                </div>
                <div class="form-group">
                    <input type="tel" id="phone" name="phone" required placeholder=" " class="form-control">
                    <label for="phone" class="floating-label">Phone Number</label>
                    <span class="error-msg">Please enter a valid 10-digit number.</span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <input type="email" id="email" name="email" required placeholder=" " class="form-control">
                    <label for="email" class="floating-label">Email Address</label>
                    <span class="error-msg">Please enter a valid email.</span>
                </div>
                <div class="form-group select-group">
                    <select id="department" name="department" required class="form-control select-control">
                        <option value="" disabled selected hidden></option>
                        <option value="general">General Medicine</option>
                        <option value="emergency">Emergency Care</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pediatrics">Pediatrics</option>
                    </select>
                    <label for="department" class="floating-label">Select Department</label>
                    <span class="error-msg">Please select a department.</span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <input type="date" id="date" name="date" required placeholder=" " class="form-control date-control">
                    <label for="date" class="floating-label">Preferred Date</label>
                    <span class="error-msg">Please select a date in the future.</span>
                </div>
            </div>
            <div class="form-group textarea-group">
                <textarea id="message" name="message" placeholder=" " rows="2" class="form-control"></textarea>
                <label for="message" class="floating-label">Message (Optional)</label>
            </div>
            <div class="form-actions text-center">
                <button type="submit" class="btn btn-primary submit-btn" style="width: 100%;">
                    <span>Request Appointment</span>
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </form>
        <div class="form-success-overlay">
            <div class="success-box glass-card">
                <div class="success-icon"><i class="fa-solid fa-circle-check"></i></div>
                <h3>Request Received!</h3>
                <p>A care planner will phone you at <strong id="userPhone"></strong> shortly to finalize your slot.</p>
                <button type="button" class="btn btn-primary close-success-btn"><span>Close</span></button>
            </div>
        </div>
    </div>
</div>
</body>
"""

os.chdir("d:/KP")
html_files = glob.glob("*.html")

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'id="globalAppointmentModal"' not in content:
        content = content.replace('</body>', modal_html)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Injected into {file}")
    else:
        print(f"Already injected in {file}")
