import { False, Not, True, UnwrapBool } from '@/bool';

type UnwrapNat<T> =
  T extends { nat: infer Inner }
  ? Inner
  : never;

// pred: predecessor
export type Nat = { pred: Nat } | {};

export type O = {}
export type S<N> = {
  pred: N;
}

export type _0 = O;
export type _1 = S<_0>;
export type _2 = S<_1>;
export type _3 = S<_2>;
export type _4 = S<_3>;
export type _5 = S<_4>;
export type _6 = S<_5>;
export type _7 = S<_6>;
export type _8 = S<_7>;
export type _9 = S<_8>;
export type _10 = S<_9>;

export type Pred<N> =
  N extends { pred: infer NPred }
  ? NPred extends Nat
    ? NPred
    : O
  : O;

export type Add<N, M> =
  Eq<N, O> extends True
  ? M
  : Eq<M, O> extends True
    ? N
    : {
      pred: Pred<Add<Pred<N>, S<M>>>;
    };

export type Sub<N, M> =
  Leq<N, M> extends True
  ? O
  : Eq<M, O> extends True
    ? N
    : {
      pred: Pred<Sub<Pred<N>, Pred<M>>>;
    };

export type Mul<N, M> =
  Eq<N, O> extends True
  ? O
  : {
    pred: Pred<Add<M, Mul<Pred<N>, M>>>;
  };

export type Div<N, M> =
  Eq<N, O> extends True
  ? O
  : Lt<N, M> extends True
    ? O
    : {
      pred: Div<Sub<N, M>, M>;
    };

type Mod_<N, M> =
  Lt<N, M> extends True
  ? { nat: N }
  : Eq<N, O> extends True
    ? { nat: O }
    : {
      nat: UnwrapNat<Mod_<Sub<N, M>, M>>;
    };

export type Mod<N, M> = UnwrapNat<Mod_<N, M>>;

export type Eq<N, M> = N extends M ? M extends N ? True : False : False;
export type Leq<N, M> =
  Eq<N, O> extends True
  ? True
  : Eq<M, O> extends True
    ? False
    : {
      bool: UnwrapBool<Leq<Pred<N>, Pred<M>>>;
    };
export type Geq<N, M> = Leq<M, N>;
export type Lt<N, M> = Not<Geq<N, M>>;
export type Gt<N, M> = Not<Leq<N, M>>;

type IsPrime_PropA<N, M> =
  Eq<N, M> extends True
  ? True
  : Eq<Mod<N, M>, O> extends True
    ? False
    : {
      bool: UnwrapBool<IsPrime_PropA<N, S<M>>>
    };

export type IsPrime<N>=
  Eq<N, O> extends True
  ? False
  : Eq<N, _1> extends True
    ? False
    : IsPrime_PropA<N, _2>;

