import React from 'react'
import { Container, Wrapper, Row, Row2, Row3, Column, Link, Title, Line, Image, Text } from './styles/footer'

export default function Footer({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children,...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children,...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Footer.Row2 = function FooterRow2({children,...restProps}){
    return <Row2 {...restProps}>{children}</Row2>
}

Footer.Row3 = function FooterRow3({children,...restProps}){
    return <Row3 {...restProps}>{children}</Row3>
}

Footer.Column = function FooterColumn({children,...restProps}){
    return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink({children,...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Footer.Line = function FooterLine({children,...restProps}){
    return <Line {...restProps}>{children}</Line>
}

Footer.Image = function FooterImage({children,...restProps}){
    return <Image {...restProps}>{children}</Image>
}

Footer.Text = function FooterText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}

