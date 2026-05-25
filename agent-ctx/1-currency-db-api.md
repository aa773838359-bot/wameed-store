# Task 1: Add Currency Database Model and API Routes

## Summary
Successfully added the Currency model to the Prisma schema, seeded 12 currencies, and created 3 API route files (4 endpoints).

## Changes Made

### 1. Prisma Schema (`prisma/schema.prisma`)
- Added `Currency` model with: id, code (unique), name, nameAr, symbol, exchangeRate, isDefault, active, order, createdAt, updatedAt

### 2. Seed File (`prisma/seed.ts`)
- Added `await prisma.currency.deleteMany()` to cleanup section
- Added 12 currencies: USD (default), SAR, AED, EUR, GBP, KWD, QAR, BHD, OMR, EGP, JOD, IQD
- Added currency count to final console.log

### 3. API Routes Created
- `src/app/api/admin/currencies/route.ts` - GET (list all), POST (create)
- `src/app/api/admin/currencies/[id]/route.ts` - PATCH (update, with default logic), DELETE
- `src/app/api/site/currencies/route.ts` - GET (active only, public endpoint)

## Verification
- `bun run db:push` - successful
- `bun run db:seed` - 12 currencies seeded
- `bun run lint` - passes (0 errors, 1 pre-existing warning)
- GET endpoints tested: both admin and site return 12 currencies correctly
