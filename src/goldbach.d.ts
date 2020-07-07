import {O, S, Pred, IsPrime, Eq, _4} from "@/nat"
import {True, False, UnwrapBool, And} from "@/bool"

export type _IsDisproof<N, M> =
  Eq<N, O> extends True
  ? True
  : And<IsPrime<N>, IsPrime<M>> extends True
    ? False
    : {
      bool: UnwrapBool<_IsDisproof<Pred<N>, S<M>>>;
    };

export type _NoDisproofFrom<N> =
  _IsDisproof<N, O> extends True
  ? False
  : {
    bool: UnwrapBool<_NoDisproofFrom<S<S<N>>>>;
  };

export type Goldbach = _NoDisproofFrom<_4>;  // <- saying any ヽ(~～~ )ノ
