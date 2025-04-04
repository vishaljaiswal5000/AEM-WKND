// /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  ~ Copyright 2020 Adobe Systems Incorporated
//  ~
//  ~ Licensed under the Apache License, Version 2.0 (the "License");
//  ~ you may not use this file except in compliance with the License.
//  ~ You may obtain a copy of the License at
//  ~
//  ~     http://www.apache.org/licenses/LICENSE-2.0
//  ~
//  ~ Unless required by applicable law or agreed to in writing, software
//  ~ distributed under the License is distributed on an "AS IS" BASIS,
//  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  ~ See the License for the specific language governing permissions and
//  ~ limitations under the License.
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const path = require("path");

const BUILD_DIR = path.join(__dirname, "dist");
const CLIENTLIB_DIR = path.join(
  __dirname,
  '..',
  'ui.apps',
  'src',
  'main',
  'content',
  'jcr_root',
  'apps',
  'aem-sites',
  'core',
  'clientlibs'
);

const libsBaseConfig = {
  allowProxy: true,
  serializationFormat: "xml",
  cssProcessor: ["default:none", "min:none"],
  jsProcessor: ["default:none", "min:none"],
};

// Config for `aem-clientlib-generator`
module.exports = {
  context: BUILD_DIR,
  clientLibRoot: CLIENTLIB_DIR,
  libs: [
    {
      ...libsBaseConfig,
      name: "clientlib-brand-core",
      categories: ["aem-sites.core"],
      assets: {
        // Copy entrypoint scripts and stylesheets into the respective ClientLib
        // directories
        js: {
          cwd: "clientlib-brand-core",
          files: ["**/*.js"],
          flatten: false,
        },
        css: {
          cwd: "clientlib-brand-core",
          files: ["**/*.css"],
          flatten: false,
        },

        // Copy all other files into the `resources` ClientLib directory
        resources: {
          cwd: "clientlib-brand-core",
          files: ["**/*.*"],
          flatten: false,
          ignore: ["**/*.js", "**/*.css"],
        },
      },
    },
    {
      ...libsBaseConfig,
      name: "clientlib-brand-brand1",
      categories: ["aem-sites.brand1"],
      outputPath: path.join(
        __dirname,
        "..",
        "ui.apps",
        "src",
        "main",
        "content",
        "jcr_root",
        "apps",
        "aem-sites",
        'brand1',
        "clientlibs",
        "clientlib-brand-brand1"
      ),
      assets: {
        // Copy entrypoint scripts and stylesheets into the respective ClientLib
        // directories
        js: {
          cwd: "clientlib-brand-brand1",
          files: ["**/*.js"],
          flatten: false,
        },
        css: {
          cwd: "clientlib-brand-brand1",
          files: ["**/*.css"],
          flatten: false,
        },

        // Copy all other files into the `resources` ClientLib directory
        resources: {
          cwd: "clientlib-brand-brand1",
          files: ["**/*.*"],
          flatten: false,
          ignore: ["**/*.js", "**/*.css"],
        },
      },
    },{
      ...libsBaseConfig,
      name: "clientlib-brand-brand2",
      categories: ["aem-sites.brand2"],
      outputPath: path.join(
        __dirname,
        "..",
        "ui.apps",
        "src",
        "main",
        "content",
        "jcr_root",
        "apps",
        "aem-sites",
        'brand2',
        "clientlibs",
        "clientlib-brand-brand2"
      ),
      assets: {
        // Copy entrypoint scripts and stylesheets into the respective ClientLib
        // directories
        js: {
          cwd: "clientlib-brand-brand2",
          files: ["**/*.js"],
          flatten: false,
        },
        css: {
          cwd: "clientlib-brand-brand2",
          files: ["**/*.css"],
          flatten: false,
        },

        // Copy all other files into the `resources` ClientLib directory
        resources: {
          cwd: "clientlib-brand-brand2",
          files: ["**/*.*"],
          flatten: false,
          ignore: ["**/*.js", "**/*.css"],
        },
      },
    },
  ],
};


