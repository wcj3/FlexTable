# FlexTable (Beta)
A lightweight solution to create tables using Flexbox. 

## Why FlexTable?

FlexTable uses [FlexBox] (https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) to create modern & painless tables. Don't believe me? Try creating a table with fixed headers and a scrollbar. There are multiple ways to do it [(see here)](http://stackoverflow.com/questions/19559197/how-to-make-scrollable-table-with-fixed-headers-using-css) but they are a bit strange. With FlexTable, you can avoid setting min or max widths and let FlexBox do the heavy lifting. This solution has been thoroughly tested and is currently used in production on a medium-sized corporate application. And it's lightweight, currently tipping the scales at 2.91 kB.

## Show Me a Demo

https://wcj3.github.io/FlexTable/

## Install

npm install flextable

## How to use

#### FlexTable with fixed headers and scrollable body

```
<div class="flextable">
  <div class="flextable--header flextable--header-fixed">
    <div class="flextable--row">
      <div class="flextable--cell"><span>Column 1</span></div>
      <div class="flextable--cell"><span>Column 2</span></div>
      <div class="flextable--cell"><span>Super long Column 2, Super long Column 2</span></div>
    </div>
  </div>
  <div class="flextable--body flextable--body-fixed" data-max-height="3">
    <div class="flextable--row">
      <div class="flextable--cell">
        <span class="flextable--data">Lorem ipsum dolor sit amet, </span>
      </div>
      <div class="flextable--cell">
        <span class="flextable--data">Phasellus iaculis nisi est.</span>
      </div>
      <div class="flextable--cell">
        <span class="flextable--data">Aliquam sit amet tortor sed sapien </span>
      </div>
    </div>
   <div class="flextable--row">
    <div class="flextable--cell">
      <span class="flextable--data"></span>
    </div>
    <div class="flextable--cell">
      <span class="flextable--data">Phasellus iaculis nisi est.</span>
    </div>
    <div class="flextable--cell">
      <span class="flextable--data">Donec lorem eros, pulvinar vulputate ante vitae, dignissim tempor sapien.</span>
    </div>
  </div>            
 </div>
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



