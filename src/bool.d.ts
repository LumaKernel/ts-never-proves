export type True = { bool: true }

export type False = { bool: false }

export type Bool = True | False

export type UnwrapBool<A> =
  A extends { bool: infer Inner }
  ? Inner extends true
    ? true
    : false
  : false;

export type And<A, B> =
  A extends True
  ? B extends True
    ? True
    : False
  : False;

export type Not<B> = B extends True ? False : True;
