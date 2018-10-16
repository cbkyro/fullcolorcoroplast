# Changelog


## Draft
- Fix textarea cannot start new line when hit enter

## 2.5.2 (2018-09-11)
- Fix [THEME-1661] Product images load constantly when first image in list is not set to thumbnail

## 2.5.1 (2018-09-07)
- Fix popup preview cart CSS error appear in v2.5.0

## 2.5.0 (2018-09-07)
- Fix faceted fitlers if filter name has special character
- Fix Facebook Like icon hide Pinterest icon
- Fix banner images do not show when specify Cat IDs for products by categories section
- Fix breadcrumb schema
- Add theme option Flyout Menu
- Fix blog_post import statement in app.js [#1301](https://github.com/bigcommerce/cornerstone/pull/1301)
- Corrects mini cart display issues [#1298](https://github.com/bigcommerce/cornerstone/pull/1298)
- Fix invoice store logo. [#1326](https://github.com/bigcommerce/cornerstone/pull/1326)
- Require Webpack config only when used (reduce time to be ready for receiving messages from stencil-cli). [#1334](https://github.com/bigcommerce/cornerstone/pull/1334)
- Fix encoding issues on Account Signup Form ("&#039;" characters showing in country name)[#1341] (https://github.com/bigcommerce/cornerstone/pull/1341)

## 2.4.0 (2018-08-02)
- Add new feature allow to specify categories to display products on homepage
- Update QuickSearch to support ajax results on mobile
- Fix for ESLint "quotes" and "quote-props" errors. [#1280](https://github.com/bigcommerce/cornerstone/pull/1280)
- Fix cart link not being clickable on mobile when white space reduced around store logo [#1296](https://github.com/bigcommerce/cornerstone/pull/1296)
- Open correct product page tabs when URL contains a fragment identifier referring to that content [#1304](https://github.com/bigcommerce/cornerstone/pull/1304)
- Hide popup product option swatch on mobile
- Display product reviews in tabbed content region of product page. [#1302](https://github.com/bigcommerce/cornerstone/pull/1302)
- Show bulk discounts only if enabled through store settings. [#1310](https://github.com/bigcommerce/cornerstone/pull/1310)
- Style active section in search results. [#1316](https://github.com/bigcommerce/cornerstone/pull/1316)

## 2.3.0 (2018-07-02)
- Fix logo footer not center on mobile
- [THEME-1614] Fix Facebook Like button not appear
- Fix typo class name productView-info-value--upc
- Fix not show product special tabs when no tabs checked
- Add main brand logo size configuration
- Fix AMP category page error: span no href
- Fix empty image on carousel wrap. [#1263](https://github.com/bigcommerce/cornerstone/pull/1263)
- Fix duplicate IDs occurrence in product options in certain situations & syntax fix in bulk-discount-rates component [#1223](https://github.com/bigcommerce/cornerstone/pull/1223)
- Fix use case that prevented retail/sale prices from displaying on product details page [#1262](https://github.com/bigcommerce/cornerstone/pull/1262)
- Fix svg arrows missing on AMP product pages. [#1258](https://github.com/bigcommerce/cornerstone/pull/1258)
- Fix arrow placement on currency dropdown menu [#1267](https://github.com/bigcommerce/cornerstone/pull/1267)
- Add alias for lazysizes module to bundle minified library [#1275](https://github.com/bigcommerce/cornerstone/pull/1275)
- Fix prices not showing in quick search while logged in when "Restrict to Login" for price display is true [#1272](https://github.com/bigcommerce/cornerstone/pull/1272)
- Fix duplicate input ID's in product review form [#1276](https://github.com/bigcommerce/cornerstone/pull/1276)
- Fix Webpack DefinePlugin configuration. [#1286](https://github.com/bigcommerce/cornerstone/pull/1286)

## 2.2.0 (2018-06-21)
- Fix footer logo align left
- Fix checkout buttons alignment
- Fix footer popular brands break new line on Safari
- Fix bulk price table not show for Price Lists
- Show SKU on cart page and dropdown preview cart
- Fix AMP store logo and revert STRF-4804 as it cause invalid CSS
- Fix swatch not display tooltip
- Fix site logo size
- Fix default brand logo not display
- Fix video on the main carousel not play
- Styling video block on product page for Modern style
- Add new setting to display mini modal or hide modal after added to cart
- Fix add to cart on AMP product page

## 2.1.0 (2018-06-01)
- Add Newsletter summary section to subscription form. [#1248](https://github.com/bigcommerce/cornerstone/pull/1248)
- Show retail price range with strikethrough. [#1199](https://github.com/bigcommerce/cornerstone/pull/1199)
- Fix quantity edit on Simple Product AMP pages. [#1242](https://github.com/bigcommerce/cornerstone/pull/1242)
- Fix for individual low inventory count for SKUs. [#1234](https://github.com/bigcommerce/cornerstone/pull/1234)
- Avoid undefined context in WishList instance. [#1247](https://github.com/bigcommerce/cornerstone/pull/1247)
- Add image lazyload

## 2.0.0 (2018-05-29)
- Performance improvements. [#1229](https://github.com/bigcommerce/cornerstone/pull/1229)
- Fix Product Options hiding Add to Cart on a Google AMP page [#1214](https://github.com/bigcommerce/cornerstone/pull/1214)
- Hide blank review stars when there are no reviews on a product [#1209](https://github.com/bigcommerce/cornerstone/pull/1209)
- Fix for excess whitespace in multiline text field product option [#1222](https://github.com/bigcommerce/cornerstone/pull/1222)
- Fix for sort disappearing on range update with product filtering [#1232](https://github.com/bigcommerce/cornerstone/pull/1232)
- Fix logo image dimensions on AMP pages. [#1239](https://github.com/bigcommerce/cornerstone/pull/1239)
- Fix product pricing schema.org microdata. [#1233](https://github.com/bigcommerce/cornerstone/pull/1233)
- Removed unused browserlist. [#1241](https://github.com/bigcommerce/cornerstone/pull/1241)
- Fix for ESLint "no-console" warning. [#1237](https://github.com/bigcommerce/cornerstone/pull/1237)
- fix(catalog): CATALOG-2913 individual low inventory count for skus

## 1.5.5 (2018-05-24)
- Show custom badge on product page
- Fix: Support redirect to cart page after added to cart was removed by mistake.
- Fix category description has no padding on Modern style
- Add theme option allow to display category description on AMP
- Fix currency label display wrong on AMP. Change color of menu toggle icon on AMP.
- Fix product thumbnails carousel when image count < image to show
- Fix vertical subcategories 3-level not expand automatically

## 1.5.4 (2018-05-18)
- Fix multiple videos cannot play
- Fix a glitch of price with tax on product page
- Update image size of blog bigger
- Support menu to display 4th+ level categories
- Fix styling price on product page when Include Tax is selected

## 1.5.3 (2018-05-10)
- Fix add to wishlist dropdown css on Firefox medium screen
- Fix [THEME-1512] Titles of product tabs include in description structured data
- Fix [THEME-1540] Product images disappear when first image in list is not set to thumbnail
- Fix [THEME-1557] Unable to close store search overlay when 0 results are returned
- Fix [THEME-1595] Ordered Lists are truncated on left side of Product Description
- Improve style of advanced search categories jstree
- Improve style of price on product page better

## 1.5.2 (2018-05-04)
- Fix product thumbnails carousel should not have variable width
- Fix product image disappear on cart page on tablet

## 1.5.1 (2018-05-03)
- Fix no results quick search popup cannot close

## 1.5.0 (2018-05-03)
- Shows price ranges instead of prices when they are present in the context on product list pages [#1111](https://github.com/bigcommerce/cornerstone/pull/1111)
- Remove "as low as" feature and add support for price ranges instead[#1143](https://github.com/bigcommerce/cornerstone/pull/1143)
- CATALOG-2408 Fix updateView firing when there are no default options [#1172](https://github.com/bigcommerce/cornerstone/pull/1172)
- Add representation for products and variants with retail price that has sale price. [#1195](https://github.com/bigcommerce/cornerstone/pull/1195)
- Add the +/- icons for the category filtering [#1211](https://github.com/bigcommerce/cornerstone/pull/1211)
- Add head.scripts reference to checkout & order_confirmation pages [#1158](https://github.com/bigcommerce/cornerstone/pull/1158)
- Fix image dimensions on AMP pages. [#1192](https://github.com/bigcommerce/cornerstone/pull/1192)
- Add schema microdata for breadcrumbs. [#1175](https://github.com/bigcommerce/cornerstone/pull/1175)
- Add support for per-variant bulk pricing tier display on PDP [#1167](https://github.com/bigcommerce/cornerstone/pull/1167)
- Implements Add to any Wish Lists capability. [#1134](https://github.com/bigcommerce/cornerstone/pull/1134)
- Fix slick-next and slick-prev so that they are centered across all screen sizes. [#1166](https://github.com/bigcommerce/cornerstone/pull/1166)
- Fixes functionality of date picker option on product pages. [#1125](https://github.com/bigcommerce/cornerstone/pull/1125)
- Add image width & height for carousel images. [#1126](https://github.com/bigcommerce/cornerstone/pull/1126)
- STENCIL-3962 Use _.includes rather than _.contains
- Adds a theme editor display toggle for weight and dimensions on product pages [#1092](https://github.com/bigcommerce/cornerstone/pull/1092)
- Upgrades all dependencies except for Foundation and jQuery [#1069](https://github.com/bigcommerce/cornerstone/pull/1069)
- Add footer script to optimized checkout / order confirmation [#1085](https://github.com/bigcommerce/cornerstone/pull/1085)
- Fix quick search icon hide on other variations
- Fix price styling on product page
- Hide newsletter popup image on mobile
- Fix quick view product on product page cannot select options

## 1.4.3 (2018-04-26)

## 1.4.3 (2018-04-25)
- Add ability to mute sound on video on the main carousel
- Fix swatch option cannot change on iPad landscape mode
- Add option to display SKU on product card
- Fix cutting text on cart form select box
- Fix hide out of stock badge not work
- SALE OFF 20% for limited time

## 1.4.2 (2018-04-02)
- Fix logo & product image stretched on AMP pages
- Fix Add to Cart button does not work if product have no option on AMP page

## 1.4.1 (2018-03-29)
- [New] Add theme option to on/off changing product image when hover
- [Fix] Fix missing font size, outstock badge color in Theme Editor
- [Fix] fix(storefront): STENCIL-3567 Fix spaces in faceted search option names
- [Improve] Update styling Main Carousel for Modern style
- [Fix] Fix store-logo image at footer not valid AMP

## 1.4.0 (2018-03-22)
- [Fix] Fix padding of banners search box on mobile
- [Fix] Hide brand images for layout A-Z Table
- [New] Update AMP compatible with Supermarket theme
- [New] Add new variation Modern
- [New] Add option to display Out Of Stock badge
- [New] Display remove icon on dropdown mini cart

## 1.3.0 (2018-03-07)
- [Improve] Don't show homepage carousel video until it is loaded
- [Fix] Fix expand styling on default layout - vertical dropdown sub menus checked
- [Improve] Add more space on default layout for breadcumbs and sidebar
- [Fix] Fix product option checkbox not change price
- [Fix] Fix top banner padding
- [Fix] Fix welcome text color not change
- [Improve] Show products by category even category has no products
- [New] Add options to set active tab, show/hide tabs in products by category blocks
- [Fix] Fix G+, FB social icons messy on product page
- [New] Add options number of products, subcategories display on products by category blocks
- [Improve] Collapse popular brands on sidebar on mobile
- [Improve] Tweak container padding, search form on 404 page, heading align & spacing
- [Improve] Change checkout button to primary on cart page
- [Improve] update modernizr.js to 3.5.0
- [Fix] Fix product options 3 columns not work on chrome/android
- [Improve] Hide quick-view text on product listing on mobile
- [Improve] reduce space in product listing item
- [Improve] blog page show categories menu like other pages
- [New] Add option to display 4 categories in top categories list section on homepage
- [New] Improve advanced search to sidebar
- [Improve] Faster loading homepage carousel
- [Improve] Center product main image while page is still loading
- [Fix] Fix product page horizontal slider when the first image is not default
- [Improve] Improve image thumbnails better size on product page
- [Improve] Fix print order on checkout confirmation page
- [New] Add options to display images on category blocks on homepage
- [New] Add options to display recent blog posts and Instagram on homepage
- [Improve] Show popular brands on category page sidebar
- [New] Add theme options: top header banners, menu categories label, background of main nav
- [New] Add Theme Option allow to redirect cart page after add to cart
- [New] Add Option to display SKU on product items
- [Fix] Fix Apple Pay button
- [New] Add new Layout A-Z Table for Brands page
- [Fix] Fix duplicated categories button when adding new feature search sidebar
- [Fix] Fix compare table missing image when image uniform enabled
- [Improve] Fix Google snippet to show correct Stock
- [New] Add new feature showing button Scroll to Top
- [Fix] Fix Product List none option is not checked by default
- [Fix] Fix facebook like button on product page
- [New] Add Feature to show Newsletter Popup
- [New] Add option number of thumbnail slides on product page

## 1.2.5 (2018-01-23)
- Fix sorting bar gear icon on category page on mobile
- Fix sidebar margin top when no pages nav or when banner below header enabled
- Improve better cookie warning style
- Remove banner style for bottom banner position
- Fix vertical images carousel glitch when product main image is not the first
- Fix boxed main carousel not full width
- Fix main carousel min-height incorrect when categories not expand on homepage
- Update Akamai image optimization to not optimized for logo and product zoom images
- Add new feature to allow display videos on homepage carousel

## 1.2.4 (2018-01-18)
- Fix qty box not show on product page on version 1.2.3

## 1.2.3 (2018-01-17)
- Add 40, 100 to number products per brand page, search page
- Fix bug product options select box's default value reset when others out of stock
- Fix bug lightbox image won't change when product option is changed
- Update Yellow style product page image carousel horizontal by default
- Fix spacing G+ icon
- Add new feature to support custom tabs on product details
- Don't display other images when product page loading
- Fix schema.org Brand when product has no brand
- Better product card image uniform
- Move card buttons on image container
- Add new feature on/off Sticky Header
- Fix hide qty box if configured in store settings
- Add new feature showing grid/list, products per page on product page
- Remove instruction for custom tab
- Fix setting incorrect ID when product image carousel has no ID
- Fix login for price on product listing and make it link to login page
- Fix login for price don't show after login
- Fix microdata schema when no rating and added image schema
- Fix product list view type not check show_cart_action
- Add option to display 2,3,6 columns on product page
- Use same template 'grid' for product page list view
- Add theme option on/off address, phone, colors for top header
- Add theme option on/off shop by brand, shop by price on sidebar
- Support custom badges via custom fields, option on/off custom fields __

## 1.2.2 (2017-12-20)
- Fix main product image not display when product options have image changed
- Fix banner before description overlaps product details
- Add feature to support show sub pages on menu
- Fix CSS issue on popup appear after add to cart
- Fix product attribute "checkbox" not work
- Add theme option "product options column" & tweak css on product thumbnail horizontal carousel
- Move saving price showing before without tax
- Fix product image height responsive when image uniform enabled
- Fix product options won't show when open child SKU direct link
- Fix image lightbox not change when product option is changed

## 1.2.1 (2017-11-03)
- Add Number of Products per page 40, 100 in Theme Editor
- Add new feature allow Vertical categories menu on sidebar auto expand on current category page and auto scroll to current category menu item.
- Add Theme Option allow to display subcategories grid thumbnails.
- Fix qty form on product page.
- Add Theme Option to allow display manual custom links on main menu
- Fix product thumbnail carousel on quick-view
- Add Theme Options to support banners below header, on category pages, product pages.
- Fix main carousel image height for general use
- Fix products columns show heading when disabled
- Fix product page main image is not selected


## 1.2.0 (2017-10-17)
- Add theme options allow to change hover color of dropdown nav links, footer links.
- Add theme option allow to change colors of Special products tabs.
- Fix categories list block's heading still show when option set off.
- Fix vertical subcategories showing wrong
- Fix problem when enter on quantity box won't decrease 1 unit
- Fix problem when manually input quality input on the cart page don't update
- Add theme option to support showing horizontal slider thumbnails below the main image on product page.
- Remove space at bottom of subcategories on vertical menu
- Fix restore main image when product option has no custom image is selected on product page


## 1.1.1 (2017-09-29)
- Fix search results overlap sidebar on Yellow style.
- Remove facebook block by default.
- Add theme option to make product images uniform.
- Update Roboto fonts for Yellow style.

## 1.1.0 (2017-09-21)
- Add new layout Left Sidebar across the whole site
- Style better sidebar block
- Update smaller categories menu
- Update sidebar display below content on mobile
- Update product filter on brand page, search page on mobile
- Fix a styling glitch on block 'shop by price'

## 1.0.6 (2017-07-07)
- Add theme option to allow toggle welcome text on header
- Correct social media icons on/off on header
- Change text "New In" to "New"
- Change text "Hot Categories" to "Categories"
- Add theme option to allow input newsletter subscription intro text
- Add theme option to allow display product description full page
- Fix incorrect number of categories display in top categories list

## 1.0.5 (2017-07-05)
- Fix some css issues on IE11
- Update meta screenshots
- Add theme option allow to configure active tab of special products tabs

## 1.0.4 (2017-07-04)
- Remove placeholder images and images from WebDAV. Correct documentation URL

## 1.0.3 (2017-06-29)
- Update Optimized Checkout
- Fix categories list index number
- Add theme options to show/hide category banner images on homepage
- Remove about text
- Add options to set colors of categories nav and search form
- Rename screenshot images to PNG

## 1.0.2 (2017-06-24)
- Fix empty links WCAG
- Fix ESLint
- Remove all hard-coded parts
- Replace hardcoded banners by BC banner manager
- Top header showing dynamic text
- Collapse categories menu on homepage by default

## 1.0.1 (2017-05-29)

## 1.0.0 (2017-05-29)

## 1.0.6 (2017-05-22)

## 1.0.5 (2017-05-12)

## 1.0.4 (2017-05-11)
- Show 'Write a Review' link for mobile [#922] (https://github.com/bigcommerce/stencil/pull/922)
- Update text input for product review comment to be multiline so it's not too small to be usable [#921] (https://github.com/bigcommerce/stencil/pull/921)
- Add a larger view of a swatch image when option is hovered over on the product page [#923](https://github.com/bigcommerce/stencil/pull/923)
- Fixes an issue with file upload button not properly displaying in IE [#925](https://github.com/bigcommerce/stencil/pull/925)
- Make sure product review email links automatically pop the review form [#928](https://github.com/bigcommerce/stencil/pull/928)
- Fixes an issue where search results would incorrectly state there were no results when there were results visible [#934](https://github.com/bigcommerce/stencil/pull/934)
- Update BC logo sprite to use current BC logo [#931](https://github.com/bigcommerce/stencil/pull/931)
- Fix z-index for product sale badges so they aren't above the menu [#926](https://github.com/bigcommerce/stencil/pull/926)
- Auto-expand product videos on the product page if the product has at least one video [#935](https://github.com/bigcommerce/stencil/pull/935)
- Fix an issue with special characters in search results for content pages [#933](https://github.com/bigcommerce/stencil/pull/933)
- Fix an issue with special characters in carousel text [#932](https://github.com/bigcommerce/stencil/pull/932)
- Remove an unnecessary and confusing option in theme editor [#927](https://github.com/bigcommerce/stencil/pull/927)
- Fix an issue where required product list options would display an invalid "none" choice [#929](https://github.com/bigcommerce/stencil/pull/929)
- Remove unused variable causing js error with search in the nav [#938](https://github.com/bigcommerce/stencil/pull/938)
- Add settings to theme editor schema to customize Optimized Checkout discount banners [#924] (https://github.com/bigcommerce/stencil/pull/924)

## 1.5.2 (2017-02-14)
- Added a setting to theme editor schema to show/hide the homepage carousel [#909](https://github.com/bigcommerce/stencil/pull/909)
- Prevent carousel images from being cut off on large screens by adding a new setting to theme editor schema [#909](https://github.com/bigcommerce/stencil/pull/909)
- Add schema description specifying that social media icons must be set up to see them [#920](https://github.com/bigcommerce/stencil/pull/920)
- Show account creation links only if it is enabled in store settings [#917] (https://github.com/bigcommerce/stencil/pull/917)
- Add GeoTrust SSL Seal Toggle [#903] (https://github.com/bigcommerce/stencil/pull/903)

## 1.5.1 (2017-02-07)
- Fix an issue with a horizontal scroll bar showing in theme editor [#915](https://github.com/bigcommerce/stencil/pull/915)
- Hide Gift Certificates when the setting is disabled in the control panel [#914](https://github.com/bigcommerce/stencil/pull/914) & [#916](https://github.com/bigcommerce/stencil/pull/916)
- Fix an issue with a close button on the quick search modal on mobile [#918](https://github.com/bigcommerce/stencil/pull/918)
- Adding CHANGELOG.md [#919](https://github.com/bigcommerce/stencil/pull/919)



## Electronics Theme - 1.0.6 (2017-05-21)
- Add theme option Products display type

## Electronics Theme - 1.0.5 (2017-05-12)
- Fix web pages menu floating down if having many items.
- Remove default, full style and add blue, red theme style.

## Electronics Theme - 1.0.4 (2017-05-11)
- Remove footer links per request from BigCommerce staff
- Show store info in the header pull out from setting.
- Fix add to cart button show on search result.

## Electronics Theme - 1.0.3 (2017-04-01)
- Update CSS products list

## Electronics Theme - 1.0.2 (2017-04-30)
- Change all slide description position to center by default.

## Electronics Theme - 1.0.1 (2017-04-13)
- Rearrange sections of Full style homepage.
- Tweak spacing between sections.
- Show mega menu on hover.

## Electronics Theme - 1.0.0 (2017-04-05)
- Release 1.0.0
