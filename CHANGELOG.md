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
* [#72](https://github.com/MarionQH/ogmaker/commit/0a8d9f7cc6f1189a2a05c75b1826f07797665ba0) [TECH] Modified the controller to retrieve fonts from the API.
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

## v.? (17/01/25)

## 🚀 Enhancements

* [#50](https://github.com/MarionQH/ogmaker/commit/46cb64326703ae38dfddeef50b73bb9c9198869e) [FEATURE] Display text content in the table within `$20` format.
* [#50](https://github.com/MarionQH/ogmaker/commit/bc01a5c0e710c58dea7ca965a3ee8626a6a775cf) [FEATURE] Updated index page for better textline management.
* [#49](https://github.com/MarionQH/ogmaker/commit/c36552d2a7633dbae201a48dc3b51329db9053e2) [FEATURE] URL now updates dynamically when a textline is deleted.
* [#48](https://github.com/MarionQH/ogmaker/commit/0a137fc9d614030e7dac3573353bec71cdd57368) [FEATURE] Added ability to delete textlines.
* [#46](https://github.com/MarionQH/ogmaker/commit/4321fa07a34cfb1ac60555d8b2dd28cab3734669) [FEATURE] Modified style of Edit page.
* [#46](https://github.com/MarionQH/ogmaker/commit/a9849adc880b5297c47a280379c19b88d640b0ac) [FEATURE] Implemented a "Copy URL" button.
* [#45](https://github.com/MarionQH/ogmaker/commit/76e78426e92767c40748ff150e61e81b62f05454) [FEATURE] Improved OpenGraph validator.
* [#45](https://github.com/MarionQH/ogmaker/commit/4deec7df7c67ed617f115d04cd370dbfcf5b7f51) [FEATURE] Enhanced text validation rules.
* [#43](https://github.com/MarionQH/ogmaker/commit/56622f7cf7847acdc73adddb4fdda09cbccd90db) [FEATURE] Adjusted input field for text size customization.
* [#42](https://github.com/MarionQH/ogmaker/commit/d89a189746079c81cd5ad055b1957e79c3d7cb06) [FEATURE] Added a color selection option.
* [#42](https://github.com/MarionQH/ogmaker/commit/cbdcbb2bcb3c555029c343681ee5680524ae7a0d) [FEATURE] Improved textline form styling.
* [#41](https://github.com/MarionQH/ogmaker/commit/acc46348988196a8c0e17063d93008d2fe55b9d0) [FEATURE] Cleaned up public assets, removed home images, added a favicon, and linked homepage on OG Maker.
* [#40](https://github.com/MarionQH/ogmaker/commit/758463d04f9e13f84b68a6bb676f936f31d8cfbc) [FEATURE] Added a sample URL example.
* [#40](https://github.com/MarionQH/ogmaker/commit/618465e03ffdeba2c2498508ab313ed4b2a8a636) [FEATURE] Revamped OpenGraph creation page.
* [#39](https://github.com/MarionQH/ogmaker/commit/acdadd59c6019ff0e89436be1e84ece648c47823) [FEATURE] Updated button hover colors for better UI feedback.
* [#39](https://github.com/MarionQH/ogmaker/commit/4b88b57d2d218f194af7732a28f4b95f2d5919c2) [FEATURE] Added a delete button in the index and fixed URL issues.
* [#38](https://github.com/MarionQH/ogmaker/commit/e0353fc176b6fa38a4924046d8bf49a7cc1d08d2) [FEATURE] Adjusted toast notification positioning.
* [#36](https://github.com/MarionQH/ogmaker/commit/1d29d8b7ee14f4f9e8dfd22c529e0faf81bb84f6) [FEATURE] Implemented "URL BREAKER" functionality.
* [#35](https://github.com/MarionQH/ogmaker/commit/a1d0f36d5983011a5a3cd2dd4de60da992d8c8e1) [FEATURE] Added tooltips and placeholders to OpenGraph creation form.
* [#34](https://github.com/MarionQH/ogmaker/commit/b5175ae3839d3211657df890ca5ed316ce61ad8c) [FEATURE] Enabled textline addition to the database.
* [#32](https://github.com/MarionQH/ogmaker/commit/ec89f7e4ce1d9df65bf95c3c62f8416ff6111f30) [FEATURE] Introduced a text validator for textline input.
* [#32](https://github.com/MarionQH/ogmaker/commit/6701605d94cf5f652423456c9a935b2c1eaf5734) [FEATURE] Created a dedicated textline form.
* [#31](https://github.com/MarionQH/ogmaker/commit/c3e583f65f41e3d165bc049ddeca796ad24d89e5) [FEATURE] Applied styling improvements to the creation page.
* [#29](https://github.com/MarionQH/ogmaker/commit/a38b987153585ace84d0895dca45ec1c6ccddbe7) [FEATURE] Implemented a functional suffix system.
* [#29](https://github.com/MarionQH/ogmaker/commit/3e7a17165e2526c73e9958a85004e8ce1954f280) [FEATURE] Added a suffix column in the database.
* [#28](https://github.com/MarionQH/ogmaker/commit/ead6aeb8308be0861094c0f6dee05b07af5a322e) [FEATURE] Integrated flash message notifications.

## 🏗️ Tech

* [#43](https://github.com/MarionQH/ogmaker/commit/6456b1ba8fccbbf99593bdc45c4706b4aedc6102) [TECH] Updated textline migration to support longer OpenGraph URLs.
* [#43](https://github.com/MarionQH/ogmaker/commit/5560f96734e052ac8e1fcdf238aad08fe971ccf1) [TECH] Verified text font consistency and added relevant CSS classes.

## 🧪 Tests

* [#47](https://github.com/MarionQH/ogmaker/commit/4839c10586f711672cdf246408bae08fb52aa2d1) [TEST] Added a user hash validation test.

## 🐛 Bug Fixes

* [#30](https://github.com/MarionQH/ogmaker/commit/af6e323d8659edc58b8d8ed7c3e2ae65772deba6) [BUGFIX] Fixed security vulnerabilities in `package.json`.
* [#33](https://github.com/MarionQH/ogmaker/commit/cc906c91d66f667f0b61342c532c12a5f461bb5f) [BUGFIX] Resolved import issues in the project.
* [#34](https://github.com/MarionQH/ogmaker/commit/ee8ad4847274aaa0966ba0d8863f296e8e190084) [BUGFIX] Fixed URL modification behavior.
* [#37](https://github.com/MarionQH/ogmaker/commit/f32f1d2603912535621bb2713be1f2351e1f3163) [BUGFIX] Fixed an `await` issue in asynchronous code execution.
* [#44](https://github.com/MarionQH/ogmaker/commit/a93416867e3f16915c7e8d034d74812bcca01a34) [BUGFIX] Fixed font selection dropdown.

## v.? (15/01/25)

## 🚀 Enhancements

* [#24](https://github.com/MarionQH/ogmaker/commit/d07a4c339b70d5ab6f3072a0c35428fe50084da4) [FEATURE] Updated OpenGraph creation to support URL input.
* [#23](https://github.com/MarionQH/ogmaker/commit/9346fc431151f93b75ad4e8a54cfc71516f3647e) [FEATURE] Completed OpenGraph creation functionality.
* [#20](https://github.com/MarionQH/ogmaker/commit/6e1c0ffe905e2bf9f4df39e8cc9432ed8f9b182f) [FEATURE] Display home page image with URL instead of local file.
* [#16](https://github.com/MarionQH/ogmaker/commit/8c2d46efdd6936f011babdec5fb1679f5fc59b4b) [FEATURE] Added text input field to OpenGraph creation page.
* [#14](https://github.com/MarionQH/ogmaker/commit/00d583a985ab7f09631395fa6ffbaa1cac5139cd) [FEATURE] Introduced text customization form.
* [#14](https://github.com/MarionQH/ogmaker/commit/357c7cef28db57b9dd6de87650ee77899f45ad02) [FEATURE] Improved homepage UI for better navigation.
* [#13](https://github.com/MarionQH/ogmaker/commit/e05b386298d123bf1adff7e94f0227aa1dc53782) [FEATURE] Linked OpenGraph to user accounts in the database.
* [#10](https://github.com/MarionQH/ogmaker/commit/fb1448d2e21b0493ac8b4074d68cab743f3fad74) [FEATURE] Started implementing filters by name and date.
* [#9](https://github.com/MarionQH/ogmaker/commit/a8d4a4aa67fe967d72eab08caa1cac8ea371eb13) [FEATURE] Redirected users to the homepage after certain actions.
* [#6](https://github.com/MarionQH/ogmaker/commit/28b4bee9b7485a620fddb2759da9df8be6757e41) [FEATURE] Created OpenGraph index page with list view.
* [#5](https://github.com/MarionQH/ogmaker/commit/3eaafc7bcc5b3df60800955c907318a3adf6202b) [FEATURE] Implemented homepage displaying OpenGraphs from newest to oldest.
* [#3](https://github.com/MarionQH/ogmaker/commit/22debd3ace7c077d62b773e0079ee884fe231b79) [FEATURE] Started implementation of a service for generating OpenGraph URLs.
* [#2](https://github.com/MarionQH/ogmaker/commit/458dfc519ae0419a71eca161b1985a6467086553) [FEATURE] Improved configuration management.
* [#1](https://github.com/MarionQH/ogmaker/commit/7e739394629df1b88f9059153590092a99b46351) [FEATURE] Added database migrations for `text_line` and `open_graph` models.
* [#1](https://github.com/MarionQH/ogmaker/commit/eea6117274726ae1b493a22b01e28767fd34bfb1) [FEATURE] Initial implementation of OpenGraph model.
* [#1](https://github.com/MarionQH/ogmaker/commit/05fedce3c1230928c97fd75407dd8d08195130c6) [FEATURE] Applied first layout styling.

## 🏗️ Tech

* [#26](https://github.com/MarionQH/ogmaker/commit/0f22a6a8e874d2e0e8673a6e9ea55e3d07cb4205) [TECH] Removed SMTP credentials from `.envexample` for security.
* [#25](https://github.com/MarionQH/ogmaker/commit/bf0f19549d007201996a3d75eea1e8dc40071cc0) [TECH] Commented out unused import in graph service.
* [#4](https://github.com/MarionQH/ogmaker/commit/a95995c3335ef1cb5bc0acf8bd330d88deab84c7) [TECH] Refactored `textJoin` function for better readability.
* [#2](https://github.com/MarionQH/ogmaker/commit/8109b2d50458aac18c80dbac97317ad7aae81692) [TECH] Display HTTP and SQL queries in logs.

## 🐛 Bug Fixes

* [#17](https://github.com/MarionQH/ogmaker/commit/36e00f7dfd4d2bba9bcfe355c651c14054bf8df1) [BUGFIX] Fixed OpenGraph model and its migrations.
* [#17](https://github.com/MarionQH/ogmaker/commit/d09ff14c507cc42591671b12279b4f22dd0c63e4) [BUGFIX] Restricted OpenGraph visibility to linked users.
* [#17](https://github.com/MarionQH/ogmaker/commit/61efea8ed4460e68195e32cef218009d3f910005) [BUGFIX] Created 403 page for unauthorized access to OpenGraphs.
