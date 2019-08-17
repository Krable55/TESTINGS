import React, { Component, ReactFragment, ReactPortal, ReactNodeArray, ReactChildren, ReactChild } from 'react'
import { Accordion, AccordionContent, Form, Grid} from 'semantic-ui-react';
import * as _ from 'lodash'

interface AccordionToolState {
    activeIndex: number[] | number
}
interface AccordionToolProps {
    defaultActiveIndex?: number[],
    children?: {
        Section?: JSX.Element[] | JSX.Element
    }
}

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

interface Section {
    key: string,
    title: string,
    content: ReactNode[],
    
}

interface SectionProps {
    children?: any,
    title: string,
    gridColumns?: number
}
export const Section: React.FC<SectionProps> = ({title, gridColumns, children})  => {
     if(children && children !== undefined) {
        if (gridColumns === undefined || gridColumns < 1) gridColumns = 1
        let content = createGridColumns(gridColumns, children)
        return children.map((inputs, i) => {
            return ({
                key: `panel-${title}-${i}`,
                title: {
                    content: (<span >
                        {title}
                    </span>)
                },
                content: (
                    
                    <AccordionContent >
                        {content}
                    </AccordionContent>
                    
                )
        
            });
        })
} 
        
}

const createGridColumns = (numOfColumns, items) => {
    //Divide items between columns
    let columnChunks = Math.floor(items.length / numOfColumns)
    let chunks = _.chunk(items, columnChunks)
    let columns
    //if an odd amount of items, add to one to last column
    if (chunks.length % 2 !== 0 && numOfColumns % 2 === 0) {
        let temp = chunks.pop()
        columns = chunks.map((chunk, i) => {
            return i === chunks.length - 1 && temp !== undefined ? chunk.concat(temp) : chunk
        })
    } else {
        columns = chunks
    }

    return (
        <Form>
            <Grid >
                <Grid.Row fluid columns={numOfColumns}>
                    {columns.map((column, i) => {
                        return (
                            <Grid.Column >
                                {column.map((item, ind) => {
                                    return (
                                        <>
                                            <Form>
                                               {item}
                                            </Form>
                                            <br />
                                        </>
                                    );
                                })}
                            </Grid.Column>
                        )
                    })}
                </Grid.Row>
            </Grid>
        </Form>
    );
}

export default class AccordionTool extends Component <AccordionToolProps, AccordionToolState>{
    
    state = {
        activeIndex: 0,
    }

    miniMessageStyle = {
        marginTop: 0,
        padding: '6px 18px'
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ ...this.state, activeIndex: newIndex })
    }

    

   

    public render() {
        return (
            <>
                {this.props !== undefined && <Accordion fluid={true} styled expandable defaultActiveIndex={this.props.defaultActiveIndex} exclusive={false}>
                    {this.props.children}
                    </Accordion>
                }
            </>
        )
    }
}
