---
Task ID: 1
Agent: Main Agent
Task: Fix all critical security and quality issues in Z Shop e-commerce store

Work Log:
- Step 1: Removed ADMIN_SECRET from frontend (constants.ts) - moved to server-only admin-auth.ts
- Step 2: Replaced weak DJB2 hash with crypto.createHmac('sha256') + timing-safe comparison + Secure cookie flag
- Step 3: Added password hashing using crypto.scryptSync - auto-upgrades plaintext passwords on first login
- Step 4: Added rate limiting (5 attempts per 15 minutes) on admin login endpoint
- Step 5: Improved price precision handling with validation constraints (decided against Float→Int migration due to risk)
- Step 6: Added Zod validation to all admin API POST routes (products, categories, offers, currencies, ads, texts, settings, orders)
- Step 7: Added CSRF protection via Origin header checking in middleware
- Step 8: Removed unused packages (next-auth, next-intl)
- Step 9: Enhanced SEO - robots.txt with sitemap ref, sitemap.ts, Open Graph + Twitter metadata, keywords, robots directives
- Step 10: Skipped JSON→relations migration (too risky, low priority)

Stage Summary:
- All 4 CRITICAL security issues fixed (password exposure, weak hashing, plaintext passwords, no rate limiting)
- All MEDIUM issues fixed (validation, CSRF, unused packages)
- SEO improvements added
- All tests pass: lint clean, dev server running, API endpoints verified working
- Admin login tested: wrong password rejected, correct password accepted, admin routes protected
