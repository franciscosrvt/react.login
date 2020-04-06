import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { render } from 'react-dom';
import React, { Component } from 'react';

export default function Foo() {
    return (
        <div>
            <Footer
                columns={[
                    {
                        title: 'Menu 1',
                        items: [
                            {
                                title: 'submenu1',
                                url: 'https://link',
                                openExternal: true,
                            },
                            {
                                title: 'submenu2',
                                url: 'https://link',
                                openExternal: true,
                            },
                            {
                                title: 'submenu3',
                                url: 'https://link',
                                openExternal: true,
                            },
                        ],
                    },
                    {
                        title: 'menu 2',
                        items: [
                            {
                                title: 'submenu3',
                                url: 'https://link',
                                openExternal: true,
                            },
                            {
                                title: 'submenu3',
                                url: 'https://link',
                                openExternal: true,
                            },
                            {
                                title: 'submenu3',
                                url: 'https://link',
                                openExternal: true,
                            },
                        ],
                    },
                    {
                        title: 'menu 3',
                        items: [
                            {
                                title: 'submenu4',
                                url: 'https://link',
                                openExternal: true,
                            },
                            {
                                title: 'submenu4',
                                url: 'https://link',
                                openExternal: true,
                            },
                            {
                                title: 'submenu4',
                                url: 'https://link',
                                openExternal: true,
                            },
                        ],
                    },
                    {
                        icon: (
                            <img
                                src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                                alt="more products"
                            />
                        ),
                        title: 'Home',
                        items: [
                            {
                                icon: (
                                    <img
                                        src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                                        alt="yuque"
                                    />
                                ),
                                title: 'Mi Genial Pagina Web',
                                url: 'https://todouncrack.com',
                                description: 'Detalle mi sitio',
                                openExternal: true,
                            }
                        ],
                    },
                ]}
                bottom="Edit with ❤️ by JZ"
            />
        </div>
    );
}