
type Nat = { prev: Nat } | {}

type O = {}
type S<N extends Nat> = {
  prev: N;
}
type Prev<N extends Nat> = {_: N} extends {_: { prev: infer NPrev }} ? NPrev : never;



