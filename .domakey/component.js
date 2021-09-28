
const helpInfo = `Adds a new React reusable component.

This will create the new folder (/src/components/MyComponentName).

\`npm run create component MyComponentName\` or \`yarn run create component MyComponentName\`
`;

module.exports = async ({ cliArgs, cliFlags, makey }) => {
    if (cliFlags['h']) {
        makey.print(helpInfo);
        return;
    }

    const componentName = makey.toLowerCaseFirst(
        cliArgs[0] || (await makey.ask('Name of your component:'))
    );
    if (!componentName) throw Error("Please provide a component name");
    const compTypeRaw = makey.toLowerCaseFirst(
        cliArgs[1] || (await makey.ask('What is the type of the component? (m)odules or (b)ase:')) || 'm',
    );
    const compType = {
        m: 'modules',
        b: 'base'
    }[compTypeRaw[0].toLowerCase()];
    const smartComponent = cliFlags['y']
        ? true
        : cliFlags['container'] || (await makey.askYN('Create a (smart) container for the Comp?'));

    const ComponentName = makey.toUpperCaseFirst(componentName);
    const styleName = ComponentName.replace(/([A-Z])/g, '-$1').replace('-', '').toLowerCase();

    const componentBody = `import React from 'react';
import './${styleName}.scss';

type Props = {
    className?: string
}

export default function ${ComponentName}({ className = '' }: Props): JSX.Element {
    return (
        <div className={` + '`' + `${styleName}` + ' ${className}`' + `} >
            ${ComponentName}
        </div>
    );
}
`;

    const containerBody = `import React from 'react';
import ${ComponentName} from './${ComponentName}';

type Props = {
    className?: string
}

export default function ${ComponentName}Container({ className = '' }: Props): JSX.Element {
    return (
        <${ComponentName} className={className} />
    );
}
`;

    const storyBody = `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ${ComponentName}Component from './${ComponentName}${smartComponent ? 'Container' : ''}';

export default {
    title: 'Components/${ComponentName}',
    component: ${ComponentName}Component
} as ComponentMeta<typeof ${ComponentName}Component>;

const Template: ComponentStory<typeof ${ComponentName}Component> = (args) => <${ComponentName}Component {...args} />;

export const ${ComponentName} = Template.bind({});
${ComponentName}.args = {
    // TODO add args
};
`
    const styleBody = `
@import 'styles/_variables';
@import 'styles/_mixins';

.${styleName} {

}
`;
    makey.createFile(
        `./src/components/${compType}/${ComponentName}/${ComponentName}.tsx`,
        componentBody,
    );
    
    if (smartComponent) {
        makey.createFile(
            `./src/components/${compType}/${ComponentName}/${ComponentName}Container.tsx`,
            containerBody,
        );
    }

    makey.createFile(
        `./src/components/${compType}/${ComponentName}/${ComponentName}.stories.tsx`,
        storyBody,
    );

    makey.createFile(
        `./src/components/${compType}/${ComponentName}/${styleName}.scss`,
        styleBody,
    );

    makey.createFile(
        `./src/components/${compType}/${ComponentName}/index.tsx`,
        `export { default } from './${ComponentName}${smartComponent ? 'Container' : ''}';\n`
    )
}
