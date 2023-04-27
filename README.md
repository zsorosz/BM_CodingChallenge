# Bringmeister Coding Challenge

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Install the dependencies with npm, then you can start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

I also added some the hooks - `useGetCart` for retrieving fake cart data, and - `useGetProducts` for retrieving fake product data

Both include a delay to simulate network loading. Each hook returns an object
with the loading state as a boolean and the data if not loading finished

## Work to do:

Adjust the index.tsx / create necessary files to:

Display a loading info while the products are in loading state

Change index.tsx to display a tile for each product with the following infos:

-   Image (as image; you add also e.g.:"?imwidth=175" to the image url to get a 175px wide image)
-   Name
-   Base Price (formatted in German Currency format e.g. 1.2 will be "€1,20" )
-   Base Unit

The tiles should be displayed in a grid and as a list on screens
below 480px. In the grid the minimum tile width should be 300px and as many tiles as possible should fit on screen.

Add an search input field on top that allows filtering the products that contain the input in the product name.

Bonus:

-   Add the count in cart (amount > 0) to the product tile (Note: You have
    to use the `sku` field to find the matching products)

### Evaluation points

-   Use of state management
-   Modular component design
-   DRY (Reusable code)
-   Rendering / Performance / Management of Component lifestyle
-   Strong typing and consistent use of Typescript
-   General knowledge of CSS and proper use of selector specificity
-   Mobile Responsive
-   Technical explanation of code
-   Good Test Coverage using playwright
-   Web accessibility standards are followed
-   W3c Standards are followed

### Additional Information

-   Even though this project is fairly simple try to organize it like you would do for larger components.

-   Feel free to reach out if you have any questions

_Good luck_
