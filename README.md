## MaybeHas

`maybeHas` evaluates infinitely nested properties of a given object for a *truthy* value

### Usage

`maybeHas` expects the target object on which you want to evaluate nested properties; it returns a utility function containing a closure around said object:

**Example**
```
var maybeHas = require('maybeHas');

var obj = {
    a: 1,
    ...
};


var objHas = maybeHas(obj);
```

The returned utility expects a string that denotes the sequence of nested properties to evaluate against. These properties are delimited by a period `.`:

**Example**
```
/* check for the existence of a truthy value at obj.a.b.c */
objHas('a.b.c');
```
