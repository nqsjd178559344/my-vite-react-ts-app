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

4. 安装并启动

   ```ts
   yarn
   yarn dev
   ```

5. extra
   1. 构建时导入 postcss-import
