# at.scss.md
> 从数组 list，取得任意的数据。

```scss
$list:(0,1,2,3,4,5);

.demo{
  v0: at($list, first);
  vn: at($list, last);
  vi: at($list, 2);
}

// output
.demo {
  v0: 0;
  vn: 5;
  vi: 0;
}
```
