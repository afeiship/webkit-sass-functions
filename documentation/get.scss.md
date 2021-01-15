# get.scss
> 从map中取得所需要的元素

```scss
$map:(
  sm: (
    width: 100
  ),
  lg: (
    width: 200
  )
);

.demo{
  sm: get($map, 'sm.width');
  lg: get($map, 'lg.width');
}

// output
.demo {
  sm: 100;
  lg: 200;
}
```
