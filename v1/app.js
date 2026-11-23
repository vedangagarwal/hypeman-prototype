/* HypeMan prototype runtime: makes every screen behave like the app.
   Real links navigate as-is. Dead links and buttons are routed here by label. */
(function () {
  var PAGES = ["UI-AC1-CounterBack", "UI-AC1-CounterBack-m", "UI-AC2-Decline", "UI-AC2-Decline-m", "UI-AC3-Report", "UI-AC3-Report-m", "UI-AC4-Outcome", "UI-AC4-Outcome-m", "UI-CC1-Basics", "UI-CC1-Basics-m", "UI-CC2-Brief", "UI-CC2-Brief-m", "UI-CC3-Budget", "UI-CC3-Budget-m", "UI-CC3a-Cal-Open", "UI-CC3a-Cal-Open-m", "UI-CC3a-Cal-Start", "UI-CC3a-Cal-Start-m", "UI-CC3b-Budget", "UI-CC3b-Budget-m", "UI-CC4-Who", "UI-CC4-Who-m", "UI-CC5-Review", "UI-CC5-Review-m", "UI-CD-Campaign", "UI-CD-Campaign-m", "UI-CM1-Pause", "UI-CM1-Pause-m", "UI-CM2-EditBrief", "UI-CM2-EditBrief-m", "UI-CM3-Upcoming", "UI-CM3-Upcoming-m", "UI-CP-Compare", "UI-CP-Compare-m", "UI-DD1-Counter", "UI-DD1-Counter-m", "UI-DD10-Fix", "UI-DD10-Fix-m", "UI-DD11-Done", "UI-DD11-Done-m", "UI-DD2-Draft", "UI-DD2-Draft-m", "UI-DD3-Live", "UI-DD3-Live-m", "UI-DD4-PayDiff", "UI-DD4-PayDiff-m", "UI-DD5-Held", "UI-DD5-Held-m", "UI-DD6-OfferOut", "UI-DD6-OfferOut-m", "UI-DD7-Declined", "UI-DD7-Declined-m", "UI-DD8-Changes", "UI-DD8-Changes-m", "UI-DD9-Scheduled", "UI-DD9-Scheduled-m", "UI-EM1-NoMessages", "UI-EM1-NoMessages-m", "UI-EM2-NoNotifs", "UI-EM2-NoNotifs-m", "UI-ER1-TxFailed", "UI-ER1-TxFailed-m", "UI-ER2-SignedOut", "UI-ER2-SignedOut-m", "UI-FR-FirstRun", "UI-FR-FirstRun-m", "UI-K1-Dashboard", "UI-K1-Dashboard-m", "UI-K1h-Dashboard", "UI-K1h-Dashboard-m", "UI-K1h-Milestone", "UI-K1h-Milestone-m", "UI-K2-Campaigns", "UI-K2-Campaigns-m", "UI-K2h-Campaigns", "UI-K2h-Campaigns-m", "UI-K3-Earnings", "UI-K3-Earnings-m", "UI-K3h-Earnings", "UI-K3h-Earnings-Hypes", "UI-K3h-Earnings-Hypes-m", "UI-K3h-Earnings-m", "UI-K4-Card", "UI-K4-Card-m", "UI-K4h-Card", "UI-K4h-Card-m", "UI-KA1-Counter", "UI-KA1-Counter-m", "UI-KA2-Decline", "UI-KA2-Decline-m", "UI-KAP1-Review", "UI-KAP1-Review-m", "UI-KAP2-Approved", "UI-KAP2-Approved-m", "UI-KAP2h-Approved", "UI-KAP2h-Approved-m", "UI-KAP3-NotApproved", "UI-KAP3-NotApproved-m", "UI-KB-Brief", "UI-KB-Brief-m", "UI-KBR-Brand", "UI-KBR-Brand-m", "UI-KBRh-Brand", "UI-KBRh-Brand-m", "UI-KD1-Invite", "UI-KD1-Invite-m", "UI-KD10-CounterSent", "UI-KD10-CounterSent-canvas", "UI-KD10-CounterSent-canvas-m", "UI-KD10-CounterSent-m", "UI-KD10h-CounterSent", "UI-KD10h-CounterSent-m", "UI-KD11-InReview", "UI-KD11-InReview-canvas", "UI-KD11-InReview-canvas-m", "UI-KD11-InReview-m", "UI-KD11h-InReview", "UI-KD11h-InReview-m", "UI-KD12-Outcome", "UI-KD12-Outcome-canvas", "UI-KD12-Outcome-canvas-m", "UI-KD12-Outcome-m", "UI-KD12h-Outcome", "UI-KD12h-Outcome-m", "UI-KD13-Closed", "UI-KD13-Closed-canvas", "UI-KD13-Closed-canvas-m", "UI-KD13-Closed-m", "UI-KD13h-Closed", "UI-KD13h-Closed-m", "UI-KD14-Late", "UI-KD14-Late-canvas", "UI-KD14-Late-canvas-m", "UI-KD14-Late-m", "UI-KD14h-Late", "UI-KD14h-Late-m", "UI-KD2-Draft", "UI-KD2-Draft-m", "UI-KD3-Changes", "UI-KD3-Changes-m", "UI-KD4-PostLink", "UI-KD4-PostLink-m", "UI-KD5-Fix", "UI-KD5-Fix-m", "UI-KD6-Review", "UI-KD6-Review-m", "UI-KD7-Paid", "UI-KD7-Paid-m", "UI-KD8-Hold", "UI-KD8-Hold-m", "UI-KD9-Funding", "UI-KD9-Funding-canvas", "UI-KD9-Funding-canvas-m", "UI-KD9-Funding-m", "UI-KD9h-Funding", "UI-KD9h-Funding-m", "UI-KE1-XExpired", "UI-KE1-XExpired-m", "UI-KE1h-XExpired", "UI-KE1h-XExpired-m", "UI-KE2-PostDeleted", "UI-KE2-PostDeleted-m", "UI-KE2h-PostDeleted", "UI-KE2h-PostDeleted-m", "UI-KE3-PayoutDelayed", "UI-KE3-PayoutDelayed-m", "UI-KE3h-PayoutDelayed", "UI-KE3h-PayoutDelayed-m", "UI-KFR-FirstRun", "UI-KFR-FirstRun-m", "UI-KH0-Setup", "UI-KH0-Setup-m", "UI-KH1-Hypes", "UI-KH1-Hypes-m", "UI-KH2-Referrals", "UI-KH2-Referrals-m", "UI-KH2b-Milestone", "UI-KH2b-Milestone-m", "UI-KH3-Tiers", "UI-KH3-Tiers-m", "UI-KH4-Leaderboard", "UI-KH4-Leaderboard-m", "UI-KH5-Amplify", "UI-KH5-Amplify-m", "UI-KM1-Messages", "UI-KM1-Messages-m", "UI-KM2-Thread-m", "UI-KMM-Menu-m", "UI-KN-Notifications", "UI-KN-Notifications-m", "UI-KP1-Profile", "UI-KP1-Profile-m", "UI-KP2-Public", "UI-KP2-Public-m", "UI-KS1-Profile", "UI-KS1-Profile-m", "UI-KS2-Rates", "UI-KS2-Rates-m", "UI-KS3-Payouts", "UI-KS3-Payouts-m", "UI-KS4-Notifs", "UI-KS4-Notifs-m", "UI-KS5-Security", "UI-KS5-Security-m", "UI-KSH-Share", "UI-KSH-Share-m", "UI-KSHh-Share", "UI-KSHh-Share-m", "UI-KSR-Search", "UI-KSR-Search-m", "UI-KW1-Wallet", "UI-KW1-Wallet-m", "UI-MM-Menu-m", "UI-MS1-Messages", "UI-MS1-Messages-m", "UI-MS2-Thread-m", "UI-NT-Notifications", "UI-NT-Notifications-m", "UI-RF-Filters", "UI-RF-Filters-m", "UI-RH-HypeCards", "UI-RH-HypeCards-m", "UI-RN-NoResults", "UI-RN-NoResults-m", "UI-RP-Report", "UI-RP-Report-m", "UI-RT-Table", "UI-RT-Table-m", "UI-SL1-SaveTo", "UI-SL1-SaveTo-m", "UI-SL2-NewList", "UI-SL2-NewList-m", "UI-SO1-Offer", "UI-SO1-Offer-m", "UI-SO2-Sent", "UI-SO2-Sent-m", "UI-SR-Search", "UI-SR-Search-m", "UI-ST1-Org", "UI-ST1-Org-m", "UI-ST2-Team", "UI-ST2-Team-m", "UI-ST3-Wallets", "UI-ST3-Wallets-m", "UI-ST4-Notifs", "UI-ST4-Notifs-m", "UI-ST5-Security", "UI-ST5-Security-m", "UI-TJ-Join", "UI-TJ-Join-m", "UI-WA0a-Connect", "UI-WA0a-Connect-m", "UI-WA0b-Verify", "UI-WA0b-Verify-m", "UI-WA1-AddFunds", "UI-WA1-AddFunds-m", "UI-WA2-Confirming", "UI-WA2-Confirming-m", "UI-WA3-Withdraw", "UI-WA3-Withdraw-m", "UI-WD-Deposit", "UI-WD-Deposit-m", "UI-WL-LowBalance", "UI-WL-LowBalance-m", "UI-WR-Receipt", "UI-WR-Receipt-m", "WF-AA1-Accounts", "WF-AA1-Accounts-m", "WF-AA2-Org", "WF-AA2-Org-m", "WF-AA3-OrgSuspended", "WF-AA3-OrgSuspended-m", "WF-AA4-Creator", "WF-AA4-Creator-m", "WF-AD0-SignIn", "WF-AD0-SignIn-m", "WF-AD0b-TwoFactor", "WF-AD0b-TwoFactor-m", "WF-AD0c-Join", "WF-AD0c-Join-m", "WF-AD0d-Setup2FA", "WF-AD0d-Setup2FA-m", "WF-AL-Audit", "WF-AL-Audit-m", "WF-AM1-Deals", "WF-AM1-Deals-m", "WF-AM2-Deal", "WF-AM2-Deal-m", "WF-AM3-Extend", "WF-AM3-Extend-m", "WF-AMM-Menu-m", "WF-AQ1-Queues", "WF-AQ1-Queues-m", "WF-AQ2-CreatorReview", "WF-AQ2-CreatorReview-m", "WF-AQ3-Dispute", "WF-AQ3-Dispute-m", "WF-AQ4-Payout", "WF-AQ4-Payout-m", "WF-AQ5-Deposit", "WF-AQ5-Deposit-m", "WF-AQ6-Clear", "WF-AQ6-Clear-m", "WF-AS1-Settings", "WF-AS1-Settings-m", "WF-AS2-SettingsLocked", "WF-AS2-SettingsLocked-m", "WF-AT-Team", "WF-AT-Team-m", "WF-AT2-Preview", "WF-AT2-Preview-m"];
  var here = location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
  var mob = /-m$/.test(here);
  var base = here.replace(/-canvas(-m)?$/, '').replace(/-m$/, '');

  /* ---------- fit the fixed-size frame to the window ---------- */
  var frame = document.querySelector('.pv-frame');
  var screen = frame && frame.firstElementChild;
  function fit() {
    if (!screen) return;
    var w = parseFloat(screen.style.width) || screen.offsetWidth;
    var z = Math.min(1, window.innerWidth / w);
    frame.style.zoom = z < 1 ? z : '';
  }
  fit(); window.addEventListener('resize', fit);

  /* ---------- open the right layout for the device (once per tab) ---------- */
  try {
    var pref = sessionStorage.getItem('hm-layout');
    if (!pref) { pref = window.innerWidth < 700 ? 'm' : 'd'; sessionStorage.setItem('hm-layout', pref); }
    if (pref === 'm' && !mob && PAGES.indexOf(here + '-m') > -1) location.replace(here + '-m.html');
    if (pref === 'd' && mob && PAGES.indexOf(here.replace(/-m$/, '')) > -1) location.replace(here.replace(/-m$/, '') + '.html');
  } catch (e) {}

  /* ---------- toast ---------- */
  var toastEl = document.getElementById('pv-toast');
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg; toastEl.style.opacity = 1;
    clearTimeout(window._pt); window._pt = setTimeout(function () { toastEl.style.opacity = 0; }, 1800);
  }

  /* ---------- helpers ---------- */
  function page(name) {             // keep the current layout when it exists
    if (mob && PAGES.indexOf(name + '-m') > -1) return name + '-m';
    if (PAGES.indexOf(name) > -1) return name;
    if (PAGES.indexOf(name + '-m') > -1) return name + '-m';
    return null;
  }
  function go(name) { var p = page(name); if (p) location.href = p + '.html'; else toast('This screen isn’t designed yet'); }
  function back(fallback) {
    var ref = document.referrer;
    if (ref && ref.indexOf(location.host) > -1 && ref.split('/').pop().replace(/\.html.*$/, '') !== here && history.length > 1) history.back();
    else go(fallback || PARENT[base] || HOME());
  }
  function HOME() {
    if (/^WF-A/.test(base)) return 'WF-AQ1-Queues';
    if (/^UI-K/.test(base)) return 'UI-K1h-Dashboard';
    return 'UI-CD-Campaign';
  }
  function label(el) {
    var a = el.getAttribute('aria-label');
    var t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    return ((a ? a + ' ' : '') + t).replace(/ /g, ' ').trim();
  }

  /* where Close / Cancel / Back go when there is no history */
  var PARENT = {
    'UI-AC1-CounterBack': 'UI-DD1-Counter', 'UI-AC2-Decline': 'UI-DD1-Counter', 'UI-AC3-Report': 'UI-DD3-Live',
    'UI-CC3a-Cal-Open': 'UI-CC3-Budget', 'UI-CC3a-Cal-Start': 'UI-CC3-Budget', 'UI-CC3b-Budget': 'UI-CC3-Budget',
    'UI-CM1-Pause': 'UI-CD-Campaign', 'UI-CM2-EditBrief': 'UI-CD-Campaign', 'UI-ER1-TxFailed': 'UI-WA1-AddFunds',
    'UI-K1h-Milestone': 'UI-K1h-Dashboard', 'UI-KA1-Counter': 'UI-KD1-Invite', 'UI-KA2-Decline': 'UI-KD1-Invite',
    'UI-KE1-XExpired': 'UI-K1h-Dashboard', 'UI-KE1h-XExpired': 'UI-K1h-Dashboard', 'UI-KH2b-Milestone': 'UI-KH2-Referrals',
    'UI-KSH-Share': 'UI-K4h-Card', 'UI-KSHh-Share': 'UI-K4h-Card', 'UI-KW1-Wallet': 'UI-KS3-Payouts',
    'UI-RF-Filters': 'UI-RH-HypeCards', 'UI-SL1-SaveTo': 'UI-RH-HypeCards', 'UI-SL2-NewList': 'UI-SL1-SaveTo',
    'UI-SO1-Offer': 'UI-RH-HypeCards', 'UI-WL-LowBalance': 'UI-SO1-Offer', 'UI-WA0a-Connect': 'UI-ST3-Wallets',
    'UI-WA0b-Verify': 'UI-WA0a-Connect', 'UI-WA1-AddFunds': 'UI-ST3-Wallets', 'UI-WA2-Confirming': 'UI-ST3-Wallets',
    'UI-WA3-Withdraw': 'UI-ST3-Wallets', 'UI-WR-Receipt': 'UI-ST3-Wallets', 'UI-WD-Deposit': 'UI-ST3-Wallets',
    'WF-AM3-Extend': 'WF-AM2-Deal', 'UI-KM2-Thread': 'UI-KM1-Messages', 'UI-MS2-Thread': 'UI-MS1-Messages'
  };

  /* ---------- routes: [page regex, label regex, action] — first match wins ---------- */
  var R = [
    // modals and dismissals
    [/./, /^close\b|^✕$|^cancel$/i, 'back'],
    [/K1h-Milestone/, /^done$/i, 'go:UI-K1h-Dashboard'],
    [/KH2b-Milestone/, /^done$/i, 'go:UI-KH2-Referrals'],
    [/KH2b-Milestone/, /invite more/i, 'go:UI-KH2-Referrals'],

    // global KOL / brand chrome
    [/^UI-K/, /search deals/i, 'go:UI-KSR-Search'],
    [/./, /search deals/i, 'go:UI-SR-Search'],
    [/./, /^shortlists/i, 'go:UI-CP-Compare'],
    [/./, /^log out$/i, 'go:UI-ER2-SignedOut'],
    [/./, /help and support/i, 'go:UI-MS1-Messages'],
    [/./, /hypeman academy/i, 'go:UI-K1h-Dashboard'],
    [/^WF-A/, /^notifications/i, 'go:WF-AQ1-Queues'],

    // KOL dashboard / campaigns / earnings / card
    [/K1h?-Dashboard|K1h-Milestone/, /needs you/i, 'go:UI-K2h-Campaigns'],
    [/K1h?-Dashboard|K1h-Milestone/, /^start$/i, 'toast:Lesson opens in HypeMan Academy'],
    [/K1h?-Dashboard|K1h-Milestone|KH5-Amplify/, /^(like|comment|quote)/i, 'done'],
    [/KH5-Amplify/, /open on x/i, 'toast:Opens the post on X'],
    [/K2h?-Campaigns/, /^invites/i, 'go:UI-KD1-Invite'],
    [/K2h?-Campaigns/, /^active/i, 'go:UI-KD2-Draft'],
    [/K2h?-Campaigns/, /^in escrow/i, 'go:UI-KD9h-Funding'],
    [/K2h?-Campaigns/, /^completed/i, 'go:UI-KD7-Paid'],
    [/K2h?-Campaigns/, /paying out/i, 'go:UI-KE3h-PayoutDelayed'],
    [/K2h?-Campaigns/, /view deal|approved/i, 'go:UI-KD7-Paid'],
    [/K3h?-Earnings/, /see all/i, 'go:UI-KH1-Hypes'],
    [/KH1-Hypes/, /see all/i, 'go:UI-KH4-Leaderboard'],
    [/K4h?-Card|KP1|KP2|KSHh?-Share|KAP2/, /flip for track record/i, 'flip'],
    [/./, /send invite/i, 'toast:Invite sent'],

    // KOL deal flow
    [/KD2-Draft/, /save and finish later/i, 'go:UI-K2h-Campaigns'],
    [/KD2-Draft|KD3-Changes/, /^add (post|image)/i, 'toast:Added to the draft'],
    [/KD2-Draft/, /preview on x/i, 'toast:Preview of the post as it will look on X'],
    [/KD3-Changes/, /reply to the notes/i, 'go:UI-KM1-Messages'],
    [/KD3-Changes/, /compare with v1/i, 'toast:Showing changes against v1'],
    [/KD4-PostLink/, /copy text/i, 'copy'],
    [/KD5-Fix|KD6-Review|KD11|KD9|KE2|KE3/, /^message /i, 'go:UI-KM1-Messages'],
    [/KD6-Review/, /show this thread/i, 'toast:Thread expanded'],
    [/KD7-Paid/, /^receipt/i, 'go:UI-KS3-Payouts'],
    [/KD7-Paid/, /share the win/i, 'go:UI-KSHh-Share'],
    [/KD8-Hold/, /send my side/i, 'toast:Sent to HypeMan · you’ll hear back within 48h'],
    [/KD8-Hold/, /edit post/i, 'go:UI-KD5-Fix'],
    [/KD9/, /nudge/i, 'toast:Nudge sent to Tidepool'],
    [/KD9/, /withdraw my acceptance/i, 'go:UI-K2h-Campaigns'],
    [/KD10/, /take back the counter/i, 'go:UI-KD1-Invite'],
    [/KD11/, /edit before they open it/i, 'go:UI-KD2-Draft'],
    [/KD12/, /download decision/i, 'toast:Decision PDF downloaded'],
    [/KD12/, /appeal/i, 'go:UI-KM1-Messages'],
    [/KD14/, /request 24h more/i, 'toast:Request sent · Lumen has 12h to answer'],
    [/KD14/, /can.t do this deal/i, 'go:UI-KD13h-Closed'],
    [/KE1/, /reconnect x/i, 'go:UI-K1h-Dashboard'],
    [/KE2/, /removed by x/i, 'go:UI-KD8-Hold'],
    [/KE3/, /basescan/i, 'toast:Opens the transaction on Basescan'],
    [/KSHh?-Share/, /open x to post/i, 'toast:Opens X with your card attached · +50 Hypes once it’s live'],
    [/KAP3/, /remind me/i, 'toast:We’ll remind you on 14 Feb'],
    [/KAP3/, /ask a question/i, 'go:UI-KM1-Messages'],
    [/KW1-Wallet/, /sign with/i, 'go:UI-KS3-Payouts'],
    [/KSR-Search/, /paid/i, 'go:UI-KD7-Paid'],
    [/KSR-Search/, /brand/i, 'go:UI-KBRh-Brand'],
    [/KM1-Messages/, /hm-|support/i, 'self'],
    [/KP1|KP2/, /view on x/i, 'toast:Opens the profile on X'],
    [/KP2-Public/, /book .* for a campaign/i, 'go:UI-SO1-Offer'],
    [/KP2-Public/, /sign in/i, 'go:UI-ER2-SignedOut'],
    [/KP2-Public/, /for brands/i, 'go:UI-FR-FirstRun'],
    [/KP2-Public/, /share profile/i, 'copy'],
    [/KS1-Profile|ST1-Org|K4h?-Card/, /save changes/i, 'toast:Saved'],
    [/KS1-Profile|ST1-Org/, /^reconnect/i, 'toast:X reconnected'],
    [/KS3-Payouts/, /statement|export/i, 'toast:Download started'],
    [/KS4|ST4/, /disconnect/i, 'toast:Disconnected'],
    [/KS5|ST5/, /log out everywhere/i, 'go:UI-ER2-SignedOut'],
    [/KS5/, /pause my profile/i, 'toast:Your profile is paused · brands can’t send new invites'],
    [/KS5/, /close account/i, 'go:UI-MS1-Messages'],
    [/ST5/, /request to close/i, 'go:UI-MS1-Messages'],

    // brand flow
    [/CC3-Budget/, /\b20\d\d\b|pick dates/i, 'go:UI-CC3a-Cal-Open'],
    [/CC3a-Cal-Open/, /\b20\d\d\b/i, 'go:UI-CC3a-Cal-Start'],
    [/CC3a-Cal-Start/, /\b20\d\d\b/i, 'go:UI-CC3b-Budget'],
    [/CC3b-Budget/, /\b20\d\d\b/i, 'go:UI-CC3a-Cal-Start'],
    [/CC3/, /month/i, 'toast:Month changed'],
    [/CD-Campaign|CM3-Upcoming/, /^(budget used|reach|engagement|posts live|offers out)/i, 'go:UI-RP-Report'],
    [/CD-Campaign/, /view post/i, 'toast:Opens the post on X'],
    [/FR-FirstRun/, /^campaigns/i, 'go:UI-CC1-Basics'],
    [/FR-FirstRun/, /^wallet/i, 'go:UI-WA1-AddFunds'],
    [/FR-FirstRun/, /needs action|active deals/i, 'self'],
    [/CP-Compare/, /save as shortlist/i, 'go:UI-SL2-NewList'],
    [/CP-Compare/, /^remove$/i, 'toast:Removed from the comparison'],
    [/SL2-NewList/, /create shortlist/i, 'go:UI-CP-Compare'],
    [/RH-HypeCards|RT-Table|CM3-Upcoming|FR-FirstRun/, /save to shortlist|^shortlist$/i, 'go:UI-SL1-SaveTo'],
    [/RH-HypeCards|RT-Table/, /load more/i, 'toast:12 more KOLs loaded'],
    [/RH-HypeCards|RT-Table/, /^sort/i, 'toast:Sorted'],
    [/RN-NoResults/, /./i, 'go:UI-RH-HypeCards'],
    [/RF-Filters/, /^reset$/i, 'toast:Filters cleared'],
    [/SR-Search/, /hm-\d+/i, 'go:UI-DD3-Live'],
    [/SR-Search/, /@/i, 'go:UI-KP2-Public'],
    [/RP-Report/, /export/i, 'toast:Download started'],
    [/RP-Report/, /./i, 'self'],
    [/DD2-Draft/, /approve draft/i, 'go:UI-DD9-Scheduled'],
    [/DD2-Draft/, /^version/i, 'toast:Showing v1'],
    [/DD3-Live/, /approve/i, 'go:UI-DD11-Done'],
    [/DD3-Live|DD10-Fix/, /open on x/i, 'toast:Opens the post on X'],
    [/DD4-PayDiff/, /^pay /i, 'go:UI-WA2-Confirming'],
    [/DD5-Held/, /add evidence/i, 'toast:Evidence added'],
    [/DD5-Held/, /message hypeman/i, 'go:UI-MS1-Messages'],
    [/DD6-OfferOut/, /cancel offer/i, 'go:UI-CD-Campaign'],
    [/DD9-Scheduled/, /add to calendar/i, 'toast:Added to your calendar'],
    [/DD9-Scheduled/, /change the date/i, 'go:UI-MS1-Messages'],
    [/AC4-Outcome/, /download decision/i, 'toast:Decision PDF downloaded'],
    [/AC4-Outcome/, /appeal/i, 'go:UI-MS1-Messages'],
    [/EM1-NoMessages/, /message support/i, 'go:UI-MS1-Messages'],
    [/ER2-SignedOut/, /continue with x|email me a code/i, 'go:UI-CD-Campaign'],
    [/TJ-Join/, /email me a code/i, 'go:UI-CD-Campaign'],
    [/TJ-Join/, /decline/i, 'go:UI-ER2-SignedOut'],
    [/ST2-Team/, /resend/i, 'toast:Invite resent'],
    [/ST3-Wallets/, /statement|export/i, 'toast:Download started'],
    [/ST1-Org/, /replace logo/i, 'toast:Choose a file'],
    [/WA1-AddFunds|WA3-Withdraw/, /^max/i, 'toast:Max amount filled in'],
    [/WA3-Withdraw/, /^withdraw/i, 'go:UI-WA2-Confirming'],
    [/WA2|WR-Receipt/, /^0x/i, 'copy'],
    [/MS1-Messages/, /hm-|support|shortlist/i, 'self'],
    [/WL-LowBalance/, /^(launch|single|thread|quote|space|tue)/i, 'press'],

    // admin
    [/AQ1/, /^approve/i, 'go:WF-AQ2-CreatorReview'],
    [/AQ2/, /^approve/i, 'go:WF-AQ3-Dispute'],
    [/AQ3|AT2/, /^split/i, 'go:WF-AQ4-Payout'],
    [/AQ3|AT2/, /^take over/i, 'toast:You’re now handling this dispute'],
    [/AQ4/, /send payout/i, 'go:WF-AQ5-Deposit'],
    [/AQ5/, /return the deposit/i, 'go:WF-AQ6-Clear'],
    [/AQ\d/, /assign to me/i, 'toast:Assigned to you · logged'],
    [/AQ\d/, /add a note/i, 'toast:Note added · logged'],
    [/AQ1|AQ2/, /open account/i, 'go:' + (/AQ2/.test(base) ? 'WF-AA4-Creator' : 'WF-AA2-Org')],
    [/AQ\d|AT2/, /open the full deal/i, 'go:WF-AM2-Deal'],
    [/AQ\d|AT2/, /./, 'self'],
    [/AA2|AA4/, /^suspend/i, 'go:WF-AA3-OrgSuspended'],
    [/AA3/, /^reinstate/i, 'go:WF-AA2-Org'],
    [/AA[234]/, /^deals/i, 'go:WF-AM1-Deals'],
    [/AA[234]/, /^application/i, 'go:WF-AQ1-Queues'],
    [/AA4/, /^checks/i, 'go:WF-AQ2-CreatorReview'],
    [/AA4/, /^payouts/i, 'go:WF-AQ4-Payout'],
    [/AA[234]/, /^history|^notes/i, 'go:WF-AL-Audit'],
    [/AA1/, /creator|@/i, 'go:WF-AA4-Creator'],
    [/AA1/, /▾/, 'toast:Filter applied'],
    [/AA1/, /./, 'go:WF-AA2-Org'],
    [/AL-Audit/, /payout/i, 'go:WF-AM2-Deal'],
    [/AL-Audit/, /application/i, 'go:WF-AA2-Org'],
    [/AL-Audit/, /creator/i, 'go:WF-AA4-Creator'],
    [/AL-Audit/, /settings/i, 'go:WF-AS1-Settings'],
    [/AL-Audit/, /export/i, 'toast:Download started'],
    [/AL-Audit|AM1-Deals/, /▾/, 'toast:Filter applied'],
    [/AL-Audit/, /./, 'self'],
    [/AM2-Deal/, /^add$/i, 'toast:Note added · logged'],
    [/AS1-Settings/, /^save/i, 'go:WF-AL-Audit'],
    [/AT-Team/, /preview as/i, 'go:WF-AT2-Preview'],
    [/AT-Team/, /▾|^role/i, 'toast:Role changed · logged'],
    [/AD0b/, /lost your device/i, 'go:WF-AD0d-Setup2FA'],

    // generic, any screen
    [/./, /^send$/i, 'send'],
    [/./, /copy/i, 'copy'],
    [/./, /download|export/i, 'toast:Download started'],
    [/./, /^(message|open in messages)/i, 'go:' + (/^UI-K/.test(base) ? 'UI-KM1-Messages' : 'UI-MS1-Messages')],
    [/./, /mark all read/i, 'read'],
    [/./, /open on x|view on x|view post|on x$/i, 'toast:Opens X in a new tab'],
    [/^WF-A/, /^$/, 'go:WF-AQ1-Queues'],
    [/./, /^$/, 'toast:Attach a file or image']
  ];

  function act(action, el) {
    var i = action.indexOf(':'), k = i < 0 ? action : action.slice(0, i), v = i < 0 ? '' : action.slice(i + 1);
    if (k === 'go') return go(v);
    if (k === 'back') return back();
    if (k === 'toast') return toast(v);
    if (k === 'self') return mark(el);
    if (k === 'copy') { try { navigator.clipboard.writeText(label(el)); } catch (e) {} return toast('Copied'); }
    if (k === 'done') { el.dataset.on = el.dataset.on ? '' : '1'; var m = label(el).match(/\+\d+/); return toast(el.dataset.on ? (m ? m[0] + ' Hypes · pending until verified' : 'Done') : 'Undone'); }
    if (k === 'press') return press(el);
    if (k === 'flip') return toast('The back of the card shows the track record');
    if (k === 'read') { document.querySelectorAll('[aria-label*="unread" i], [style*="border-radius: 50%"][style*="#FF5C16"]').forEach(function (d) { if (d.offsetWidth < 14) d.style.visibility = 'hidden'; }); return toast('All marked as read'); }
    if (k === 'send') {
      var box = el.closest('form, div'), inp = null;
      for (var p = el.parentElement; p && !inp; p = p.parentElement) inp = p.querySelector('input:not([type=checkbox]), textarea');
      if (inp && inp.value.trim()) { inp.value = ''; return toast('Message sent'); }
      return toast(inp ? 'Type a message first' : 'Sent');
    }
  }
  function mark(el) {                // in-page selection, like a list row or tab
    var sibs = el.parentElement ? el.parentElement.children : [];
    for (var j = 0; j < sibs.length; j++) if (sibs[j] !== el) delete sibs[j].dataset.sel;
    el.dataset.sel = '1';
  }
  function press(el) {               // chips, segmented controls, choice cards
    var grp = el.parentElement, single = grp && grp.getAttribute('role') !== 'group' && grp.querySelectorAll('button').length < 8 && !/filters|card/i.test(base);
    if (single) for (var j = 0; j < grp.children.length; j++) if (grp.children[j] !== el) delete grp.children[j].dataset.on;
    if (el.dataset.on) delete el.dataset.on; else el.dataset.on = '1';
    el.setAttribute('aria-pressed', el.dataset.on ? 'true' : 'false');
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('a, button');
    if (!el || el.closest('#pv-bar')) {
      if (el && el.closest('#pv-bar') && /^(Mobile|Desktop)$/.test(el.textContent)) try { sessionStorage.setItem('hm-layout', el.textContent === 'Mobile' ? 'm' : 'd'); } catch (x) {}
      return;
    }
    if (isLive(el.closest('a'))) return;   // real link (also a button inside one): let the browser navigate
    if (el.type === 'submit' && el.form) e.preventDefault();
    e.preventDefault();
    var a = decide(el);
    if (a === 'missing') return toast('This screen isn’t designed yet');
    act(a, el);
  });
  function isLive(a) { return !!(a && a.getAttribute('href') && a.getAttribute('href') !== '#' && !a.hasAttribute('data-missing')); }
  function decide(el) {
    var lab = label(el);
    for (var r = 0; r < R.length; r++) if (R[r][0].test(base) && R[r][1].test(lab)) return R[r][2];
    return el.tagName === 'BUTTON' ? 'press' : 'missing';   // anything left is a choice or toggle on the screen
  }
  window.__hmDecide = function () {
    return [].slice.call(document.querySelectorAll('.pv-frame a, .pv-frame button')).filter(function (el) {
      return !isLive(el.closest('a'));
    }).map(function (el) { var d = decide(el); if (/^go:/.test(d)) d = 'go:' + (page(d.slice(3)) || 'NONE'); return [label(el).slice(0, 50), d]; });
  };
  document.addEventListener('submit', function (e) { e.preventDefault(); toast('Saved'); });
})();
