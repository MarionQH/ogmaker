# OpenGraph Changelog

## v.? (28/01/25)

## 🚀 Enhancements

* [#87](https://github.com/MarionQH/ogmaker/commit/127e6d39ca5ec5c5accdb23e0fabfab494f83d1a) [FEATURE] Implemented Unpoly and added a loading animation.
* [#89](https://github.com/MarionQH/ogmaker/commit/e060d7ddc893615d6865b292502e83a6bffbb7d3) [FEATURE] Added a functional spinner.
* [#82](https://github.com/MarionQH/ogmaker/commit/db18b01f5ad6e407a599a3fc5fd56e7097087904) [FEATURE] Added a functional loading bar via app.js.
* [#79](https://github.com/MarionQH/ogmaker/commit/699b6d93fb73f2bdf950a932e440db3ac20f4b5b) [FEATURE] Added an info tooltip.
* [#79](https://github.com/MarionQH/ogmaker/commit/22fdc103ee9f717b379768c634d7112b2f025f2f) [FEATURE] Added a flash message when an OpenGraph is deleted.
* [#79](https://github.com/MarionQH/ogmaker/commit/d8cd1e87eaea3a9a83d1a32d89b3f377316b5585) [FEATURE] Added a message when a font is not supported.
* [#79](https://github.com/MarionQH/ogmaker/commit/25c348ccca063485ab8e0cabffe2cb90b0ae47ad) [FEATURE] Functional search in the font selection.

## 🏗️ Tech

* [#85](https://github.com/MarionQH/ogmaker/commit/6dce93c3cbb05f9c96e61f197ff155f59c8a7af2) [TECH] Cleaned up app.js and moved scripts.
* [#82](https://github.com/MarionQH/ogmaker/commit/5197bba5be038fe3314b22e9ffaf2a47ed4eb1ca) [TECH] Added Alpine.js to the project.

## 🧪 Tests

* [#88](https://github.com/MarionQH/ogmaker/commit/cc737fdae7eee9f88fbb75c0de7562fbaaadb95c) [TEST] Added integration and E2E tests in `adonisrc`.
* [#80](https://github.com/MarionQH/ogmaker/commit/a436ec3c5e9b5a8346c77ba5fad9f2b835e89f67) [TEST] Tests to verify the uniqueness of emails during registration.
* [#86](https://github.com/MarionQH/ogmaker/commit/f802e699a8ec65c3d293b382ae3634fe3c196690) [TEST] Tests for required fields in the registration form.

## 🐛 Bug Fixes

* [#81](https://github.com/MarionQH/ogmaker/commit/73240d26cb5edb4785fa26040ab50e2b136ab7b8) [BUGFIX] Fixed favicon and honeypot.
* [#89](https://github.com/MarionQH/ogmaker/commit/5c2bdf179bc4ebabf8e204780d7386fb8e0f2653) [BUGFIX] Fixed regex for text validation.
* [#84](https://github.com/MarionQH/ogmaker/commit/f75e2a144fabf472a2315b2ab21a347dc8f87457) [BUGFIX] Added `.env` file to the CI/CD workflow.

## v.? (23/01/25)

## 🚀 Enhancements

* [#77](https://github.com/MarionQH/ogmaker/commit/01cc2150b9be891ecd47c61f2807d2802bc96834) [FEATURE] Retrieved Latin fonts and passed them to the view.
* [#74](https://github.com/MarionQH/ogmaker/commit/03b1126ac81514592800350a6d7045d910e18cbb) [FEATURE] Added a honeypot security measure.
* [#73](https://github.com/MarionQH/ogmaker/commit/9e3930788c5513313eb1d5e49794ab92c625ce72) [FEATURE] Added the Q&A page.
* [#72](https://github.com/MarionQH/ogmaker/commit/1f8f52b29a4e2fc207b82c421ed6c59487c5557b) [FEATURE] Functional font retrieval.
* [#70](https://github.com/MarionQH/ogmaker/commit/c5477c09c0e007a0679d065b98e07f0eaa1d3605) [FEATURE] Added a footer.
* [#69](https://github.com/MarionQH/ogmaker/commit/2f9d415d23178e5876ef0b554f27106fc9f6c65e) [FEATURE] Functional prefill for text color.
* [#68](https://github.com/MarionQH/ogmaker/commit/310a86f6ebee8f58b99b96aca13f58e8021aaa0f) [FEATURE] Button to delete all text lines.
* [#67](https://github.com/MarionQH/ogmaker/commit/27785df515f31d8f72eaed2a1ba107a616b9bb38) [FEATURE] Added three OpenGraph components to streamline code.
* [#65](https://github.com/MarionQH/ogmaker/commit/70190253e685037ee4e19a07d50945db6726b401) [FEATURE] Extracted text from URL functionality.
* [#64](https://github.com/MarionQH/ogmaker/commit/644ce6f49af1d68e5a44a700fdeff6ae87128e30) [FEATURE] Added transaction support.

## 🏗️ Tech

* [#75](https://github.com/MarionQH/ogmaker/commit/838df5aec662e69e458ff601b5c4db1d0993157a) [TECH] Upgraded Vite from 6.0.7 to 6.0.11.
* [#72]() [TECH] Modified the controller to retrieve fonts from the API.
* [#71](https://github.com/MarionQH/ogmaker/commit/7066de60498e6adfc9ca6c10da865dc4a6bef9a9) [TECH] Removed `.env.test` file from github.
* [#63](https://github.com/MarionQH/ogmaker/commit/3e6bfe136ba7183b2adcacd14ecd7a5d4e483614) [TECH] Created a separate database for testing.
* [#62](https://github.com/MarionQH/ogmaker/commit/666bb75d9ab71458fae761caf160285d9c1da87f) [TECH] Cleaned up dead code and removed unnecessary files.

## 🧪 Tests

* [#66](https://github.com/MarionQH/ogmaker/commit/21b8c0425888df32ea926a31a4a05c8d2c0ba36c) [TEST] User creation and invalid email tests; added migration in bootstrap.

## 🐛 Bug Fixes

* [#76](https://github.com/MarionQH/ogmaker/commit/ea9dd235a69c457490efd4d92b7f7a26aa2e67b8) [BUGFIX] Fixed color display issues in the edit page.
* [#69](https://github.com/MarionQH/ogmaker/commit/160e4c283503b2c06894eb1b0b14a810383efbd7) [BUGFIX] Fixed Montserrat option in the edit page.
* [#69](https://github.com/MarionQH/ogmaker/commit/5792495fab7fdbb28c1dea7ff693fa9e5d9d8434) [BUGFIX] Removed `%20` encoding from font names in the table.
* [#65](https://github.com/MarionQH/ogmaker/commit/daafde795d7f4e3da6790d4e1f0da85abf11cf9d) [BUGFIX] Ensured full image visibility in cards, adding a gray frame if the size does not match the slot.

## v.? (21/01/25)

## 🚀 Enhancements

* [#61](https://github.com/MarionQH/ogmaker/commit/a954769b25b7fac8f867639a68f0a15a2c011e0e) [FEATURE] Added a loading bar using Alpine.js.
* [#60](https://github.com/MarionQH/ogmaker/commit/7d1cc5873eb8a670f45a6a8786f24a13f7803bf5) [FEATURE] Changed button label from "Create" to "Add" for better clarity.
* [#59](https://github.com/MarionQH/ogmaker/commit/6972bf8ed8f0b5eb33f63175c613c62582008e14) [FEATURE] Functional edit for text lines.
* [#58](https://github.com/MarionQH/ogmaker/commit/288272b12fcf4806c26f40866c14c073e1589a0c) [FEATURE] Improved form UI with tooltips and additional information.
* [#57](https://github.com/MarionQH/ogmaker/commit/7ce0ff8c7cf8d17533162bdf950d751645889042) [FEATURE] Unified form for creating text lines and managing them on the same page.
* [#55](https://github.com/MarionQH/ogmaker/commit/7ad66a64083dff1e611580b9de794598c849ba75) [FEATURE] URL creation is now functional again.
* [#54](https://github.com/MarionQH/ogmaker/commit/d3cbfcb03429ba96050595f9b1291d7bdd6eb324) [FEATURE] Adjusted image display sizes in the index page.
* [#53](https://github.com/MarionQH/ogmaker/commit/dcde527069480d8908052e55fe2d758733bd18bc) [FEATURE] Minor style changes in the edit page.
* [#52](https://github.com/MarionQH/ogmaker/commit/10cb8a40fae93a121647e7a93d38062a2056e72c) [FEATURE] Updated styles for creating OpenGraph images.
* [#51](https://github.com/MarionQH/ogmaker/commit/0f65fd7d2e6d26cf4b0fd7f3c5ee07b6bcbac19c) [FEATURE] Functional pop-up for renaming OpenGraphs.
* [#51](https://github.com/MarionQH/ogmaker/commit/0f65fd7d2e6d26cf4b0fd7f3c5ee07b6bcbac19c) [FEATURE] Added an "Edit and Create TextLine" button.
* [#51](https://github.com/MarionQH/ogmaker/commit/256d60d25677c8378780047dd38fd7100622ec78) [FEATURE] Implemented `isUnique` rule for OpenGraph names.

## 🏗️ Tech

* [#58](https://github.com/MarionQH/ogmaker/commit/7d138ebb5f3b113076ee237b09c8dc486c6f42a4) [TECH] Applied CSS styling to input fields.
* [#57](https://github.com/MarionQH/ogmaker/commit/d2a536bcfc53c255c34ac2a76a7a4029ce3fee93) [TECH] Removed dead code.

## 🐛 Bug Fixes

* [#56](https://github.com/MarionQH/ogmaker/commit/5ed8617b277fcab423e92b7ad486e5fd6c54268b) [BUGFIX] Corrections for `card.edge` style.
* [#51](https://github.com/MarionQH/ogmaker/commit/f826c9dea624996c0d25301c794b975588616ded) [BUGFIX] Updated button appearance for consistency.
