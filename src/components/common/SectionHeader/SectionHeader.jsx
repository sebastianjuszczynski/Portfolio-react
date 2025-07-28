import { Subheader, Span, Title }  from './styles'

const SectionHeader = ({ sub, span, title }) => (
    <>
    <Subheader>
        {sub}
        <Span data-testid="subheader-span">
            {span}
        </Span>
    </Subheader>
    <Title>
        {title}
        </Title>
    </>
    );


export default SectionHeader;