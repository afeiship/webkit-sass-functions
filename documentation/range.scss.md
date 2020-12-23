# range.scss
> 生成一个 range 的list。

```scss
// input
.demo{
  list1: range(1,9);
  list2: range(1,9,2);
  list3: range(10,100,10);
}

// output
.demo {
  list1: 1 2 3 4 5 6 7 8 9;
  list2: 1 3 5 7 9;
  list3: 10 20 30 40 50 60 70 80 90 100;
}
```
