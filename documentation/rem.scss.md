# rem.scss
> 与rem有关的计算。

```scss
// input
.demo{
  listpx: rem1px(100, px);
  list1: rem1px(375);
  list2: rem2px(750);
}

// output
.demo {
  listpx: 100px;
  list1: 1rem;
  list2: 1rem;
}
```
