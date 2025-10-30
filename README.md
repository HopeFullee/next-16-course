### Next.js 16 학습용 토이 프로젝트

- #### Next 16 Major Patches

  - React Compiler Support (stable): Built-in integration for automatic memoization

    ```
    쉽게 말해서 useMemo, useCallback 훅 사용 없이도 빌드타임때 자동으로 Re-render가 불필요한 컴포넌트를 알아서 적용한다. (개꿀)
    ```

    적용법

    ```js
    // terminal
    npm install babel-plugin-react-compiler@latest
    ```

    ```js
    // next.config.ts
    const nextConfig: NextConfig = {
      reactCompiler: true,
    };
    ```
