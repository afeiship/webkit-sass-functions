# at.scss.md
> 从数组 list，取得任意的数据。

```scss
$list:(0,1,2,3,4);

.demo{
  first: at($list, 0);
  last: at($list, n);
  el1: at($list, 0);
  el2: at($list, 1);
  el3: at($list, 2);
  el4: at($list, 3);
  el5: at($list, 4);
}
// output
.demo {
  first: 0;
  last: 4;
  el1: 0;
  el2: 1;
  el3: 2;
  el4: 3;
  el5: 4;
}
```
