import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    My GitHub link is <Styled.a href="https://github.com/yuyaebean" target="_blank">this</Styled.a>
    {` `}
    .
    <br />
    Or whatever, you make the rules.
  </Fragment>
)
