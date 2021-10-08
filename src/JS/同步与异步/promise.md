resolve 触发后续 then 回调，如果 then 中抛出错误，则后续的 then 方法不会执行，而执行后续的 catch 方法。

* then正常返回一个resolved，里面有报错则返回rejected。
* catch正常返回一个resolved, 里面有报错则返回rejected。

```javascript
let p = Promise.resolve().then(() => {
  throw new Error("error");
});
p.then(() => {
  //这里的代码不会执行
}).catch(() => {
  //这里的代码将会执行
});
```
