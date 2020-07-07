import { False, True } from '@/bool';
import { Add, Div, Eq, Geq, Gt, IsPrime, Leq, Lt, Mod, Pred, Sub, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9 } from "@/nat";
import { expectType, TypeEqual } from "ts-expect";

expectType<TypeEqual<_0, Pred<_1>>>(true);

expectType<TypeEqual<Eq<_0, _0>, True>>(true);
expectType<TypeEqual<Eq<_0, _1>, False>>(true);
expectType<TypeEqual<Eq<_1, _0>, False>>(true);

expectType<TypeEqual<Leq<_0, _0>, True>>(true);
expectType<TypeEqual<Leq<_2, _0>, False>>(true);
expectType<TypeEqual<Leq<_2, _2>, True>>(true);
expectType<TypeEqual<Leq<_6, _2>, False>>(true);
expectType<TypeEqual<Leq<_0, _2>, True>>(true);
expectType<TypeEqual<Leq<_1, _3>, True>>(true);

expectType<TypeEqual<Lt<_0, _0>, False>>(true);
expectType<TypeEqual<Lt<_2, _0>, False>>(true);
expectType<TypeEqual<Lt<_2, _2>, False>>(true);
expectType<TypeEqual<Lt<_6, _2>, False>>(true);
expectType<TypeEqual<Lt<_0, _2>, True>>(true);
expectType<TypeEqual<Lt<_1, _3>, True>>(true);

expectType<TypeEqual<Geq<_1, _3>, False>>(true);

expectType<TypeEqual<Gt<_1, _3>, False>>(true);

expectType<TypeEqual<Add<_0, _0>, _0>>(true);
expectType<TypeEqual<Add<_0, _1>, _1>>(true);
expectType<TypeEqual<Add<_1, _1>, _2>>(true);
expectType<TypeEqual<Add<_3, _2>, _5>>(true);

expectType<TypeEqual<Sub<_0, _0>, _0>>(true);
expectType<TypeEqual<Sub<_2, _0>, _2>>(true);
expectType<TypeEqual<Sub<_6, _2>, _4>>(true);
expectType<TypeEqual<Sub<_4, _2>, _2>>(true);
expectType<TypeEqual<Sub<_1, _3>, _0>>(true);

expectType<TypeEqual<Div<_3, _2>, _1>>(true);
expectType<TypeEqual<Div<_4, _2>, _2>>(true);
expectType<TypeEqual<Div<_5, _2>, _2>>(true);
expectType<TypeEqual<Div<_5, _3>, _1>>(true);
expectType<TypeEqual<Div<_6, _1>, _6>>(true);
expectType<TypeEqual<Div<_1, _1>, _1>>(true);
expectType<TypeEqual<Div<_0, _1>, _0>>(true);
expectType<TypeEqual<Div<_0, _3>, _0>>(true);

expectType<TypeEqual<Mod<_3, _2>, _1>>(true);
expectType<TypeEqual<Mod<_4, _2>, _0>>(true);
expectType<TypeEqual<Mod<_5, _2>, _1>>(true);
expectType<TypeEqual<Mod<_5, _3>, _2>>(true);
expectType<TypeEqual<Mod<_6, _1>, _0>>(true);
expectType<TypeEqual<Mod<_1, _1>, _0>>(true);
expectType<TypeEqual<Mod<_0, _1>, _0>>(true);
expectType<TypeEqual<Mod<_0, _3>, _0>>(true);

expectType<TypeEqual<IsPrime<_0>, False>>(true);
expectType<TypeEqual<IsPrime<_1>, False>>(true);
expectType<TypeEqual<IsPrime<_2>, True>>(true);
expectType<TypeEqual<IsPrime<_3>, True>>(true);
expectType<TypeEqual<IsPrime<_4>, False>>(true);
expectType<TypeEqual<IsPrime<_5>, True>>(true);
expectType<TypeEqual<IsPrime<_6>, False>>(true);
expectType<TypeEqual<IsPrime<_7>, True>>(true);
expectType<TypeEqual<IsPrime<_8>, False>>(true);
expectType<TypeEqual<IsPrime<_9>, False>>(true);
