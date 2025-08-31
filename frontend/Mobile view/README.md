# Mobile view (frontend/Mobile view)

This folder contains a self-contained mobile-oriented UI you can plug into the existing React app for quick mobile testing.

Files added
- `MobileApp.jsx` — top-level mobile app wrapper with simple view routing (home / transactions / auth).
- `mobile.css` — mobile styles and responsive constraints.
- `components/` — small presentational components: `MobileHeader.jsx`, `MobileDashboard.jsx`, `MobileTransactions.jsx`, `MobileAuth.jsx`.

How to try it locally

1. In your `frontend/src` where your app mounts (for example `main.jsx` or `App.jsx`) import the mobile app and styles:

   import MobileApp from '../../Mobile view/MobileApp';

   // then render <MobileApp /> instead of the normal App while testing mobile

2. The components are intentionally static and not wired to Redux or API calls. To integrate with the existing store and actions:

   - Replace static placeholders (e.g. balances, DUMMY transactions, and the auth form submit) with data from your Redux store and dispatch actions from `../actions/*`.
   - You can import `store` or connect components using `react-redux` `useSelector`/`useDispatch`.

3. Styling: `mobile.css` has a compact palette and uses a max width to mimic a mobile screen. Tweak variables at the top of the file to match your brand.

Next steps (recommended)

- Wire `MobileDashboard` to real `income` and `expense` reducers.
- Replace `MobileAuth` form submit with calls to the same auth actions used by your desktop UI.
- Add unit tests for key components.
