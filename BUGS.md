## BUG-001
Title: SOLD OUT event card is clickable.

Expected:
User should not be able to navigate to booking page.

### Steps to Reproduce
1. Login to EventHub.
2. Navigate to Browse Events.
3. Locate "Dilli Diwali Mela" event.
4. Click the event title.

### Expected Result
User should not be able to open the booking page for a SOLD OUT event.

### Actual Result
User can navigate to the event details page.

### Status
Open




## BUG-002
Title: Booking form is editable for SOLD OUT event.


### Steps to Reproduce
1. Login to EventHub.
2. Navigate to Browse Events.
3. Open "Dilli Diwali Mela".
4. Enter values in Full Name, Email and Phone Number fields.

### Expected Result
Booking form should be disabled or read-only.

### Actual Result
User can enter data in all booking fields.

### Status
Open