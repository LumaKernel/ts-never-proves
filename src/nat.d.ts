export type Nat = { prev: Nat } | {};

export type O = {}
export type S<N extends Nat> = {
  prev: N;
}

type _0 = O;
type _1 = S<_0>;
type _2 = S<_1>;
type _3 = S<_2>;
type _4 = S<_3>;
type _5 = S<_4>;
type _6 = S<_5>;
type _7 = S<_6>;

export type Prev<N extends Nat> =
  { _: N } extends { _: { prev: infer NPrev } }
  ? { _: NPrev } extends { _: Nat }
  ? NPrev
  : O
  : O;

export type Add<N extends Nat, M extends Nat> =
  { _: N } extends { _: O }
  ? M
  : {
    prev: Prev<Add<Prev<N>, S<M>>>
  };

export type Sub<N extends Nat, M extends Nat> =
  { _: M } extends { _: O }
  ? N
  : {
    prev: Prev<Sub<Prev<N>, Prev<M>>>
  };

export type Mul<N extends Nat, M extends Nat> =
  { _: N } extends { _: O }
  ? O
  : {
    prev: Prev<Add<M, Mul<Prev<N>, M>>>
  };

export type Div<N extends Nat, M extends Nat> =
  { _: N } extends { _: O }
  ? O
  : {
    prev: Prev<S<Div<Sub<N, M>, M>>>
  };

export type Mod<N extends Nat, M extends Nat> =
  { _: Lt<N, M> } extends { _: O }
  ? N
  : {
    prev: Prev<Mod<Sub<N, M>, M>>
  };

type True = { _: true }
type False = { _: false }
type Bool = True | False
export type UnwrapBool<B extends Bool> =
  { _: B } extends { _: { _: infer BInner } }
  ? { _: BInner } extends { _: true }
    ? true
    : false
  : false;
type ShouldBeBool<T> = { _: T } extends { _: Bool } ? T : False;
type Not<T> = { _: T } extends { _: True } ? True : False;
export type Leq<N extends Nat, M extends Nat> =
  { _: N } extends { _: O }
  ? True
  : { _: M } extends { _: O }
  ? False
  : { _: UnwrapBool<Leq<Prev<N>, Prev<M>>> };
export type Geq<N extends Nat, M extends Nat> = Leq<M, N>;
export type Lt<N extends Nat, M extends Nat> = Not<Geq<N, M>>;
export type Gt<N extends Nat, M extends Nat> = Not<Leq<N, M>>;

type ProbA<N extends Nat> =
  { _: N } extends { _: _0 }
    ? True
    : { _: N } extends { _: _1 }
      ? True
      : { _: Mod<N, _2> } extends { _: True }
        ? { _: UnwrapBool<ProbA<Div<N, _2>>> }
        : { _: UnwrapBool<ProbA<Mul<N, _3>>> }


