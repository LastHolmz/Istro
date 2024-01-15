# Prisma Schema Relationships

## User Model
- `comments`: One-to-Many relation with `Comment` model. A user can have multiple comments.
- `rates`: One-to-Many relation with `Rate` model. A user can have multiple rates.

## Product Model
- `categories`: One-to-Many relation with `Category` model. A product can have multiple categories.
- `variants`: One-to-Many relation with `Variant` model. A product can have multiple variants.
- `colors`: One-to-Many relation with `Color` model. A product can have multiple colors.
- `comments`: One-to-Many relation with `Comment` model. A product can have multiple comments.
- `rates`: One-to-Many relation with `Rate` model. A product can have multiple rates.

## Category Model
- `product`: Many-to-One relation with `Product` model. A category belongs to a single product.

## Variant Model
- `product`: Many-to-One relation with `Product` model. A variant belongs to a single product.
- `colors`: One-to-Many relation with `Color` model. A variant can have multiple colors.

## Color Model
- `variant`: Many-to-One relation with `Variant` model. A color belongs to a single variant.

## Comment Model
- `product`: Many-to-One relation with `Product` model. A comment belongs to a single product.
- `user`: Many-to-One relation with `User` model. A comment belongs to a single user.

## Rate Model
- `user`: Many-to-One relation with `User` model. A rate belongs to a single user.
- `product`: Many-to-One relation with `Product` model. A rate belongs to a single product.

+---------+           +---------+            +---------+
  |   User  |           | Product |            | Variant |
  +---------+           +---------+            +---------+
       |                     |                      |
       |                     |                      |
       |                     |                      |
       |                +---------+                 |
       +--------------> | Comment | <---------------+
       |                +---------+
       |
       |
       |
  +---------+
  |   Rate  |
  +---------+