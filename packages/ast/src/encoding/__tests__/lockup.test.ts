import { getNestedProto } from '@osmonauts/proto-parser';
import { defaultTelescopeOptions, expectCode, getTestProtoStore } from '../../../test-utils/'
import { AminoParseContext, ProtoParseContext } from '../context';
import { createProtoType } from '..';
import { createObjectWithMethods } from '../object';
import { createAminoConverter, makeAminoTypeInterface } from '../amino/index';
import cases from 'jest-in-case'

const store = getTestProtoStore();
store.traverseAll();

cases('osmosis/lockup/tx', opts => {
    const ref = store.findProto('osmosis/lockup/tx.proto');
    const context = new ProtoParseContext(ref, store, defaultTelescopeOptions);
    const aminoCtx = new AminoParseContext(ref, store, defaultTelescopeOptions);
    context.options.prototypes.typingsFormat.duration = opts.name;
    aminoCtx.options.prototypes.typingsFormat.duration = opts.name;
    expectCode(createProtoType(context, 'MsgLockTokens',
        getNestedProto(ref.traversed).MsgLockTokens
    ));
    expectCode(createObjectWithMethods(context, 'MsgLockTokens',
        getNestedProto(ref.traversed).MsgLockTokens
    ));
    expectCode(makeAminoTypeInterface({
        context: aminoCtx,
        proto: getNestedProto(ref.traversed).MsgLockTokens
    }));
    expectCode(createAminoConverter({
        context: aminoCtx,
        root: ref.proto,
        name: 'AminoConverter',
        protos: [getNestedProto(ref.traversed).MsgLockTokens]
    }));
}, [
    { name: 'duration' },
    { name: 'string' }
]);