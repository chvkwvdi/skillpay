function generateDailyReferralNotif() {
  const today = new Date().toLocaleDateString();
  const lastNotified = localStorage.getItem("last_referral_notif_date");

  // Only run if the user hasn't received today's notification
  if (lastNotified !== today) {
    const notifList =
      JSON.parse(localStorage.getItem("skillpay_notifications")) || [];

    const referralNotif = {
      id: "REF-" + Date.now(),
      title: "💰 Daily Earning Tip",
      message:
        "Don't miss out! Refer a friend today and gain ₦1,000 instantly. Start sharing your link now!",
      time: "Just now",
      type: "warning", // Uses the orange icon style
      unread: true,
      dateGroup: "Today",
    };

    // Add to the start of the list
    notifList.unshift(referralNotif);

    // Save back to storage
    localStorage.setItem("skillpay_notifications", JSON.stringify(notifList));
    localStorage.setItem("last_referral_notif_date", today);
    localStorage.setItem("new_notif", "true"); // Triggers the red dot on the bell
  }
}

// Run the check on every page load
document.addEventListener("DOMContentLoaded", generateDailyReferralNotif);
