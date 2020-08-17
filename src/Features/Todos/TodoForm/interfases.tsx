import React from 'react';

export interface TodoFormContainerInterface {
    onFormSubmit(title: string): void,
};

export interface TodoFormInterface extends React.HTMLAttributes<HTMLDivElement> {
    onFormSubmit(title: string): void,
}
