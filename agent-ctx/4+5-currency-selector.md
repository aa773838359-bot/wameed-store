# Task 4+5: Currency Selector & Price Formatting

## Summary
Added currency selector to header and updated all price displays across the application to use `formatPrice()` from the Zustand store.

## Changes Made

### 1. `src/app/page.tsx`
- Added `useQuery` for loading currencies from `/api/site/currencies`
- Added `useEffect` to set currencies in store when loaded
- Destructured `setCurrencies`, `setActiveCurrency`, `activeCurrencyId`, `currencies` from `useShopStore()`

### 2. `src/components/header.tsx`
- Added `Coins` icon from lucide-react
- Added hover-based currency dropdown in header actions area
- Shows only when `currencies.length > 1`
- Active currency highlighted with orange styling
- Updated search result price to use `formatPrice()`

### 3. All Price Display Updates (13 files)
Every component that displayed prices with `$` prefix was updated to use `formatPrice()`:
- product-card.tsx, product-detail.tsx, product-quick-view.tsx
- cart-drawer.tsx (including free shipping threshold, totals)
- checkout-form.tsx (including button text)
- order-success.tsx, order-history.tsx
- recently-viewed.tsx, featured-products.tsx
- admin-dashboard.tsx (product prices, order totals)
- wishlist-section.tsx - no changes needed (uses ProductCard)
- deal-timer.tsx - no price displays

## Lint Result
- 0 errors, 1 pre-existing warning (react-hook-form watch)
