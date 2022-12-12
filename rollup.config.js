import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// Rollup config exports an array of configuration objects.
// For a library we need two config objects. 
//      1.Export JS component files. 
//      2.Exporting the types. 

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/cjs/index.js", //File that gets exported.
                format: "cjs", 
                sourcemap: true
            },
            {
                file:"dist/esm/index.js",
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({tsconfig: './tsconfig.json'})
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{file:"dist/index.d.ts", format: "esm"}],
        plugins:[dts()]
    }
]