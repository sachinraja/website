---
title: 'Object'
---

`Object` is very easy to confuse with the use of `Class`. Unlike `Class` you can't assign `function` or `method` to `Object`.

```rust title=lib.rs
#[napi(object)]
pub struct Pet {
  pub name: String,
  pub kind: u32,
}
```

Any `impl` block of this `struct` will not affect to the JavaScript `Object`.

:::caution
If you want a convert Rust `struct` into JavaScript `Object` using `#[napi(object)]` attribute, you need to mark all of the fields of it as `pub`.
:::

Once `struct` was marked as `#[napi(object)]`, you can use it as function arguments type or return type.

```rust title=lib.rs
#[napi(object)]
pub struct Pet {
  pub name: String,
  pub kind: u32,
}

#[napi]
fn print_pet(pet: Pet) {
  println!("{}", pet.name);
}

#[napi]
fn create_cat() -> Pet {
  Pet {
    name: "cat".to_string(),
    kind: 1,
  }
}
```

:::caution
The JavaScript Object passed in or returned from `Rust` is cloned. Which means any mutation on JavaScript `Object` will not affect the original Rust `struct`. And any mutation on Rust `struct` will not affect the JavaScript `Object` either.
:::
