import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { aaaState } from "./shared";

export default React.memo(function App() {
  // 测试 eslint
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const a = useCallback((item: { aaa?: string; bbb: number }): string => {
    return item.aaa ?? item.bbb.toString();
  }, []);

  // 测试 recoil
  const [aaa, setAaa] = useRecoilState(aaaState);

  return (
    <div className="flex flex-col min-w-[200px] min-h-[200px] bg-[pink] [&_div]:text-pink-700">
      <span>{aaa}</span>
      <button className="mr-auto px-1" onClick={() => setAaa((p) => p + 1)}>
        添加
      </button>
    </div>
  );
});
