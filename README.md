# ej2-ng-grids-async-pipe

Grid can be bound with Observable or Promise object. The Observable or Promise object should be piped into grid using the async pipe.

## Description

When performing grid actions such as paging, sorting and grouping etc. the " dataStateChange " event will be triggered and we need to resolve the Observable based on the new grid data state. With AsyncPipe we use observables directly to the data, without having to store the result on an intermediate property or variable.

In this demo, simply select the paging and click the column header to sort a column, multiple sorting is also enabled. To group a specify column, drag and drop the column in the group drop area. To enable paging, sorting and grouping, set the allowPaging , allowSorting and allowGrouping as true.

## Installing

To install all dependent packages, use the below command

```
npm install
```

## Run sample

To run the sample, use the below command

```
npm start
```
