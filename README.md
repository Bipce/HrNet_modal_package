# P14 - Modal package for HrNet

## Introduction

HrNet modal package is a package that display a modal containing text with changeable classNames so you can design as
you want and a button.

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm i @bipce/hrnet_modal_package
    $ yarn add @bipce/hrnet_modal_package

## Using style props

Each element can be customised by applying your own className.
All classNames are optional.

| Name             | Description                                 | Optional ? |
|------------------|---------------------------------------------|:----------:|
| sectionClassName | Affects the design of the section element   |    YES     |
| pClassName       | Affects the design of the paragraph element |    YES     |
| btnClassName     | Affects the design of the button element    |    YES     |
| iconClassName    | Affects the design of the icon element      |    YES     |
| message          | Is the message you'll want the user to see  |   **NO**   |
| onHandleClick    | Affects the button action when click        |    YES     |

## Prerequisites

Before using the modal you'll need to install [@heroicons/react](https://heroicons.com/) in your project.

## Example usage

In the example I use it with tailwind, but you can use it with css classes.

```js
import { Modal } from "@bipce/hrnet_modal_package";

<Modal message="Employee is created !" iconClassName="size-5" onHandleClick={handleCloseModal}
       sectionClassName="absolute top-1/2 w-1/2 rounded border border-sky-50 bg-sky-900 p-5 text-center text-lg
                               shadow-lg shadow-slate-950"
       btnClassName="absolute -right-2 -top-3.5 flex items-center rounded-2xl border border-sky-50 bg-red-800 p-1
                           text-sm hover:border-slate-200 hover:bg-red-800"/>
```
