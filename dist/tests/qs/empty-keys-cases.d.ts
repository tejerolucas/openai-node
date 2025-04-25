export declare const empty_test_cases: ({
    input: string;
    with_empty_keys: {
        ''?: never;
        a?: never;
        foo?: never;
        ' '?: never;
    };
    stringify_output: {
        brackets: string;
        indices: string;
        repeat: string;
    };
    no_empty_keys: {
        a?: never;
        foo?: never;
        0?: never;
        1?: never;
        ' '?: never;
        deep?: never;
    };
} | {
    input: string;
    with_empty_keys: {
        '': string;
        a?: never;
        foo?: never;
        ' '?: never;
    };
    stringify_output: {
        brackets: string;
        indices: string;
        repeat: string;
    };
    no_empty_keys: {
        a?: never;
        foo?: never;
        0?: never;
        1?: never;
        ' '?: never;
        deep?: never;
    };
} | {
    input: string;
    with_empty_keys: {
        '': string[];
        a?: never;
        foo?: never;
        ' '?: never;
    };
    stringify_output: {
        brackets: string;
        indices: string;
        repeat: string;
    };
    no_empty_keys: {
        a?: never;
        foo?: never;
        0?: never;
        1?: never;
        ' '?: never;
        deep?: never;
    };
} | {
    input: string;
    with_empty_keys: {
        '': string;
        a: string[];
        foo?: never;
        ' '?: never;
    };
    stringify_output: {
        brackets: string;
        indices: string;
        repeat: string;
    };
    no_empty_keys: {
        a: string[];
        foo?: never;
        0?: never;
        1?: never;
        ' '?: never;
        deep?: never;
    };
} | {
    input: string;
    with_empty_keys: {
        a: string;
        ''?: never;
        foo?: never;
        ' '?: never;
    };
    no_empty_keys: {
        a: string;
        foo?: never;
        0?: never;
        1?: never;
        ' '?: never;
        deep?: never;
    };
    stringify_output: {
        brackets: string;
        indices: string;
        repeat: string;
    };
} | {
    input: string;
    with_empty_keys: {
        '': string;
        foo: string;
        a?: never;
        ' '?: never;
    };
    no_empty_keys: {
        foo: string;
        a?: never;
        0?: never;
        1?: never;
        ' '?: never;
        deep?: never;
    };
    stringify_output: {
        brackets: string;
        indices: string;
        repeat: string;
    };
} | {
    input: string;
    with_empty_keys: {
        '': string[];
        ' ': string[];
        a?: never;
        foo?: never;
    };
    stringify_output: {
        brackets: string;
        indices: string;
        repeat: string;
    };
    no_empty_keys: {
        0: string;
        1: string;
        ' ': string[];
        a?: never;
        foo?: never;
        deep?: never;
    };
} | {
    input: string;
    with_empty_keys: {
        '': string[];
        a: string[];
        foo?: never;
        ' '?: never;
    };
    no_empty_keys: {
        0: string;
        1: string;
        a: string[];
        foo?: never;
        ' '?: never;
        deep?: never;
    };
    stringify_output: {
        brackets: string;
        indices: string;
        repeat: string;
    };
} | {
    input: string;
    with_empty_keys: {
        '': {
            deep: string[];
        };
        a?: never;
        foo?: never;
        ' '?: never;
    };
    stringify_output: {
        brackets: string;
        indices: string;
        repeat: string;
    };
    no_empty_keys: {
        deep: string[];
        a?: never;
        foo?: never;
        0?: never;
        1?: never;
        ' '?: never;
    };
} | {
    input: string;
    with_empty_keys: {
        '': string[];
        a?: never;
        foo?: never;
        ' '?: never;
    };
    stringify_output: {
        brackets: string;
        indices: string;
        repeat: string;
    };
    no_empty_keys: {
        0: string;
        1: string;
        a?: never;
        foo?: never;
        ' '?: never;
        deep?: never;
    };
})[];
