1. 初始化脚手架
   ```ts
   yarn create vite my-vite-react-ts-app --template react-ts
   ```
2. 使用 tailwindcss 并设置 autoprefixer

   ```ts
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   要想 autoprefixer 起作用 就要配置 package.json 中的 browserslist

   ```ts
   "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 10"
   ]
   ```

3. 使用 recoil

   ```ts
      npm install -D recoil
      // 修改main文件使得 RecoilRoot 放于 App 外
   ```

4. 配置 eslint

   ```ts
     npm init @eslint/config
   ```

5. 配置 code-workspace 文件

   1. 文件 -> 将工作区另存为: 生成默认的 .code-workspace 文件
   2. 设置 -> 搜 Code Actions On Save , 点击 在 setting.json 中编辑, 后添加 organizeImports
   3. 设置 -> 搜 formatOnSave 并勾选

6. 安装并启动

   ```ts
   yarn
   yarn dev
   ```

7. extra
   1. 构建时导入: postcss-import
