# range.scss
> 生成一个 range 的list。

```scss
// input
.demo{
  list1: range(1,9);
  list2: range(1,9,2);
}

// output
.demo {
  list1: 1 2 3 4 5 6 7 8 9;
  list2: 1 3 5 7 9;
}
```
