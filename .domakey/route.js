const help = `Adds a new React 'route' component.

This will create the new route folder (/src/containers/MyrouteName) and the routes files.

\`npm run create route MyRouteName\` or \`yarn run create route MyRouteName\`

`;

module.exports = async ({ cliArgs, cliFlags, makey, templage }) => {
    if (cliFlags['h']) {
        makey.print(help);
        return;
    }

    const routeName = makey.toLowerCaseFirst(
        cliArgs[0] || (await makey.ask('Name of your route:'))
    );
    if (!routeName) throw Error("Please provide a route name");

    const authTypeRaw = makey.toLowerCaseFirst(
        cliArgs[1] || (await makey.ask('Is this a private route? (y)es or (n)o:')) || 'y',
    );
    const authType = {
        y: true,
        n: false
    }[authTypeRaw[0].toLowerCase()];

    const RouteName = makey.toUpperCaseFirst(routeName);
    const containerName = `${RouteName}Container`;
    const screenName = `${RouteName}Screen`;
    const styleName = RouteName.replace(/([A-Z])/g, '-$1').replace('-', '').toLowerCase();

    const path = makey.toLowerCaseFirst(
        cliArgs[1] || (await makey.ask('Specify route path (/):'))
    );
    const ROUTE_NAME = cliFlags['y']
      ? makey.camelToSnakeCaps(routeName)
      : (await makey.ask(
      `Identifier for your route: (${makey.camelToSnakeCaps(routeName)})`
    )) || makey.camelToSnakeCaps(routeName);

    const containerBody = `import React from 'react';
import ${screenName.replace('Sreen','')} from './${screenName}';

export default function ${containerName}(): JSX.Element {
    return <${screenName.replace('Sreen','')} />;
}
`;

    const screenBody = `import React from 'react';
import './${styleName}.scss';

type Props = {
    // TODO add props here
}

export default function ${screenName.replace('Sreen','')}(_: Props): JSX.Element {
    return (
        <div className='${styleName}'>
            ${screenName.replace('Sreen','')}
        </div>
    );
}
`;

    const styleBody = `
@import 'styles/_variables';
@import 'styles/_mixins';

.${styleName} {

}
`;
    
    // const routeBody = routes.replace('// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE',`const ${RouteName} = React.lazy(() => import('../containers/${RouteName}/${containerName}'));\n// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE`)
    // .replace(' // ROUTE ENTRY CODE GENERATOR INDICATOR DO NOT DELETE',` {\n    path: '${path}',\n    name: '${RouteName}',\n    component: ${RouteName},\n    authedRoute: ${authType}\n}, // ROUTE ENTRY CODE GENERATOR INDICATOR DO NOT DELETE`);

    makey.createFile(
      `./src/routes/${RouteName}/${containerName}.tsx`,
      containerBody,
    );

    makey.createFile(
        `./src/routes/${RouteName}/${screenName}.tsx`,
        screenBody,
    );

    makey.createFile(
        `./src/routes/${RouteName}/${styleName}.scss`,
        styleBody,
    );

    makey.createFile(
        `./src/routes/${RouteName}/index.tsx`,
        `export { default } from './${containerName}';\n`
    )

    await makey.editFile(`src/routes/index.tsx`, (existingRouteFile) =>
        existingRouteFile.replace(
            `// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE`,
            makey.templateReplace(
                `const Async${RouteName} = PageLoadable({ loader: () => import('./${RouteName}') });\n// ROUTE IMPORT CODE GENERATOR INDICATOR DO NOT DELETE`,
                {
                    ROUTE_NAME,
                    RouteName,
                    path,
                },
            )
        ),
    );

    await makey.editFile(`src/routes/index.tsx`, (existingRouteFile) =>
        existingRouteFile.replace(
            `// ROUTE ENTRY CODE GENERATOR INDICATOR DO NOT DELETE`,
            makey.templateReplace(
                `{{ROUTE_NAME}}: {\n        component: Async{{RouteName}},\n        path: '{{path}}',\n        authedRoute: ${authType}\n    },\n    // ROUTE ENTRY CODE GENERATOR INDICATOR DO NOT DELETE`,
                {
                    ROUTE_NAME,
                    RouteName,
                    path,
                },
            )
        ),
   );
}
