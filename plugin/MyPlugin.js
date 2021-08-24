class MyPlugin {
    constructor() {
        console.log("插件创建了")
    }
    apply(compiler) {
        compiler.hooks.run.tap("MyPlugin", (compilation) => {
            debugger
            console.log('webpack 构建正在启动！');
        });
    }
}

module.exports = MyPlugin;