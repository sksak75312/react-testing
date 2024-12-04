# Learn Testing
## React、Vitest、Testing-Library-React

|  特點  |  fireEvent  |	userEvent |
|----|---|----|
| 模擬行為 |單純觸發事件|	模擬真實使用者行為|
|細節支持|無，僅觸發事件本身|	支援焦點管理、逐字符輸入等上下文行為|
|測試速度|更快，因為僅模擬事件|	稍慢，但更接近真實情境|
|複雜場景（例如拖拽、鍵盤輸入）|	需要手動模擬完整行為|	提供更自然且豐富的模擬|
|建議使用場合|	簡單的事件觸發測試|	複雜交互測試（例如表單填寫、鍵盤操作）|


## 何時使用 fireEvent 和 userEvent
1. 使用 fireEvent
    * 測試事件觸發是否執行預期行為。
    * 快速測試簡單的 DOM 操作，例如按鈕點擊。
2. 使用 userEvent
    - 模擬真實使用者的交互行為。
    - 測試多步驟、複雜的交互，例如輸入文字、選擇下拉選單等。