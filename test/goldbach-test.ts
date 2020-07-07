import { False } from '@/bool';
import { _IsDisproof } from '@/goldbach';
import { _0, _4, _6, _8 } from "@/nat";
import { expectType, TypeEqual } from "ts-expect";

expectType<TypeEqual<_IsDisproof<_4, _0>, False>>(true);
expectType<TypeEqual<_IsDisproof<_6, _0>, False>>(true);
expectType<TypeEqual<_IsDisproof<_8, _0>, False>>(true);

// @ts-expect-error
type t = _IsDisproof<_10, _0>;  // Type instantiation is excessively deep and possibly infinite.
