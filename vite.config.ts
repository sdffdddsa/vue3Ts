import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'//按需引入UI组件
import AutoImport from 'unplugin-auto-import/vite'//按需引入vue插件
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'


export default defineConfig({
  server:{
    proxy:{
      '/api/':{
        target:'http://shengxinjing.cn:7001/',
        changeOrigin:true,
        secure:false,//是否是https
        rewrite:(path)=>path.replace(/^\/api/,'')//重写地址
      }
    }
  },
  //插件
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts:'./env.d.ts'
    }),
    Components({
      resolvers: [
        AntDesignVueResolver()//antDesign按需引入
      ],
      dts:true//ts识别文件用
    })
  ],
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')//路径省略
    }
  },
})
