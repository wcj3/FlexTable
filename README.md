# FlexTable
A cross-browser + platform, responsive solution to creating modern tables using Flexbox.

## Why FlexTable?

FlexTable uses [FlexBox] (https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) to create modern & painless tables. Don't believe me? Try creating a table with fixed headers and a scrollbar. There are multiple ways to do it [(see here)](http://stackoverflow.com/questions/19559197/how-to-make-scrollable-table-with-fixed-headers-using-css) but they are a bit strange. With FlexTable, you can avoid setting min or max widths and let FlexBox do the heavy lifting. This solution has been thoroughly tested and is currently used in production on a medium-sized corporate application. And it's lightweight, currently tipping the scales around 3 kB.

## Show Me a Demo

https://wcj3.github.io/FlexTable/

## Install

npm install flextable

bower install flextable-css

## How to use

#### Format
```
<div class="flextable" data-color="light-blue">
    <div class="flextable__header flextable__header---fixed">
        <div class="flextable__row">
            <div><span>Column 1</span></div>
            <div><span>Column 2</span></div>
            <div><span>Super long Column 2, Super long Column 2</span></div>
        </div>
    </div>
    <div class="flextable__body flextable__body--fixed" data-max-height="3">
        <div class="flextable__row">
            <div>
                <span>Lorem ipsum dolor sit amet, </span>
            </div>
            <div>
                <span>Phasellus iaculis nisi est.</span>
            </div>
            <div>
                <span>Aliquam sit amet tortor sed sapien </span>
            </div>
        </div>
    </div>
</div>
```

##### More on flextable__row class
Each 'flextable__row' class is expected to have the following structure:

```
<div class="flextable__row">
    <div><span>Column 1</span></div>
    <div><span>Column 2</span></div>
    <div><span>Super long Column 2, Super long Column 2</span></div>
</div>
```

#### Setting max-height of body for fixed tables
Note: Only 3-6 is currently supported

.flextable--body-fixed[data-max-height='5']

#### Select preset color
Note: Only light-blue, red, & green are supported
 ```
<div class="flextable" data-color="red">
 ```
