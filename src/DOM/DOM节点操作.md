# DOM节点操作
* 获取DOM节点
  * document.querySelector('')
  * document.getElementById('')

## 插入节点
appendChild()
## 移动节点
把现有节点插入到其他节点就完成了移动，原有节点离开它原有的位置，移动到其他位置。

## 获取父节点
parentNode;
## 获取子节点
childNodes: 获取目的节点的子节点，但子节点列表中包括子节点中的文本节点。
children: 获取目标节点的子节点，不包括子节点中的文本节点。
## 删除子元素
removeChild()

# DOM性能
* 减少DOM的操作，将多次操作改为一次操作
```javascript
//创建一个文档片段,然后可以向这个文档片段执行任何文档操作。
//对创建的文档片段进行DOM操作不会造成重排或重绘。
const frag = document.createDocumentFragment()
```
* 对DOM查询做缓存
```javascript
let dom = document.getElementById('#app')
for(let i = 0; i < length; i++){
  dom.innerHTML = i
} 
```

* attribute
修改html属性，会改变html结构
* property
修改DOM对象属性，不会体现到html结构

两者都有可能引起DOM重新渲染。
