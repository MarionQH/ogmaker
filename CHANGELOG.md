# OpenGraph Changelog
## v.? (28/01/25)

## 🚀 Enhancements

* [#87](https://github.com/MarionQH/ogmaker/commit/127e6d39ca5ec5c5accdb23e0fabfab494f83d1a)[FEATURE] Implemented Unpoly and added a loading animation.
* [#89](https://github.com/MarionQH/ogmaker/commit/e060d7ddc893615d6865b292502e83a6bffbb7d3)[FEATURE] Added a functional spinner.
* [#82](https://github.com/MarionQH/ogmaker/commit/db18b01f5ad6e407a599a3fc5fd56e7097087904)[FEATURE] Added a functional loading bar via app.js.
* [#79](https://github.com/MarionQH/ogmaker/commit/699b6d93fb73f2bdf950a932e440db3ac20f4b5b)[FEATURE] Added an info tooltip.
* [#79](https://github.com/MarionQH/ogmaker/commit/22fdc103ee9f717b379768c634d7112b2f025f2f) [FEATURE] Added a flash message when an OpenGraph is deleted.
* [#79](https://github.com/MarionQH/ogmaker/commit/d8cd1e87eaea3a9a83d1a32d89b3f377316b5585) [FEATURE] Added a message when a font is not supported.
* [#79](https://github.com/MarionQH/ogmaker/commit/25c348ccca063485ab8e0cabffe2cb90b0ae47ad) [FEATURE] Functional search in the font selection.message.

## 🏗️ Tech

* [#85](https://github.com/MarionQH/ogmaker/commit/6dce93c3cbb05f9c96e61f197ff155f59c8a7af2)[TECH] Cleaned up app.js and moved scripts.
* [#82](https://github.com/MarionQH/ogmaker/commit/5197bba5be038fe3314b22e9ffaf2a47ed4eb1ca)[TECH] Added Alpine.js to the project.

## 🧪 Tests

* [#88](https://github.com/MarionQH/ogmaker/commit/cc737fdae7eee9f88fbb75c0de7562fbaaadb95c)[TEST] Added integration and E2E tests in `adonisrc`.
* [#80](https://github.com/MarionQH/ogmaker/commit/a436ec3c5e9b5a8346c77ba5fad9f2b835e89f67)[TEST] Tests to verify the uniqueness of emails during registration.
* [#86](https://github.com/MarionQH/ogmaker/commit/f802e699a8ec65c3d293b382ae3634fe3c196690)[TEST] Tests for required fields in the registration form.

## 🐛 Bug Fixes

* [#81](https://github.com/MarionQH/ogmaker/commit/73240d26cb5edb4785fa26040ab50e2b136ab7b8)[BUGFIX]Fixed favicon and honeypot.
* [#89](https://github.com/MarionQH/ogmaker/commit/5c2bdf179bc4ebabf8e204780d7386fb8e0f2653)[BUGFIX]Fixed regex for text validation.
* [#84](https://github.com/MarionQH/ogmaker/commit/f75e2a144fabf472a2315b2ab21a347dc8f87457)[BUGFIX]Added `.env` file to the CI/CD workflow.

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
