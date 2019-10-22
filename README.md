# vue-micro-frontends
微前端 vue demo

## 开发

- 方式一，在本地启动所有app

```sh
cd root-html-file
npm install
npm run serve
```

```sh
cd app1
npm install
npm run serve
```

```sh
cd app2
npm install
npm run serve
```

```sh
cd navbar
npm install
npm run serve
```

访问 http://localhost:5000

- 方式二，在本地启动一个app

这种方式要求线上已经部署了你的web，访问你的web后，在浏览器里的console里，运行`localStorage.setItem('overrides-ui', true)`。刷新浏览器后你会发现右下角多了一个黄色按钮。这是个神奇的按钮，点击之后你可以把线上模块替换成你本地起的app，然后你就可以调试你的本地app了。