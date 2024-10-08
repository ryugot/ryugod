/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '#',
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        offSide: true,
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
export var language = {
    defaultToken: 'invalid',
    tokenPostfix: '.ngs',
    keywords: [
        'A',
        'B',
        'C',
        'and',
        'block',
        'break',
        'breaks',
        'catch',
        'collector',
        'collect',
        'cond',
        'continue',
        'continues',
        'econd',
        'ematch',
        'eswitch',
        'do',
        'F',
        'global',
        'guard',
        'local',
        'match',
        'ns',
        'or',
        'return',
        'returns',
        'section',
        'switch',
        'TEST',
        'throw',
        'throws',
        'tor',
        'try',
        'type',
        'upvar',
        'while',
        'with',
        'X',
        'Y',
        'Z',
        'if',
        'then',
        'else',
        'for',
    ],
    builtins: [
        'Arg',
        'Argv',
        'ArgvMatcher',
        'C_WEXITSTATUS',
        'C_WTERMSIG',
        'ExitCode',
        'JsonData',
        'Pred',
        'SafeStr',
        'StrForTable',
        'Strs',
        'TODO',
        '_inspect_path_to_str',
        'abs',
        'access',
        'acquire',
        'after_last',
        'all',
        'any',
        'args',
        'arr_splat',
        'assert',
        'assert_array',
        'assert_base',
        'assert_bool',
        'assert_eq',
        'assert_exit_code',
        'assert_has',
        'assert_hash',
        'assert_hash_keys',
        'assert_hash_keys_values',
        'assert_in',
        'assert_match',
        'assert_min_len',
        'assert_output_has',
        'assert_path_exists',
        'assert_resolvable',
        'assert_string',
        'attrs',
        'band',
        'basename',
        'before_first',
        'bootstrap',
        'bootstrap_exception_catch_wrapper',
        'bootstrap_invoke',
        'bootstrap_print_compilation_warnings',
        'bootstrap_try_method',
        'bor',
        'bxor',
        'c_accept',
        'c_access',
        'c_bind',
        'c_chdir',
        'c_close',
        'c_closedir',
        'c_dlopen',
        'c_errno',
        'c_execve',
        'c_exit',
        'c_ffi_call',
        'c_ffi_prep_cif',
        'c_fork',
        'c_fstat',
        'c_getpid',
        'c_getppid',
        'c_gettimeofday',
        'c_gmtime',
        'c_isatty',
        'c_kill',
        'c_listen',
        'c_localtime',
        'c_lseek',
        'c_lstat',
        'c_mktime',
        'c_open',
        'c_opendir',
        'c_pcre_compile',
        'c_pcre_exec',
        'c_pipe',
        'c_poll',
        'c_pow',
        'c_pthread_attr_init',
        'c_pthread_cond_broadcast',
        'c_pthread_cond_destroy',
        'c_pthread_cond_init',
        'c_pthread_cond_signal',
        'c_pthread_cond_wait',
        'c_pthread_create',
        'c_pthread_join',
        'c_pthread_mutex_init',
        'c_pthread_mutex_lock',
        'c_pthread_mutex_unlock',
        'c_pthread_mutexattr_init',
        'c_pthread_mutexattr_settype',
        'c_pthread_self',
        'c_read',
        'c_readdir',
        'c_realpath',
        'c_recvfrom',
        'c_send',
        'c_socket',
        'c_stat',
        'c_strcasecmp',
        'c_strcmp',
        'c_strerror',
        'c_strftime',
        'c_strptime',
        'c_sysconf',
        'c_time',
        'c_waitpid',
        'c_write',
        'cached',
        'calculate_num_cols_to_show',
        'call',
        'ceil',
        'cell_display_width',
        'chdir',
        'child_fd',
        'chr',
        'close',
        'close_reading_end',
        'close_writing_end',
        'code',
        'column',
        'columns',
        'compile',
        'config',
        'converge',
        'copy',
        'count',
        'create',
        'created',
        'debug',
        'decode',
        'decode_hex',
        'decode_json',
        'decode_uri_component',
        'deeper',
        'del',
        'delete',
        'dflt',
        'die',
        'digest',
        'dir',
        'drop',
        'dump',
        'duplicates',
        'each',
        'each_chunk',
        'each_group_test',
        'each_idx_key_val',
        'each_idx_val',
        'eachk',
        'eachv',
        'echo',
        'echo_cli',
        'encode',
        'encode_hex',
        'encode_html',
        'encode_html_attr',
        'encode_json',
        'encode_uri_component',
        'ends_with',
        'ensure',
        'ensure_array',
        'error',
        'exception_specific_message',
        'exec',
        'exit',
        'expect',
        'fetch',
        'filter',
        'filterk',
        'filtero',
        'filterv',
        'finally',
        'find',
        'find_if_needed',
        'find_in_path',
        'finished',
        'finished_ok',
        'first',
        'flatten',
        'floor',
        'fork',
        'framed',
        'get',
        'glob',
        'global_not_found_handler',
        'globals',
        'gmtime',
        'group',
        'has',
        'has_index',
        'has_no',
        'hash',
        'hash_splat',
        'human_type_name',
        'id',
        'identity',
        'ids',
        'in',
        'index',
        'indexes',
        'inherit',
        'init',
        'inspect',
        'intersperse',
        'ip',
        'is',
        'is_blocked_group',
        'is_subtype',
        'isatty',
        'join',
        'keys',
        'kill',
        'last',
        'latest',
        'len',
        'limit',
        'lines',
        'll_hash_entry_key',
        'll_hash_entry_next',
        'll_hash_entry_val',
        'll_hash_head',
        'll_hash_tail',
        'll_is_global_variable_defined',
        'll_maybe_wrap',
        'll_resolve_global_variable',
        'll_set_global_variable',
        'll_thread_local',
        'load',
        'localtime',
        'log',
        'lstat',
        'lte',
        'main',
        'map',
        'map_base_idx',
        'map_idx_key_val',
        'map_idx_val',
        'mapk',
        'mapkv',
        'mapo',
        'mapv',
        'max',
        'maybe_print_stacktrace',
        'merge_sorted',
        'meta',
        'method_not_found_handler',
        'min',
        'myip',
        'next',
        'none',
        'nop',
        'normalize_presence_list',
        'not',
        'only',
        'open',
        'opt_prop',
        'ord',
        'params',
        'parent_fd',
        'partial',
        'partial_tail',
        'partition',
        'peek',
        'pfilter',
        'pid',
        'pmap',
        'pop',
        'pos',
        'pow',
        'ppid',
        'print_exception',
        'progress',
        'ptimes',
        'push',
        'push_all',
        'rand',
        'rand_uniq',
        'read',
        'realpath',
        'reduce',
        'register_column',
        'reject',
        'rejectk',
        'rejectv',
        'release',
        'replace',
        'report',
        'req_prop',
        'require',
        'resolve_instruction_pointer',
        'retry',
        'reverse',
        'round',
        'run',
        'set',
        'set_last_path_element',
        'shift',
        'skip',
        'sort',
        'sortk',
        'sortv',
        'specific',
        'split',
        'srand',
        'starts_with',
        'stat',
        'status',
        'stdlib_aws_straighten_tags',
        'store',
        'strftime',
        'subset',
        'sum',
        'sysconf',
        'take',
        'tap',
        'test',
        'the_one',
        'throw_if_no_next',
        'time',
        'times',
        'trim',
        'trunc',
        'typeof',
        'uniq',
        'unshift',
        'update',
        'users_ids',
        'values',
        'wait',
        'warn',
        'width',
        'without',
        'words',
        'write',
        'zip',
        'init',
        'call',
        'args',
        'true',
        'false',
        'null',
        'super',
        'AWS',
        'CHARS',
        'Doc',
        'OS',
    ],
    typeKeywords: [
        'Absent',
        'AllOf',
        'Any',
        'AnyOf',
        'ArgsMismatch',
        'Arr',
        'ArrDiff',
        'ArrIter',
        'ArrLike',
        'ArrSplatMethodParam',
        'AssertFail',
        'AtPath',
        'AwsElb',
        'AwsElbRes',
        'AwsImage',
        'AwsImageRes',
        'AwsInstance',
        'AwsInstanceRes',
        'AwsRecordSet',
        'AwsRecordSetRes',
        'AwsRes',
        'AwsResDef',
        'AwsSecGroup',
        'AwsSecGroupRes',
        'AwsSubnet',
        'AwsSubnetRes',
        'AwsVpc',
        'AwsVpcRes',
        'Backtrace',
        'BasenameArgumentFail',
        'BasicType',
        'BasicTypeInstance',
        'Block',
        'BlockDevice',
        'Bool',
        'Box',
        'BoxFail',
        'CError',
        'CLib',
        'CSym',
        'C_DIR',
        'CallFail',
        'CdFail',
        'CharDevice',
        'CleanupPolicy',
        'CollectingPipeFromChildToParentProcess',
        'Command',
        'CommandRedir',
        'CommandsPipe',
        'CommandsPipeline',
        'CompileFail',
        'ConstIter',
        'DecodeFail',
        'DecodeHints',
        'DelimStr',
        'Diff',
        'Dir',
        'DirFail',
        'DivisionByZero',
        'DlopenFail',
        'DontKnowHowToCall',
        'Eachable',
        'Eachable1',
        'Eachable2',
        'ElementNotFound',
        'EmptyArrayFail',
        'EmptyBox',
        'EmptyEachableFail',
        'Error',
        'ExactPresence',
        'Exception',
        'Exit',
        'ExitCodeFail',
        'ExitException',
        'Failure',
        'FailuresException',
        'FatalError',
        'FieldNotFound',
        'FifoFile',
        'File',
        'FileIOFail',
        'FilterIter',
        'FullBox',
        'Fun',
        'FunIter',
        'GlobalNotFound',
        'Hash',
        'HashDiff',
        'HashIter',
        'HashLike',
        'HashSplatMethodParam',
        'Hook',
        'IfExists',
        'Ifx',
        'IndexNotFound',
        'InstantiatingAbstractType',
        'Int',
        'InternalError',
        'InvalidArgument',
        'InvalidCommandLineArguments',
        'Iter',
        'JWT',
        'JsonDecodeFail',
        'KeepCleanupPolicy',
        'KeepOnErrorCleanupPolicy',
        'KeyNotFound',
        'KillFail',
        'LLHashEntry',
        'Lines',
        'Lit',
        'Lock',
        'LockFail',
        'LookupFail',
        'MainFail',
        'MapIter',
        'MatchContext',
        'MatchFailure',
        'MatchResult',
        'MatchSuccess',
        'MaybeIfx',
        'MaybePfx',
        'MaybeSfx',
        'MethodNotFound',
        'MethodParam',
        'MethodParams',
        'MultiMethod',
        'MustIfx',
        'MustPfx',
        'MustSfx',
        'NamedInstances',
        'Namespace',
        'NativeMethod',
        'NgsStrComp',
        'NgsStrCompExp',
        'NgsStrCompImm',
        'NgsStrCompSplatExp',
        'NoData',
        'NoNext',
        'NormalExit',
        'NormalType',
        'NormalTypeConstructor',
        'NormalTypeInstance',
        'Not',
        'NotImplemented',
        'Null',
        'Num',
        'NumRange',
        'OptionalMethodParam',
        'ParamsMatchN',
        'ParamsMatchY',
        'PartialPresence',
        'Path',
        'PatternAction',
        'Pfx',
        'Pipe',
        'PipeCreateFail',
        'PipeFromChildProcess',
        'PipeFromChildToParentProcess',
        'PipeFromParentToChildProcess',
        'PipeToChildProcess',
        'PredRange',
        'Presence',
        'Present',
        'Process',
        'ProcessRedir',
        'ProcessesPipeline',
        'Program',
        'ProgramNotFound',
        'Range',
        'RangeIter',
        'ReadFail',
        'ReadingPipeBetweenChildren',
        'Real',
        'ReentrantLock',
        'RegExp',
        'RegExpCompileFail',
        'RemoveCleanupPolicy',
        'Repeat',
        'RequireFail',
        'RequiredMethodParam',
        'Res',
        'ResDef',
        'ResetPath',
        'Result',
        'ResultFail',
        'Results',
        'ResultsException',
        'RetryBodyMissing',
        'RetryFail',
        'ReturnFromBlock',
        'Seq',
        'Set',
        'Sfx',
        'SkipError',
        'SocketFile',
        'SplatMethodParam',
        'StackDepthFail',
        'StackOverflow',
        'Stat',
        'StatFail',
        'Stats',
        'Str',
        'SubSeq',
        'Success',
        'SwitchFail',
        'SwitchParseFail',
        'Symlink',
        'Table',
        'TestFail',
        'TestMessage',
        'TestsResults',
        'Thread',
        'ThreadFail',
        'Threads',
        'Time',
        'TimeFail',
        'TmpDir',
        'TmpFile',
        'TmpFsObj',
        'TtyCheckFail',
        'Type',
        'UndefinedLocalVar',
        'UndefinedUpVar',
        'UserDefinedMethod',
        'WriteFail',
        'WritingPipeBetweenChildren',
        'c_ffi_cif',
        'c_ffi_type',
        'c_pthread_attr_t',
        'c_pthread_cond_t',
        'c_pthread_mutex_t',
        'c_pthread_mutexattr_t',
        'c_pthread_t',
        'c_sockaddr',
        'c_sockaddr_in',
        'c_sockaddr_un',
        'c_tm',
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z_]\w*/, 'tag'],
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/((#|doc).*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'/, 'string.escape', '@stringBody'],
            [/`$/, 'string.escape', '@popall'],
            [/`/, 'string.escape', '@stringBody2'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        stringBody2: [
            [/[^\\`$]+/, 'string', '@popall'],
            [/[^\\`]+/, 'string'],
            [/\\./, 'string'],
            [/`/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};