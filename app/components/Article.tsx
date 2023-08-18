'use client';
import React from 'react'
import { Box, useMediaQuery } from '../common/components'

type ArticleProps = {
    content: string
}
function Article(props:ArticleProps) {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
    const contentHtml = props.content;
  return (
    <>
    { isSmallerThan600 ? 
        (
            <div className='znc contents'>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
            </div>
        ):
        (
            <Box
                display='flex'
                justifyContent='center'
            >
                <div className='znc contents'>
                    <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
                </div>
            </Box>
        )
    }
    </>
  )
}

export default Article