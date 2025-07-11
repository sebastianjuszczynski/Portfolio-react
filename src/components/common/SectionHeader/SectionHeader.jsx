import { Subheader, Span, Title }  from './styles'

const SectionHeader = ({ sub, span, title }) => (
    <>
    <Subheader>
        {sub}
        <Span>
            {span}
        </Span>
    </Subheader>
    <Title>
        {title}
        </Title>
    </>
    );


export default SectionHeader;