#Web前端自动化测试Workshop
希望可以通过此次Workshop让大家了解到如何使用一些好的工具帮助我们进行Web前端自动化测试
##生产代码在哪里？
此次Workshop所选用的代码为典型的利用JavaScript对DOM进行增、删、改、查操作，所有代码都来源自[todoMVC](https://github.com/addyosmani/todomvc)。

基于jquery的代码请见`todo/jquery`，打开`index.html`即可实际体验

基于backbone的代码请见`todo/backbone`，打开`index.html`即可实际体验
##测试代码应该写到哪里？
测试基于[jasmine测试框架](https://github.com/pivotal/jasmine)，并且引用了[jasmine-jquery](https://github.com/velesin/jasmine-jquery)来帮助针对DOM的测试。

对基于jquery的生产代码测试，请写到`spec/javascripts/jquerySpec.js`

对基于backbone的生产代码测试，请写到`spec/javascripts/backboneSpec.js`
##如何运行测试？
对于有ruby环境的朋友，可以安装gem后运行`rake jasmine`并在浏览器中打开`localhost:8888`来运行测试

对于没有ruby环境的朋友，可以直接打开`spec/runner.html`来运行测试
