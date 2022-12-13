import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import scss from 'rollup-plugin-scss'
import dts from "rollup-plugin-dts";


// Rollup config exports an array of configuration objects.
// For a library we need two config objects. 
//      1.Export JS component files. 
//      2.Exporting the types. 

export default [
    {
        input: "src/transportation/index.tsx",
        output: [
            {
                file:"transportation/index.js",
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            scss(),
            typescript({tsconfig: './tsconfig.json'}),
        ]
    },
    {
        input: "src/construction/index.tsx",
        output: [
            {
                file:"construction/index.js",
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            scss(),
            typescript({tsconfig: './tsconfig.json'}),
        ]
    },
    {
        input: "src/transportation/index.tsx",
        output: [{file:"transportation/index.d.ts", format: "esm"}],
        plugins:[dts()]
    },
    {
        input: "src/construction/index.tsx",
        output: [{file:"construction/index.d.ts", format: "esm"}],
        plugins:[dts()]
    }
]